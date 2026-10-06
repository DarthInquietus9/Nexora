from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from app.db import get_db
from app.models.user import User, RoleEnum
from app.models.problem import Problem, ProblemScoping
from app.core.auth import get_current_user, require_roles
from app.services.llm import generate_ai_scoping

router = APIRouter(prefix="/api/problems", tags=["problems"])

class ProblemCreate(BaseModel):
    title: str
    description: str

@router.post("/", status_code=status.HTTP_201_CREATED)
def create_and_scope_problem(
    payload: ProblemCreate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(RoleEnum.SPONSOR, RoleEnum.ADMIN))
):
    # 1. Save Problem statement to Database
    problem = Problem(
        title=payload.title,
        description=payload.description,
        sponsor_id=user.id
    )
    db.add(problem)
    db.commit()
    db.refresh(problem)

    # 2. Step 3 Execution: Perform AI Scoping via LLM Service
    scoping_data = generate_ai_scoping(problem.title, problem.description)

    # 3. Save Scoping results to Database
    scoping = ProblemScoping(
        problem_id=problem.id,
        summary=scoping_data.summary,
        tech_stack=scoping_data.tech_stack,
        deliverables=scoping_data.deliverables,
        estimated_complexity=scoping_data.estimated_complexity
    )
    db.add(scoping)
    db.commit()

    return {
        "problem_id": problem.id,
        "title": problem.title,
        "scoping": scoping_data.model_dump()
    }

@router.get("/{problem_id}")
def get_problem(problem_id: str, db: Session = Depends(get_db)):
    problem = db.query(Problem).filter(Problem.id == problem_id).first()
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")
    
    return {
        "id": problem.id,
        "title": problem.title,
        "description": problem.description,
        "sponsor": problem.sponsor.full_name,
        "scoping": {
            "summary": problem.scoping.summary,
            "tech_stack": problem.scoping.tech_stack,
            "deliverables": problem.scoping.deliverables,
            "estimated_complexity": problem.scoping.estimated_complexity,
        } if problem.scoping else None
    }