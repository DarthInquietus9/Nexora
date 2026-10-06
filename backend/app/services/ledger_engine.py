from sqlalchemy.orm import Session
from app.services.ledger_service import verify_chain_integrity, append_to_ledger


class LedgerAuditEngine:

    @staticmethod
    def audit_workspace(db: Session, workspace_id: str) -> dict:
        return verify_chain_integrity(db, workspace_id)

    @staticmethod
    def full_chain_audit(db: Session, workspace_id: str) -> dict:
        result = verify_chain_integrity(db, workspace_id)

        if result["status"] == "VERIFIED":
            return {
                "is_valid": True,
                "total_blocks": result["total_blocks"],
                "chain_head_hash": result["latest_hash"],
                "reason": "Ledger chain is valid."
            }

        if result["status"] == "EMPTY":
            return {
                "is_valid": False,
                "total_blocks": 0,
                "chain_head_hash": None,
                "reason": "No ledger blocks found for workspace."
            }

        return {
            "is_valid": False,
            "total_blocks": 0,
            "chain_head_hash": None,
            "reason": result.get("reason", "Ledger integrity check failed."),
            "failed_block_index": result.get("failed_block_index")
        }

    @staticmethod
    def append(
        db: Session,
        workspace_id: str,
        actor_type: str,
        actor_id: str,
        action_type: str,
        payload: dict
    ):
        return append_to_ledger(
            db,
            workspace_id,
            actor_type,
            actor_id,
            action_type,
            payload
        )