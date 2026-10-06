from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional, Dict, Any

from app.db import get_db
from app.models.user import User
from app.models.ledger import ActorType, Workspace
from app.core.auth import get_current_user
from app.services.ledger_service import append_to_ledger, verify_chain_integrity

router = APIRouter(prefix="/api/workspaces", tags=["workspaces"])

class WorkspaceCreate(BaseModel):
    name: str
    problem_id: str

class ActionLogRequest(BaseModel):
    action_type: str
    payload: Dict[str, Any]
    actor_type: Optional[ActorType] = ActorType.HUMAN
    ai_model_name: Optional[str] = None  # Populated if action performed by AI Agent

@router.post("/")
def create_workspace(payload: WorkspaceCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    ws = Workspace(name=payload.name, problem_id=payload.problem_id)
    db.add(ws)
    db.commit()
    db.refresh(ws)

    # Record initialization in hash chain
    append_to_ledger(
        db=db,
        workspace_id=ws.id,
        actor_type=ActorType.HUMAN,
        actor_id=current_user.id,
        action_type="WORKSPACE_CREATED",
        payload={"workspace_name": ws.name, "problem_id": ws.problem_id}
    )

    return {"workspace_id": ws.id, "name": ws.name}


@router.post("/{workspace_id}/log-action")
def log_workspace_action(
    workspace_id: str,
    request: ActionLogRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Endpoint to log human or AI actions with mandatory cryptographic hash chaining."""
    
    actor_id = current_user.id
    actor_type = request.actor_type

    # If action originates from an AI execution pipeline
    if actor_type == ActorType.AI_AGENT:
        actor_id = request.ai_model_name or "gemini-1.5-pro"

    entry = append_to_ledger(
        db=db,
        workspace_id=workspace_id,
        actor_type=actor_type,
        actor_id=actor_id,
        action_type=request.action_type,
        payload=request.payload
    )

    return {
        "status": "recorded",
        "ledger_index": entry.index,
        "block_hash": entry.current_hash,
        "previous_hash": entry.previous_hash
    }


@router.get("/{workspace_id}/verify")
def verify_workspace_ledger(workspace_id: str, db: Session = Depends(get_db)):
    """Runs a full audit scan on the ledger table to confirm zero chain tampering."""
    return verify_chain_integrity(db=db, workspace_id=workspace_id)