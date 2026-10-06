"use client";

import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Eye,
  FileCheck2,
  Filter,
  FolderKanban,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  MoreHorizontal,
  Search,
  ShieldCheck,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "NX-042",
    title: "Low-cost Diabetic Retinopathy Detection",
    sponsor: "Nova Research Labs",
    status: "Active",
    engagement: "Funded",
    progress: 68,
    members: 6,
    budget: "₹1,00,000",
    escrow: "₹65,000",
    integrity: "Verified",
    visibility: "Confidential",
  },
  {
    id: "NX-041",
    title: "Secure Document Intelligence",
    sponsor: "TechNova Foundation",
    status: "Matching",
    engagement: "Funded",
    progress: 24,
    members: 4,
    budget: "₹80,000",
    escrow: "₹40,000",
    integrity: "Verified",
    visibility: "Confidential",
  },
  {
    id: "NX-040",
    title: "Climate Data Analysis Platform",
    sponsor: "GreenTech Initiative",
    status: "Active",
    engagement: "Knowledge",
    progress: 54,
    members: 7,
    budget: "Non-monetary",
    escrow: "—",
    integrity: "Verified",
    visibility: "Open",
  },
  {
    id: "NX-039",
    title: "Smart Mobility Research",
    sponsor: "Urban Future Labs",
    status: "Review",
    engagement: "Stipend",
    progress: 82,
    members: 5,
    budget: "₹60,000",
    escrow: "₹15,000",
    integrity: "Flagged",
    visibility: "Confidential",
  },
  {
    id: "NX-038",
    title: "AI Assisted Medical Literature Review",
    sponsor: "MedResearch Group",
    status: "Completed",
    engagement: "Institutional Credit",
    progress: 100,
    members: 8,
    budget: "Credit",
    escrow: "—",
    integrity: "Verified",
    visibility: "Open",
  },
  {
    id: "NX-037",
    title: "Privacy-Preserving Federated Learning",
    sponsor: "DataSecure Labs",
    status: "Active",
    engagement: "Funded",
    progress: 43,
    members: 6,
    budget: "₹1,25,000",
    escrow: "₹75,000",
    integrity: "Verified",
    visibility: "Confidential",
  },
  {
    id: "NX-036",
    title: "Assistive Technology Research",
    sponsor: "AccessFirst Foundation",
    status: "Draft",
    engagement: "Honorarium",
    progress: 8,
    members: 2,
    budget: "₹35,000",
    escrow: "—",
    integrity: "Not checked",
    visibility: "Private",
  },
  {
    id: "NX-035",
    title: "Cyber Threat Intelligence Study",
    sponsor: "SecureNet Research",
    status: "Disputed",
    engagement: "Funded",
    progress: 61,
    members: 5,
    budget: "₹90,000",
    escrow: "₹30,000",
    integrity: "Review",
    visibility: "Confidential",
  },
];

const statusFilters = [
  "All projects",
  "Active",
  "Matching",
  "Review",
  "Completed",
  "Disputed",
];

