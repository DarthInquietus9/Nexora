from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db import Base, engine
from app.routers import auth, sponsor, problem, workspace, ledger, escrow_credential

# 1. Initialize database tables
Base.metadata.create_all(bind=engine)

# 2. Instantiate the FastAPI application (MUST happen before include_router)
app = FastAPI(
    title="AI Platform API",
    description="Backend API with Ledger Audit and AI Scoping",
    version="1.0.0",
)

# 3. Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 4. Include Routers
app.include_router(auth.router, tags=["Authentication"])
app.include_router(sponsor.router, prefix="/api/sponsor", tags=["Sponsor"])
app.include_router(problem.router, prefix="/api/problem", tags=["Problems"])
app.include_router(workspace.router, prefix="/api/workspace", tags=["Workspaces"])
app.include_router(ledger.router, prefix="/api/ledger", tags=["Ledger"])
app.include_router(escrow_credential.router, prefix="/api/escrow", tags=["Escrow Credentials"])

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "fastapi-backend"}