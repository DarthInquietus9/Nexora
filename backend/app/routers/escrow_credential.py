from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List

from app.db import get_db
from app.core.auth import get_current_user, require_roles
from app.models.user import User, RoleEnum
from app.models.escrow_credential import MilestoneEscrow, EscrowStatus
from app.services.escrow_service import verify_and_release_escrow, issue_verifiable_credential

router = APIRouter(prefix="/api/escrow", tags=["escrow & credentials"])

class CreateEscrowRequest(BaseModel):
    workspace_id: str
    title: str
    amount_usd: float

class IssueCredentialRequest(BaseModel):
    workspace_id: str
    recipient_user_id: str
    skills: List[str]

@router.post("/create", status_code=status.HTTP_201_CREATED)
def create_escrow(
    payload: CreateEscrowRequest,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(RoleEnum.SPONSOR, RoleEnum.ADMIN))
):
    escrow = MilestoneEscrow(
        workspace_id=payload.workspace_id,
        title=payload.title,
        amount_usd=payload.amount_usd,
        status=EscrowStatus.LOCKED
    )
    db.add(escrow)
    db.commit()
    db.refresh(escrow)
    return {"escrow_id": escrow.id, "status": escrow.status, "amount_usd": escrow.amount_usd}


@router.post("/{milestone_id}/release")
def release_milestone_funds(
    milestone_id: str,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(RoleEnum.SPONSOR, RoleEnum.ADMIN))
):
    """Triggers Step 7 integrity validation and releases milestone funds upon zero ledger tampering."""
    return verify_and_release_escrow(db=db, milestone_id=milestone_id)


@router.post("/issue-credential")
def mint_verifiable_credential(
    payload: IssueCredentialRequest,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(RoleEnum.SPONSOR, RoleEnum.ADMIN))
):
    """Triggers Step 8 to issue a cryptographically signed W3C Verifiable Credential."""
    vc = issue_verifiable_credential(
        db=db,
        user_id=payload.recipient_user_id,
        workspace_id=payload.workspace_id,
        skill_claims=payload.skills
    )
    return {
        "status": "credential_issued",
        "credential_id": vc.id,
        "proof_signature": vc.proof_signature,
        "credential_subject": vc.credential_subject
    }