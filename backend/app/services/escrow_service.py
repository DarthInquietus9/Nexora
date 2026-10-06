import hashlib
import hmac
import json
from datetime import datetime
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from app.models.escrow_credential import MilestoneEscrow, EscrowStatus, VerifiableCredential
from app.services.ledger_engine import LedgerAuditEngine
from app.models.ledger import LedgerBlock
from app.core.auth import SECRET_KEY

def verify_and_release_escrow(db: Session, milestone_id: str) -> dict:
    """Step 7: Validates cryptographic ledger integrity before unlocking escrow funds."""
    
    milestone = db.query(MilestoneEscrow).filter(MilestoneEscrow.id == milestone_id).first()
    if not milestone:
        raise HTTPException(status_code=404, detail="Milestone escrow not found")

    if milestone.status == EscrowStatus.RELEASED:
        raise HTTPException(status_code=400, detail="Escrow funds already released")

    # 1. Run full ledger forensic audit scan on the associated workspace
    audit_result = LedgerAuditEngine.full_chain_audit(db, milestone.workspace_id)

    if not audit_result["is_valid"]:
        milestone.status = EscrowStatus.DISPUTED
        db.commit()
        raise HTTPException(
            status_code=422,
            detail=f"Escrow release blocked! Cryptographic tamper detected: {audit_result['reason']}"
        )

    # 2. Require at least one verified action in the chain
    if audit_result["total_blocks"] == 0:
        raise HTTPException(
            status_code=400,
            detail="Cannot release escrow on an empty workspace ledger."
        )

    # 3. Mark Escrow as Released
    milestone.integrity_verified = True
    milestone.status = EscrowStatus.RELEASED
    milestone.released_at = datetime.utcnow()

    # Append escrow release event to ledger as an audit block
    head_hash = audit_result["head_hash"]
    LedgerAuditEngine.append_block(
        db=db,
        workspace_id=milestone.workspace_id,
        actor_type="system",
        actor_id="escrow_smart_contract_engine",
        action_type="ESCROW_FUNDS_RELEASED",
        payload={
            "milestone_id": milestone.id,
            "amount_usd": milestone.amount_usd,
            "verified_ledger_head": head_hash
        }
    )

    db.commit()
    db.refresh(milestone)

    return {
        "status": "RELEASED",
        "milestone_id": milestone.id,
        "amount_usd": milestone.amount_usd,
        "verified_head_hash": head_hash
    }


def issue_verifiable_credential(
    db: Session,
    user_id: str,
    workspace_id: str,
    skill_claims: list[str]
) -> VerifiableCredential:
    """Step 8: Issues a W3C-compliant Verifiable Credential anchored to the hash chain."""

    # Ensure ledger is clean prior to credential issuance
    audit_result = LedgerAuditEngine.full_chain_audit(db, workspace_id)
    if not audit_result["is_valid"]:
        raise HTTPException(
            status_code=400,
            detail="Cannot issue credential. Workspace audit ledger is compromised!"
        )

    credential_id = f"urn:uuid:{uuid.uuid4()}"
    issuance_time = datetime.utcnow().isoformat() + "Z"

    subject_data = {
        "id": f"did:key:{user_id}",
        "workspace_id": workspace_id,
        "skills_demonstrated": skill_claims,
        "audit_ledger_root_hash": audit_result.get("head_hash", "0" * 64),
        "total_verified_actions": audit_result["total_blocks"]
    }

    # W3C Standard Payload Construction
    vc_payload = {
        "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://schema.org"
        ],
        "id": credential_id,
        "type": ["VerifiableCredential", "ProofOfContributionCredential"],
        "issuer": "did:web:sponsor-ledger-platform.com",
        "issuanceDate": issuance_time,
        "credentialSubject": subject_data
    }

    # Generate HMAC SHA-256 cryptographic proof signature
    canonical_str = json.dumps(vc_payload, sort_keys=True)
    signature = hmac.new(
        SECRET_KEY.encode("utf-8"),
        canonical_str.encode("utf-8"),
        hashlib.sha256
    ).hexdigest()

    vc = VerifiableCredential(
        id=credential_id,
        user_id=user_id,
        workspace_id=workspace_id,
        issuer="did:web:sponsor-ledger-platform.com",
        credential_subject=subject_data,
        proof_signature=signature
    )

    db.add(vc)
    db.commit()
    db.refresh(vc)
    return vc