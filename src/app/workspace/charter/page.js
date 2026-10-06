"use client";

import {
  AlertTriangle,
  ArrowLeft,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  FileCheck2,
  FileText,
  History,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Network,
  PenLine,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const charterTerms = [
  {
    label: "Engagement model",
    value: "Funded Project",
    icon: WalletCards,
  },
  {
    label: "Project scope",
    value: "Edge-device diabetic retinopathy detection",
    icon: FileText,
  },
  {
    label: "Team",
    value: "4 human contributors + 1 scoped AI agent",
    icon: Users,
  },
  {
    label: "Funding",
    value: "₹1,00,000",
    icon: WalletCards,
  },
  {
    label: "Confidentiality",
    value: "Project-scoped access",
    icon: LockKeyhole,
  },
  {
    label: "AI policy",
    value: "Declaration + human review",
    icon: Bot,
  },
];

const rewardSplit = [
  {
    name: "Aarav Mehta",
    role: "Project Lead",
    share: "28%",
    amount: "₹28,000",
  },
  {
    name: "Dr. Meera Nair",
    role: "Expert Mentor",
    share: "22%",
    amount: "₹22,000",
  },
  {
    name: "Riya Sharma",
    role: "ML Researcher",
    share: "25%",
    amount: "₹25,000",
  },
  {
    name: "Vikram Rao",
    role: "Research Student",
    share: "15%",
    amount: "₹15,000",
  },
  {
    name: "Project Reserve",
    role: "Completion / review reserve",
    share: "10%",
    amount: "₹10,000",
  },
];

const versions = [
  {
    version: "v1.2",
    date: "Oct 5, 2026",
    status: "Accepted",
    description: "Current accepted charter",
  },
  {
    version: "v1.1",
    date: "Oct 4, 2026",
    status: "Superseded",
    description: "Updated milestone and reward terms",
  },
  {
    version: "v1.0",
    date: "Oct 3, 2026",
    status: "Superseded",
    description: "Initial project charter",
  },
];

const approvalItems = [
  {
    name: "Aarav Mehta",
    role: "Project Lead",
    status: "Accepted",
    date: "Oct 5 · 9:15 AM",
  },
  {
    name: "Dr. Meera Nair",
    role: "Expert Mentor",
    status: "Accepted",
    date: "Oct 5 · 9:18 AM",
  },
  {
    name: "Riya Sharma",
    role: "ML Researcher",
    status: "Accepted",
    date: "Oct 5 · 9:21 AM",
  },
  {
    name: "Vikram Rao",
    role: "Research Student",
    status: "Accepted",
    date: "Oct 5 · 9:25 AM",
  },
];

export default function WorkspaceCharterPage() {
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
                href="/workspace/ai-agent"
              />

              <SidebarItem
                icon={FileText}
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
                active
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
                    <span>Charter</span>
                  </div>

                  <h1 className="truncate text-xl font-bold text-slate-900">
                    Project Charter
                  </h1>
                </div>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>

                <Button
                  size="sm"
                  className="bg-[#12345B] hover:bg-[#0e2947]"
                >
                  <PenLine className="mr-2 h-4 w-4" />
                  Request Change
                </Button>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-6 p-5 lg:p-8">
            {/* Charter hero */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-6 lg:px-8">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        <CheckCircle2 className="mr-1 inline h-3.5 w-3.5" />
                        Accepted
                      </span>

                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        Version 1.2
                      </span>

                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                        NX-042
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                      EdgeVision Research
                    </h2>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                      Low-cost detection of diabetic retinopathy from fundus
                      images on edge devices.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 lg:min-w-56">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Accepted
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      October 5, 2026
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      All required members accepted
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid divide-y border-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <HeroStat
                  icon={WalletCards}
                  label="Total funding"
                  value="₹1,00,000"
                />

                <HeroStat
                  icon={Users}
                  label="Team"
                  value="4 humans + AI"
                />

                <HeroStat
                  icon={ShieldCheck}
                  label="Charter status"
                  value="Accepted"
                />
              </div>
            </section>

            {/* Important charter notice */}
            <section className="flex flex-col gap-4 rounded-xl border border-blue-200 bg-blue-50 p-4 sm:flex-row sm:items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <FileCheck2 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-900">
                  This is the accepted project agreement
                </h3>

                <p className="mt-1 text-sm leading-6 text-blue-800">
                  The current version records the agreed scope, engagement
                  model, confidentiality, IP/publication expectations,
                  contribution credit, reward split, exit terms, and AI
                  participation rules.
                </p>
              </div>
            </section>

            {/* Terms */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="font-semibold text-slate-900">
                  Charter Summary
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Key terms of the accepted project charter.
                </p>
              </div>

              <div className="grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
                {charterTerms.map((term) => {
                  const Icon = term.icon;

                  return (
                    <div
                      key={term.label}
                      className="bg-white p-5"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        <Icon className="h-4 w-4" />
                      </div>

                      <p className="mt-4 text-xs font-medium text-slate-500">
                        {term.label}
                      </p>

                      <p className="mt-1 text-sm font-semibold leading-5 text-slate-900">
                        {term.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Scope + IP */}
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    Scope & Responsibilities
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    What the team agreed to deliver.
                  </p>
                </div>

                <div className="space-y-5 p-6">
                  <TermBlock
                    title="Project objective"
                    text="Develop and evaluate a low-cost diabetic retinopathy detection approach suitable for edge-device deployment using approved fundus image datasets."
                  />

                  <TermBlock
                    title="Included work"
                    text="Dataset preparation, model development, validation, edge-device optimization, research documentation, integrity checks, and final deliverable preparation."
                  />

                  <TermBlock
                    title="Out of scope"
                    text="Clinical diagnosis, deployment for real patients, use of unapproved personal medical data, and unrelated research projects."
                  />

                  <TermBlock
                    title="Acceptance"
                    text="Milestone outputs are reviewed by the responsible human project members before they are marked accepted."
                  />
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    IP, Publication & Confidentiality
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Information-sharing rules agreed by the team.
                  </p>
                </div>

                <div className="space-y-5 p-6">
                  <TermBlock
                    title="Confidential information"
                    text="Sponsor-provided confidential material remains restricted to approved project members and approved project-scoped systems."
                  />

                  <TermBlock
                    title="Publication"
                    text="External publication or submission requires the agreed human review and sponsor/project approval process."
                  />

                  <TermBlock
                    title="Intellectual property"
                    text="Project IP and ownership follow the accepted charter terms and should not be changed informally during project execution."
                  />

                  <TermBlock
                    title="External sharing"
                    text="Project materials must not be shared outside the approved workspace without appropriate authorization."
                  />
                </div>
              </section>
            </div>

            {/* AI policy */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Bot className="h-4 w-4" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      AI Participation Policy
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Rules governing the project-scoped AI agent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-4">
                <PolicyCard
                  title="Named owner"
                  value="Aarav Mehta"
                  description="Human owner responsible for the agent."
                  icon={UserCheck}
                />

                <PolicyCard
                  title="Access"
                  value="Project-scoped"
                  description="Only approved project resources are available."
                  icon={LockKeyhole}
                />

                <PolicyCard
                  title="Declaration"
                  value="Required"
                  description="AI-assisted contributions must be identified."
                  icon={FileCheck2}
                />

                <PolicyCard
                  title="Reward"
                  value="No AI reward"
                  description="Human direction and review receive attribution."
                  icon={Sparkles}
                />
              </div>

              <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                  <p className="text-sm leading-6 text-slate-600">
                    Important AI-assisted actions remain subject to human
                    review, particularly actions that affect milestones,
                    external sharing, publication, project scope, or rewards.
                  </p>
                </div>
              </div>
            </section>

            {/* Reward split */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="font-semibold text-slate-900">
                    Agreed Reward Allocation
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Current reward structure recorded in the accepted charter.
                  </p>
                </div>

                <div className="rounded-lg bg-emerald-50 px-3 py-2">
                  <p className="text-xs font-semibold text-emerald-700">
                    Total · ₹1,00,000
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Contributor
                      </th>

                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Role
                      </th>

                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Share
                      </th>

                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Allocation
                      </th>

                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {rewardSplit.map((person) => (
                      <tr key={person.name}>
                        <td className="px-6 py-4">
                          <p className="text-sm font-semibold text-slate-800">
                            {person.name}
                          </p>
                        </td>

                        <td className="px-4 py-4 text-sm text-slate-500">
                          {person.role}
                        </td>

                        <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                          {person.share}
                        </td>

                        <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                          {person.amount}
                        </td>

                        <td className="px-6 py-4">
                          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                            Agreed
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

                  <p className="text-xs leading-5 text-slate-500">
                    Reward allocation is based on the accepted charter and
                    should not be presented as final payment unless the
                    corresponding funding and acceptance workflow has been
                    implemented in the backend.
                  </p>
                </div>
              </div>
            </section>

            {/* Approvals */}
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    Charter Acceptance
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Human members who accepted the current version.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {approvalItems.map((person) => (
                    <div
                      key={person.name}
                      className="flex items-center gap-3 px-6 py-4"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                        <UserCheck className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-800">
                          {person.name}
                        </p>

                        <p className="text-xs text-slate-500">
                          {person.role}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                          {person.status}
                        </span>

                        <p className="mt-1 text-[10px] text-slate-400">
                          {person.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Version history */}
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    Version History
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Previous charter versions remain visible for traceability.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {versions.map((version) => (
                    <div
                      key={version.version}
                      className="flex items-start gap-4 px-6 py-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                        {version.version}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-semibold text-slate-800">
                            {version.description}
                          </p>

                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                              version.status === "Accepted"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {version.status}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-400">
                          {version.date}
                        </p>
                      </div>

                      <button className="text-slate-400 transition hover:text-slate-700">
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Change policy */}
            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                <div>
                  <h2 className="text-sm font-semibold text-amber-900">
                    Changes require a new charter version
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-amber-800">
                    If the project scope, reward split, engagement terms,
                    confidentiality rules, IP/publication terms, or other
                    material conditions change, the updated charter should be
                    versioned and accepted again by the affected participants.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amber-300 bg-white hover:bg-amber-100"
                    >
                      <History className="mr-2 h-4 w-4" />
                      View versions
                    </Button>

                    <Button
                      size="sm"
                      className="bg-[#12345B] hover:bg-[#0e2947]"
                    >
                      <PenLine className="mr-2 h-4 w-4" />
                      Start new version
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <section className="rounded-xl border border-slate-200 bg-slate-100 p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Hackathon demo environment
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Charter terms, approvals, reward allocations, and version
                    history shown here are synthetic demonstration data. The
                    final application should retrieve the accepted charter
                    from the backend and enforce the corresponding version and
                    re-acceptance workflow.
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

function HeroStat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function TermBlock({ title, text }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function PolicyCard({ title, value, description, icon: Icon }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm">
        <Icon className="h-4 w-4" />
      </div>

      <p className="mt-4 text-xs font-medium text-slate-500">{title}</p>

      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>

      <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}