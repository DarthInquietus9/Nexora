"use client";

import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  FileText,
  FolderKanban,
  Hash,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Aarav Mehta",
    role: "Student · ML Research",
    initials: "AM",
    status: "Online",
  },
  {
    name: "Priya Nair",
    role: "Expert · Medical Imaging",
    initials: "PN",
    status: "Online",
  },
  {
    name: "Rahul Sharma",
    role: "Student · Edge Systems",
    initials: "RS",
    status: "Away",
  },
  {
    name: "Dr. Kavya Menon",
    role: "Expert · Clinical Research",
    initials: "KM",
    status: "Online",
  },
];

const activity = [
  {
    actor: "Aarav Mehta",
    action: "submitted a research methodology",
    time: "12 min ago",
    type: "human",
  },
  {
    actor: "AI Scoping Agent",
    action: "updated milestone recommendations",
    time: "28 min ago",
    type: "ai",
  },
  {
    actor: "Priya Nair",
    action: "reviewed the literature analysis",
    time: "46 min ago",
    type: "expert",
  },
  {
    actor: "System",
    action: "completed contribution integrity check",
    time: "1 hr ago",
    type: "system",
  },
];

const quickLinks = [
  {
    title: "Team",
    description: "Members, roles and access",
    href: "/workspace/team",
    icon: Users,
  },
  {
    title: "AI Agent",
    description: "Scope, actions and owner",
    href: "/workspace/ai-agent",
    icon: Bot,
  },
  {
    title: "Contributions",
    description: "Research work and credits",
    href: "/workspace/contributions",
    icon: FileCheck2,
  },
  {
    title: "Integrity",
    description: "Verification and similarity",
    href: "/workspace/integrity",
    icon: ShieldCheck,
  },
  {
    title: "Charter",
    description: "Accepted project terms",
    href: "/workspace/charter",
    icon: FileText,
  },
  {
    title: "Milestones",
    description: "Progress and deliverables",
    href: "/workspace/milestones",
    icon: Target,
  },
  {
    title: "Rewards",
    description: "Credits and reward split",
    href: "/workspace/rewards",
    icon: CircleDollarSign,
  },
  {
    title: "Audit Trail",
    description: "Recorded project activity",
    href: "/workspace/audit",
    icon: Hash,
  },
];

function StatusBadge({ children, type = "green" }) {
  const styles = {
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    red: "bg-red-50 text-red-700 border-red-200",
    slate: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  );
}

