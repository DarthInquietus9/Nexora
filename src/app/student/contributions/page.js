"use client";

import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Bot,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copy,
  FileCheck2,
  FileText,
  Fingerprint,
  GitBranch,
  Hash,
  Info,
  LockKeyhole,
  MoreHorizontal,
  Search,
  ShieldCheck,
  Sparkles,
  User,
  Users,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const contributions = [
  {
    id: "CON-1042",
    contributor: "Ananya Sharma",
    initials: "AS",
    type: "Human",
    action: "Dataset preprocessing",
    description:
      "Cleaned and normalized the retinal image dataset and documented preprocessing steps.",
    milestone: "Milestone 1 · Dataset Preparation",
    timestamp: "Oct 5, 2026 · 10:42 AM",
    status: "Verified",
    credit: "18%",
    hash: "8f2c9a...41de",
    previousHash: "7a1d5c...93bf",
    aiAssisted: false,
    similarity: "No issue detected",
  },
  {
    id: "CON-1041",
    contributor: "Research Copilot",
    initials: "AI",
    type: "AI Agent",
    action: "Literature synthesis",
    description:
      "Generated a structured summary of approved research papers under the project-scoped AI permissions.",
    milestone: "Milestone 1 · Literature Review",
    timestamp: "Oct 5, 2026 · 10:18 AM",
    status: "Reviewed",
    credit: "0%",
    hash: "7a1d5c...93bf",
    previousHash: "52be81...c71a",
    aiAssisted: true,
    similarity: "No issue detected",
  },
  {
    id: "CON-1040",
    contributor: "Rahul Menon",
    initials: "RM",
    type: "Human",
    action: "Edge model optimization",
    description:
      "Reduced model inference overhead and prepared the first edge-device benchmark.",
    milestone: "Milestone 2 · Model Optimization",
    timestamp: "Oct 5, 2026 · 9:54 AM",
    status: "Verified",
    credit: "24%",
    hash: "52be81...c71a",
    previousHash: "31dc42...7af0",
    aiAssisted: true,
    similarity: "No issue detected",
  },
  {
    id: "CON-1039",
    contributor: "Meera Iyer",
    initials: "MI",
    type: "Human",
    action: "Technical documentation",
    description:
      "Added system architecture notes and documented the experiment configuration.",
    milestone: "Milestone 1 · Documentation",
    timestamp: "Oct 5, 2026 · 9:22 AM",
    status: "Verified",
    credit: "12%",
    hash: "31dc42...7af0",
    previousHash: "19be20...a52d",
    aiAssisted: false,
    similarity: "No issue detected",
  },
  {
    id: "CON-1038",
    contributor: "Vikram Shah",
    initials: "VS",
    type: "Human",
    action: "Research draft upload",
    description:
      "Uploaded an initial research draft for review by the project team.",
    milestone: "Milestone 1 · Research Draft",
    timestamp: "Oct 5, 2026 · 8:46 AM",
    status: "Flagged",
    credit: "0%",
    hash: "19be20...a52d",
    previousHash: "0cfa11...88de",
    aiAssisted: false,
    similarity: "Similarity review required",
  },
];

const summaryCards = [
  {
    label: "Total Contributions",
    value: "24",
    helper: "+6 this week",
    icon: Activity,
  },
  {
    label: "Verified",
    value: "19",
    helper: "79% verified",
    icon: CheckCircle2,
  },
  {
    label: "AI-Assisted",
    value: "7",
    helper: "Human reviewed",
    icon: Bot,
  },
  {
    label: "Pending Review",
    value: "3",
    helper: "Needs attention",
    icon: Clock3,
  },
];

function StatusBadge({ status }) {
  if (status === "Verified") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Verified
      </span>
    );
  }

  if (status === "Reviewed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
        <FileCheck2 className="h-3.5 w-3.5" />
        Reviewed
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
      <AlertTriangle className="h-3.5 w-3.5" />
      Flagged
    </span>
  );
}

function TypeBadge({ type }) {
  if (type === "AI Agent") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
        <Bot className="h-3.5 w-3.5" />
        AI Agent
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
      <User className="h-3.5 w-3.5" />
      Human
    </span>
  );
}

