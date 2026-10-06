"use client";

import Link from "next/link";
import {
  AlertTriangle,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Copy,
  Eye,
  FileCheck2,
  Filter,
  FolderKanban,
  Hash,
  KeyRound,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  LogOut,
  MoreHorizontal,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const ledgerEntries = [
  {
    id: "LED-12048",
    block: "004821",
    time: "09:42:18",
    contributor: "Aarav Mehta",
    actor: "Human",
    action: "Research methodology submitted",
    project: "EdgeVision Research",
    contribution: "Methodology",
    hash: "8f2c9a71...4d91",
    previousHash: "c41d8e29...91ab",
    status: "Verified",
  },
  {
    id: "LED-12047",
    block: "004820",
    time: "09:39:54",
    contributor: "AI Scoping Agent",
    actor: "AI Agent",
    action: "Milestone structure generated",
    project: "Secure Document Intelligence",
    contribution: "AI Analysis",
    hash: "c41d8e29...91ab",
    previousHash: "71ab23fc...92de",
    status: "Verified",
  },
  {
    id: "LED-12046",
    block: "004819",
    time: "09:36:27",
    contributor: "Priya Nair",
    actor: "Human",
    action: "Literature review accepted",
    project: "Climate Data Analysis",
    contribution: "Literature Review",
    hash: "71ab23fc...92de",
    previousHash: "29fd81aa...22bc",
    status: "Verified",
  },
  {
    id: "LED-12045",
    block: "004818",
    time: "09:31:42",
    contributor: "System Integrity Agent",
    actor: "System",
    action: "Contribution integrity verified",
    project: "Digital Health Analytics",
    contribution: "Integrity Check",
    hash: "29fd81aa...22bc",
    previousHash: "b8e172ca...19ef",
    status: "Verified",
  },
  {
    id: "LED-12044",
    block: "004817",
    time: "09:27:11",
    contributor: "Rahul Sharma",
    actor: "Human",
    action: "Dataset analysis uploaded",
    project: "Smart Mobility Research",
    contribution: "Data Analysis",
    hash: "b8e172ca...19ef",
    previousHash: "7ce91a22...11da",
    status: "Review",
  },
  {
    id: "LED-12043",
    block: "004816",
    time: "09:21:08",
    contributor: "AI Review Agent",
    actor: "AI Agent",
    action: "Similarity analysis recorded",
    project: "Smart Mobility Research",
    contribution: "AI Analysis",
    hash: "7ce91a22...11da",
    previousHash: "18ca71ef...62bc",
    status: "Flagged",
  },
  {
    id: "LED-12042",
    block: "004815",
    time: "09:17:34",
    contributor: "Meera Thomas",
    actor: "Human",
    action: "Confidential document access",
    project: "Secure Medical Imaging",
    contribution: "Access Event",
    hash: "18ca71ef...62bc",
    previousHash: "52ad92be...81ff",
    status: "Blocked",
  },
  {
    id: "LED-12041",
    block: "004814",
    time: "09:12:51",
    contributor: "Nova Research Labs",
    actor: "Human",
    action: "Milestone submitted for acceptance",
    project: "EdgeVision Research",
    contribution: "Milestone",
    hash: "52ad92be...81ff",
    previousHash: "a912c3fe...42ad",
    status: "Verified",
  },
];

const filters = [
  "All entries",
  "Human",
  "AI Agent",
  "System",
  "Flagged",
  "Blocked",
];

function ActorBadge({ actor }) {
  const styles = {
    Human: "bg-blue-50 text-blue-700",
    "AI Agent": "bg-purple-50 text-purple-700",
    System: "bg-slate-100 text-slate-700",
  };

  const icons = {
    Human: Users,
    "AI Agent": Bot,
    System: ShieldCheck,
  };

  const Icon = icons[actor] || Users;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-semibold ${
        styles[actor] || styles.Human
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {actor}
    </span>
  );
}

function LedgerStatus({ status }) {
  const data = {
    Verified: {
      style: "text-emerald-700",
      icon: CheckCircle2,
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

  const item = data[status] || data.Review;
  const Icon = item.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${item.style}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}

export default function AdminLedgerPage() {
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
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
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
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium"
            >
              <Hash className="h-4 w-4" />
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
                  Ledger
                </span>
              </div>

              <h1 className="mt-1 text-xl font-bold text-slate-950">
                Contribution Ledger
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
                <Search className="h-4 w-4 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search ledger..."
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
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <Link2 className="h-3.5 w-3.5" />
                  Hash-linked contribution record
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Contribution Integrity Ledger
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Review the chronological record of human, AI and system
                  actions. Each demo entry references the previous record to
                  represent a tamper-evident contribution chain.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Verify Chain
                </Button>

                <Button variant="outline" className="gap-2">
                  <FileCheck2 className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </section>

          {/* Ledger status */}
          <section className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-slate-950">
                      Ledger Integrity Verified
                    </h3>

                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                      HEALTHY
                    </span>
                  </div>

                  <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
                    The latest demo verification found no broken links in
                    the represented contribution chain.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <LedgerMetric label="Blocks" value="4,821" />
                <LedgerMetric label="Verified" value="4,816" />
                <LedgerMetric label="Flagged" value="04" />
                <LedgerMetric label="Last Check" value="2m ago" />
              </div>
            </div>
          </section>

          {/* Security explanation */}
          <section className="mt-6 grid gap-6 lg:grid-cols-3">
            <LedgerFeature
              icon={<Hash className="h-5 w-5" />}
              title="Hash Linking"
              description="Each contribution record references its previous record through a hash value."
              type="blue"
            />

            <LedgerFeature
              icon={<ShieldAlert className="h-5 w-5" />}
              title="Tamper Detection"
              description="A changed record should cause the chain verification to fail at the affected point."
              type="red"
            />

            <LedgerFeature
              icon={<UserCheck className="h-5 w-5" />}
              title="Human Attribution"
              description="AI actions are attributed to the human owner or reviewer rather than treated as independent contributors."
              type="green"
            />
          </section>

          {/* Filters */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter, index) => (
                  <button
                    key={filter}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold ${
                      index === 0
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <FilterButton label="Project" />
                <FilterButton label="Contribution" />
                <FilterButton label="Status" />

                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <Clock3 className="h-3.5 w-3.5" />
                  Latest
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* Ledger table */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-950">
                  Ledger Entries
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Chronological contribution chain
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Chain currently verified
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1450px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left">
                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Entry
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Time
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Contributor
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Project
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Hash
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Previous Hash
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {ledgerEntries.map((entry) => (
                    <tr
                      key={entry.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <div>
                          <span className="rounded-md bg-slate-900 px-2 py-1 text-[10px] font-bold text-white">
                            #{entry.block}
                          </span>

                          <p className="mt-2 text-[10px] font-medium text-slate-400">
                            {entry.id}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                          <Clock3 className="h-3.5 w-3.5 text-slate-400" />
                          {entry.time}
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {entry.contributor}
                          </p>

                          <div className="mt-1">
                            <ActorBadge actor={entry.actor} />
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div>
                          <p className="max-w-[230px] text-sm font-medium text-slate-700">
                            {entry.action}
                          </p>

                          <p className="mt-1 text-[10px] text-slate-400">
                            {entry.contribution}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <p className="max-w-[180px] text-xs font-medium text-slate-700">
                          {entry.project}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <HashValue value={entry.hash} />
                      </td>

                      <td className="px-4 py-4">
                        <HashValue value={entry.previousHash} muted />
                      </td>

                      <td className="px-4 py-4">
                        <LedgerStatus status={entry.status} />
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1">
                          <button
                            title="View ledger entry"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-700"
                          >
                            <Eye className="h-4 w-4" />
                          </button>

                          <button
                            title="More actions"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-700">1</span>{" "}
                to{" "}
                <span className="font-semibold text-slate-700">8</span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  4,821
                </span>{" "}
                ledger entries
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

          {/* Chain visualization */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-950">
                  Hash Chain Visualization
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Each record links to the previous record in sequence.
                </p>
              </div>

              <span className="text-xs font-semibold text-emerald-700">
                4,821 → 4,820 → 4,819 → 4,818
              </span>
            </div>

            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex min-w-[850px] items-center">
                <ChainBlock
                  block="004821"
                  hash="8f2c9a71"
                  label="Research methodology"
                  status="verified"
                />

                <ChainArrow />

                <ChainBlock
                  block="004820"
                  hash="c41d8e29"
                  label="AI milestone scope"
                  status="verified"
                />

                <ChainArrow />

                <ChainBlock
                  block="004819"
                  hash="71ab23fc"
                  label="Literature review"
                  status="verified"
                />

                <ChainArrow />

                <ChainBlock
                  block="004818"
                  hash="29fd81aa"
                  label="Integrity check"
                  status="verified"
                />
              </div>
            </div>
          </section>

          {/* Tamper test */}
          <section className="mt-6 rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700">
                  <ShieldAlert className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Tamper Detection
                  </h3>

                  <p className="mt-1 max-w-3xl text-xs leading-5 text-slate-500">
                    In the intended system, changing an existing contribution
                    record would invalidate its hash relationship and expose
                    a broken point in the chain.
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-50"
              >
                Run Integrity Check
              </Button>
            </div>
          </section>

          {/* AI attribution */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Bot className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    AI Contribution Attribution
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    AI agents are recorded as scoped actors, while the
                    responsible human owner remains accountable for the
                    activity.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-purple-50 p-4">
                <div>
                  <p className="text-xl font-bold text-purple-800">
                    326
                  </p>

                  <p className="text-xs text-purple-700">
                    AI actions recorded
                  </p>
                </div>

                <Link2 className="h-6 w-6 text-purple-600" />
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <KeyRound className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Access Integrity
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Access events can be associated with ledger and audit
                    records for investigation.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-blue-50 p-4">
                <div>
                  <p className="text-xl font-bold text-blue-800">
                    602
                  </p>

                  <p className="text-xs text-blue-700">
                    access events represented
                  </p>
                </div>

                <LockKeyhole className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </section>

          {/* Demo note */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

            <p>
              <span className="font-semibold text-slate-700">
                Demo data:
              </span>{" "}
              Ledger blocks, hashes, verification states, AI actions and
              contribution records are synthetic representations for the
              hackathon prototype. The UI demonstrates the intended
              tamper-evident workflow; actual append-only storage, SHA-256
              hashing and chain verification depend on the backend
              implementation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function LedgerMetric({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 px-4 py-3">
      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function LedgerFeature({
  icon,
  title,
  description,
  type,
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-700",
    red: "bg-red-50 text-red-700",
    green: "bg-emerald-50 text-emerald-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles[type]}`}
      >
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>
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

function HashValue({ value, muted = false }) {
  return (
    <button
      className={`group flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[10px] ${
        muted
          ? "bg-slate-50 text-slate-400"
          : "bg-slate-100 text-slate-600"
      }`}
      title={value}
    >
      <Hash className="h-3 w-3" />
      {value}
      <Copy className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
    </button>
  );
}

function ChainBlock({
  block,
  hash,
  label,
  status,
}) {
  return (
    <div className="w-48 shrink-0 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-slate-900 px-2 py-1 text-[9px] font-bold text-white">
          #{block}
        </span>

        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
      </div>

      <p className="mt-3 text-xs font-semibold text-slate-900">
        {label}
      </p>

      <p className="mt-2 font-mono text-[10px] text-slate-500">
        {hash}...
      </p>

      <p className="mt-2 text-[9px] font-semibold uppercase tracking-wide text-emerald-700">
        {status}
      </p>
    </div>
  );
}

function ChainArrow() {
  return (
    <div className="flex w-16 shrink-0 items-center justify-center">
      <div className="h-px w-8 bg-slate-300" />
      <ChevronRight className="h-4 w-4 text-slate-400" />
    </div>
  );
}