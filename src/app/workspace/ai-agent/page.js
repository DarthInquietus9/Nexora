"use client";

import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FolderKanban,
  History,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  MoreHorizontal,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const agent = {
  name: "AI Scoping Agent",
  status: "Active",
  owner: "Aarav Mehta",
  ownerRole: "Project Lead",
  model: "Approved Research Model v1.4",
  project: "EdgeVision Research",
  projectId: "NX-042",
  access: "Project-scoped",
};

const permissions = [
  {
    name: "Project Brief",
    description: "Accepted project information",
    status: "Allowed",
    allowed: true,
  },
  {
    name: "Accepted Charter",
    description: "Current approved project charter",
    status: "Allowed",
    allowed: true,
  },
  {
    name: "Approved Literature",
    description: "Research sources approved for the project",
    status: "Allowed",
    allowed: true,
  },
  {
    name: "Approved Dataset",
    description: "Project-approved research data",
    status: "Allowed",
    allowed: true,
  },
  {
    name: "Unrelated Projects",
    description: "Information outside this workspace",
    status: "Blocked",
    allowed: false,
  },
  {
    name: "Personal / Sensitive Data",
    description: "Unapproved personal information",
    status: "Blocked",
    allowed: false,
  },
];

const recentActions = [
  {
    time: "10:42 AM",
    action: "Suggested milestone breakdown",
    type: "AI action",
    status: "Approved",
    icon: Sparkles,
  },
  {
    time: "10:18 AM",
    action: "Generated literature synthesis",
    type: "AI action",
    status: "Reviewed",
    icon: FileCheck2,
  },
  {
    time: "09:56 AM",
    action: "Similarity scan requested",
    type: "AI action",
    status: "Completed",
    icon: Search,
  },
  {
    time: "09:31 AM",
    action: "Milestone recommendation reviewed",
    type: "Human review",
    status: "Approved",
    icon: UserCheck,
  },
  {
    time: "Yesterday",
    action: "Agent access scope confirmed",
    type: "Human approval",
    status: "Approved",
    icon: ShieldCheck,
  },
];

const tasks = [
  {
    title: "Milestone Scoping",
    description: "Break the accepted project charter into actionable milestones.",
    status: "Completed",
    progress: 100,
  },
  {
    title: "Literature Synthesis",
    description: "Summarize approved research sources for the team.",
    status: "In Progress",
    progress: 72,
  },
  {
    title: "Similarity Analysis",
    description: "Assist with detecting potentially copied material.",
    status: "Queued",
    progress: 0,
  },
];

