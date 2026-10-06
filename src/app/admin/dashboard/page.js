"use client";

import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileSearch,
  FolderKanban,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Scale,
  Search,
  ShieldCheck,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const stats = [
  {
    label: "Total Users",
    value: "1,284",
    detail: "+8.4% this month",
    icon: Users,
    tone: "blue",
  },
  {
    label: "Active Projects",
    value: "86",
    detail: "14 awaiting matching",
    icon: FolderKanban,
    tone: "indigo",
  },
  {
    label: "Escrow Value",
    value: "₹18.6L",
    detail: "₹4.2L pending release",
    icon: Wallet,
    tone: "green",
  },
  {
    label: "Open Disputes",
    value: "07",
    detail: "2 require attention",
    icon: Scale,
    tone: "amber",
  },
];

const roleBreakdown = [
  { label: "Students", value: "842", percentage: 66 },
  { label: "Experts", value: "214", percentage: 17 },
  { label: "Sponsors", value: "126", percentage: 10 },
  { label: "Admins", value: "12", percentage: 1 },
  { label: "Other / Pending", value: "90", percentage: 6 },
];

const securityAlerts = [
  {
    title: "Similarity flag detected",
    description: "Potentially copied content found in Project NX-042.",
    severity: "High",
    time: "18 min ago",
    icon: FileSearch,
  },
  {
    title: "Unusual access attempt",
    description: "Confidential project content accessed outside expected scope.",
    severity: "Medium",
    time: "42 min ago",
    icon: LockKeyhole,
  },
  {
    title: "Ledger verification warning",
    description: "A demo ledger record requires integrity verification.",
    severity: "Medium",
    time: "1 hr ago",
    icon: ShieldCheck,
  },
];

const auditEvents = [
  {
    actor: "Aarav Mehta",
    action: "Accepted project charter",
    project: "EdgeVision Research",
    time: "09:42 AM",
    status: "Success",
  },
  {
    actor: "AI Scoping Agent",
    action: "Generated milestone breakdown",
    project: "Secure Document Intelligence",
    time: "09:31 AM",
    status: "Logged",
  },
  {
    actor: "Priya Nair",
    action: "Submitted contribution",
    project: "Climate Data Analysis",
    time: "09:18 AM",
    status: "Success",
  },
  {
    actor: "System",
    action: "Integrity check completed",
    project: "Digital Health Analytics",
    time: "08:56 AM",
    status: "Success",
  },
  {
    actor: "Rahul Sharma",
    action: "Requested charter revision",
    project: "Smart Mobility Research",
    time: "08:41 AM",
    status: "Review",
  },
];

const quickActions = [
  {
    title: "Manage Users",
    description: "Review roles, verification and access",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Manage Projects",
    description: "Review active research projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    title: "Audit Trail",
    description: "Inspect platform activity",
    href: "/admin/audit",
    icon: FileSearch,
  },
  {
    title: "Disputes",
    description: "Review unresolved disputes",
    href: "/admin/disputes",
    icon: Scale,
  },
  {
    title: "Ledger",
    description: "Verify contribution integrity",
    href: "/admin/ledger",
    icon: ShieldCheck,
  },
];

