import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Fallback to local SQLite if DATABASE_URL environment variable is not set
DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "sqlite:///./sponsor_ledger.db"
)

# SQLite requires specific connection args for multithreaded access
connect_args = {}
if DATABASE_URL.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

engine = create_engine(
    DATABASE_URL, 
    connect_args=connect_args,
    echo=False  # Set to True for verbose SQL logging
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    """FastAPI Dependency for managing database sessions per request."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()