from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional, Dict, Any

from app.db import get_db
from app.models.user import User
from app.models.problem import Problem
from app.models.ledger import ActorType, Workspace, WorkspaceMember
from app.core.auth import get_current_user
from app.services.ledger_service import append_to_ledger, verify_chain_integrity


router = APIRouter(
    prefix="/api/workspaces",
    tags=["workspaces"]
)


class WorkspaceCreate(BaseModel):
    name: str
    problem_id: str


class ActionLogRequest(BaseModel):
    action_type: str
    payload: Dict[str, Any]
    actor_type: Optional[ActorType] = ActorType.HUMAN
    ai_model_name: Optional[str] = None


@router.post("/")
def create_workspace(
    payload: WorkspaceCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Verify that the problem exists
    problem = (
        db.query(Problem)
        .filter(Problem.id == payload.problem_id)
        .first()
    )

    if not problem:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Problem not found"
        )

    # Create workspace
    ws = Workspace(
        name=payload.name,
        problem_id=payload.problem_id
    )

    db.add(ws)
    db.commit()
    db.refresh(ws)

    # Add workspace creator as a member
    member = WorkspaceMember(
        workspace_id=ws.id,
        user_id=current_user.id,
        role="owner"
    )

    db.add(member)
    db.commit()

    # Record workspace creation in hash chain
    append_to_ledger(
        db=db,
        workspace_id=ws.id,
        actor_type=ActorType.HUMAN,
        actor_id=current_user.id,
        action_type="WORKSPACE_CREATED",
        payload={
            "workspace_name": ws.name,
            "problem_id": ws.problem_id
        }
    )

    # Record the AI scoping result in the same workspace ledger
    if problem.scoping:
        append_to_ledger(
            db=db,
            workspace_id=ws.id,
            actor_type=ActorType.AI_AGENT,
            actor_id="gemini-3.5-flash-lite",
            action_type="AI_SCOPING",
            payload={
                "problem_id": problem.id,
                "summary": problem.scoping.summary,
                "tech_stack": problem.scoping.tech_stack,
                "deliverables": problem.scoping.deliverables,
                "estimated_complexity": problem.scoping.estimated_complexity
            }
        )

    return {
        "workspace_id": ws.id,
        "name": ws.name
    }


@router.post("/{workspace_id}/log-action")
def log_workspace_action(
    workspace_id: str,
    request: ActionLogRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Verify that the workspace exists
    workspace = (
        db.query(Workspace)
        .filter(Workspace.id == workspace_id)
        .first()
    )

    if not workspace:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Workspace not found"
        )

    # Check workspace membership
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

    actor_id = current_user.id
    actor_type = request.actor_type

    # If action originates from an AI execution pipeline,
    # record the AI model as the actor.
    if actor_type == ActorType.AI_AGENT:
        actor_id = request.ai_model_name or "gemini-3.5-flash-lite"

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
        "block_id": entry.block_id,
        "block_hash": entry.current_hash,
        "previous_hash": entry.previous_hash
    }


@router.get("/{workspace_id}/verify")
def verify_workspace_ledger(
    workspace_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Verify that the workspace exists
    workspace = (
        db.query(Workspace)
        .filter(Workspace.id == workspace_id)
        .first()
    )

    if not workspace:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Workspace not found"
        )

    # Check workspace membership
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

    return verify_chain_integrity(
        db=db,
        workspace_id=workspace_id
    )