function StatCard({ item }) {
  const Icon = item.icon;

  const iconStyles = {
    blue: "bg-blue-50 text-blue-700",
    indigo: "bg-indigo-50 text-indigo-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{item.label}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
            {item.value}
          </h3>
          <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconStyles[item.tone]}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function SeverityBadge({ severity }) {
  const styles = {
    High: "border-red-200 bg-red-50 text-red-700",
    Medium: "border-amber-200 bg-amber-50 text-amber-700",
    Low: "border-slate-200 bg-slate-50 text-slate-600",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles[severity]}`}
    >
      {severity}
    </span>
  );
}

export default function AdminDashboard() {
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
          <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Administration
          </div>

          <nav className="space-y-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              href="/admin/users"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <Users className="h-4 w-4" />
              Users
            </Link>

            <Link
              href="/admin/projects"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <FolderKanban className="h-4 w-4" />
              Projects
            </Link>

            <Link
              href="/admin/audit"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <FileSearch className="h-4 w-4" />
              Audit Trail
            </Link>

            <Link
              href="/admin/disputes"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <Scale className="h-4 w-4" />
              Disputes
            </Link>

            <Link
              href="/admin/ledger"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
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

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Admin Demo</p>
                <p className="truncate text-xs text-slate-500">
                  Platform Administrator
                </p>
              </div>
            </div>
          </div>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>Administration</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="font-medium text-slate-700">Dashboard</span>
              </div>

              <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-950">
                Platform Overview
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:flex">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search platform..."
                  className="w-36 bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                AD
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] p-5 sm:p-8">
          {/* Welcome */}
          <section className="mb-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <Activity className="h-3.5 w-3.5" />
                  Platform status: Operational
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Good morning, Admin
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Monitor users, research projects, security events,
                  contribution integrity and platform activity from one place.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link href="/admin/audit">
                  <Button variant="outline" className="gap-2">
                    <FileSearch className="h-4 w-4" />
                    View Audit
                  </Button>
                </Link>

                <Link href="/admin/users">
                  <Button className="gap-2">
                    <Users className="h-4 w-4" />
                    Manage Users
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <StatCard key={item.label} item={item} />
            ))}
          </section>

          {/* Main grid */}
          <section className="mt-6 grid gap-6 xl:grid-cols-3">
            {/* User breakdown */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-950">
                    User Distribution
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Platform users by role
                  </p>
                </div>

                <Users className="h-5 w-5 text-slate-400" />
              </div>

              <div className="mt-6 space-y-5">
                {roleBreakdown.map((role) => (
                  <div key={role.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">
                        {role.label}
                      </span>

                      <span className="text-slate-500">
                        {role.value} · {role.percentage}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-slate-800"
                        style={{ width: `${role.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security status */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-950">
                    Security & Integrity
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Recent events requiring platform attention
                  </p>
                </div>

                <Link
                  href="/admin/audit"
                  className="text-xs font-semibold text-blue-700 hover:text-blue-800"
                >
                  View all
                </Link>
              </div>

              <div className="mt-5 space-y-3">
                {securityAlerts.map((alert) => {
                  const Icon = alert.icon;

                  return (
                    <div
                      key={alert.title}
                      className="flex items-start gap-4 rounded-xl border border-slate-200 p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-semibold text-slate-900">
                            {alert.title}
                          </p>
                          <SeverityBadge severity={alert.severity} />
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {alert.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-[11px] text-slate-400">
                        {alert.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Platform health */}
          <section className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Ledger Integrity
                  </p>
                  <p className="text-xs text-slate-500">
                    Contribution chain status
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-emerald-700">
                    Verified
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    12,486 records checked
                  </p>
                </div>

                <CheckCircle2 className="h-7 w-7 text-emerald-600" />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Bot className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    AI Agent Activity
                  </p>
                  <p className="text-xs text-slate-500">
                    Scoped agent actions
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold text-slate-950">326</p>
                    <p className="mt-1 text-xs text-slate-500">
                      actions logged today
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    Logged
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <CircleDollarSign className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Escrow Monitoring
                  </p>
                  <p className="text-xs text-slate-500">
                    Simulated funding state
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-950">
                    42 active
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    7 awaiting milestone acceptance
                  </p>
                </div>

                <Wallet className="h-7 w-7 text-amber-600" />
              </div>
            </div>
          </section>

          {/* Audit events */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-950">
                  Recent Audit Events
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Latest platform actions and recorded events
                </p>
              </div>

              <Link
                href="/admin/audit"
                className="flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800"
              >
                Open audit trail
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70 text-left">
                    <th className="px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Actor
                    </th>
                    <th className="px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                    <th className="px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Project
                    </th>
                    <th className="px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Time
                    </th>
                    <th className="px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {auditEvents.map((event) => (
                    <tr
                      key={`${event.actor}-${event.time}`}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {event.actor}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {event.action}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {event.project}
                      </td>

                      <td className="px-6 py-4 text-xs text-slate-500">
                        {event.time}
                      </td>

                      <td className="px-6 py-4">
                        {event.status === "Success" ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Success
                          </span>
                        ) : event.status === "Review" ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            Review
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                            <Activity className="h-3.5 w-3.5" />
                            Logged
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick actions */}
          <section className="mt-6">
            <div className="mb-4">
              <h3 className="font-semibold text-slate-950">Quick Actions</h3>
              <p className="mt-1 text-xs text-slate-500">
                Access core administration modules
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-blue-50 group-hover:text-blue-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                    </div>

                    <h4 className="mt-4 text-sm font-semibold text-slate-900">
                      {action.title}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {action.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Demo disclaimer */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <p>
              <span className="font-semibold text-slate-700">Demo data:</span>{" "}
              The users, project counts, escrow values, security alerts and
              audit events shown here are synthetic data for the hackathon
              prototype. Actual enforcement, ledger verification, access
              control and escrow behavior depend on the implemented backend.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}