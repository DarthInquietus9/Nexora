import React, { useState, useEffect, useRef } from 'react';
import { 
  Server, Database, Cpu, Shield, User, Terminal, Code, Layers, 
  Play, Lock, RefreshCw, Key, FileText, CheckCircle2, AlertTriangle, 
  ArrowRight, Activity, Copy, Check, Hash, Eye, Sparkles, ChevronRight
} from 'lucide-react';

const INITIAL_USERS = [
  { id: 'usr_01', name: 'Elena Rostova', email: 'elena@sponsor.io', role: 'Sponsor', token: 'eyJhbGciOi...sp_elena' },
  { id: 'usr_02', name: 'Marcus Vance', email: 'marcus@devs.net', role: 'Admin', token: 'eyJhbGciOi...adm_marcus' },
  { id: 'usr_03', name: 'Aria Chen', email: 'aria@builder.ai', role: 'Developer', token: 'eyJhbGciOi...dev_aria' },
];

const CODE_FILES = {
  'fastapi/main.py': `from fastapi import FastAPI, Depends, HTTPException, Header, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import pydantic
import time
from database import get_db, engine, Base
from models import User, WorkspaceLog, LedgerEntry
from ledger import LedgerEngine, calculate_hash
import openai
import google.generativeai as genai

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Ledger-Backed Enterprise LLM Gateway",
    description="FastAPI Service with SHA-256 Hash-Chained Audit Ledger",
    version="2.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LLMQueryRequest(pydantic.BaseModel):
    provider: str # "gemini" | "openai"
    prompt: str
    workspace_id: str = "ws_default"

@app.post("/api/v1/workspace/query")
async def process_llm_query(
    req: LLMQueryRequest,
    x_user_token: str = Header(..., alias="X-User-Token"),
    db: Session = Depends(get_db)
):
    # 1. Authenticate & Resolve User
    user = db.query(User).filter(User.auth_token == x_user_token).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid Security Token")
        
    start_time = time.time()
    
    # 2. Invoke Selected LLM Endpoint
    llm_response = ""
    if req.provider == "gemini":
        # Simulated Gemini Pro Call
        llm_response = f"[Gemini 1.5 Flash Response] Strategy processed for: {req.prompt[:40]}..."
    else:
        # Simulated OpenAI GPT-4o Call
        llm_response = f"[GPT-4o Response] Strategic analysis complete: {req.prompt[:40]}..."
        
    latency_ms = int((time.time() - start_time) * 1000)
    
    # 3. Create Standard Workspace Log
    ws_log = WorkspaceLog(
        user_id=user.id,
        action="LLM_PROMPT_EXECUTION",
        prompt=req.prompt,
        response=llm_response,
        provider=req.provider,
        latency_ms=latency_ms
    )
    db.add(ws_log)
    db.commit()
    db.refresh(ws_log)
    
    # 4. Write to Cryptographic Hash-Chained Ledger
    ledger_entry = LedgerEngine.append_log(
        db=db,
        user_id=user.id,
        action=f"EXECUTE_PROMPT_{req.provider.upper()}",
        payload_data={
            "log_id": ws_log.id,
            "prompt": req.prompt,
            "response": llm_response,
            "latency": latency_ms
        }
    )
    
    return {
        "status": "success",
        "response": llm_response,
        "execution_id": ws_log.id,
        "ledger_block": {
            "id": ledger_entry.id,
            "data_hash": ledger_entry.data_hash,
            "prev_hash": ledger_entry.prev_hash
        }
    }`,

  'fastapi/ledger.py': `import hashlib
import json
from datetime import datetime
from sqlalchemy.orm import Session
from models import LedgerEntry

class LedgerEngine:
    @staticmethod
    def calculate_sha256(data: str) -> str:
        """Utility method to generate standard hex digest SHA-256."""
        return hashlib.sha256(data.encode('utf-8')).hexdigest()

    @classmethod
    def get_latest_entry(cls, db: Session) -> LedgerEntry:
        """Fetch the latest tail block from the ledger."""
        return db.query(LedgerEntry).order_by(LedgerEntry.id.desc()).first()

    @classmethod
    def append_log(cls, db: Session, user_id: str, action: str, payload_data: dict) -> LedgerEntry:
        """
        Appends an immutable block to the Hash-Chained Ledger.
        Calculates SHA-256 over: prev_hash + user_id + action + timestamp + stringified_data
        """
        last_block = cls.get_latest_entry(db)
        
        # Genesis Block handling if ledger is empty
        prev_hash = last_block.data_hash if last_block else "0" * 64
        timestamp = datetime.utcnow().isoformat()
        
        raw_payload_str = json.dumps(payload_data, sort_keys=True)
        
        # Construct raw string for hash chaining
        preimage = f"{prev_hash}|{user_id}|{action}|{timestamp}|{raw_payload_str}"
        current_hash = cls.calculate_sha256(preimage)
        
        new_entry = LedgerEntry(
            timestamp=timestamp,
            user_id=user_id,
            action=action,
            data_payload=raw_payload_str,
            prev_hash=prev_hash,
            data_hash=current_hash
        )
        
        db.add(new_entry)
        db.commit()
        db.refresh(new_entry)
        return new_entry

    @classmethod
    def verify_integrity(cls, db: Session) -> dict:
        """
        Traverses the full chain and recalculates hashes to check for tamper attempts.
        """
        entries = db.query(LedgerEntry).order_by(LedgerEntry.id.asc()).all()
        
        if not entries:
            return {"valid": True, "tampered_block_id": None}
            
        for i, block in enumerate(entries):
            expected_prev = "0" * 64 if i == 0 else entries[i - 1].data_hash
            
            if block.prev_hash != expected_prev:
                return {
                    "valid": False, 
                    "tampered_block_id": block.id, 
                    "reason": "Previous hash mismatch (Broken Link)"
                }
                
            preimage = f"{block.prev_hash}|{block.user_id}|{block.action}|{block.timestamp}|{block.data_payload}"
            recomputed = cls.calculate_sha256(preimage)
            
            if recomputed != block.data_hash:
                return {
                    "valid": False, 
                    "tampered_block_id": block.id, 
                    "reason": "Payload hash mismatch (Content Alteration)"
                }
                
        return {"valid": True, "tampered_block_id": None}`,

  'fastapi/models.py': `from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True)
    role = Column(String, default="Developer") # Sponsor, Admin, Developer
    auth_token = Column(String, unique=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    workspace_logs = relationship("WorkspaceLog", back_populates="user")

class WorkspaceLog(Base):
    __tablename__ = "workspace_logs"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(String, ForeignKey("users.id"))
    action = Column(String, nullable=False)
    prompt = Column(Text, nullable=False)
    response = Column(Text, nullable=False)
    provider = Column(String, nullable=False) # "gemini" | "openai"
    latency_ms = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="workspace_logs")

class LedgerEntry(Base):
    """
    Tamper-Evident Hash-Chained Ledger Table
    Each entry holds the cryptographic hash of the previous record.
    """
    __tablename__ = "hash_ledger"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    timestamp = Column(String, nullable=False)
    user_id = Column(String, nullable=False)
    action = Column(String, nullable=False)
    data_payload = Column(Text, nullable=False)
    prev_hash = Column(String(64), nullable=False) # SHA-256 Prev Pointer
    data_hash = Column(String(64), nullable=False) # Current SHA-256 Block Digest`,

  'nextjs/app/page.tsx': `'use client';

import { useState } from 'react';
import { ShieldCheck, Cpu, Database, Send, AlertOctagon } from 'lucide-react';

export default function WorkspaceDashboard() {
  const [prompt, setPrompt] = useState('');
  const [provider, setProvider] = useState<'gemini' | 'openai'>('gemini');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Server Action or direct proxy call to FastAPI backend
      const res = await fetch('http://localhost:8000/api/v1/workspace/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Token': 'eyJhbGciOi...sp_elena' // User Session context
        },
        body: JSON.stringify({ provider, prompt })
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error("API Connection Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <header className="mb-8 border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-emerald-400">Enterprise AI Portal</h1>
          <p className="text-sm text-slate-400">Next.js App Router $\\rightarrow$ FastAPI $\\rightarrow$ Immutable Audit Ledger</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs px-3 py-1.5 rounded-full font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> Ledger Verification Active
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Workspace Query Interface */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold mb-4 text-slate-200">LLM Query Execution</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2">TARGET PROVIDER</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setProvider('gemini')}
                  className={\`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border \${
                    provider === 'gemini' 
                      ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300' 
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }\`}
                >
                  Gemini 1.5 Flash
                </button>
                <button
                  type="button"
                  onClick={() => setProvider('openai')}
                  className={\`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border \${
                    provider === 'openai' 
                      ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300' 
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }\`}
                >
                  OpenAI GPT-4o
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2">ENTER PROMPT</label>
              <textarea
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask model to generate enterprise report or strategy..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !prompt}
              className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-slate-950 font-bold py-3 rounded-lg flex justify-center items-center gap-2 text-sm transition-all"
            >
              <Send className="w-4 h-4" /> {loading ? 'Dispatching Pipeline...' : 'Execute Query'}
            </button>
          </form>
        </div>

        {/* Ledger Output Inspector */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl font-mono text-xs">
          <h2 className="text-lg font-sans font-semibold mb-4 text-slate-200 flex items-center justify-between">
            <span>Cryptographic Proof Payload</span>
            <span className="text-xs font-mono text-slate-500">SHA-256</span>
          </h2>

          {response ? (
            <div className="space-y-4">
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
                <span className="text-slate-500 block mb-1">LLM Output:</span>
                <p className="text-emerald-400 font-sans">{response.response}</p>
              </div>

              <div className="p-4 bg-indigo-950/30 border border-indigo-900/50 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Block ID:</span>
                  <span className="text-indigo-300">#{response.ledger_block?.id}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Prev Block Hash:</span>
                  <span className="text-slate-500 text-[10px] break-all">{response.ledger_block?.prev_hash}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Current Immutable Hash:</span>
                  <span className="text-emerald-400 font-bold text-[10px] break-all">{response.ledger_block?.data_hash}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 flex flex-col justify-center items-center border border-dashed border-slate-800 rounded-lg text-slate-500 text-center p-6">
              <AlertOctagon className="w-8 h-8 mb-2 stroke-1" />
              <p>No queries dispatched yet. Submit a prompt to generate a SHA-256 chained audit record.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}`
};