function ActivityIcon({ type }) {
  const data = {
    human: {
      icon: Users,
      style: "bg-blue-50 text-blue-700",
    },
    ai: {
      icon: Bot,
      style: "bg-purple-50 text-purple-700",
    },
    expert: {
      icon: FileCheck2,
      style: "bg-emerald-50 text-emerald-700",
    },
    system: {
      icon: ShieldCheck,
      style: "bg-slate-100 text-slate-700",
    },
  };

  const item = data[type] || data.system;
  const Icon = item.icon;

  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.style}`}
    >
      <Icon className="h-4 w-4" />
    </div>
  );
}

export default function WorkspaceOverviewPage() {
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

        <div className="border-b border-slate-800 px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Current Project
          </p>

          <div className="rounded-xl bg-slate-900 p-3">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                <FolderKanban className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  EdgeVision Research
                </p>

                <p className="mt-1 text-[10px] text-slate-500">
                  NX-042
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Workspace
          </p>

          <nav className="space-y-1">
            <Link
              href="/workspace/overview"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium"
            >
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </Link>

            <Link
              href="/workspace/team"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <Users className="h-4 w-4" />
              Team
            </Link>

            <Link
              href="/workspace/ai-agent"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <Bot className="h-4 w-4" />
              AI Agent
            </Link>

            <Link
              href="/workspace/contributions"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <FileCheck2 className="h-4 w-4" />
              Contributions
            </Link>

            <Link
              href="/workspace/integrity"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <ShieldCheck className="h-4 w-4" />
              Integrity
            </Link>

            <Link
              href="/workspace/charter"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <FileText className="h-4 w-4" />
              Charter
            </Link>

            <Link
              href="/workspace/milestones"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <Target className="h-4 w-4" />
              Milestones
            </Link>

            <Link
              href="/workspace/rewards"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <CircleDollarSign className="h-4 w-4" />
              Rewards
            </Link>

            <Link
              href="/workspace/audit"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <Hash className="h-4 w-4" />
              Audit Trail
            </Link>
          </nav>
        </div>

        <div className="mt-auto border-t border-slate-800 p-4">
          <div className="mb-3 rounded-xl bg-slate-900 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold">
                AM
              </div>

              <div>
                <p className="text-sm font-semibold">Aarav Mehta</p>
                <p className="text-xs text-slate-500">
                  Student Researcher
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/student"
            className="mb-2 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <LayoutDashboard className="h-4 w-4" />
            Student Dashboard
          </Link>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
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
                <Link
                  href="/student"
                  className="hover:text-slate-900"
                >
                  Student
                </Link>

                <ChevronRight className="h-3.5 w-3.5" />

                <span className="font-medium text-slate-700">
                  Workspace
                </span>
              </div>

              <h1 className="mt-1 text-xl font-bold text-slate-950">
                EdgeVision Research
              </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 sm:flex">
                <MessageSquare className="h-4 w-4" />
                Team Chat
              </button>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                AM
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] p-5 sm:p-8">
          {/* Project hero */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">
                    NX-042
                  </span>

                  <StatusBadge type="green">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </StatusBadge>

                  <StatusBadge type="blue">
                    Funded Project
                  </StatusBadge>

                  <StatusBadge type="slate">
                    Confidential
                  </StatusBadge>
                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Low-cost Diabetic Retinopathy Detection on Edge Devices
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Develop and validate a lightweight computer vision approach
                  for detecting diabetic retinopathy from fundus images while
                  targeting practical deployment on resource-constrained edge
                  devices.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <FolderKanban className="h-3.5 w-3.5" />
                    Nova Research Labs
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Due Dec 18, 2026
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    6 contributors
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Discuss
                </Button>

                <Button className="gap-2">
                  Open Workspace
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Progress */}
          <section className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-950">
                    Project Progress
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Current milestone: Edge inference optimization
                  </p>
                </div>

                <span className="text-xl font-bold text-slate-950">
                  68%
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-700"
                  style={{ width: "68%" }}
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                <Milestone
                  number="01"
                  title="Dataset Preparation"
                  status="Complete"
                />

                <Milestone
                  number="02"
                  title="Model Development"
                  status="Complete"
                />

                <Milestone
                  number="03"
                  title="Edge Optimization"
                  status="Current"
                />

                <Milestone
                  number="04"
                  title="Validation"
                  status="Upcoming"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Wallet className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Project Funding
                  </h3>

                  <p className="text-xs text-slate-500">
                    Simulated escrow
                  </p>
                </div>
              </div>

              <p className="mt-5 text-2xl font-bold text-slate-950">
                ₹1,00,000
              </p>

              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  In escrow
                </span>

                <span className="font-semibold text-emerald-700">
                  ₹65,000
                </span>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-emerald-600"
                  style={{ width: "65%" }}
                />
              </div>

              <p className="mt-3 text-[11px] leading-5 text-slate-400">
                Funding information is represented as synthetic demo data.
              </p>
            </div>
          </section>

          {/* Security / AI / Charter status */}
          <section className="mt-6 grid gap-4 md:grid-cols-3">
            <StatusPanel
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Integrity"
              value="Verified"
              description="Latest contribution verification passed"
              type="green"
              href="/workspace/integrity"
            />

            <StatusPanel
              icon={<Bot className="h-5 w-5" />}
              title="AI Agent"
              value="Scoped & Active"
              description="Human owner: Aarav Mehta"
              type="blue"
              href="/workspace/ai-agent"
            />

            <StatusPanel
              icon={<FileText className="h-5 w-5" />}
              title="Project Charter"
              value="Version 2.1 Accepted"
              description="All current members have accepted"
              type="purple"
              href="/workspace/charter"
            />
          </section>

          {/* Main content */}
          <section className="mt-6 grid gap-6 xl:grid-cols-3">
            {/* Recent activity */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
              <div className="flex items-center justify-between border-b border-slate-200 p-6">
                <div>
                  <h3 className="font-semibold text-slate-950">
                    Recent Activity
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Human, AI and system actions
                  </p>
                </div>

                <Link
                  href="/workspace/audit"
                  className="text-xs font-semibold text-blue-700 hover:text-blue-800"
                >
                  View audit trail
                </Link>
              </div>

              <div className="divide-y divide-slate-100">
                {activity.map((item, index) => (
                  <div
                    key={`${item.actor}-${index}`}
                    className="flex items-start gap-4 p-5"
                  >
                    <ActivityIcon type={item.type} />

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold text-slate-900">
                          {item.actor}
                        </span>{" "}
                        {item.action}
                      </p>

                      <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
                        <Clock3 className="h-3 w-3" />
                        {item.time}
                      </div>
                    </div>

                    <button className="hidden h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 sm:flex">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 p-4">
                <Link
                  href="/workspace/contributions"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  View all contributions
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Team */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 p-6">
                <div>
                  <h3 className="font-semibold text-slate-950">
                    Project Team
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    6 contributors
                  </p>
                </div>

                <Link
                  href="/workspace/team"
                  className="text-xs font-semibold text-blue-700"
                >
                  View team
                </Link>
              </div>

              <div className="divide-y divide-slate-100">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-3 p-4"
                  >
                    <div className="relative">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                        {member.initials}
                      </div>

                      <span
                        className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white ${
                          member.status === "Online"
                            ? "bg-emerald-500"
                            : "bg-amber-400"
                        }`}
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {member.name}
                      </p>

                      <p className="truncate text-[11px] text-slate-500">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 p-4">
                <Link
                  href="/workspace/team"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Manage members
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Quick navigation */}
          <section className="mt-6">
            <div className="mb-4">
              <h3 className="font-semibold text-slate-950">
                Workspace Navigation
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Access the main collaboration and governance areas.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                    </div>

                    <h4 className="mt-4 text-sm font-semibold text-slate-950">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Security notice */}
          <section className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/60 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <LockKeyhole className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-950">
                  Project-scoped access
                </h3>

                <p className="mt-1 max-w-3xl text-xs leading-5 text-blue-900/75">
                  Confidential project information, AI access and
                  contribution records should remain limited to approved
                  project participants. AI activity is represented with a
                  named human owner and project-scoped permissions.
                </p>
              </div>
            </div>
          </section>

          {/* Demo note */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
            <span className="font-semibold text-slate-700">
              Demo data:
            </span>{" "}
            Project members, progress, funding, AI activity, integrity state
            and timestamps are synthetic data for the hackathon prototype.
            Actual access control, escrow, ledger verification and AI
            enforcement depend on the implemented backend.
          </div>
        </div>
      </main>
    </div>
  );
}