export default function ContributionsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedContribution, setSelectedContribution] = useState(null);

  const filteredContributions = contributions.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Human") return item.type === "Human";
    if (filter === "AI") return item.type === "AI Agent";
    if (filter === "Flagged") return item.status === "Flagged";
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="flex h-16 items-center border-b border-slate-200 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900 text-sm font-bold text-white">
              N
            </div>
            <div>
              <p className="text-sm font-bold text-slate-950">Nex.Res</p>
              <p className="text-[11px] text-slate-500">
                Research Ecosystem
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <nav className="mt-3 space-y-1">
            {[
              ["Dashboard", "/student"],
              ["Discover Projects", "/student/discover"],
              ["My Projects", "/student/project"],
              ["My Team", "/student/team"],
              ["Workspace", "/student/workspace"],
              ["Contributions", "/student/contributions"],
              ["Rewards", "/student/rewards"],
              ["Portfolio", "/student/portfolio"],
            ].map(([label, href]) => {
              const active = label === "Contributions";

              return (
                <a
                  key={label}
                  href={href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-blue-50 text-blue-800"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      active ? "bg-blue-700" : "bg-slate-300"
                    }`}
                  />
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="mt-8">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Project
            </p>

            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-md bg-blue-100 p-1.5 text-blue-700">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-800">
                    Diabetic Retinopathy
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    NX-DR-026
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Progress</span>
                <span className="font-semibold text-slate-700">68%</span>
              </div>

              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[68%] rounded-full bg-blue-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700">
              AR
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">
                Ananya Rao
              </p>
              <p className="truncate text-xs text-slate-500">Student Researcher</p>
            </div>
            <MoreHorizontal className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur lg:px-8">
          <div>
            <p className="text-xs text-slate-500">Student Portal / Project</p>
            <h1 className="text-sm font-bold text-slate-900">
              Contribution Ledger
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100">
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
              <Activity className="h-5 w-5" />
            </button>

            <div className="hidden h-7 w-px bg-slate-200 sm:block" />

            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">
                AR
              </div>
              <span className="text-sm font-medium text-slate-700">
                Ananya Rao
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                <span>Project</span>
                <span>/</span>
                <span>Digital Research</span>
                <span>/</span>
                <span className="font-medium text-slate-700">
                  Contributions
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Contribution Ledger
              </h2>

              <p className="mt-1 max-w-2xl text-sm text-slate-500">
                A transparent record of human and AI-assisted work completed
                within the project.
              </p>
            </div>

            <Button className="gap-2 bg-blue-900 hover:bg-blue-800">
              <FileCheck2 className="h-4 w-4" />
              Export Report
            </Button>
          </div>

          {/* Integrity Banner */}
          <div className="mt-6 flex flex-col gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-white p-2 text-emerald-700 shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-bold text-emerald-900">
                    Contribution chain integrity verified
                  </p>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                    Demo status
                  </span>
                </div>

                <p className="mt-1 text-xs leading-5 text-emerald-800">
                  Each contribution references the previous record through a
                  hash-linked chain. Any unauthorized modification should be
                  visible as a broken link.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <Hash className="h-4 w-4" />
              Chain #24
            </div>
          </div>

          {/* Summary Cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        {card.label}
                      </p>
                      <p className="mt-2 text-2xl font-bold text-slate-950">
                        {card.value}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-500">{card.helper}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
            <section className="min-w-0 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Contribution history
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Human and AI actions recorded against project milestones.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["All", "Human", "AI", "Flagged"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                          filter === item
                            ? "bg-blue-900 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {filteredContributions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedContribution(item)}
                    className="w-full text-left transition hover:bg-slate-50"
                  >
                    <div className="p-5">
                      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                        <div className="flex min-w-0 gap-3">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                              item.type === "AI Agent"
                                ? "bg-violet-100 text-violet-700"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {item.initials}
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-bold text-slate-900">
                                {item.action}
                              </p>
                              <TypeBadge type={item.type} />
                            </div>

                            <p className="mt-1 text-xs text-slate-500">
                              {item.contributor}
                            </p>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                              {item.description}
                            </p>

                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-500">
                              <span className="flex items-center gap-1.5">
                                <GitBranch className="h-3.5 w-3.5" />
                                {item.milestone}
                              </span>

                              <span className="flex items-center gap-1.5">
                                <Clock3 className="h-3.5 w-3.5" />
                                {item.timestamp}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-3 xl:flex-col xl:items-end">
                          <StatusBadge status={item.status} />

                          <div className="text-right">
                            <p className="text-[10px] uppercase tracking-wide text-slate-400">
                              Reward Credit
                            </p>
                            <p className="mt-0.5 text-sm font-bold text-slate-800">
                              {item.credit}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3">
                        <div className="flex flex-col gap-2 text-[11px] sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex min-w-0 items-center gap-2">
                            <Hash className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                            <span className="font-medium text-slate-500">
                              Record hash
                            </span>
                            <span className="font-mono text-slate-700">
                              {item.hash}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-slate-400">
                            <ArrowDown className="h-3.5 w-3.5" />
                            Previous:
                            <span className="font-mono text-slate-600">
                              {item.previousHash}
                            </span>
                          </div>
                        </div>
                      </div>

                      {item.similarity !== "No issue detected" && (
                        <div className="mt-3 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                          <AlertTriangle className="h-4 w-4 shrink-0" />
                          <span className="font-medium">
                            {item.similarity}
                          </span>
                        </div>
                      )}

                      {item.aiAssisted && (
                        <div className="mt-3 flex items-center gap-2 text-[11px] text-violet-700">
                          <Sparkles className="h-3.5 w-3.5" />
                          AI assistance declared · Human review required
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {filteredContributions.length === 0 && (
                <div className="p-12 text-center">
                  <Search className="mx-auto h-8 w-8 text-slate-300" />
                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    No contributions found
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Try another filter.
                  </p>
                </div>
              )}
            </section>

            {/* Right panel */}
            <aside className="space-y-6">
              {/* Verification */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-700">
                    <Fingerprint className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Integrity verification
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Contribution chain health
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["Hash sequence", "Verified", true],
                    ["Previous links", "Verified", true],
                    ["Record ordering", "Verified", true],
                    ["Tamper detection", "Ready", true],
                  ].map(([label, value, success]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-slate-600">{label}</span>

                      <span
                        className={`flex items-center gap-1.5 text-xs font-semibold ${
                          success ? "text-emerald-700" : "text-red-600"
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="mt-5 w-full gap-2 text-xs"
                  onClick={() =>
                    alert(
                      "Demo verification complete. No real backend verification is connected yet."
                    )
                  }
                >
                  <ShieldCheck className="h-4 w-4" />
                  Run Integrity Check
                </Button>
              </div>

              {/* AI Declaration */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-violet-50 p-2 text-violet-700">
                    <Bot className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      AI-use declaration
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Transparent AI participation
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-violet-50 p-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                    <p className="text-xs leading-5 text-violet-800">
                      AI-generated or AI-assisted work is clearly identified in
                      the contribution record.
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">AI-assisted records</span>
                    <span className="font-bold text-slate-800">7</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Human reviewed</span>
                    <span className="font-bold text-emerald-700">7 / 7</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">AI reward credit</span>
                    <span className="font-bold text-slate-800">0%</span>
                  </div>
                </div>
              </div>

              {/* Similarity */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-amber-50 p-2 text-amber-700">
                    <Copy className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Similarity review
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Plagiarism / overlap monitoring
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-slate-950">
                      1
                    </span>
                    <span className="text-xs font-medium text-amber-700">
                      flagged record
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[8%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  A flagged record requires review before contribution credit
                  can be finalized.
                </p>

                <Button
                  variant="outline"
                  className="mt-4 w-full text-xs"
                  onClick={() => setFilter("Flagged")}
                >
                  Review Flagged Record
                </Button>
              </div>
            </aside>
          </div>

          {/* Explanation */}
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

              <div>
                <h3 className="text-sm font-bold text-blue-900">
                  How contribution credit works
                </h3>

                <p className="mt-1 text-xs leading-5 text-blue-800">
                  Contributions are recorded against agreed project roles and
                  milestones. Credit is based on the accepted project charter
                  and reviewed contribution impact — not simply the number of
                  commits or actions. AI agents do not receive reward credit;
                  human direction and review remain attributable to people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {selectedContribution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 p-5">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-950">
                    Contribution Details
                  </h3>
                  <StatusBadge status={selectedContribution.status} />
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Record {selectedContribution.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedContribution(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Contributor
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {selectedContribution.contributor}
                  </p>
                  <div className="mt-2">
                    <TypeBadge type={selectedContribution.type} />
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Reward Credit
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-950">
                    {selectedContribution.credit}
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4 sm:col-span-2">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Contribution
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {selectedContribution.action}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {selectedContribution.description}
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4 sm:col-span-2">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Hash Chain
                  </p>

                  <div className="mt-3 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-emerald-50 p-2 text-emerald-700">
                        <Hash className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-500">
                          Current record hash
                        </p>
                        <p className="truncate font-mono text-xs font-semibold text-slate-800">
                          {selectedContribution.hash}
                        </p>
                      </div>
                    </div>

                    <div className="ml-4 border-l border-dashed border-slate-300 pl-5">
                      <p className="text-[11px] text-slate-500">
                        Previous record
                      </p>
                      <p className="mt-1 font-mono text-xs font-semibold text-slate-700">
                        {selectedContribution.previousHash}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Timestamp
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {selectedContribution.timestamp}
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Milestone
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {selectedContribution.milestone}
                  </p>
                </div>
              </div>

              {selectedContribution.aiAssisted && (
                <div className="mt-4 flex gap-3 rounded-lg border border-violet-200 bg-violet-50 p-4">
                  <Bot className="h-5 w-5 shrink-0 text-violet-700" />
                  <div>
                    <p className="text-sm font-semibold text-violet-900">
                      AI assistance declared
                    </p>
                    <p className="mt-1 text-xs leading-5 text-violet-800">
                      This record contains AI-assisted work. The human
                      contributor remains responsible for reviewing and
                      accepting the resulting contribution.
                    </p>
                  </div>
                </div>
              )}

              {selectedContribution.status === "Flagged" && (
                <div className="mt-4 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-700" />
                  <div>
                    <p className="text-sm font-semibold text-amber-900">
                      Similarity review required
                    </p>
                    <p className="mt-1 text-xs leading-5 text-amber-800">
                      This is a demo review state. The actual similarity
                      service will be connected when the backend API is
                      available.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <LockKeyhole className="h-4 w-4" />
                Project-scoped record
              </div>

              <Button
                variant="outline"
                onClick={() => setSelectedContribution(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}