function StatusBadge({ status }) {
  const styles = {
    Active: "border-emerald-200 bg-emerald-50 text-emerald-700",
    Matching: "border-blue-200 bg-blue-50 text-blue-700",
    Review: "border-amber-200 bg-amber-50 text-amber-700",
    Completed: "border-slate-200 bg-slate-100 text-slate-700",
    Draft: "border-slate-200 bg-slate-50 text-slate-500",
    Disputed: "border-red-200 bg-red-50 text-red-700",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
        styles[status] || styles.Draft
      }`}
    >
      {status}
    </span>
  );
}

function IntegrityBadge({ status }) {
  if (status === "Verified") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Verified
      </span>
    );
  }

  if (status === "Flagged") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700">
        <AlertTriangle className="h-3.5 w-3.5" />
        Flagged
      </span>
    );
  }

  if (status === "Review") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700">
        <Activity className="h-3.5 w-3.5" />
        Review
      </span>
    );
  }

  return (
    <span className="text-xs font-medium text-slate-400">
      Not checked
    </span>
  );
}

function EngagementBadge({ engagement }) {
  const styles = {
    Funded: "bg-blue-50 text-blue-700",
    Stipend: "bg-purple-50 text-purple-700",
    Knowledge: "bg-emerald-50 text-emerald-700",
    "Institutional Credit": "bg-amber-50 text-amber-700",
    Honorarium: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`rounded-md px-2 py-1 text-[11px] font-medium ${
        styles[engagement] || "bg-slate-100 text-slate-700"
      }`}
    >
      {engagement}
    </span>
  );
}

export default function AdminProjectsPage() {
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
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium"
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
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
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

      {/* Main content */}
      <main className="lg:pl-64">
        {/* Header */}
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
                  Projects
                </span>
              </div>

              <h1 className="mt-1 text-xl font-bold text-slate-950">
                Project Management
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
                <Search className="h-4 w-4 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search projects..."
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
          {/* Introduction */}
          <section className="mb-6">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <FolderKanban className="h-3.5 w-3.5" />
                  Research portfolio
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  All Research Projects
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Monitor project lifecycle, teams, engagement models,
                  funding, integrity and access classification.
                </p>
              </div>

              <Button variant="outline" className="gap-2">
                <FolderKanban className="h-4 w-4" />
                Project Report
              </Button>
            </div>
          </section>

          {/* Summary cards */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <SummaryCard
              title="Total Projects"
              value="156"
              description="Across all stages"
              icon={<FolderKanban className="h-4 w-4" />}
            />

            <SummaryCard
              title="Active"
              value="86"
              description="Currently in progress"
              icon={<Activity className="h-4 w-4" />}
              type="green"
            />

            <SummaryCard
              title="Matching"
              value="14"
              description="Finding contributors"
              icon={<Users className="h-4 w-4" />}
              type="blue"
            />

            <SummaryCard
              title="Under Review"
              value="09"
              description="Require attention"
              icon={<AlertTriangle className="h-4 w-4" />}
              type="amber"
            />

            <SummaryCard
              title="Disputed"
              value="07"
              description="Open disputes"
              icon={<AlertTriangle className="h-4 w-4" />}
              type="red"
            />
          </section>

          {/* Monitoring cards */}
          <section className="mt-6 grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={<Wallet className="h-5 w-5" />}
              iconStyle="blue"
              title="Funded Projects"
              description="Projects using simulated escrow"
              value="42"
              footer="projects currently funded"
            />

            <InfoCard
              icon={<CircleDollarSign className="h-5 w-5" />}
              iconStyle="green"
              title="Escrow Value"
              description="Simulated platform funding"
              value="₹18.6L"
              footer="₹4.2L pending milestone release"
            />

            <InfoCard
              icon={<Bot className="h-5 w-5" />}
              iconStyle="purple"
              title="AI-Assisted Projects"
              description="Projects with scoped AI agents"
              value="71"
              footer="AI actions remain human-owned"
            />
          </section>

          {/* Filters */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((status, index) => (
                  <button
                    key={status}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold ${
                      index === 0
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <FilterButton
                  icon={<Filter className="h-3.5 w-3.5" />}
                  label="Engagement"
                />

                <FilterButton
                  icon={<ShieldCheck className="h-3.5 w-3.5" />}
                  label="Integrity"
                />

                <FilterButton
                  icon={<LockKeyhole className="h-3.5 w-3.5" />}
                  label="Visibility"
                />
              </div>
            </div>
          </section>

          {/* Project table */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <div>
                <h3 className="font-semibold text-slate-950">
                  Research Projects
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Showing 8 of 156 projects
                </p>
              </div>

              <span className="text-xs text-slate-500">
                Updated just now
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1200px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left">
                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Project
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Engagement
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Progress
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Team
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Funding
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Integrity
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Visibility
                    </th>

                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {projects.map((project) => (
                    <tr
                      key={project.id}
                      className="border-b border-slate-100 hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <div className="max-w-[280px]">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">
                              {project.id}
                            </span>
                          </div>

                          <p className="text-sm font-semibold leading-5 text-slate-900">
                            {project.title}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Sponsor: {project.sponsor}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge status={project.status} />
                      </td>

                      <td className="px-4 py-4">
                        <EngagementBadge
                          engagement={project.engagement}
                        />
                      </td>

                      <td className="px-4 py-4">
                        <div className="w-28">
                          <div className="mb-1 flex justify-between">
                            <span className="text-xs font-semibold text-slate-700">
                              {project.progress}%
                            </span>
                          </div>

                          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-slate-800"
                              style={{
                                width: `${project.progress}%`,
                              }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-800">
                          <Users className="h-4 w-4 text-slate-400" />
                          {project.members}
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {project.budget}
                          </p>

                          <p className="mt-1 text-[11px] text-slate-500">
                            Escrow: {project.escrow}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <IntegrityBadge status={project.integrity} />
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                          <LockKeyhole className="h-3.5 w-3.5 text-slate-400" />
                          {project.visibility}
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1">
                          <button
                            title="View project"
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

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-slate-200 px-5 py-4">
              <p className="text-xs text-slate-500">
                Showing <strong>1</strong> to <strong>8</strong> of{" "}
                <strong>156</strong> projects
              </p>

              <div className="flex gap-1">
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

          {/* Project monitoring */}
          <section className="mt-6 grid gap-6 lg:grid-cols-3">
            <MonitoringCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Integrity Monitoring"
              description="Contribution and project integrity signals."
              value="148"
              footer="projects verified"
              type="green"
            />

            <MonitoringCard
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Projects Requiring Attention"
              description="Integrity flags, disputes or warnings."
              value="16"
              footer="need administrator review"
              type="red"
            />

            <MonitoringCard
              icon={<Bot className="h-5 w-5" />}
              title="AI Governance"
              description="Projects using scoped AI agents."
              value="71"
              footer="AI-enabled projects"
              type="blue"
            />
          </section>

          {/* Administrative controls */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-semibold text-slate-950">
                  Administrative Controls
                </h3>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
                  Project administration should preserve accepted charter
                  terms, access boundaries, contribution records and security
                  controls.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link href="/admin/audit">
                  <Button variant="outline" className="gap-2">
                    <FileCheck2 className="h-4 w-4" />
                    Audit
                  </Button>
                </Link>

                <Link href="/admin/disputes">
                  <Button variant="outline" className="gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Disputes
                  </Button>
                </Link>

                <Link href="/admin/ledger">
                  <Button variant="outline" className="gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    Ledger
                  </Button>
                </Link>
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
              Project names, sponsors, budgets, escrow values, progress,
              integrity states and team counts are synthetic data for the
              hackathon prototype. Actual funding, access control and
              integrity verification depend on the implemented backend.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function SummaryCard({ title, value, description, icon, type }) {
  const styles = {
    green: "border-emerald-200 bg-emerald-50/60 text-emerald-700",
    blue: "border-blue-200 bg-blue-50/60 text-blue-700",
    amber: "border-amber-200 bg-amber-50/60 text-amber-700",
    red: "border-red-200 bg-red-50/60 text-red-700",
    default: "border-slate-200 bg-white text-slate-500",
  };

  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm ${
        styles[type] || styles.default
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium">{title}</p>
        {icon}
      </div>

      <p className="mt-2 text-2xl font-bold">{value}</p>

      <p className="mt-1 text-xs">{description}</p>
    </div>
  );
}

function InfoCard({
  icon,
  iconStyle,
  title,
  description,
  value,
  footer,
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    purple: "bg-purple-50 text-purple-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            styles[iconStyle]
          }`}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-950">
            {title}
          </h3>

          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-2xl font-bold text-slate-950">{value}</p>

        <p className="mt-1 text-xs text-slate-500">{footer}</p>
      </div>
    </div>
  );
}

function FilterButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
      {icon}
      {label}
      <ChevronDown className="h-3.5 w-3.5" />
    </button>
  );
}

function MonitoringCard({
  icon,
  title,
  description,
  value,
  footer,
  type,
}) {
  const styles = {
    green: {
      icon: "bg-emerald-50 text-emerald-700",
      box: "bg-emerald-50",
      value: "text-emerald-800",
    },
    red: {
      icon: "bg-red-50 text-red-700",
      box: "bg-red-50",
      value: "text-red-800",
    },
    blue: {
      icon: "bg-blue-50 text-blue-700",
      box: "bg-blue-50",
      value: "text-blue-800",
    },
  };

  const style = styles[type];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${style.icon}`}
        >
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-slate-950">{title}</h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <div className={`mt-5 rounded-xl p-4 ${style.box}`}>
        <p className={`text-2xl font-bold ${style.value}`}>{value}</p>

        <p className="text-xs text-slate-600">{footer}</p>
      </div>
    </div>
  );
}