function Milestone({ number, title, status }) {
  const isComplete = status === "Complete";
  const isCurrent = status === "Current";

  return (
    <div className="rounded-xl border border-slate-200 p-3">
      <div className="flex items-center justify-between">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold ${
            isComplete
              ? "bg-emerald-50 text-emerald-700"
              : isCurrent
              ? "bg-blue-50 text-blue-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {number}
        </span>

        {isComplete && (
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
        )}

        {isCurrent && (
          <span className="h-2 w-2 rounded-full bg-blue-600" />
        )}
      </div>

      <p className="mt-3 text-xs font-semibold leading-4 text-slate-800">
        {title}
      </p>

      <p
        className={`mt-1 text-[10px] font-medium ${
          isComplete
            ? "text-emerald-600"
            : isCurrent
            ? "text-blue-600"
            : "text-slate-400"
        }`}
      >
        {status}
      </p>
    </div>
  );
}

function StatusPanel({
  icon,
  title,
  value,
  description,
  type,
  href,
}) {
  const styles = {
    green: {
      icon: "bg-emerald-50 text-emerald-700",
      value: "text-emerald-700",
    },
    blue: {
      icon: "bg-blue-50 text-blue-700",
      value: "text-blue-700",
    },
    purple: {
      icon: "bg-purple-50 text-purple-700",
      value: "text-purple-700",
    },
  };

  const style = styles[type];

  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${style.icon}`}
        >
          {icon}
        </div>

        <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-600" />
      </div>

      <p className="mt-4 text-xs font-medium text-slate-500">
        {title}
      </p>

      <p className={`mt-1 text-sm font-bold ${style.value}`}>
        {value}
      </p>

      <p className="mt-1 text-[11px] leading-5 text-slate-500">
        {description}
      </p>
    </Link>
  );
}