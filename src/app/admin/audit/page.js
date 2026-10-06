"use client";

import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Eye,
  FileCheck2,
  Filter,
  FolderKanban,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  MoreHorizontal,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const auditEvents = [
  {
    id: "AUD-98421",
    time: "09:42:18",
    actor: "Aarav Mehta",
    actorType: "Student",
    action: "Accepted project charter",
    category: "Project",
    project: "EdgeVision Research",
    result: "Success",
    ip: "Demo Network",
    risk: "Low",
  },
  {
    id: "AUD-98420",
    time: "09:39:54",
    actor: "AI Scoping Agent",
    actorType: "AI Agent",
    action: "Generated milestone breakdown",
    category: "AI",
    project: "Secure Document Intelligence",
    result: "Logged",
    ip: "Agent Runtime",
    risk: "Low",
  },
  {
    id: "AUD-98419",
    time: "09:36:27",
    actor: "Priya Nair",
    actorType: "Expert",
    action: "Reviewed contribution",
    category: "Contribution",
    project: "Climate Data Analysis",
    result: "Success",
    ip: "Demo Network",
    risk: "Low",
  },
  {
    id: "AUD-98418",
    time: "09:31:42",
    actor: "System",
    actorType: "System",
    action: "Integrity check completed",
    category: "Security",
    project: "Digital Health Analytics",
    result: "Verified",
    ip: "System",
    risk: "Low",
  },
  {
    id: "AUD-98417",
    time: "09:27:11",
    actor: "Rahul Sharma",
    actorType: "Student",
    action: "Requested charter revision",
    category: "Project",
    project: "Smart Mobility Research",
    result: "Review",
    ip: "Demo Network",
    risk: "Medium",
  },
  {
    id: "AUD-98416",
    time: "09:21:08",
    actor: "AI Review Agent",
    actorType: "AI Agent",
    action: "Similarity analysis completed",
    category: "AI",
    project: "Smart Mobility Research",
    result: "Flagged",
    ip: "Agent Runtime",
    risk: "High",
  },
  {
    id: "AUD-98415",
    time: "09:17:34",
    actor: "Meera Thomas",
    actorType: "Student",
    action: "Attempted confidential file access",
    category: "Access",
    project: "Secure Medical Imaging",
    result: "Blocked",
    ip: "Demo Network",
    risk: "High",
  },
  {
    id: "AUD-98414",
    time: "09:12:51",
    actor: "Nova Research Labs",
    actorType: "Sponsor",
    action: "Released milestone for review",
    category: "Escrow",
    project: "EdgeVision Research",
    result: "Success",
    ip: "Demo Network",
    risk: "Low",
  },
  {
    id: "AUD-98413",
    time: "09:08:26",
    actor: "System",
    actorType: "System",
    action: "Hash chain verification completed",
    category: "Ledger",
    project: "Digital Forensics Platform",
    result: "Verified",
    ip: "System",
    risk: "Low",
  },
  {
    id: "AUD-98412",
    time: "08:56:43",
    actor: "Dr. Rohan Kapoor",
    actorType: "Expert",
    action: "Submitted review decision",
    category: "Contribution",
    project: "AI Literature Review",
    result: "Success",
    ip: "Demo Network",
    risk: "Low",
  },
];

const categoryFilters = [
  "All events",
  "Project",
  "Contribution",
  "AI",
  "Security",
  "Access",
  "Escrow",
  "Ledger",
];

function ActorIcon({ type }) {
  if (type === "AI Agent") {
    return <Bot className="h-4 w-4" />;
  }

  if (type === "System") {
    return <ShieldCheck className="h-4 w-4" />;
  }

  if (type === "Sponsor") {
    return <FolderKanban className="h-4 w-4" />;
  }

  if (type === "Expert") {
    return <UserCheck className="h-4 w-4" />;
  }

  return <Users className="h-4 w-4" />;
}

function ActorBadge({ type }) {
  const styles = {
    Student: "bg-blue-50 text-blue-700",
    Expert: "bg-purple-50 text-purple-700",
    Sponsor: "bg-emerald-50 text-emerald-700",
    "AI Agent": "bg-indigo-50 text-indigo-700",
    System: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-semibold ${
        styles[type] || styles.System
      }`}
    >
      <ActorIcon type={type} />
      {type}
    </span>
  );
}

function ResultBadge({ result }) {
  const data = {
    Success: {
      style: "text-emerald-700",
      icon: CheckCircle2,
    },
    Verified: {
      style: "text-emerald-700",
      icon: ShieldCheck,
    },
    Logged: {
      style: "text-blue-700",
      icon: FileCheck2,
    },
    Review: {
      style: "text-amber-700",
      icon: Clock3,
    },
    Flagged: {
      style: "text-red-700",
      icon: AlertTriangle,
    },
    Blocked: {
      style: "text-red-700",
      icon: LockKeyhole,
    },
  };

  const item = data[result] || data.Logged;
  const Icon = item.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${item.style}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {result}
    </span>
  );
}

function RiskBadge({ risk }) {
  const styles = {
    Low: "bg-emerald-50 text-emerald-700",
    Medium: "bg-amber-50 text-amber-700",
    High: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
        styles[risk]
      }`}
    >
      {risk}
    </span>
  );
}