export default function WorkspaceAIAgentPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          <div className="border-b border-slate-200 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#12345B] text-white">
                <Network className="h-5 w-5" />
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight text-slate-900">
                  Nex.Res
                </p>
                <p className="text-xs text-slate-500">Research Workspace</p>
              </div>
            </div>
          </div>

          <div className="px-4 py-5">
            <div className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Workspace
            </div>

            <nav className="space-y-1">
              <SidebarItem
                icon={LayoutDashboard}
                label="Overview"
                href="/workspace/overview"
              />
              <SidebarItem
                icon={Users}
                label="Team"
                href="/workspace/team"
              />
              <SidebarItem
                icon={Bot}
                label="AI Agent"
                active
                href="/workspace/ai-agent"
              />
              <SidebarItem
                icon={Activity}
                label="Contributions"
                href="/workspace/contributions"
              />
              <SidebarItem
                icon={ShieldCheck}
                label="Integrity"
                href="/workspace/integrity"
              />
              <SidebarItem
                icon={FileCheck2}
                label="Charter"
                href="/workspace/charter"
              />
              <SidebarItem
                icon={Clock3}
                label="Milestones"
                href="/workspace/milestones"
              />
            </nav>

            <div className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Project
            </div>

            <nav className="space-y-1">
              <SidebarItem
                icon={Sparkles}
                label="Rewards"
                href="/workspace/rewards"
              />
              <SidebarItem
                icon={History}
                label="Audit Trail"
                href="/workspace/audit-trail"
              />
            </nav>
          </div>

          <div className="mt-auto border-t border-slate-200 p-4">
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12345B] text-sm font-semibold text-white">
                  AM
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    Aarav Mehta
                  </p>
                  <p className="text-xs text-slate-500">Project Lead</p>
                </div>
              </div>

              <button className="mt-3 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-900">
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
              <div className="flex min-w-0 items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>Workspace</span>
                    <ChevronRight className="h-3 w-3" />
                    <span>AI Agent</span>
                  </div>

                  <h1 className="truncate text-xl font-bold text-slate-900">
                    AI Agent
                  </h1>
                </div>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-right">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Project
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    NX-042
                  </p>
                </div>

                <Button variant="outline" size="sm">
                  <MoreHorizontal className="mr-2 h-4 w-4" />
                  Actions
                </Button>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-6 p-5 lg:p-8">
            {/* Hero */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-[#12345B] px-6 py-6 text-white lg:px-8">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                      <Bot className="h-7 w-7" />
                    </div>

                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
                          ● {agent.status}
                        </span>

                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-200">
                          {agent.access}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold">
                        {agent.name}
                      </h2>

                      <p className="mt-1 text-sm text-slate-300">
                        AI assistant for {agent.project} · {agent.projectId}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 lg:min-w-64">
                    <p className="text-xs text-slate-300">
                      Human owner
                    </p>

                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                        <UserRound className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          {agent.owner}
                        </p>
                        <p className="text-xs text-slate-300">
                          {agent.ownerRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid divide-y border-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <StatCard
                  label="Model"
                  value={agent.model}
                  icon={Bot}
                />
                <StatCard
                  label="AI Actions"
                  value="24"
                  icon={Activity}
                  detail="This project"
                />
                <StatCard
                  label="Human Approvals"
                  value="18"
                  icon={UserCheck}
                  detail="Required actions"
                />
              </div>
            </section>

            {/* Security Notice */}
            <section className="flex flex-col gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-emerald-900">
                  Agent scope is controlled
                </h3>
                <p className="mt-1 text-sm leading-6 text-emerald-800">
                  This agent is restricted to the current project workspace.
                  Sensitive or unrelated information is not included in its
                  approved scope. Human approval is required for important
                  project-impacting actions.
                </p>
              </div>
            </section>

            {/* Top Grid */}
            <div className="grid gap-6 xl:grid-cols-3">
              {/* Access Scope */}
              <section className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Access & Scope
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Resources this agent can and cannot access.
                    </p>
                  </div>

                  <LockKeyhole className="h-5 w-5 text-slate-400" />
                </div>

                <div className="divide-y divide-slate-100">
                  {permissions.map((item) => {
                    const Icon = item.allowed ? CheckCircle2 : XCircle;

                    return (
                      <div
                        key={item.name}
                        className="flex items-center justify-between gap-4 px-6 py-4"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                              item.allowed
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-red-50 text-red-600"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-800">
                              {item.name}
                            </p>
                            <p className="truncate text-xs text-slate-500">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                            item.allowed
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-red-50 text-red-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Configuration */}
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    Agent Controls
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Current project-level controls.
                  </p>
                </div>

                <div className="space-y-5 p-6">
                  <ControlRow
                    label="Project access"
                    value="Restricted"
                    icon={FolderKanban}
                  />

                  <ControlRow
                    label="Human approval"
                    value="Required"
                    icon={UserCheck}
                  />

                  <ControlRow
                    label="AI-use declaration"
                    value="Enabled"
                    icon={FileCheck2}
                  />

                  <ControlRow
                    label="Action logging"
                    value="Enabled"
                    icon={History}
                  />

                  <ControlRow
                    label="External sharing"
                    value="Blocked"
                    icon={LockKeyhole}
                  />
                </div>
              </section>
            </div>

            {/* Tasks + Attribution */}
            <div className="grid gap-6 xl:grid-cols-3">
              <section className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Recent AI Tasks
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Work performed within the current project scope.
                    </p>
                  </div>

                  <Button variant="outline" size="sm">
                    View all
                  </Button>
                </div>

                <div className="space-y-4 p-6">
                  {tasks.map((task) => (
                    <div
                      key={task.title}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                            <Bot className="h-4 w-4" />
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {task.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {task.description}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${
                            task.status === "Completed"
                              ? "bg-emerald-50 text-emerald-700"
                              : task.status === "In Progress"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>

                      <div className="mt-4">
                        <div className="mb-1 flex justify-between text-[11px] text-slate-500">
                          <span>Progress</span>
                          <span>{task.progress}%</span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-[#12345B]"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Attribution */}
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    Contribution Attribution
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    How AI activity is credited.
                  </p>
                </div>

                <div className="space-y-5 p-6">
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700 shadow-sm">
                        <Bot className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-blue-900">
                          AI does not earn rewards
                        </p>
                        <p className="mt-1 text-xs leading-5 text-blue-800">
                          AI activity is recorded, but rewards and project
                          credit are assigned to the humans responsible for
                          directing and reviewing the work.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <AttributionRow
                      label="AI-generated activity"
                      value="24 actions"
                    />
                    <AttributionRow
                      label="Human-reviewed actions"
                      value="18 actions"
                    />
                    <AttributionRow
                      label="Human approvals"
                      value="18"
                    />
                    <AttributionRow
                      label="Reward recipient"
                      value="Human contributors"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Activity Log */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <h2 className="font-semibold text-slate-900">
                    AI Action History
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Recent actions and human oversight events.
                  </p>
                </div>

                <History className="h-5 w-5 text-slate-400" />
              </div>

              <div className="divide-y divide-slate-100">
                {recentActions.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={`${item.action}-${index}`}
                      className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-semibold text-slate-800">
                            {item.action}
                          </p>

                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                            {item.type}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.time}
                        </p>
                      </div>

                      <span className="w-fit rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        {item.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Security & Human Approval */}
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    <AlertTriangle className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Human approval required
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      The agent can assist with research and analysis, but
                      important actions remain under human control.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <ApprovalItem text="Changing project milestones" />
                  <ApprovalItem text="Sharing information outside the workspace" />
                  <ApprovalItem text="Publication or external submission" />
                  <ApprovalItem text="Actions affecting rewards or credits" />
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Integrity & audit coverage
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      AI actions are shown alongside human actions so the
                      project can distinguish AI assistance from human
                      contribution.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <MiniStatus label="Action logs" value="Enabled" />
                  <MiniStatus label="AI declaration" value="Enabled" />
                  <MiniStatus label="Scope control" value="Active" />
                  <MiniStatus label="Human review" value="Required" />
                </div>
              </section>
            </div>

            {/* Demo Notice */}
            <section className="rounded-xl border border-slate-200 bg-slate-100 p-4">
              <div className="flex gap-3">
                <div className="mt-0.5 text-slate-500">
                  <AlertTriangle className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Hackathon demo environment
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    The values shown on this page are synthetic demonstration
                    data. AI activity, permissions, approvals, and security
                    states represent the intended product workflow and should
                    only be presented as live controls when connected to the
                    corresponding backend services.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active, href }) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-[#12345B] text-white shadow-sm"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}

function StatCard({ label, value, detail, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-slate-500">{label}</p>
        <p className="truncate text-sm font-semibold text-slate-800">
          {value}
        </p>
        {detail && (
          <p className="text-[11px] text-slate-400">{detail}</p>
        )}
      </div>
    </div>
  );
}

function ControlRow({ label, value, icon: Icon }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-slate-400" />
        <span className="text-sm text-slate-600">{label}</span>
      </div>

      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
        {value}
      </span>
    </div>
  );
}

function AttributionRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-xs font-semibold text-slate-800">{value}</span>
    </div>
  );
}

function ApprovalItem({ text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
      <span>{text}</span>
    </div>
  );
}

function MiniStatus({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="mt-1 text-xs font-semibold text-slate-800">{value}</p>
    </div>
  );
}