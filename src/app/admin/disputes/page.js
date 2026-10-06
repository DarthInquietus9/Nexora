"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Eye,
  FileCheck2,
  Filter,
  FolderKanban,
  Gavel,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  Scale,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const disputes = [
  {
    id: "DSP-0087",
    title: "Contribution credit disagreement",
    project: "Smart Mobility Research",
    projectId: "NX-039",
    raisedBy: "Rahul Sharma",
    otherParty: "Urban Future Labs",
    type: "Reward / Credit",
    priority: "High",
    status: "Open",
    age: "2 hrs",
    evidence: 8,
    charter: "Version 2.1",
  },
  {
    id: "DSP-0086",
    title: "Milestone acceptance disagreement",
    project: "Cyber Threat Intelligence Study",
    projectId: "NX-035",
    raisedBy: "SecureNet Research",
    otherParty: "Team CTI",
    type: "Milestone",
    priority: "High",
    status: "Under Review",
    age: "5 hrs",
    evidence: 12,
    charter: "Version 1.4",
  },
  {
    id: "DSP-0085",
    title: "Scope change after work started",
    project: "AI Literature Review",
    projectId: "NX-038",
    raisedBy: "Dr. Rohan Kapoor",
    otherParty: "MedResearch Group",
    type: "Charter",
    priority: "Medium",
    status: "Open",
    age: "1 day",
    evidence: 6,
    charter: "Version 3.0",
  },
  {
    id: "DSP-0084",
    title: "Confidentiality access concern",
    project: "Secure Medical Imaging",
    projectId: "NX-034",
    raisedBy: "Priya Nair",
    otherParty: "Project Admin",
    type: "Access",
    priority: "High",
    status: "Under Review",
    age: "1 day",
    evidence: 9,
    charter: "Version 1.2",
  },
  {
    id: "DSP-0083",
    title: "Reward split clarification",
    project: "Climate Data Analysis",
    projectId: "NX-040",
    raisedBy: "Ananya Rao",
    otherParty: "GreenTech Initiative",
    type: "Reward / Credit",
    priority: "Low",
    status: "Resolved",
    age: "2 days",
    evidence: 5,
    charter: "Version 1.1",
  },
  {
    id: "DSP-0082",
    title: "Contribution attribution issue",
    project: "EdgeVision Research",
    projectId: "NX-042",
    raisedBy: "Aarav Mehta",
    otherParty: "Project Team",
    type: "Contribution",
    priority: "Medium",
    status: "Resolved",
    age: "3 days",
    evidence: 11,
    charter: "Version 2.0",
  },
];

const statusFilters = [
  "All disputes",
  "Open",
  "Under Review",
  "Resolved",
];

