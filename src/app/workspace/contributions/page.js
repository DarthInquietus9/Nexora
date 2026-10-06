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
  Filter,
  Hash,
  History,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contributions = [
  {
    id: "CON-1042",
    contributor: "Aarav Mehta",
    initials: "AM",
    role: "Project Lead",
    type: "Human",
    title: "Edge-device model architecture",
    description:
      "Designed the initial architecture for the lightweight detection model and documented the deployment constraints.",
    date: "Oct 5, 2026 · 10:42 AM",
    status: "Accepted",
    credit: "Major",
    reward: "₹28,000",
    hash: "8f2a91c7...4bd2",
    aiAssisted: false,
  },
  {
    id: "CON-1041",
    contributor: "Dr. Meera Nair",
    initials: "MN",
    role: "Expert Mentor",
    type: "Human",
    title: "Dataset quality review",
    description:
      "Reviewed dataset quality criteria and recommended validation checks for the research pipeline.",
    date: "Oct 5, 2026 · 10:18 AM",
    status: "Accepted",
    credit: "Major",
    reward: "₹22,000",
    hash: "7c13d4e8...aa91",
    aiAssisted: false,
  },
  {
    id: "CON-1040",
    contributor: "AI Scoping Agent",
    initials: "AI",
    role: "AI Assistant",
    type: "AI",
    title: "Milestone recommendations",
    description:
      "Generated milestone suggestions from the accepted project charter for human review.",
    date: "Oct 5, 2026 · 9:56 AM",
    status: "Reviewed",
    credit: "Attributed",
    reward: "No reward",
    hash: "5b81e2af...91c0",
    aiAssisted: true,
  },
  {
    id: "CON-1039",
    contributor: "Riya Sharma",
    initials: "RS",
    role: "ML Researcher",
    type: "Human",
    title: "Preprocessing pipeline",
    description:
      "Implemented image preprocessing and normalization steps for the approved research dataset.",
    date: "Oct 4, 2026 · 4:32 PM",
    status: "Accepted",
    credit: "Major",
    reward: "₹25,000",
    hash: "41c9a8d2...6f31",
    aiAssisted: true,
  },
  {
    id: "CON-1038",
    contributor: "Vikram Rao",
    initials: "VR",
    role: "Research Student",
    type: "Human",
    title: "Negative result analysis",
    description:
      "Documented unsuccessful model experiments and identified possible causes for reduced accuracy.",
    date: "Oct 4, 2026 · 2:15 PM",
    status: "Accepted",
    credit: "Supporting",
    reward: "₹15,000",
    hash: "29a7f1ce...b822",
    aiAssisted: false,
  },
];

const activity = [
  {
    time: "10:42 AM",
    text: "Aarav Mehta submitted a contribution",
    type: "Human",
  },
  {
    time: "10:18 AM",
    text: "Dr. Meera Nair accepted dataset review",
    type: "Human",
  },
  {
    time: "9:56 AM",
    text: "AI Scoping Agent generated milestone suggestions",
    type: "AI",
  },
  {
    time: "9:31 AM",
    text: "Contribution CON-1039 received human review",
    type: "Review",
  },
];

