import uuid
import hashlib
import json
from datetime import datetime
from enum import Enum
from sqlalchemy import Column, String, Text, DateTime, ForeignKey, JSON, Integer
from sqlalchemy.orm import relationship
from app.db import Base

GENESIS_HASH = "0000000000000000000000000000000000000000000000000000000000000000"


class ActorType(str, Enum):
    HUMAN = "human"
    AI_AGENT = "ai_agent"
    SYSTEM = "system"


class Workspace(Base):
    __tablename__ = "workspaces"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, nullable=False)
    problem_id = Column(String, ForeignKey("problems.id"), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    logs = relationship("WorkspaceLog", back_populates="workspace", cascade="all, delete-orphan")
    ledger_blocks = relationship("LedgerBlock", back_populates="workspace", cascade="all, delete-orphan")
    members = relationship(
        "WorkspaceMember",
        back_populates="workspace",
        cascade="all, delete-orphan"
    )
class WorkspaceMember(Base):
    __tablename__ = "workspace_members"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    workspace_id = Column(String, ForeignKey("workspaces.id"), nullable=False)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    role = Column(String, nullable=False, default="member")
    created_at = Column(DateTime, default=datetime.utcnow)

    workspace = relationship("Workspace", back_populates="members")
    user = relationship("User")

class WorkspaceLog(Base):
    """Activity stream capturing raw workspace updates, AI executions, and file changes."""
    __tablename__ = "workspace_logs"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    workspace_id = Column(String, ForeignKey("workspaces.id"), nullable=False)
    actor_type = Column(String, nullable=False)  # human / ai_agent / system
    actor_id = Column(String, nullable=False)    # user_id or agent model string
    action_type = Column(String, nullable=False) # e.g. "FILE_CREATE", "CODE_EXECUTE", "PROMPT_GEN"
    payload = Column(JSON, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    workspace = relationship("Workspace", back_populates="logs")


class LedgerBlock(Base):
    """Immutable Cryptographic Block representation for the hash-chained ledger."""
    __tablename__ = "ledger_blocks"

    index = Column(Integer, nullable=False, index=True)
    block_id = Column(
    String,
    primary_key=True,
    unique=True,
    nullable=False,
    default=lambda: str(uuid.uuid4())
)
    workspace_id = Column(String, ForeignKey("workspaces.id"), nullable=False, index=True)

    actor_type = Column(String, nullable=False)  # 'human' | 'ai_agent' | 'system'
    actor_id = Column(String, nullable=False)    # User UUID or LLM Model ID
    action_type = Column(String, nullable=False) # e.g., 'CODE_COMMIT', 'SCOPE_UPDATE'

    payload = Column(JSON, nullable=False)
    timestamp = Column(String, nullable=False, default=lambda: datetime.utcnow().isoformat())

    # Hash Chain Fields
    previous_hash = Column(String(64), nullable=False)
    current_hash = Column(String(64), nullable=False)

    workspace = relationship("Workspace", back_populates="ledger_blocks")

    @staticmethod
    def compute_sha256(index: int, prev_hash: str, timestamp: str, actor_id: str, action_type: str, payload: dict) -> str:
        """Deterministically hashes block content using canonical JSON formatting."""
        canonical_payload = json.dumps(payload, sort_keys=True, separators=(',', ':'))
        header = f"{index}:{prev_hash}:{timestamp}:{actor_id}:{action_type}:{canonical_payload}"
        return hashlib.sha256(header.encode('utf-8')).hexdigest()