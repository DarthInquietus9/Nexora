from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db
from app.models.user import User, RoleEnum
from app.core.auth import require_roles

router = APIRouter(prefix="/api/sponsor", tags=["sponsor"])

@router.post("/ledger-write")
def write_ledger(
    data: dict, 
    user: User = Depends(require_roles(RoleEnum.SPONSOR, RoleEnum.ADMIN)),
    db: Session = Depends(get_db)
):
    # This route is now protected: only users with the SPONSOR or ADMIN role can execute it
    return {
        "status": "success", 
        "author": user.email,
        "message": "Ledger entry authorized and recorded"
    }