from sqlalchemy.orm import Session
from app.services.ledger_service import verify_chain_integrity, append_to_ledger

class LedgerAuditEngine:
    @staticmethod
    def audit_workspace(db: Session, workspace_id: str) -> dict:
        return verify_chain_integrity(db, workspace_id)

    @staticmethod
    def append(db: Session, workspace_id: str, actor_type: str, actor_id: str, action_type: str, payload: dict):
        return append_to_ledger(db, workspace_id, actor_type, actor_id, action_type, payload)