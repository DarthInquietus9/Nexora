import uuid
from datetime import datetime
from sqlalchemy import Column, String, Text, DateTime, ForeignKey, JSON
from sqlalchemy.orm import relationship
from app.db import Base

class Problem(Base):
    __tablename__ = "problems"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    sponsor_id = Column(String, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    sponsor = relationship("User")
    scoping = relationship("ProblemScoping", back_populates="problem", uselist=False, cascade="all, delete-orphan")


class ProblemScoping(Base):
    __tablename__ = "problem_scopings"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    problem_id = Column(String, ForeignKey("problems.id"), nullable=False, unique=True)
    
    # Structured outcome from LLM
    summary = Column(Text, nullable=False)
    tech_stack = Column(JSON, nullable=False)  # List of strings e.g. ["Python", "FastAPI"]
    deliverables = Column(JSON, nullable=False) # List of key project goals
    estimated_complexity = Column(String, nullable=False) # Low / Medium / High
    
    created_at = Column(DateTime, default=datetime.utcnow)

    problem = relationship("Problem", back_populates="scoping")