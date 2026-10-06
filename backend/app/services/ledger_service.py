from datetime import datetime

from sqlalchemy.orm import Session

from app.models.ledger import LedgerBlock, GENESIS_HASH


def append_to_ledger(
    db: Session,
    workspace_id: str,
    actor_type: str,
    actor_id: str,
    action_type: str,
    payload: dict
) -> LedgerBlock:
    """Creates, hashes, and appends a new block to the workspace ledger chain."""

    last_block = (
        db.query(LedgerBlock)
        .filter(LedgerBlock.workspace_id == workspace_id)
        .order_by(LedgerBlock.index.desc())
        .first()
    )

    if last_block:
        next_index = last_block.index + 1
        prev_hash = last_block.current_hash
    else:
        next_index = 0
        prev_hash = GENESIS_HASH

    # Generate the timestamp once and use the same value for
    # both the hash calculation and the stored ledger block.
    timestamp_str = datetime.utcnow().isoformat()

    current_hash = LedgerBlock.compute_sha256(
        index=next_index,
        prev_hash=prev_hash,
        timestamp=timestamp_str,
        actor_id=actor_id,
        action_type=action_type,
        payload=payload
    )

    new_block = LedgerBlock(
        index=next_index,
        workspace_id=workspace_id,
        actor_type=actor_type,
        actor_id=actor_id,
        action_type=action_type,
        payload=payload,
        timestamp=timestamp_str,
        previous_hash=prev_hash,
        current_hash=current_hash
    )

    db.add(new_block)
    db.commit()
    db.refresh(new_block)

    return new_block


def verify_chain_integrity(db: Session, workspace_id: str) -> dict:
    """Audits the ledger for tampered records or broken hash links."""

    blocks = (
        db.query(LedgerBlock)
        .filter(LedgerBlock.workspace_id == workspace_id)
        .order_by(LedgerBlock.index.asc())
        .all()
    )

    if not blocks:
        return {
            "status": "EMPTY",
            "message": "No ledger blocks found for workspace."
        }

    expected_prev_hash = GENESIS_HASH

    for block in blocks:

        # Check chain link
        if block.previous_hash != expected_prev_hash:
            return {
                "status": "CORRUPTED",
                "failed_block_index": block.index,
                "reason": "Previous hash mismatch"
            }

        # Recalculate the block hash
        computed_hash = LedgerBlock.compute_sha256(
            index=block.index,
            prev_hash=block.previous_hash,
            timestamp=block.timestamp,
            actor_id=block.actor_id,
            action_type=block.action_type,
            payload=block.payload
        )

        # Detect modified block data
        if computed_hash != block.current_hash:
            return {
                "status": "CORRUPTED",
                "failed_block_index": block.index,
                "reason": "Block content payload tampered"
            }

        expected_prev_hash = block.current_hash

    return {
        "status": "VERIFIED",
        "total_blocks": len(blocks),
        "latest_hash": expected_prev_hash
    }