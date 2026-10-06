import uuid
import json
from datetime import datetime
from enum import Enum
from sqlalchemy import Column, String, Text, DateTime, ForeignKey, JSON, Float, Enum as SQLEnum, Boolean
from sqlalchemy.orm import relationship
from app.db import Base

class EscrowStatus(str, Enum):
    PENDING = "pending"
    LOCKED = "locked"
    RELEASED = "released"
    DISPUTED = "disputed"

class MilestoneEscrow(Base):
    __tablename__ = "milestone_escrows"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    workspace_id = Column(String, ForeignKey("workspaces.id"), nullable=False)
    title = Column(String, nullable=False)
    amount_usd = Column(Float, nullable=False)
    status = Column(SQLEnum(EscrowStatus), default=EscrowStatus.LOCKED, nullable=False)
    integrity_verified = Column(Boolean, default=False)
    released_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    workspace = relationship("Workspace")


class VerifiableCredential(Base):
    __tablename__ = "verifiable_credentials"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4())) # DID/URI identifier
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    workspace_id = Column(String, ForeignKey("workspaces.id"), nullable=False)
    
    issuer = Column(String, nullable=False, default="did:web:sponsor-ledger-platform.com")
    credential_subject = Column(JSON, nullable=False) # Claims: role, milestone, ledger_head_hash
    proof_signature = Column(String, nullable=False)  # Cryptographic proof signature
    issued_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")
    workspace = relationship("Workspace")