function StatusBadge({ status }) {
  const styles = {
    Open: "border-red-200 bg-red-50 text-red-700",
    "Under Review": "border-amber-200 bg-amber-50 text-amber-700",
    Resolved: "border-emerald-200 bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
}

function PriorityBadge({ priority }) {
  const styles = {
    High: "bg-red-50 text-red-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
        styles[priority]
      }`}
    >
      {priority}
    </span>
  );
}

function TypeBadge({ type }) {
  const styles = {
    "Reward / Credit": "bg-purple-50 text-purple-700",
    Milestone: "bg-blue-50 text-blue-700",
    Charter: "bg-slate-100 text-slate-700",
    Access: "bg-red-50 text-red-700",
    Contribution: "bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`rounded-md px-2 py-1 text-[10px] font-medium ${
        styles[type] || "bg-slate-100 text-slate-700"
      }`}
    >
      {type}
    </span>
  );
}

export default function AdminDisputesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-800 bg-slate-950 text-white lg:flex lg:flex-col">
        <div className="flex h-20 items-center border-b border-slate-800 px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">Nex.Res</p>
              <p className="text-[11px] text-slate-400">
                Research Ecosystem
              </p>
            </div>
          </Link>
        </div>

        <div className="px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Administration
          </p>

          <nav className="space-y-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              href="/admin/users"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <Users className="h-4 w-4" />
              Users
            </Link>

            <Link
              href="/admin/projects"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <FolderKanban className="h-4 w-4" />
              Projects
            </Link>

            <Link
              href="/admin/audit"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <FileCheck2 className="h-4 w-4" />
              Audit Trail
            </Link>

            <Link
              href="/admin/disputes"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium"
            >
              <Gavel className="h-4 w-4" />
              Disputes
            </Link>

            <Link
              href="/admin/ledger"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <ShieldCheck className="h-4 w-4" />
              Ledger
            </Link>
          </nav>
        </div>

        <div className="mt-auto border-t border-slate-800 p-4">
          <div className="mb-3 rounded-xl bg-slate-900 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold">
                AD
              </div>

              <div>
                <p className="text-sm font-semibold">Admin Demo</p>
                <p className="text-xs text-slate-500">
                  Platform Administrator
                </p>
              </div>
            </div>
          </div>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Link
                  href="/admin/dashboard"
                  className="hover:text-slate-900"
                >
                  Administration
                </Link>

                <ChevronRight className="h-3.5 w-3.5" />

                <span className="font-medium text-slate-700">
                  Disputes
                </span>
              </div>

              <h1 className="mt-1 text-xl font-bold text-slate-950">
                Dispute Resolution
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
                <Search className="h-4 w-4 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search disputes..."
                  className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                AD
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] p-5 sm:p-8">
          {/* Intro */}
          <section className="mb-6">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  <Scale className="h-3.5 w-3.5" />
                  Fair resolution
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Dispute Management
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Review disagreements using accepted charter terms,
                  contribution records, project evidence and recorded
                  activity before making a resolution decision.
                </p>
              </div>

              <Button className="gap-2">
                <Gavel className="h-4 w-4" />
                Review Priority Cases
              </Button>
            </div>
          </section>

          {/* Summary */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <DisputeStat
              title="Total Disputes"
              value="87"
              detail="All recorded cases"
              icon={<Gavel className="h-4 w-4" />}
            />

            <DisputeStat
              title="Open"
              value="07"
              detail="Awaiting review"
              icon={<AlertTriangle className="h-4 w-4" />}
              type="red"
            />

            <DisputeStat
              title="Under Review"
              value="11"
              detail="Administrator review"
              icon={<Clock3 className="h-4 w-4" />}
              type="amber"
            />

            <DisputeStat
              title="Resolved"
              value="69"
              detail="Closed cases"
              icon={<CheckCircle2 className="h-4 w-4" />}
              type="green"
            />

            <DisputeStat
              title="High Priority"
              value="05"
              detail="Need attention"
              icon={<AlertTriangle className="h-4 w-4" />}
              type="red"
            />
          </section>

          {/* Resolution principles */}
          <section className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/60 p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Scale className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-blue-950">
                    Resolution should follow the accepted charter
                  </h3>

                  <p className="mt-1 max-w-3xl text-xs leading-5 text-blue-900/75">
                    Review the agreed scope, engagement model, reward or
                    credit split, confidentiality terms, contribution
                    records and approved charter version before deciding a
                    dispute.
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-blue-700">
                Evidence-based review
              </span>
            </div>
          </section>

          {/* Filters */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((status, index) => (
                  <button
                    key={status}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold ${
                      index === 0
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <FilterButton label="Type" />
                <FilterButton label="Priority" />
                <FilterButton label="Project" />

                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <Clock3 className="h-3.5 w-3.5" />
                  Date
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* Disputes table */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-950">
                  Dispute Cases
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Review active and resolved cases
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                18 cases require attention
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1250px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left">
                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Case
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Project
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Raised By
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Type
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Priority
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Evidence
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Charter
                    </th>

                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {disputes.map((dispute) => (
                    <tr
                      key={dispute.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <div className="max-w-[250px]">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">
                              {dispute.id}
                            </span>

                            <StatusBadge status={dispute.status} />
                          </div>

                          <p className="text-sm font-semibold leading-5 text-slate-900">
                            {dispute.title}
                          </p>

                          <p className="mt-1 text-[11px] text-slate-400">
                            Opened {dispute.age} ago
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div>
                          <p className="max-w-[180px] text-xs font-semibold text-slate-700">
                            {dispute.project}
                          </p>

                          <p className="mt-1 text-[10px] text-slate-400">
                            {dispute.projectId}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-700">
                            {dispute.raisedBy}
                          </p>

                          <p className="mt-1 text-[10px] text-slate-400">
                            vs. {dispute.otherParty}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <TypeBadge type={dispute.type} />
                      </td>

                      <td className="px-4 py-4">
                        <PriorityBadge priority={dispute.priority} />
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge status={dispute.status} />
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                          <FileCheck2 className="h-3.5 w-3.5 text-slate-400" />
                          {dispute.evidence} files
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">
                          {dispute.charter}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1">
                          <button
                            title="Review dispute"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-700"
                          >
                            <Eye className="h-4 w-4" />
                          </button>

                          <button
                            title="More actions"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-700">1</span>{" "}
                to{" "}
                <span className="font-semibold text-slate-700">6</span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">87</span>{" "}
                disputes
              </p>

              <div className="flex items-center gap-1">
                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-400">
                  Previous
                </button>

                <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                  1
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
                  2
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
                  3
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
                  Next
                </button>
              </div>
            </div>
          </section>

          {/* Review workspace */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Wallet className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Reward & Credit Disputes
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Review the accepted reward split and contribution
                    impact rather than relying only on activity or commit
                    counts.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Open reward cases
                  </p>

                  <p className="mt-1 text-xl font-bold text-slate-900">
                    04
                  </p>
                </div>

                <div className="rounded-xl bg-purple-50 p-4">
                  <p className="text-xs text-purple-600">
                    Awaiting review
                  </p>

                  <p className="mt-1 text-xl font-bold text-purple-800">
                    07
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <LockKeyhole className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Access & Confidentiality
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Check access logs, project scope and approved
                    confidentiality rules when reviewing an access dispute.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-blue-50 p-4">
                <div>
                  <p className="text-xl font-bold text-blue-800">03</p>

                  <p className="text-xs text-blue-700">
                    active access disputes
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="border-blue-200 bg-white text-blue-700 hover:bg-blue-100"
                >
                  Review access
                </Button>
              </div>
            </div>
          </section>

          {/* Resolution workflow */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Gavel className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">
                  Administrator Review Workflow
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Suggested review sequence for the prototype.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              <WorkflowStep
                number="01"
                title="Review Charter"
                description="Check the accepted project terms and version."
              />

              <WorkflowStep
                number="02"
                title="Review Evidence"
                description="Inspect contributions, logs and submitted evidence."
              />

              <WorkflowStep
                number="03"
                title="Hear Both Sides"
                description="Compare statements from involved participants."
              />

              <WorkflowStep
                number="04"
                title="Record Decision"
                description="Document the resolution and audit the outcome."
              />
            </div>
          </section>

          {/* Demo note */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

            <p>
              <span className="font-semibold text-slate-700">
                Demo data:
              </span>{" "}
              Dispute cases, participants, evidence counts, charter versions
              and resolution states are synthetic data for the hackathon
              prototype. Actual dispute workflows and administrator
              enforcement depend on the implemented backend.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function DisputeStat({
  title,
  value,
  detail,
  icon,
  type = "default",
}) {
  const styles = {
    default: "border-slate-200 bg-white text-slate-500",
    red: "border-red-200 bg-red-50/60 text-red-700",
    amber: "border-amber-200 bg-amber-50/60 text-amber-700",
    green: "border-emerald-200 bg-emerald-50/60 text-emerald-700",
  };

  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm ${
        styles[type]
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium">{title}</p>
        {icon}
      </div>

      <p className="mt-2 text-2xl font-bold">{value}</p>

      <p className="mt-1 text-xs">{detail}</p>
    </div>
  );
}

function FilterButton({ label }) {
  return (
    <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
      <Filter className="h-3.5 w-3.5" />
      {label}
      <ChevronDown className="h-3.5 w-3.5" />
    </button>
  );
}

function WorkflowStep({ number, title, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-[10px] font-bold text-white">
          {number}
        </span>

        <h4 className="text-sm font-semibold text-slate-900">
          {title}
        </h4>
      </div>

      <p className="mt-3 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}