export default function WorkspaceContributionsPage() {
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
                icon={Activity}
                label="Contributions"
                active
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
                    <span>Contributions</span>
                  </div>

                  <h1 className="truncate text-xl font-bold text-slate-900">
                    Contributions
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
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-6 p-5 lg:p-8">
            {/* Project header */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      NX-042
                    </span>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Contributions tracked
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    EdgeVision Research
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    Transparent contribution history for the project team,
                    including human work, AI-assisted activity, review status,
                    integrity records, and reward attribution.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <SummaryStat value="42" label="Total" />
                  <SummaryStat value="31" label="Accepted" />
                  <SummaryStat value="11" label="Pending" />
                </div>
              </div>
            </section>

            {/* Security notice */}
            <section className="flex flex-col gap-4 rounded-xl border border-blue-200 bg-blue-50 p-4 sm:flex-row sm:items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-900">
                  Contribution records are designed for transparent attribution
                </h3>

                <p className="mt-1 text-sm leading-6 text-blue-800">
                  Each contribution is associated with its contributor,
                  timestamp, review state, and integrity reference. AI activity
                  is separately identified so human contribution remains clear.
                </p>
              </div>
            </section>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard
                label="Human Contributions"
                value="38"
                detail="90.5% of activity"
                icon={Users}
              />

              <MetricCard
                label="AI-Assisted"
                value="9"
                detail="Human-owned work"
                icon={Bot}
              />

              <MetricCard
                label="Accepted Rewards"
                value="₹90,000"
                detail="Current allocation"
                icon={Sparkles}
              />

              <MetricCard
                label="Integrity Verified"
                value="100%"
                detail="Current records"
                icon={Hash}
              />
            </div>

            {/* Main contribution table */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="font-semibold text-slate-900">
                    Contribution Register
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Review who contributed what, when it happened, and how it
                    was credited.
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search contributions"
                      className="h-9 w-52 rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition focus:border-[#12345B] focus:ring-2 focus:ring-[#12345B]/10"
                    />
                  </div>

                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Status
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[1050px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Contribution
                      </th>

                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Contributor
                      </th>

                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Type
                      </th>

                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Status
                      </th>

                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Credit
                      </th>

                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Reward
                      </th>

                      <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Integrity
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {contributions.map((item) => (
                      <tr
                        key={item.id}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="px-6 py-4">
                          <div className="max-w-sm">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-slate-900">
                                {item.title}
                              </p>

                              {item.aiAssisted && (
                                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                                  AI assisted
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {item.description}
                            </p>

                            <p className="mt-2 text-[11px] font-medium text-slate-400">
                              {item.id} · {item.date}
                            </p>
                          </div>
                        </td>

                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ${
                                item.type === "AI"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-slate-100 text-slate-700"
                              }`}
                            >
                              {item.initials}
                            </div>

                            <div>
                              <p className="text-sm font-medium text-slate-800">
                                {item.contributor}
                              </p>

                              <p className="text-[11px] text-slate-500">
                                {item.role}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                              item.type === "AI"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {item.type === "AI" ? (
                              <Bot className="h-3 w-3" />
                            ) : (
                              <Users className="h-3 w-3" />
                            )}
                            {item.type}
                          </span>
                        </td>

                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                            <CheckCircle2 className="h-3 w-3" />
                            {item.status}
                          </span>
                        </td>

                        <td className="px-4 py-4">
                          <p className="text-sm font-semibold text-slate-800">
                            {item.credit}
                          </p>
                        </td>

                        <td className="px-4 py-4">
                          <p
                            className={`text-sm font-semibold ${
                              item.reward === "No reward"
                                ? "text-slate-400"
                                : "text-slate-800"
                            }`}
                          >
                            {item.reward}
                          </p>
                        </td>

                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                              <Hash className="h-3.5 w-3.5" />
                            </div>

                            <div>
                              <p className="text-xs font-semibold text-emerald-700">
                                Verified
                              </p>
                              <p className="text-[10px] text-slate-400">
                                {item.hash}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Contribution breakdown */}
            <div className="grid gap-6 lg:grid-cols-3">
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <SectionTitle
                  icon={Users}
                  title="Human Contribution"
                  description="Work performed by project members."
                />

                <div className="mt-6">
                  <div className="flex items-end justify-between">
                    <p className="text-3xl font-bold text-slate-900">38</p>
                    <span className="text-sm font-semibold text-emerald-600">
                      90.5%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[90.5%] rounded-full bg-[#12345B]" />
                  </div>

                  <div className="mt-5 space-y-3">
                    <BreakdownRow
                      label="Project Lead"
                      value="12"
                    />
                    <BreakdownRow
                      label="Expert Mentor"
                      value="9"
                    />
                    <BreakdownRow
                      label="ML Researcher"
                      value="10"
                    />
                    <BreakdownRow
                      label="Research Student"
                      value="7"
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <SectionTitle
                  icon={Bot}
                  title="AI-Assisted Work"
                  description="AI activity remains separately attributed."
                />

                <div className="mt-6">
                  <div className="flex items-end justify-between">
                    <p className="text-3xl font-bold text-slate-900">9</p>
                    <span className="text-sm font-semibold text-blue-600">
                      Assisted
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[21%] rounded-full bg-blue-600" />
                  </div>

                  <div className="mt-5 space-y-3">
                    <BreakdownRow
                      label="Literature synthesis"
                      value="3"
                    />
                    <BreakdownRow
                      label="Milestone suggestions"
                      value="2"
                    />
                    <BreakdownRow
                      label="Similarity analysis"
                      value="2"
                    />
                    <BreakdownRow
                      label="Analysis assistance"
                      value="2"
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <SectionTitle
                  icon={UserCheck}
                  title="Review Status"
                  description="Human review keeps contribution decisions accountable."
                />

                <div className="mt-6 space-y-4">
                  <ReviewStatus
                    label="Accepted"
                    value="31"
                    tone="success"
                  />

                  <ReviewStatus
                    label="Under review"
                    value="7"
                    tone="warning"
                  />

                  <ReviewStatus
                    label="Needs revision"
                    value="3"
                    tone="danger"
                  />

                  <ReviewStatus
                    label="AI reviewed"
                    value="9"
                    tone="info"
                  />
                </div>
              </section>
            </div>

            {/* Activity + rules */}
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    Contribution Activity
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Recent contribution and review events.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {activity.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-6 py-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        {item.type === "AI" ? (
                          <Bot className="h-4 w-4" />
                        ) : item.type === "Review" ? (
                          <UserCheck className="h-4 w-4" />
                        ) : (
                          <Activity className="h-4 w-4" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-800">
                          {item.text}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {item.time}
                        </p>
                      </div>

                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500">
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    <AlertTriangle className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Contribution & reward principles
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Project contribution decisions should follow the accepted
                      charter rather than simple activity counts.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Principle text="Accepted contributions receive visible credit." />
                  <Principle text="Negative results can be valid research contributions." />
                  <Principle text="Reward splits follow agreed project roles." />
                  <Principle text="Contribution impact matters more than commit count." />
                  <Principle text="AI activity is recorded but does not receive rewards." />
                  <Principle text="Human direction and review remain attributable." />
                </div>
              </section>
            </div>

            {/* Integrity footer */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <LockKeyhole className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Contribution records linked to integrity references
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Hash values shown here represent the intended tamper-
                      evident contribution workflow for the hackathon demo.
                    </p>
                  </div>
                </div>

                <Button variant="outline" size="sm" asChild>
                  <a href="/workspace/integrity">
                    View integrity
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </section>

            {/* Demo disclaimer */}
            <section className="rounded-xl border border-slate-200 bg-slate-100 p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Hackathon demo environment
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    All contribution records, rewards, hashes, timestamps,
                    contributors, and statuses shown here are synthetic demo
                    data. Backend integration should replace these values with
                    verified project records.
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

function SummaryStat({ value, label }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
      <p className="text-lg font-bold text-slate-900">{value}</p>
      <p className="text-[10px] font-medium text-slate-500">{label}</p>
    </div>
  );
}

function MetricCard({ label, value, detail, icon: Icon }) {
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

function SectionTitle({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <h2 className="font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function BreakdownRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0">
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-xs font-semibold text-slate-800">{value}</span>
    </div>
  );
}

function ReviewStatus({ label, value, tone }) {
  const styles = {
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-700",
    danger: "bg-red-50 text-red-700",
    info: "bg-blue-50 text-blue-700",
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-600">{label}</span>

      <span
        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[tone]}`}
      >
        {value}
      </span>
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