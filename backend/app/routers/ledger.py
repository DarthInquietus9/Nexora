from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Dict, Any

from app.db import get_db
from app.core.auth import get_current_user, require_roles
from app.models.user import User, RoleEnum
from app.models.ledger import LedgerBlock, WorkspaceMember
from app.services.ledger_engine import LedgerAuditEngine

router = APIRouter(
    prefix="/api/ledger",
    tags=["ledger"]
)


class CryptographicProofResponse(BaseModel):
    workspace_id: str
    total_blocks: int
    chain_head_hash: str
    is_valid: bool
    blocks: List[Dict[str, Any]]


def check_workspace_membership(
    workspace_id: str,
    current_user: User,
    db: Session
):
    """Check whether the current user is a member of the workspace."""

    membership = (
        db.query(WorkspaceMember)
        .filter(
            WorkspaceMember.workspace_id == workspace_id,
            WorkspaceMember.user_id == current_user.id
        )
        .first()
    )

    if not membership:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You are not a member of this workspace"
        )

    return membership


@router.get(
    "/workspace/{workspace_id}",
    response_model=List[Dict[str, Any]]
)
def get_workspace_ledger(
    workspace_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Retrieves all hash-chained blocks for a specific workspace."""

    # Check workspace membership
    check_workspace_membership(
        workspace_id=workspace_id,
        current_user=current_user,
        db=db
    )

    blocks = (
        db.query(LedgerBlock)
        .filter(LedgerBlock.workspace_id == workspace_id)
        .order_by(LedgerBlock.index.asc())
        .all()
    )

    return [
        {
            "index": b.index,
            "block_id": b.block_id,
            "actor_type": b.actor_type,
            "actor_id": b.actor_id,
            "action_type": b.action_type,
            "payload": b.payload,
            "timestamp": b.timestamp,
            "previous_hash": b.previous_hash,
            "current_hash": b.current_hash
        }
        for b in blocks
    ]


@router.get("/workspace/{workspace_id}/audit")
def run_ledger_audit(
    workspace_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_roles(RoleEnum.SPONSOR, RoleEnum.ADMIN)
    )
):
    """Executes a forensic verification check on the ledger block integrity."""

    # Check workspace membership
    check_workspace_membership(
        workspace_id=workspace_id,
        current_user=current_user,
        db=db
    )

    audit_result = LedgerAuditEngine.full_chain_audit(
        db,
        workspace_id
    )

    return audit_result


@router.get(
    "/workspace/{workspace_id}/export-proof",
    response_model=CryptographicProofResponse
)
def export_chain_proof(
    workspace_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Generates an exportable JSON payload containing full chain verification proof."""

    # Check workspace membership
    check_workspace_membership(
        workspace_id=workspace_id,
        current_user=current_user,
        db=db
    )

    audit = LedgerAuditEngine.full_chain_audit(
        db,
        workspace_id
    )

    if not audit["is_valid"]:
        raise HTTPException(
            status_code=400,
            detail=f"Cannot export proof for a corrupted ledger: {audit['reason']}"
        )

    blocks = (
        db.query(LedgerBlock)
        .filter(LedgerBlock.workspace_id == workspace_id)
        .order_by(LedgerBlock.index.asc())
        .all()
    )

    return {
        "workspace_id": workspace_id,
        "total_blocks": len(blocks),
        "chain_head_hash": (
            blocks[-1].current_hash
            if blocks
            else "0" * 64
        ),
        "is_valid": audit["is_valid"],
        "blocks": [
            {
                "index": b.index,
                "timestamp": b.timestamp,
                "actor": f"{b.actor_type}:{b.actor_id}",
                "action": b.action_type,
                "payload": b.payload,
                "prev_hash": b.previous_hash,
                "hash": b.current_hash
            }
            for b in blocks
        ]
    }