export default function AdminAuditPage() {
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
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium"
            >
              <FileCheck2 className="h-4 w-4" />
              Audit Trail
            </Link>

            <Link
              href="/admin/disputes"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <AlertTriangle className="h-4 w-4" />
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
                  Audit Trail
                </span>
              </div>

              <h1 className="mt-1 text-xl font-bold text-slate-950">
                Audit Trail
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
                <Search className="h-4 w-4 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search events..."
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
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <FileCheck2 className="h-3.5 w-3.5" />
                  Immutable activity record
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Platform Activity
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Review recorded actions from users, AI agents and system
                  processes across projects, contributions, access,
                  security and ledger operations.
                </p>
              </div>

              <Button variant="outline" className="gap-2">
                <FileCheck2 className="h-4 w-4" />
                Export Audit Report
              </Button>
            </div>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <AuditStat
              title="Events Today"
              value="3,842"
              detail="+12.6% from yesterday"
              icon={<Activity className="h-4 w-4" />}
            />

            <AuditStat
              title="User Actions"
              value="2,914"
              detail="Human activity"
              icon={<Users className="h-4 w-4" />}
              type="blue"
            />

            <AuditStat
              title="AI Actions"
              value="326"
              detail="Scoped agent activity"
              icon={<Bot className="h-4 w-4" />}
              type="purple"
            />

            <AuditStat
              title="Security Events"
              value="28"
              detail="5 require review"
              icon={<ShieldCheck className="h-4 w-4" />}
              type="amber"
            />

            <AuditStat
              title="Blocked Actions"
              value="07"
              detail="Access prevented"
              icon={<LockKeyhole className="h-4 w-4" />}
              type="red"
            />
          </section>

          {/* Audit integrity banner */}
          <section className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-900">
                    Audit recording operational
                  </p>

                  <p className="mt-1 text-xs leading-5 text-emerald-800">
                    Latest audit sequence has been verified. 12,486 demo
                    records are currently represented in the audit chain.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  Chain verified
                </span>

                <span className="text-xs text-emerald-700">
                  Last check: 2 min ago
                </span>
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((category, index) => (
                  <button
                    key={category}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold ${
                      index === 0
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <FilterButton label="Actor" />
                <FilterButton label="Result" />
                <FilterButton label="Risk" />
                <FilterButton label="Project" />

                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <Clock3 className="h-3.5 w-3.5" />
                  Today
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* Audit table */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-950">
                  Recorded Events
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Latest platform actions
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live recording
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1250px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left">
                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Event ID
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Time
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Actor
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Category
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Project
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Result
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Risk
                    </th>

                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {auditEvents.map((event) => (
                    <tr
                      key={event.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">
                          {event.id}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                          <Clock3 className="h-3.5 w-3.5 text-slate-400" />
                          {event.time}
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {event.actor}
                          </p>

                          <div className="mt-1">
                            <ActorBadge type={event.actorType} />
                          </div>
                        </div>
                      </td>

                      <td className="max-w-[230px] px-4 py-4">
                        <p className="text-sm font-medium text-slate-700">
                          {event.action}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-400">
                          {event.ip}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
                          {event.category}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <p className="max-w-[190px] text-xs font-medium text-slate-700">
                          {event.project}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <ResultBadge result={event.result} />
                      </td>

                      <td className="px-4 py-4">
                        <RiskBadge risk={event.risk} />
                      </td>

                      <td className="px-5 py-4">
                        <button
                          title="View event"
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
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
                <span className="font-semibold text-slate-700">10</span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  3,842
                </span>{" "}
                events
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

          {/* Event categories */}
          <section className="mt-6 grid gap-6 lg:grid-cols-3">
            <EventCategory
              icon={<Users className="h-5 w-5" />}
              title="Human Actions"
              value="2,914"
              description="User activity recorded"
              type="blue"
            />

            <EventCategory
              icon={<Bot className="h-5 w-5" />}
              title="AI Actions"
              value="326"
              description="Scoped AI agent activity"
              type="purple"
            />

            <EventCategory
              icon={<KeyRound className="h-5 w-5" />}
              title="Access Events"
              value="602"
              description="Access decisions recorded"
              type="green"
            />
          </section>

          {/* Security event */}
          <section className="mt-6 rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700">
                  <AlertTriangle className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Security events require attention
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    5 high-priority events are currently flagged for
                    administrator review, including blocked access and
                    similarity-analysis alerts.
                  </p>
                </div>
              </div>

              <Link href="/admin/disputes">
                <Button
                  variant="outline"
                  className="border-red-200 text-red-700 hover:bg-red-50"
                >
                  Review flagged events
                </Button>
              </Link>
            </div>
          </section>

          {/* Demo note */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

            <p>
              <span className="font-semibold text-slate-700">
                Demo data:
              </span>{" "}
              Audit events, actors, timestamps, risk levels and verification
              states are synthetic data for the hackathon prototype. The UI
              represents the intended audit experience; actual append-only
              logging, hash chaining and verification depend on the backend
              implementation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function AuditStat({ title, value, detail, icon, type = "default" }) {
  const styles = {
    default: "border-slate-200 bg-white text-slate-500",
    blue: "border-blue-200 bg-blue-50/60 text-blue-700",
    purple: "border-purple-200 bg-purple-50/60 text-purple-700",
    amber: "border-amber-200 bg-amber-50/60 text-amber-700",
    red: "border-red-200 bg-red-50/60 text-red-700",
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

function EventCategory({
  icon,
  title,
  value,
  description,
  type,
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-700",
    purple: "bg-purple-50 text-purple-700",
    green: "bg-emerald-50 text-emerald-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles[type]}`}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-950">
            {title}
          </h3>

          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </div>

      <p className="mt-5 text-2xl font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}