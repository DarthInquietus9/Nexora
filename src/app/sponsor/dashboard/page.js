"use client";

import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  LockKeyhole,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "NX-DR-026",
    title: "Low-cost Diabetic Retinopathy Detection",
    category: "Healthcare AI",
    status: "Active",
    progress: 68,
    team: 4,
    funding: "₹1,00,000",
    milestone: "Model Optimization",
    milestoneStatus: "In Progress",
  },
  {
    id: "NX-ED-019",
    title: "Edge AI for Medical Imaging",
    category: "Computer Vision",
    status: "Matching",
    progress: 32,
    team: 0,
    funding: "₹75,000",
    milestone: "Candidate Matching",
    milestoneStatus: "Review",
  },
  {
    id: "NX-RS-014",
    title: "Research Data Quality Framework",
    category: "Data Research",
    status: "Completed",
    progress: 100,
    team: 5,
    funding: "₹50,000",
    milestone: "Final Deliverable",
    milestoneStatus: "Accepted",
  },
];

const activities = [
  {
    title: "Milestone submitted for review",
    project: "Low-cost Diabetic Retinopathy Detection",
    time: "18 min ago",
    type: "review",
  },
  {
    title: "AI scoping completed",
    project: "Edge AI for Medical Imaging",
    time: "1 hr ago",
    type: "ai",
  },
  {
    title: "New candidate matched",
    project: "Edge AI for Medical Imaging",
    time: "2 hrs ago",
    type: "match",
  },
  {
    title: "Final deliverable accepted",
    project: "Research Data Quality Framework",
    time: "Yesterday",
    type: "success",
  },
];

