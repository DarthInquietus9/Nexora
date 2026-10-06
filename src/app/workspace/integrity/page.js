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
  Fingerprint,
  Hash,
  History,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Network,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ledgerEntries = [
  {
    id: "EVT-0087",
    time: "10:42 AM",
    actor: "Aarav Mehta",
    actorType: "Human",
    action: "Submitted model architecture",
    hash: "8f2a91c7...4bd2",
    previous: "7c13d4e8...aa91",
    status: "Verified",
  },
  {
    id: "EVT-0086",
    time: "10:18 AM",
    actor: "Dr. Meera Nair",
    actorType: "Human",
    action: "Accepted dataset review",
    hash: "7c13d4e8...aa91",
    previous: "5b81e2af...91c0",
    status: "Verified",
  },
  {
    id: "EVT-0085",
    time: "9:56 AM",
    actor: "AI Scoping Agent",
    actorType: "AI",
    action: "Generated milestone recommendations",
    hash: "5b81e2af...91c0",
    previous: "41c9a8d2...6f31",
    status: "Verified",
  },
  {
    id: "EVT-0084",
    time: "9:31 AM",
    actor: "Riya Sharma",
    actorType: "Human",
    action: "Updated preprocessing contribution",
    hash: "41c9a8d2...6f31",
    previous: "29a7f1ce...b822",
    status: "Verified",
  },
  {
    id: "EVT-0083",
    time: "Yesterday",
    actor: "System",
    actorType: "System",
    action: "Charter acceptance recorded",
    hash: "29a7f1ce...b822",
    previous: "14d8e0bc...a113",
    status: "Verified",
  },
];

const checks = [
  {
    title: "Contribution hash chain",
    description: "Each recorded event is linked to the previous event.",
    status: "Verified",
    icon: Hash,
  },
  {
    title: "Contribution integrity",
    description: "Current contribution records match their stored references.",
    status: "Verified",
    icon: FileCheck2,
  },
  {
    title: "AI attribution",
    description: "AI-generated activity is separately identified.",
    status: "Verified",
    icon: Bot,
  },
  {
    title: "Access records",
    description: "Workspace access events are associated with project actors.",
    status: "Verified",
    icon: LockKeyhole,
  },
  {
    title: "Human approval trail",
    description: "Important AI-assisted actions have review records.",
    status: "Verified",
    icon: UserCheck,
  },
  {
    title: "Charter version",
    description: "Current work is associated with the accepted charter.",
    status: "Verified",
    icon: Fingerprint,
  },
];

const alerts = [
  {
    severity: "Low",
    title: "AI-assisted contribution detected",
    description:
      "Contribution CON-1039 includes AI assistance and has been attributed to the human contributor.",
    time: "Oct 4 · 4:32 PM",
  },
  {
    severity: "Info",
    title: "Integrity check completed",
    description:
      "The latest project records passed the current integrity verification.",
    time: "Oct 5 · 10:45 AM",
  },
];