// SHA-256 simulation helper
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function App() {
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'architecture' | 'code'
  const [currentUser, setCurrentUser] = useState(INITIAL_USERS[0]);
  const [selectedProvider, setSelectedProvider] = useState('gemini'); // 'gemini' | 'openai'
  const [promptInput, setPromptInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStep, setActiveStep] = useState(null); // 'ui' | 'fastapi' | 'llm' | 'db'
  
  // Database States
  const [workspaceLogs, setWorkspaceLogs] = useState([
    { id: 101, user_id: 'usr_01', action: 'LLM_PROMPT_EXECUTION', prompt: 'Analyze Q3 SaaS Retention metrics and budget allocation.', response: '[Gemini 1.5 Flash] SaaS Churn down 4.2%. Recommended allocation: +15% expansion in EU region.', provider: 'gemini', latency_ms: 312, timestamp: '2026-10-05 14:22:10' },
    { id: 102, user_id: 'usr_02', action: 'LLM_PROMPT_EXECUTION', prompt: 'Audit Kubernetes cluster permissions for dev team namespace.', response: '[GPT-4o] Found 2 over-privileged ServiceAccounts bound to cluster-admin role.', provider: 'openai', latency_ms: 489, timestamp: '2026-10-05 15:05:42' }
  ]);

  const [ledgerEntries, setLedgerEntries] = useState([]);
  const [dbTab, setDbTab] = useState('ledger'); // 'ledger' | 'logs' | 'users'
  const [selectedCodeFile, setSelectedCodeFile] = useState('fastapi/main.py');
  const [tamperedBlockId, setTamperedBlockId] = useState(null);
  const [isChainValid, setIsChainValid] = useState(true);
  const [verificationMsg, setVerificationMsg] = useState('All cryptographic blocks intact.');

  // Initialize Genesis Ledger Entries
  useEffect(() => {
    const initLedger = async () => {
      const gPrev = '0'.repeat(64);
      const payload1 = JSON.stringify({ log_id: 101, prompt: workspaceLogs[0].prompt, response: workspaceLogs[0].response, latency: 312 });
      const ts1 = '2026-10-05T14:22:10Z';
      const preimage1 = `${gPrev}|usr_01|EXECUTE_PROMPT_GEMINI|${ts1}|${payload1}`;
      const hash1 = await sha256(preimage1);

      const payload2 = JSON.stringify({ log_id: 102, prompt: workspaceLogs[1].prompt, response: workspaceLogs[1].response, latency: 489 });
      const ts2 = '2026-10-05T15:05:42Z';
      const preimage2 = `${hash1}|usr_02|EXECUTE_PROMPT_OPENAI|${ts2}|${payload2}`;
      const hash2 = await sha256(preimage2);

      setLedgerEntries([
        { id: 1, timestamp: ts1, user_id: 'usr_01', action: 'EXECUTE_PROMPT_GEMINI', payload: payload1, prev_hash: gPrev, data_hash: hash1 },
        { id: 2, timestamp: ts2, user_id: 'usr_02', action: 'EXECUTE_PROMPT_OPENAI', payload: payload2, prev_hash: hash1, data_hash: hash2 }
      ]);
    };
    initLedger();
  }, []);

  const handleExecutePrompt = async () => {
    if (!promptInput.trim() || isProcessing) return;

    setIsProcessing(true);
    
    // Step 1: Next.js UI Dispatch
    setActiveStep('ui');
    await new Promise(r => setTimeout(r, 600));

    // Step 2: FastAPI Processing
    setActiveStep('fastapi');
    await new Promise(r => setTimeout(r, 600));

    // Step 3: LLM API Invocation
    setActiveStep('llm');
    await new Promise(r => setTimeout(r, 700));

    const mockResponse = selectedProvider === 'gemini' 
      ? `[Gemini 1.5 Flash] Processed request for ${currentUser.name} (${currentUser.role}): Strategic query successfully evaluated with high confidence.`
      : `[GPT-4o] Executive Analysis generated for ${currentUser.name}: Optimal operational parameters calculated and cached.`;

    const latency = Math.floor(Math.random() * 250) + 200;
    const nowTs = new Date().toISOString();

    // Step 4: DB Logging & Hash-Chained Ledger Block Creation
    setActiveStep('db');

    const newLogId = workspaceLogs.length + 101;
    const newLog = {
      id: newLogId,
      user_id: currentUser.id,
      action: 'LLM_PROMPT_EXECUTION',
      prompt: promptInput,
      response: mockResponse,
      provider: selectedProvider,
      latency_ms: latency,
      timestamp: nowTs.replace('T', ' ').substring(0, 19)
    };

    setWorkspaceLogs(prev => [newLog, ...prev]);

    // Append to Hash-Chained Ledger
    const lastBlock = ledgerEntries[ledgerEntries.length - 1];
    const prevHash = lastBlock ? lastBlock.data_hash : '0'.repeat(64);
    const actionTag = `EXECUTE_PROMPT_${selectedProvider.toUpperCase()}`;
    const payloadObj = JSON.stringify({ log_id: newLogId, prompt: promptInput, response: mockResponse, latency });
    
    const preimage = `${prevHash}|${currentUser.id}|${actionTag}|${nowTs}|${payloadObj}`;
    const newHash = await sha256(preimage);

    const newLedgerBlock = {
      id: ledgerEntries.length + 1,
      timestamp: nowTs,
      user_id: currentUser.id,
      action: actionTag,
      payload: payloadObj,
      prev_hash: prevHash,
      data_hash: newHash
    };

    setLedgerEntries(prev => [...prev, newLedgerBlock]);

    await new Promise(r => setTimeout(r, 400));
    setActiveStep(null);
    setIsProcessing(false);
    setPromptInput('');
  };

  const verifyLedgerIntegrity = async (entriesToVerify = ledgerEntries) => {
    let valid = true;
    let badId = null;

    for (let i = 0; i < entriesToVerify.length; i++) {
      const block = entriesToVerify[i];
      const expectedPrev = i === 0 ? '0'.repeat(64) : entriesToVerify[i - 1].data_hash;

      if (block.prev_hash !== expectedPrev) {
        valid = false;
        badId = block.id;
        break;
      }

      const preimage = `${block.prev_hash}|${block.user_id}|${block.action}|${block.timestamp}|${block.payload}`;
      const recomputed = await sha256(preimage);

      if (recomputed !== block.data_hash) {
        valid = false;
        badId = block.id;
        break;
      }
    }

    setIsChainValid(valid);
    setTamperedBlockId(badId);
    if (valid) {
      setVerificationMsg('All cryptographic blocks intact & verified via SHA-256 chain.');
    } else {
      setVerificationMsg(`SECURITY ALERT: Block #${badId} failed hash verification! Chain broken.`);
    }
  };

  // Simulate Tampering Action
  const handleSimulateTamper = (blockId) => {
    const updated = ledgerEntries.map(b => {
      if (b.id === blockId) {
        return {
          ...b,
          payload: b.payload.replace('Processed', 'MALICIOUS_INJECTION')
        };
      }
      return b;
    });
    setLedgerEntries(updated);
    verifyLedgerIntegrity(updated);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-3.5 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-emerald-500/20">
            <Lock className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="font-bold text-slate-100 text-lg leading-tight flex items-center gap-2">
              FastAPI Ledger Gateway <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-0.5 rounded-full font-mono">v2.4 FullStack</span>
            </h1>
            <p className="text-xs text-slate-400 font-mono">Next.js App Router $\rightarrow$ FastAPI $\rightarrow$ LLM Gateway $\rightarrow$ Hash-Chained DB</p>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'demo' ? 'bg-slate-800 text-emerald-400 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" /> Interactive Sandbox
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'architecture' ? 'bg-slate-800 text-emerald-400 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Architecture Diagram
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'code' ? 'bg-slate-800 text-emerald-400 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" /> Source Blueprint
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 max-w-7xl w-full mx-auto space-y-6">

        {/* TAB 1: INTERACTIVE SANDBOX */}
        {activeTab === 'demo' && (
          <div className="space-y-6">
            
            {/* Top Toolbar: Active User Context */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Active HTTP Context:</span>
                <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  <User className="w-4 h-4 text-emerald-400" />
                  <select 
                    value={currentUser.id}
                    onChange={(e) => setCurrentUser(INITIAL_USERS.find(u => u.id === e.target.value))}
                    className="bg-transparent text-xs font-medium text-slate-200 focus:outline-none cursor-pointer"
                  >
                    {INITIAL_USERS.map(u => (
                      <option key={u.id} value={u.id} className="bg-slate-900 text-slate-200">
                        {u.name} ({u.role})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-500">Header Authorization:</span>
                <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2.5 py-1 rounded-md max-w-[200px] truncate">
                  X-User-Token: {currentUser.token.substring(0, 18)}...
                </span>
              </div>
            </div>

            {/* Sandbox Split View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Input Form & Response Panel */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Request Prompt Component */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl relative overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-slate-200 text-sm flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" /> Next.js Client Action
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">POST /api/v1/workspace/query</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-2">TARGET LLM PROVIDER</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setSelectedProvider('gemini')}
                          className={`py-2.5 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${
                            selectedProvider === 'gemini' 
                              ? 'bg-indigo-600/15 border-indigo-500 text-indigo-300 shadow-sm' 
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Gemini 1.5 Flash
                        </button>
                        <button
                          onClick={() => setSelectedProvider('openai')}
                          className={`py-2.5 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${
                            selectedProvider === 'openai' 
                              ? 'bg-emerald-600/15 border-emerald-500 text-emerald-300 shadow-sm' 
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <Cpu className="w-3.5 h-3.5 text-emerald-400" /> OpenAI GPT-4o
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-2">ENTER PAYLOAD PROMPT</label>
                      <textarea
                        rows={3}
                        value={promptInput}
                        onChange={(e) => setPromptInput(e.target.value)}
                        placeholder="e.g. Audit security compliance rules or summarize project budget..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono resize-none"
                      />
                    </div>

                    <button
                      onClick={handleExecutePrompt}
                      disabled={isProcessing || !promptInput.trim()}
                      className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-semibold py-2.5 rounded-xl text-xs flex justify-center items-center gap-2 transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-slate-950" /> Executing Pipeline...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" /> Dispatch Request Payload
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Pipeline Execution Flow Tracker */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                  <h3 className="font-semibold text-slate-200 text-xs font-mono mb-3 text-slate-400 uppercase tracking-wider">
                    Pipeline Execution Path
                  </h3>
                  <div className="space-y-2">
                    {[
                      { key: 'ui', label: '1. Next.js App Router (HTTP Action)', icon: Server },
                      { key: 'fastapi', label: '2. FastAPI Auth & Middleware Validation', icon: Shield },
                      { key: 'llm', label: `3. Dispatch to ${selectedProvider === 'gemini' ? 'Gemini API' : 'OpenAI API'}`, icon: Cpu },
                      { key: 'db', label: '4. Calculate SHA-256 & Append Ledger Block', icon: Database }
                    ].map((step) => {
                      const Icon = step.icon;
                      const isActive = activeStep === step.key;
                      return (
                        <div 
                          key={step.key}
                          className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-all border ${
                            isActive 
                              ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300 font-medium' 
                              : 'bg-slate-950/50 border-slate-800/80 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400 animate-bounce' : 'text-slate-600'}`} />
                            <span>{step.label}</span>
                          </div>
                          {isActive && <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Database Inspector & Immutable Ledger */}
              <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col">
                
                {/* DB Tabs Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <h3 className="font-semibold text-slate-200 text-sm">Database Inspector</h3>
                  </div>

                  <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                    <button
                      onClick={() => setDbTab('ledger')}
                      className={`px-3 py-1 rounded transition-all ${
                        dbTab === 'ledger' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      Hash-Chained Ledger ({ledgerEntries.length})
                    </button>
                    <button
                      onClick={() => setDbTab('logs')}
                      className={`px-3 py-1 rounded transition-all ${
                        dbTab === 'logs' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      Workspace Logs ({workspaceLogs.length})
                    </button>
                    <button
                      onClick={() => setDbTab('users')}
                      className={`px-3 py-1 rounded transition-all ${
                        dbTab === 'users' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      Users & Roles ({INITIAL_USERS.length})
                    </button>
                  </div>
                </div>

                {/* DB TAB Content: Ledger */}
                {dbTab === 'ledger' && (
                  <div className="flex-1 space-y-4">
                    {/* Security Ledger Control Banner */}
                    <div className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono ${
                      isChainValid ? 'bg-emerald-950/30 border-emerald-800/50 text-emerald-400' : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
                    }`}>
                      <div className="flex items-center gap-2">
                        {isChainValid ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> : <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />}
                        <span>{verificationMsg}</span>
                      </div>
                      <button
                        onClick={() => verifyLedgerIntegrity()}
                        className="bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 px-2.5 py-1 rounded font-mono text-[11px] transition-all"
                      >
                        Re-verify Chain
                      </button>
                    </div>

                    {/* Block Stream */}
                    <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                      {ledgerEntries.map((block, idx) => {
                        const isTampered = tamperedBlockId === block.id;
                        return (
                          <div 
                            key={block.id}
                            className={`p-4 rounded-xl border font-mono text-xs transition-all relative ${
                              isTampered 
                                ? 'bg-rose-950/20 border-rose-500/80 text-rose-200' 
                                : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800/60">
                              <div className="flex items-center gap-2">
                                <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px] font-bold">
                                  BLOCK #{block.id}
                                </span>
                                <span className="text-slate-500 text-[11px]">{block.timestamp}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-slate-400 text-[11px]">User: {block.user_id}</span>
                                {!isTampered && (
                                  <button
                                    onClick={() => handleSimulateTamper(block.id)}
                                    className="text-[10px] text-amber-400 hover:text-amber-300 underline"
                                    title="Simulate SQL Tampering to test SHA-256 chain detection"
                                  >
                                    [Simulate Tamper]
                                  </button>
                                )}
                              </div>
                            </div>

                            <div className="space-y-1.5 text-[11px]">
                              <div>
                                <span className="text-slate-500">Action: </span>
                                <span className="text-indigo-300 font-semibold">{block.action}</span>
                              </div>
                              <div>
                                <span className="text-slate-500 block">Payload Data:</span>
                                <p className="text-slate-300 bg-slate-900 p-2 rounded border border-slate-800/50 break-all text-[10px]">
                                  {block.payload}
                                </p>
                              </div>
                              <div className="pt-1 grid grid-cols-1 gap-1">
                                <div className="truncate">
                                  <span className="text-slate-500">Prev Block Hash: </span>
                                  <span className="text-slate-400 text-[10px]">{block.prev_hash}</span>
                                </div>
                                <div className="truncate">
                                  <span className="text-slate-500">SHA-256 Digest: </span>
                                  <span className={isTampered ? "text-rose-400 font-bold" : "text-emerald-400 font-bold"}>
                                    {block.data_hash}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {idx < ledgerEntries.length - 1 && (
                              <div className="flex justify-center -mb-5 mt-2 relative z-10">
                                <div className="bg-slate-900 border border-slate-800 text-slate-500 rounded-full p-1 shadow">
                                  <Hash className="w-3 h-3 text-emerald-500" />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* DB TAB Content: Workspace Logs */}
                {dbTab === 'logs' && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs font-mono">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                          <th className="p-2.5">ID</th>
                          <th className="p-2.5">User</th>
                          <th className="p-2.5">Provider</th>
                          <th className="p-2.5">Prompt</th>
                          <th className="p-2.5">Latency</th>
                          <th className="p-2.5">Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/50 text-slate-300">
                        {workspaceLogs.map(log => (
                          <tr key={log.id} className="hover:bg-slate-950/50">
                            <td className="p-2.5 text-slate-500">#{log.id}</td>
                            <td className="p-2.5 text-emerald-400">{log.user_id}</td>
                            <td className="p-2.5">
                              <span className={`px-2 py-0.5 rounded text-[10px] ${
                                log.provider === 'gemini' ? 'bg-indigo-950 text-indigo-300 border border-indigo-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                              }`}>
                                {log.provider}
                              </span>
                            </td>
                            <td className="p-2.5 max-w-[200px] truncate">{log.prompt}</td>
                            <td className="p-2.5 text-slate-400">{log.latency_ms}ms</td>
                            <td className="p-2.5 text-slate-500 text-[10px]">{log.timestamp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* DB TAB Content: Users */}
                {dbTab === 'users' && (
                  <div className="space-y-3">
                    {INITIAL_USERS.map(u => (
                      <div key={u.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-emerald-400">
                            {u.name[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{u.name}</p>
                            <p className="text-slate-500 font-mono text-[11px]">{u.email}</p>
                          </div>
                        </div>
                        <div className="text-right font-mono">
                          <span className="bg-indigo-950/80 text-indigo-300 border border-indigo-800/80 text-[10px] px-2.5 py-1 rounded-full font-bold">
                            {u.role}
                          </span>
                          <p className="text-[10px] text-slate-500 mt-1">ID: {u.id}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: ARCHITECTURE FLOW VISUALIZER */}
        {activeTab === 'architecture' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
            <div>
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" /> Full-Stack Enterprise Architecture Blueprint
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Visualizing how Next.js App Router interacts with FastAPI, Gemini/OpenAI API, and the Hash-Chained Audit Database.
              </p>
            </div>

            {/* Visual Node Lifecycle Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 relative">
              
              {/* Node 1: Next.js UI */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center space-y-3 relative hover:border-emerald-500/50 transition-all">
                <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-lg mx-auto flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-200">Next.js App Router UI</h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-1">Client / Server Actions</p>
                </div>
                <div className="text-[10px] text-slate-400 bg-slate-900 p-2 rounded border border-slate-800">
                  Submits HTTP Payload with X-User-Token context header.
                </div>
              </div>

              {/* Node 2: FastAPI */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center space-y-3 relative hover:border-emerald-500/50 transition-all">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg mx-auto flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-200">FastAPI Backend</h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-1">Async Python Engine</p>
                </div>
                <div className="text-[10px] text-slate-400 bg-slate-900 p-2 rounded border border-slate-800">
                  Validates User Role, invokes LLM, and triggers ledger engine.
                </div>
              </div>

              {/* Node 3: LLM Integration */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center space-y-3 relative hover:border-emerald-500/50 transition-all">
                <div className="w-10 h-10 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-lg mx-auto flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-200">LLM Provider API</h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-1">Gemini Pro / GPT-4o</p>
                </div>
                <div className="text-[10px] text-slate-400 bg-slate-900 p-2 rounded border border-slate-800">
                  Generates natural language strategy response or analysis.
                </div>
              </div>

              {/* Node 4: Database & Hash Ledger */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center space-y-3 relative hover:border-emerald-500/50 transition-all">
                <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-lg mx-auto flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-200">Relational DB & Ledger</h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-1">PostgreSQL / SQLite</p>
                </div>
                <div className="text-[10px] text-slate-400 bg-slate-900 p-2 rounded border border-slate-800">
                  Stores Users, Logs, and computes immutable SHA-256 block hash.
                </div>
              </div>

            </div>

            {/* Dynamic Hash Chaining Explanation Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
              <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <Hash className="w-4 h-4" /> SHA-256 Ledger Mathematical Model
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Hash Block N = SHA-256( Hash(Block N-1) + User_ID + Action + Timestamp + JSON_Payload )
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                If an adversary directly alters any database field (like swapping prompt texts or user roles in direct SQL), 
                the SHA-256 digest recalculation will instantly mismatch with the subsequent block's <code className="text-indigo-300 font-mono">prev_hash</code> link, 
                flagging the entire database chain as tampered.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: CODE BLUEPRINT VIEWER */}
        {activeTab === 'code' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-400" /> Production Starter Code Base
                </h2>
                <p className="text-xs text-slate-400">Copy or inspect the implementation for the complete full-stack architecture.</p>
              </div>

              {/* Code File Switcher */}
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-mono">
                {Object.keys(CODE_FILES).map((filePath) => (
                  <button
                    key={filePath}
                    onClick={() => setSelectedCodeFile(filePath)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      selectedCodeFile === filePath 
                        ? 'bg-slate-800 text-emerald-400 font-semibold' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {filePath}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Display Canvas */}
            <div className="relative">
              <pre className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed max-h-[550px]">
                <code>{CODE_FILES[selectedCodeFile]}</code>
              </pre>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 bg-slate-950 py-4 px-6 text-center text-xs text-slate-500 font-mono">
        FastAPI Ledger Architecture Engine &bull; Next.js App Router Client &bull; SHA-256 Cryptographic Audit Log
      </footer>
    </div>
  );
}