const actionItems = [
  {
    title: "Review milestone submission",
    description:
      "Model Optimization milestone is ready for sponsor acceptance.",
    project: "NX-DR-026",
    priority: "High",
  },
  {
    title: "Review candidate matches",
    description:
      "Three researchers have been recommended for your new project.",
    project: "NX-ED-019",
    priority: "Medium",
  },
  {
    title: "Approve project charter",
    description:
      "Updated charter requires your confirmation before work continues.",
    project: "NX-RS-014",
    priority: "Medium",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-emerald-50 text-emerald-700",
    Matching: "bg-blue-50 text-blue-700",
    Completed: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}

function ActivityIcon({ type }) {
  if (type === "ai") {
    return (
      <div className="rounded-lg bg-violet-50 p-2 text-violet-700">
        <Bot className="h-4 w-4" />
      </div>
    );
  }

  if (type === "match") {
    return (
      <div className="rounded-lg bg-blue-50 p-2 text-blue-700">
        <Users className="h-4 w-4" />
      </div>
    );
  }

  if (type === "success") {
    return (
      <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
        <CheckCircle2 className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-amber-50 p-2 text-amber-700">
      <FileCheck2 className="h-4 w-4" />
    </div>
  );
}

export default function SponsorDashboardPage() {
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
            Sponsor Workspace
          </p>

          <nav className="mt-3 space-y-1">
            {[
              ["Dashboard", "/sponsor/dashboard"],
              ["Create Project", "/sponsor/create-project"],
              ["Projects", "/sponsor/project"],
              ["AI Scoping", "/sponsor/ai-scoping"],
              ["Candidate Matching", "/sponsor/matching"],
              ["Milestones", "/sponsor/milestones"],
              ["Escrow", "/sponsor/escrow"],
              ["Deliverables", "/sponsor/deliverables"],
            ].map(([label, href]) => {
              const active = label === "Dashboard";

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

          {/* Security */}
          <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />

              <div>
                <p className="text-xs font-bold text-emerald-900">
                  Workspace protected
                </p>

                <p className="mt-1 text-[10px] leading-4 text-emerald-800">
                  Access controls and project audit logging are enabled.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">
              DR
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">
                Dr. Rohan Mehta
              </p>

              <p className="truncate text-xs text-slate-500">Project Sponsor</p>
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
            <p className="text-xs text-slate-500">Sponsor Portal</p>

            <h1 className="text-sm font-bold text-slate-900">
              Sponsor Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden gap-2 text-xs sm:flex"
            >
              <ShieldCheck className="h-4 w-4" />
              Security Status
            </Button>

            <Button className="gap-2 bg-blue-900 text-xs hover:bg-blue-800">
              <Plus className="h-4 w-4" />
              Create Project
            </Button>

            <div className="hidden h-7 w-px bg-slate-200 md:block" />

            <div className="hidden items-center gap-2 md:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">
                DR
              </div>

              <span className="text-sm font-medium text-slate-700">
                Dr. Rohan Mehta
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
          {/* Page Header */}
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                <span>Sponsor</span>
                <span>/</span>
                <span className="font-medium text-slate-700">Dashboard</span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Good morning, Dr. Mehta
              </h2>

              <p className="mt-1 max-w-2xl text-sm text-slate-500">
                Manage research projects, teams, milestones, funding, and
                deliverables from one secure workspace.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-sm">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="font-medium text-slate-600">
                All systems operational
              </span>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Active Projects",
                value: "3",
                helper: "2 requiring action",
                icon: BriefcaseBusiness,
              },
              {
                label: "Total Funding",
                value: "₹2.25L",
                helper: "Across active projects",
                icon: WalletCards,
              },
              {
                label: "Team Members",
                value: "9",
                helper: "Verified contributors",
                icon: Users,
              },
              {
                label: "Pending Reviews",
                value: "4",
                helper: "Requires your attention",
                icon: Clock3,
              },
            ].map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        {metric.label}
                      </p>

                      <p className="mt-2 text-2xl font-bold text-slate-950">
                        {metric.value}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-slate-500">
                    {metric.helper}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Main Grid */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* Projects */}
            <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 p-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Your projects
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Monitor project progress and research activity.
                  </p>
                </div>

                <a
                  href="/sponsor/project"
                  className="flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900"
                >
                  View all
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="divide-y divide-slate-100">
                {projects.map((project) => (
                  <div key={project.id} className="p-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                          <BriefcaseBusiness className="h-5 w-5" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-sm font-bold text-slate-900">
                              {project.title}
                            </h4>

                            <StatusBadge status={project.status} />
                          </div>

                          <p className="mt-1 text-xs text-slate-500">
                            {project.id} · {project.category}
                          </p>
                        </div>
                      </div>

                      <button className="flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900">
                        Open
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                      <div>
                        <div className="flex justify-between">
                          <span className="text-[11px] text-slate-500">
                            Project progress
                          </span>

                          <span className="text-[11px] font-bold text-slate-700">
                            {project.progress}%
                          </span>
                        </div>

                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-blue-800"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                          Team
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-800">
                          {project.team} members
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                          Funding
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-800">
                          {project.funding}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2 rounded-lg bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-slate-500" />

                        <div>
                          <p className="text-[10px] uppercase tracking-wide text-slate-400">
                            Current milestone
                          </p>

                          <p className="text-xs font-semibold text-slate-700">
                            {project.milestone}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-semibold text-blue-700">
                        {project.milestoneStatus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Action Items */}
            <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Needs your attention
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Actions waiting for sponsor review.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {actionItems.map((item) => (
                  <div key={item.title} className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${
                          item.priority === "High"
                            ? "bg-red-50 text-red-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-slate-400">
                        {item.project}
                      </span>

                      <button className="text-xs font-semibold text-blue-700 hover:text-blue-900">
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Lower Grid */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* AI Scoping */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="rounded-lg bg-violet-50 p-2.5 text-violet-700">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      AI project scoping
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      AI-generated milestones and research requirements.
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  1 Ready
                </span>
              </div>

              <div className="mt-5 rounded-xl border border-violet-100 bg-violet-50 p-4">
                <div className="flex items-start gap-3">
                  <Bot className="mt-0.5 h-5 w-5 shrink-0 text-violet-700" />

                  <div>
                    <p className="text-sm font-bold text-violet-900">
                      Edge AI for Medical Imaging
                    </p>

                    <p className="mt-1 text-xs leading-5 text-violet-800">
                      AI has proposed 4 milestones, 6 research tasks, and
                      recommended expertise requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-slate-200 p-3 text-center">
                  <p className="text-lg font-bold text-slate-900">4</p>
                  <p className="text-[10px] text-slate-500">Milestones</p>
                </div>

                <div className="rounded-lg border border-slate-200 p-3 text-center">
                  <p className="text-lg font-bold text-slate-900">6</p>
                  <p className="text-[10px] text-slate-500">Tasks</p>
                </div>

                <div className="rounded-lg border border-slate-200 p-3 text-center">
                  <p className="text-lg font-bold text-slate-900">8</p>
                  <p className="text-[10px] text-slate-500">Skills</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-5 w-full gap-2 text-xs"
              >
                Review AI Scope
                <ArrowRight className="h-4 w-4" />
              </Button>
            </section>

            {/* Funding */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="rounded-lg bg-emerald-50 p-2.5 text-emerald-700">
                    <WalletCards className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Funding overview
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Simulated escrow across active projects.
                    </p>
                  </div>
                </div>

                <LockKeyhole className="h-5 w-5 text-emerald-600" />
              </div>

              <div className="mt-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      Total secured
                    </p>

                    <p className="mt-1 text-2xl font-bold text-slate-950">
                      ₹1,75,000
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-emerald-700">
                    78% allocated
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[78%] rounded-full bg-emerald-600" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Released
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    ₹85,000
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Remaining
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    ₹90,000
                  </p>
                </div>
              </div>

              <a
                href="/sponsor/escrow"
                className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                View escrow
                <ArrowRight className="h-4 w-4" />
              </a>
            </section>
          </div>

          {/* Activity */}
          <section className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Recent activity
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Latest events across your research projects.
                </p>
              </div>

              <a
                href="/sponsor/project"
                className="flex items-center gap-1 text-xs font-semibold text-blue-700"
              >
                View activity
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="divide-y divide-slate-100">
              {activities.map((activity) => (
                <div
                  key={`${activity.title}-${activity.time}`}
                  className="flex items-center gap-4 p-5"
                >
                  <ActivityIcon type={activity.type} />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      {activity.title}
                    </p>

                    <p className="mt-1 truncate text-xs text-slate-500">
                      {activity.project}
                    </p>
                  </div>

                  <span className="shrink-0 text-[11px] text-slate-400">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Security Notice */}
          <section className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

            <div>
              <h3 className="text-sm font-bold text-blue-900">
                Sponsor security controls
              </h3>

              <p className="mt-1 max-w-4xl text-xs leading-5 text-blue-800">
                Confidential project information should remain access
                controlled until the relevant team members accept the project
                charter. Project activity, contribution records, AI actions,
                milestone decisions and reward events are designed to be
                auditable.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Access Control",
                  "Audit Trail",
                  "AI Scope",
                  "Escrow",
                  "Contribution Integrity",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-blue-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Demo Notice */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />

            <div>
              <p className="text-xs font-semibold text-slate-700">
                Demo environment
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                Project counts, funding values, candidates, milestone states
                and activity shown here are synthetic frontend data. Backend
                integration will replace these values with live project data.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}