"use client";

import {
  AlertTriangle,
  ArrowLeft,
  Award,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  History,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Network,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contributors = [
  {
    name: "Aarav Mehta",
    initials: "AM",
    role: "Project Lead",
    contribution: "Model architecture + project coordination",
    share: "28%",
    reward: "₹28,000",
    status: "Eligible",
  },
  {
    name: "Dr. Meera Nair",
    initials: "MN",
    role: "Expert Mentor",
    contribution: "Dataset review + research guidance",
    share: "22%",
    reward: "₹22,000",
    status: "Eligible",
  },
  {
    name: "Riya Sharma",
    initials: "RS",
    role: "ML Researcher",
    contribution: "Preprocessing + model experiments",
    share: "25%",
    reward: "₹25,000",
    status: "Eligible",
  },
  {
    name: "Vikram Rao",
    initials: "VR",
    role: "Research Student",
    contribution: "Validation + negative-result analysis",
    share: "15%",
    reward: "₹15,000",
    status: "Eligible",
  },
];

const milestones = [
  {
    id: "M1",
    title: "Dataset Preparation & Validation",
    amount: "₹20,000",
    status: "Released",
    date: "Oct 4, 2026",
  },
  {
    id: "M2",
    title: "Model Development",
    amount: "₹30,000",
    status: "Pending acceptance",
    date: "Expected Oct 7",
  },
  {
    id: "M3",
    title: "Edge Optimization",
    amount: "₹25,000",
    status: "Escrowed",
    date: "Expected Oct 9",
  },
  {
    id: "M4",
    title: "Validation & Research Report",
    amount: "₹25,000",
    status: "Escrowed",
    date: "Expected Oct 11",
  },
];

const credentials = [
  {
    title: "Research Contributor",
    issuer: "Nex.Res",
    description:
      "Recognition for accepted contribution to the EdgeVision Research project.",
    status: "Ready",
  },
  {
    title: "Collaborative Research",
    issuer: "Nex.Res",
    description:
      "Credential recognizing participation in a verified collaborative project.",
    status: "Ready",
  },
  {
    title: "AI-Assisted Research",
    issuer: "Nex.Res",
    description:
      "Recognition of human-reviewed work completed with declared AI assistance.",
    status: "Pending",
  },
];

export default function WorkspaceRewardsPage() {
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
                icon={FileCheck2}
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
                active
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
                    <span>Rewards</span>
                  </div>

                  <h1 className="truncate text-xl font-bold text-slate-900">
                    Rewards & Credits
                  </h1>
                </div>
              </div>

              <Button variant="outline" size="sm">
                <Award className="mr-2 h-4 w-4" />
                View Credentials
              </Button>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-6 p-5 lg:p-8">
            {/* Hero */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-[#12345B] px-6 py-7 text-white lg:px-8">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                      <WalletCards className="h-7 w-7" />
                    </div>

                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                          Charter aligned
                        </span>

                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">
                          NX-042
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold">
                        Fair contribution rewards
                      </h2>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                        Rewards are based on the accepted project charter and
                        reviewed contribution impact — not simply on the number
                        of commits or AI actions.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-xs text-slate-300">Project funding</p>
                    <p className="mt-1 text-2xl font-bold">₹1,00,000</p>
                    <p className="mt-1 text-xs text-emerald-200">
                      Charter allocation
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid divide-y sm:grid-cols-4 sm:divide-x sm:divide-y-0">
                <HeroStat
                  icon={CheckCircle2}
                  label="Accepted"
                  value="₹20,000"
                />
                <HeroStat
                  icon={Clock3}
                  label="Pending"
                  value="₹30,000"
                />
                <HeroStat
                  icon={LockKeyhole}
                  label="Escrowed"
                  value="₹50,000"
                />
                <HeroStat
                  icon={Users}
                  label="Contributors"
                  value="4 humans"
                />
              </div>
            </section>

            {/* Fair reward principle */}
            <section className="flex flex-col gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-emerald-900">
                  Reward decisions follow the accepted charter
                </h3>

                <p className="mt-1 text-sm leading-6 text-emerald-800">
                  Every accepted contribution can receive credit. Reward
                  allocation considers agreed roles and contribution impact.
                  Negative research results can also be valid contributions.
                </p>
              </div>
            </section>

            {/* Metrics */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard
                icon={WalletCards}
                label="Total Reward Pool"
                value="₹1,00,000"
                detail="Accepted charter"
              />

              <MetricCard
                icon={CheckCircle2}
                label="Released"
                value="₹20,000"
                detail="M1 accepted"
              />

              <MetricCard
                icon={Clock3}
                label="Pending"
                value="₹30,000"
                detail="Awaiting acceptance"
              />

              <MetricCard
                icon={Award}
                label="Credentials"
                value="2"
                detail="Ready to issue"
              />
            </div>

            {/* Contributor allocation */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="font-semibold text-slate-900">
                    Contributor Allocation
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Current charter-based reward split for human contributors.
                  </p>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  90% contributor allocation
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[850px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Contributor
                      </th>
                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Contribution
                      </th>
                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Share
                      </th>
                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Reward
                      </th>
                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {contributors.map((person) => (
                      <tr
                        key={person.name}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                              {person.initials}
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-slate-800">
                                {person.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {person.role}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="max-w-xs px-4 py-4 text-sm text-slate-500">
                          {person.contribution}
                        </td>

                        <td className="px-4 py-4">
                          <span className="text-sm font-semibold text-slate-800">
                            {person.share}
                          </span>
                        </td>

                        <td className="px-4 py-4">
                          <span className="text-sm font-bold text-slate-900">
                            {person.reward}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                            {person.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">
                    Contributor total
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    ₹90,000
                  </span>
                </div>
              </div>
            </section>

            {/* Milestone rewards */}
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    Milestone Reward Status
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Reward release follows milestone acceptance.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {milestones.map((milestone) => (
                    <div
                      key={milestone.id}
                      className="flex items-center gap-3 px-6 py-4"
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          milestone.status === "Released"
                            ? "bg-emerald-50 text-emerald-600"
                            : milestone.status === "Pending acceptance"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {milestone.status === "Released" ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <Clock3 className="h-4 w-4" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-800">
                          {milestone.id} · {milestone.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {milestone.date}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-800">
                          {milestone.amount}
                        </p>
                        <p className="mt-1 text-[10px] font-semibold text-slate-500">
                          {milestone.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* AI attribution */}
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <Bot className="h-4 w-4" />
                    </div>

                    <div>
                      <h2 className="font-semibold text-slate-900">
                        AI Attribution
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        How AI-assisted work is treated.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-blue-900">
                      AI does not receive project rewards
                    </p>

                    <p className="mt-1 text-xs leading-5 text-blue-800">
                      AI-generated activity is logged and declared, while
                      humans responsible for directing and reviewing the work
                      receive the appropriate attribution.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <InfoRow label="AI actions recorded" value="24" />
                    <InfoRow label="AI-assisted contributions" value="9" />
                    <InfoRow label="Human-reviewed AI actions" value="18" />
                    <InfoRow label="AI reward allocation" value="₹0" />
                  </div>
                </div>
              </section>
            </div>

            {/* Credentials */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="font-semibold text-slate-900">
                    Non-Monetary Credentials
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Project participation can also be recognized through
                    credentials.
                  </p>
                </div>

                <Button variant="outline" size="sm">
                  <Award className="mr-2 h-4 w-4" />
                  Manage Credentials
                </Button>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3">
                {credentials.map((credential) => (
                  <div
                    key={credential.title}
                    className="rounded-xl border border-slate-200 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                        <Award className="h-5 w-5" />
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                          credential.status === "Ready"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {credential.status}
                      </span>
                    </div>

                    <h3 className="mt-5 text-sm font-semibold text-slate-900">
                      {credential.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-slate-400">
                      Issued by {credential.issuer}
                    </p>

                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      {credential.description}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-5 w-full"
                    >
                      View credential
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            {/* Principles */}
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <UserCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Fairness principles
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Reward decisions should reflect the agreed project
                      structure and actual contribution impact.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <Principle text="Terms are agreed before work begins." />
                  <Principle text="Accepted contributions receive credit." />
                  <Principle text="Negative results can be valid contributions." />
                  <Principle text="Role and contribution impact matter more than commit count." />
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Reward protection
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Funding and reward decisions are tied to project
                      milestones and acceptance.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <Principle text="Funded milestones can be placed into escrow." />
                  <Principle text="Reward release follows accepted deliverables." />
                  <Principle text="Changes should follow charter versioning." />
                  <Principle text="Disputes can be escalated through project governance." />
                </div>
              </section>
            </div>

            {/* Footer notice */}
            <section className="rounded-xl border border-slate-200 bg-slate-100 p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Hackathon demo environment
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Reward amounts, escrow states, contributor allocations, and
                    credentials shown here are synthetic demonstration data.
                    No real money is being transferred. The final application
                    should connect this page to the actual escrow, milestone
                    acceptance, contribution, and credential services.
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

function MetricCard({ icon: Icon, label, value, detail }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
          <p className="mt-1 text-[11px] text-slate-400">{detail}</p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-sm font-semibold text-slate-800">{value}</span>
    </div>
  );
}

function Principle({ text }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
      <p className="text-sm leading-5 text-slate-600">{text}</p>
    </div>
  );
}