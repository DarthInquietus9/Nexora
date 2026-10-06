"use client";

import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Bot,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Download,
  Eye,
  FileCheck2,
  FileText,
  Fingerprint,
  Filter,
  History,
  KeyRound,
  LockKeyhole,
  Milestone,
  Network,
  Search,
  ShieldCheck,
  User,
  Users,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const auditEvents = [
  {
    id: "AUD-0098",
    type: "Contribution",
    title: "Contribution submitted",
    actor: "Aarav Mehta",
    role: "Project Lead",
    actorType: "Human",
    timestamp: "Oct 6, 2026 · 10:18 AM",
    status: "Recorded",
    description:
      "Submitted the edge preprocessing pipeline for Milestone 2 human review.",
    reference: "CON-2048-018",
    hash: "7f8c2a91...b421",
    icon: FileCheck2,
  },
  {
    id: "AUD-0097",
    type: "AI Activity",
    title: "AI-assisted analysis completed",
    actor: "Research Agent",
    role: "Project AI Agent",
    actorType: "AI",
    timestamp: "Oct 6, 2026 · 09:42 AM",
    status: "Reviewed",
    description:
      "The project-scoped AI agent completed a dataset comparison task within its approved access scope.",
    reference: "AI-2048-042",
    hash: "4c92e1d7...a812",
    icon: Bot,
  },
  {
    id: "AUD-0096",
    type: "Access",
    title: "Protected dataset accessed",
    actor: "Dr. Meera Nair",
    role: "Expert Mentor",
    actorType: "Human",
    timestamp: "Oct 6, 2026 · 09:15 AM",
    status: "Authorized",
    description:
      "Accessed the approved project dataset within the authorized project scope.",
    reference: "ACC-2048-031",
    hash: "a813f7c2...92e1",
    icon: KeyRound,
  },
  {
    id: "AUD-0095",
    type: "Milestone",
    title: "Milestone progress updated",
    actor: "Riya Sharma",
    role: "ML Researcher",
    actorType: "Human",
    timestamp: "Oct 5, 2026 · 05:42 PM",
    status: "Recorded",
    description:
      "Milestone 2 progress changed from 61% to 68% after a contribution submission.",
    reference: "MS-02",
    hash: "9e21b8d4...f302",
    icon: Milestone,
  },
  {
    id: "AUD-0094",
    type: "Charter",
    title: "Charter acceptance recorded",
    actor: "Vikram Rao",
    role: "Research Student",
    actorType: "Human",
    timestamp: "Oct 5, 2026 · 04:10 PM",
    status: "Accepted",
    description:
      "Accepted Project Charter version 1.2 after reviewing updated project terms.",
    reference: "CHARTER-v1.2",
    hash: "d8a13c72...e901",
    icon: FileText,
  },
  {
    id: "AUD-0093",
    type: "Reward",
    title: "Milestone reward reserved",
    actor: "Nex.Res System",
    role: "System",
    actorType: "System",
    timestamp: "Oct 5, 2026 · 02:30 PM",
    status: "Escrowed",
    description:
      "₹25,000 was reserved for Milestone 2 according to the accepted project terms.",
    reference: "ESC-2048-002",
    hash: "c731a82e...113d",
    icon: WalletCards,
  },
  {
    id: "AUD-0092",
    type: "Integrity",
    title: "Contribution integrity verified",
    actor: "Nex.Res System",
    role: "Integrity Service",
    actorType: "System",
    timestamp: "Oct 5, 2026 · 01:18 PM",
    status: "Verified",
    description:
      "Hash-chain verification completed successfully for the current contribution history.",
    reference: "INT-2048-011",
    hash: "91d7f3aa...c824",
    icon: Fingerprint,
  },
  {
    id: "AUD-0091",
    type: "Access",
    title: "AI access scope approved",
    actor: "Aarav Mehta",
    role: "Project Lead",
    actorType: "Human",
    timestamp: "Oct 5, 2026 · 11:10 AM",
    status: "Approved",
    description:
      "Approved the AI agent's project-scoped access to the dataset and research notes.",
    reference: "AI-SCOPE-04",
    hash: "1d82b7c4...f921",
    icon: LockKeyhole,
  },
  {
    id: "AUD-0090",
    type: "Contribution",
    title: "Research note accepted",
    actor: "Dr. Meera Nair",
    role: "Expert Mentor",
    actorType: "Human",
    timestamp: "Oct 4, 2026 · 04:20 PM",
    status: "Accepted",
    description:
      "Accepted a research note documenting dataset quality findings.",
    reference: "CON-2048-014",
    hash: "6b21f8c3...72aa",
    icon: CheckCircle2,
  },
];

const eventTypes = [
  "All Events",
  "Contribution",
  "Access",
  "Charter",
  "AI Activity",
  "Milestone",
  "Reward",
  "Integrity",
];