export default function WorkspaceIntegrityPage() {
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
                href="/workspace/contributions"
              />

              <SidebarItem
                icon={ShieldCheck}
                label="Integrity"
                active
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
                    <span>Integrity</span>
                  </div>

                  <h1 className="truncate text-xl font-bold text-slate-900">
                    Integrity Center
                  </h1>
                </div>
              </div>

              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Run Check
              </Button>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-6 p-5 lg:p-8">
            {/* Integrity Hero */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-[#12345B] px-6 py-7 text-white lg:px-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/20">
                      <ShieldCheck className="h-7 w-7 text-emerald-300" />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
                          ● Integrity Verified
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold">
                        Project integrity is currently healthy
                      </h2>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                        The latest contribution records, attribution data, and
                        project references have passed the current integrity
                        checks.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-xs text-slate-300">
                      Last verification
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                      Oct 5, 2026 · 10:45 AM
                    </p>

                    <p className="mt-1 text-xs text-emerald-200">
                      6/6 checks passed
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid divide-y border-slate-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
                <Metric
                  label="Checks Passed"
                  value="6 / 6"
                  icon={CheckCircle2}
                />

                <Metric
                  label="Ledger Events"
                  value="87"
                  icon={Hash}
                />

                <Metric
                  label="Tamper Alerts"
                  value="0"
                  icon={ShieldAlert}
                />

                <Metric
                  label="AI Events"
                  value="24"
                  icon={Bot}
                />
              </div>
            </section>

            {/* Important note */}
            <section className="flex flex-col gap-4 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-amber-900">
                  Integrity does not mean “content is automatically correct”
                </h3>

                <p className="mt-1 text-sm leading-6 text-amber-800">
                  This verification focuses on whether project records and
                  contribution references remain consistent and attributable.
                  Research quality and scientific correctness still require
                  human review.
                </p>
              </div>
            </section>

            {/* Checks */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="font-semibold text-slate-900">
                  Integrity Checks
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Current verification status across the project.
                </p>
              </div>

              <div className="grid divide-y divide-slate-100 md:grid-cols-2 md:divide-x md:divide-y-0">
                {checks.map((check) => {
                  const Icon = check.icon;

                  return (
                    <div
                      key={check.title}
                      className="flex items-start gap-4 p-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-sm font-semibold text-slate-900">
                            {check.title}
                          </h3>

                          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                            {check.status}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {check.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Hash chain */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="font-semibold text-slate-900">
                    Tamper-Evident Hash Chain
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Each event references the previous record to make
                    unexpected changes visible.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Chain verified
                </div>
              </div>

              <div className="overflow-x-auto p-6">
                <div className="flex min-w-[900px] items-stretch gap-3">
                  {ledgerEntries.map((entry, index) => (
                    <div
                      key={entry.id}
                      className="flex flex-1 items-center gap-3"
                    >
                      <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {entry.id}
                          </span>

                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        </div>

                        <p className="mt-3 truncate text-xs font-semibold text-slate-800">
                          {entry.action}
                        </p>

                        <div className="mt-3 rounded-lg bg-white p-2.5">
                          <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                            Current hash
                          </p>

                          <p className="mt-1 font-mono text-[10px] text-slate-700">
                            {entry.hash}
                          </p>
                        </div>

                        <div className="mt-2 rounded-lg bg-white p-2.5">
                          <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                            Previous hash
                          </p>

                          <p className="mt-1 font-mono text-[10px] text-slate-500">
                            {entry.previous}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-2">
                          <span className="text-[10px] text-slate-400">
                            {entry.time}
                          </span>

                          <span className="text-[10px] font-semibold text-emerald-600">
                            Verified
                          </span>
                        </div>
                      </div>

                      {index < ledgerEntries.length - 1 && (
                        <ChevronRight className="h-5 w-5 shrink-0 text-slate-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                <div className="flex items-start gap-3">
                  <Hash className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />

                  <p className="text-xs leading-5 text-slate-500">
                    If an earlier record is edited without creating a valid
                    new version, its hash relationship would no longer match
                    the following record. The interface can then show a
                    verification failure instead of silently hiding the
                    change.
                  </p>
                </div>
              </div>
            </section>

            {/* Search / verify */}
            <div className="grid gap-6 lg:grid-cols-3">
              <section className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    Verify a Contribution
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Look up a contribution record and inspect its integrity
                    reference.
                  </p>
                </div>

                <div className="p-6">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                      <input
                        type="text"
                        placeholder="Enter contribution ID, e.g. CON-1042"
                        className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition focus:border-[#12345B] focus:ring-2 focus:ring-[#12345B]/10"
                      />
                    </div>

                    <Button className="bg-[#12345B] hover:bg-[#0e2947]">
                      Verify Record
                    </Button>
                  </div>

                  <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                      <div>
                        <p className="text-sm font-semibold text-emerald-900">
                          Latest verification passed
                        </p>

                        <p className="mt-1 text-xs leading-5 text-emerald-800">
                          Contribution records currently match their expected
                          integrity references.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="font-semibold text-slate-900">
                    Integrity Summary
                  </h2>
                </div>

                <div className="space-y-5 p-6">
                  <SummaryRow
                    label="Last check"
                    value="10:45 AM"
                  />

                  <SummaryRow
                    label="Records checked"
                    value="87"
                  />

                  <SummaryRow
                    label="Records passed"
                    value="87"
                  />

                  <SummaryRow
                    label="Breaks detected"
                    value="0"
                  />

                  <SummaryRow
                    label="AI records"
                    value="24"
                  />

                  <SummaryRow
                    label="Human records"
                    value="63"
                  />
                </div>
              </section>
            </div>

            {/* Alerts */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="font-semibold text-slate-900">
                  Integrity Events
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Recent security and integrity-related events.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-start"
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        alert.severity === "Low"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      {alert.severity === "Low" ? (
                        <AlertTriangle className="h-4 w-4" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-slate-800">
                          {alert.title}
                        </p>

                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            alert.severity === "Low"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-emerald-50 text-emerald-700"
                          }`}
                        >
                          {alert.severity}
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {alert.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-xs text-slate-400">
                      {alert.time}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* How it works */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
              <div className="max-w-2xl">
                <h2 className="text-lg font-semibold text-slate-900">
                  How the integrity workflow works
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Nex.Res separates contribution attribution from integrity
                  verification so project members can see both who performed
                  the work and whether the recorded history remains consistent.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-4">
                <Step
                  number="01"
                  icon={FileCheck2}
                  title="Record"
                  text="A human or AI action is recorded with its project context."
                />

                <Step
                  number="02"
                  icon={Hash}
                  title="Link"
                  text="The record receives an integrity reference linked to history."
                />

                <Step
                  number="03"
                  icon={ShieldCheck}
                  title="Verify"
                  text="The system checks whether the recorded chain remains consistent."
                />

                <Step
                  number="04"
                  icon={AlertTriangle}
                  title="Expose"
                  text="A broken relationship can be surfaced instead of hidden."
                />
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
                    Hashes, ledger events, verification results, and security
                    states shown here are synthetic demonstration data. The
                    final implementation should connect these views to the
                    actual backend integrity and audit services.
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

function Metric({ label, value, icon: Icon }) {
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

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-sm font-semibold text-slate-800">{value}</span>
    </div>
  );
}

function Step({ number, icon: Icon, title, text }) {
  return (
    <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#12345B] shadow-sm">
          <Icon className="h-4 w-4" />
        </div>

        <span className="text-[10px] font-bold tracking-wider text-slate-300">
          {number}
        </span>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
    </div>
  );
}