function EventTypeBadge({ type }) {
  const styles = {
    Contribution: "border-blue-200 bg-blue-50 text-blue-700",
    Access: "border-purple-200 bg-purple-50 text-purple-700",
    Charter: "border-slate-200 bg-slate-100 text-slate-700",
    "AI Activity": "border-indigo-200 bg-indigo-50 text-indigo-700",
    Milestone: "border-amber-200 bg-amber-50 text-amber-700",
    Reward: "border-emerald-200 bg-emerald-50 text-emerald-700",
    Integrity: "border-cyan-200 bg-cyan-50 text-cyan-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
        styles[type] || "border-slate-200 bg-slate-50 text-slate-600"
      }`}
    >
      {type}
    </span>
  );
}

function ActorBadge({ actorType }) {
  const config = {
    Human: {
      icon: User,
      className: "text-slate-600",
    },
    AI: {
      icon: Bot,
      className: "text-indigo-600",
    },
    System: {
      icon: Network,
      className: "text-slate-500",
    },
  };

  const item = config[actorType] || config.System;
  const Icon = item.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs ${item.className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {actorType}
    </span>
  );
}

export default function WorkspaceAuditTrailPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        {/* SIDEBAR */}
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

                <p className="text-xs text-slate-500">
                  Research Workspace
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-5">
            <div className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Workspace
            </div>

            <nav className="space-y-1">
              <SidebarItem
                icon={Activity}
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
                icon={FileText}
                label="Charter"
                href="/workspace/charter"
              />

              <SidebarItem
                icon={Milestone}
                label="Milestones"
                href="/workspace/milestones"
              />
            </nav>

            <div className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Project
            </div>

            <nav className="space-y-1">
              <SidebarItem
                icon={WalletCards}
                label="Rewards"
                href="/workspace/rewards"
              />

              <SidebarItem
                icon={History}
                label="Audit Trail"
                active
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

                  <p className="text-xs text-slate-500">
                    Project Lead
                  </p>
                </div>
              </div>

              <button className="mt-3 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-900">
                <User className="h-4 w-4" />
                Project account
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="min-w-0 flex-1">
          <header className="border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
              <div className="flex min-w-0 items-center gap-3">
                <Link href="/workspace/overview">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </Link>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>Workspace</span>
                    <ChevronRight className="h-3 w-3" />
                    <span>Project</span>
                    <ChevronRight className="h-3 w-3" />
                    <span>Audit Trail</span>
                  </div>

                  <h1 className="truncate text-xl font-bold text-slate-900">
                    Audit Trail
                  </h1>
                </div>
              </div>

              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Audit
              </Button>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-6 p-5 lg:p-8">
            {/* HERO */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-[#12345B] px-6 py-7 text-white lg:px-8">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                      <History className="h-7 w-7" />
                    </div>

                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                          Audit recording active
                        </span>

                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">
                          Project NX-042
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold">
                        Complete project history
                      </h2>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                        A chronological record of human, AI, and system events
                        across the research project.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-xs text-slate-300">
                      Recorded events
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      98
                    </p>

                    <p className="mt-1 text-xs text-emerald-200">
                      No integrity breaks detected
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid divide-y sm:grid-cols-4 sm:divide-x sm:divide-y-0">
                <AuditStat
                  icon={Activity}
                  label="Total Events"
                  value="98"
                />

                <AuditStat
                  icon={User}
                  label="Human Events"
                  value="61"
                />

                <AuditStat
                  icon={Bot}
                  label="AI Events"
                  value="24"
                />

                <AuditStat
                  icon={ShieldCheck}
                  label="Integrity"
                  value="Verified"
                />
              </div>
            </section>

            {/* SECURITY STATUS */}
            <section className="flex flex-col gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-emerald-900">
                  Audit integrity verified
                </h3>

                <p className="mt-1 text-sm leading-6 text-emerald-800">
                  The current synthetic audit history is internally
                  consistent. Event references and hash values are displayed
                  for project review.
                </p>
              </div>
            </section>

            {/* FILTERS */}
            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
                <div className="relative min-w-0 flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Search event, actor, reference..."
                    className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600 transition hover:bg-slate-50">
                    <Filter className="h-4 w-4" />
                    Event type
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>

                  <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600 transition hover:bg-slate-50">
                    <Calendar className="h-4 w-4" />
                    Date
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>

                  <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600 transition hover:bg-slate-50">
                    <Users className="h-4 w-4" />
                    Actor
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      type === "All Events"
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </section>

            {/* EVENT HISTORY */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-semibold text-slate-900">
                    Event history
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Most recent project events appear first.
                  </p>
                </div>

                <span className="text-xs font-medium text-slate-500">
                  Showing 9 of 98 events
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {auditEvents.map((event) => {
                  const Icon = event.icon;

                  return (
                    <div
                      key={event.id}
                      className="group p-5 transition hover:bg-slate-50 lg:p-6"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <EventTypeBadge type={event.type} />

                                <span className="font-mono text-[11px] text-slate-400">
                                  {event.id}
                                </span>
                              </div>

                              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                                {event.title}
                              </h3>

                              <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
                                {event.description}
                              </p>
                            </div>

                            <div className="shrink-0 text-left xl:text-right">
                              <div className="flex items-center gap-2 xl:justify-end">
                                <Clock3 className="h-3.5 w-3.5 text-slate-400" />

                                <p className="text-xs font-medium text-slate-700">
                                  {event.timestamp}
                                </p>
                              </div>

                              <span className="mt-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                                {event.status}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 md:flex-row md:items-center md:justify-between">
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-400">
                                  Actor
                                </span>

                                <span className="text-xs font-semibold text-slate-700">
                                  {event.actor}
                                </span>

                                <ActorBadge actorType={event.actorType} />
                              </div>

                              <div className="hidden h-4 w-px bg-slate-200 md:block" />

                              <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-400">
                                  Role
                                </span>

                                <span className="text-xs font-medium text-slate-600">
                                  {event.role}
                                </span>
                              </div>

                              <div className="hidden h-4 w-px bg-slate-200 md:block" />

                              <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-400">
                                  Reference
                                </span>

                                <span className="font-mono text-xs text-slate-600">
                                  {event.reference}
                                </span>
                              </div>
                            </div>

                            <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition hover:text-slate-950">
                              <Eye className="h-3.5 w-3.5" />
                              View details
                            </button>
                          </div>

                          <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
                            <Fingerprint className="h-3.5 w-3.5 text-slate-400" />

                            <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                              Event hash
                            </span>

                            <code className="font-mono text-[10px] text-slate-600">
                              {event.hash}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center border-t border-slate-200 p-5">
                <Button variant="outline" size="sm">
                  Load older events
                </Button>
              </div>
            </section>

            {/* CATEGORY SUMMARY */}
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <CategoryCard
                icon={FileCheck2}
                title="Contributions"
                value="32"
                description="Contribution and review events"
              />

              <CategoryCard
                icon={KeyRound}
                title="Access"
                value="18"
                description="Authorized access events"
              />

              <CategoryCard
                icon={Bot}
                title="AI Activity"
                value="24"
                description="Scoped AI actions recorded"
              />

              <CategoryCard
                icon={ShieldCheck}
                title="Integrity"
                value="12"
                description="Verification events"
              />
            </div>

            {/* SECURITY + GOVERNANCE */}
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <LockKeyhole className="h-4 w-4" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Sensitive access history
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Protected resource access remains visible to authorized
                      project participants.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <SecurityRow
                    label="Protected dataset access"
                    value="8 events"
                  />

                  <SecurityRow
                    label="AI scope approvals"
                    value="4 events"
                  />

                  <SecurityRow
                    label="Confidential brief access"
                    value="6 events"
                  />

                  <SecurityRow
                    label="Unauthorized attempts"
                    value="0 detected"
                    success
                  />
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                    <FileText className="h-4 w-4" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Governance records
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Important project decisions are preserved in the audit
                      history.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <SecurityRow
                    label="Current charter"
                    value="v1.2 accepted"
                  />

                  <SecurityRow
                    label="Milestones"
                    value="4 recorded"
                  />

                  <SecurityRow
                    label="Reward events"
                    value="7 recorded"
                  />

                  <SecurityRow
                    label="Dispute events"
                    value="0 active"
                  />
                </div>
              </section>
            </div>

            {/* INTEGRITY */}
            <section className="rounded-xl border border-cyan-200 bg-cyan-50 p-5">
              <div className="flex gap-3">
                <Fingerprint className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />

                <div>
                  <h3 className="text-sm font-semibold text-cyan-900">
                    Audit events are linked to project integrity records
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-cyan-800">
                    Contribution, access, AI, milestone, reward, and charter
                    activity can be correlated with project integrity and
                    governance records.
                  </p>

                  <Link
                    href="/workspace/integrity"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-cyan-900 hover:text-cyan-950"
                  >
                    Open Integrity Center
                    <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                  </Link>
                </div>
              </div>
            </section>

            {/* DEMO NOTICE */}
            <section className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

                <div>
                  <p className="text-xs font-bold text-amber-900">
                    Hackathon demonstration data
                  </p>

                  <p className="mt-1 text-xs leading-5 text-amber-800">
                    The events, hashes, timestamps, actors, access records,
                    reward events, and integrity states shown on this page are
                    synthetic demonstration data. Backend audit persistence and
                    actual cryptographic verification should be connected
                    during integration.
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

function SidebarItem({ icon: Icon, label, href, active = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-[#12345B] text-white shadow-sm"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
}

function AuditStat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-xs text-slate-500">
          {label}
        </p>

        <p className="text-sm font-semibold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}

function CategoryCard({
  icon: Icon,
  title,
  value,
  description,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </p>

          <p className="mt-1 text-[11px] text-slate-400">
            {description}
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

function SecurityRow({
  label,
  value,
  success = false,
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
      <span className="text-xs text-slate-500">
        {label}
      </span>

      <span
        className={`text-xs font-semibold ${
          success
            ? "text-emerald-700"
            : "text-slate-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
}