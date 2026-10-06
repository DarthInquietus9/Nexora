"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  Fingerprint,
  Filter,
  LockKeyhole,
  Search,
  ShieldCheck,
  Users,
  AlertTriangle,
  BriefcaseBusiness,
  CircleDollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "NXR-2026-014",
    title:
      "Low-cost detection of diabetic retinopathy from fundus images on edge devices",
    sponsor: "HealthTech Research Foundation",
    role: "ML Research Expert",
    status: "Active",
    progress: 72,
    milestone: "Milestone 3 — Performance Evaluation",
    due: "Oct 18, 2026",
    members: 4,
    engagement: "Funded",
    reward: "₹32,500",
    charter: "Accepted v2.1",
    access: "Scoped",
    verification: "Verified",
    conflict: "Clear",
    description:
      "Develop and evaluate a lightweight detection approach suitable for deployment on resource-constrained edge devices.",
    nextAction: "Review evaluation report",
  },
  {
    id: "NXR-2026-021",
    title:
      "Privacy-preserving analysis of medical imaging datasets",
    sponsor: "MedAI Innovation Lab",
    role: "Research Mentor",
    status: "Review Required",
    progress: 45,
    milestone: "Milestone 2 — Privacy Evaluation",
    due: "Oct 21, 2026",
    members: 3,
    engagement: "Honorarium",
    reward: "₹18,000",
    charter: "Accepted v1.3",
    access: "Scoped",
    verification: "Verified",
    conflict: "Clear",
    description:
      "Evaluate privacy-preserving approaches for collaborative medical imaging research while maintaining research utility.",
    nextAction: "Review milestone submission",
  },
  {
    id: "NXR-2026-008",
    title:
      "Explainable AI framework for agricultural disease detection",
    sponsor: "AgriTech Research Group",
    role: "AI Research Advisor",
    status: "Completed",
    progress: 100,
    milestone: "Project Completed",
    due: "Oct 3, 2026",
    members: 5,
    engagement: "Knowledge Sharing",
    reward: "48 Credits",
    charter: "Completed v1.0",
    access: "Closed",
    verification: "Verified",
    conflict: "Clear",
    description:
      "Develop an explainable AI workflow for agricultural disease detection with transparent research documentation.",
    nextAction: "View project record",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Active:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    "Review Required":
      "border-amber-200 bg-amber-50 text-amber-700",
    Completed:
      "border-slate-200 bg-slate-100 text-slate-600",
  };

  const icons = {
    Active: CheckCircle2,
    "Review Required": AlertTriangle,
    Completed: CheckCircle2,
  };

  const Icon = icons[status] || CheckCircle2;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
        styles[status] || styles.Completed
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}

function SecurityBadge({ children, type = "success" }) {
  const styles = {
    success:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    warning:
      "border-amber-200 bg-amber-50 text-amber-700",
    neutral:
      "border-slate-200 bg-slate-50 text-slate-600",
    blue:
      "border-blue-200 bg-blue-50 text-blue-700",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
        styles[type]
      }`}
    >
      {type === "success" && <CheckCircle2 className="h-3 w-3" />}
      {type === "warning" && <AlertTriangle className="h-3 w-3" />}
      {type === "neutral" && <LockKeyhole className="h-3 w-3" />}
      {type === "blue" && <ShieldCheck className="h-3 w-3" />}
      {children}
    </span>
  );
}

export default function AssignedProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/expert/dashboard">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900 text-white">
                <BookOpen className="h-5 w-5" />
              </div>

              <div>
                <p className="font-bold tracking-tight">Nex.Res</p>
                <p className="text-xs text-slate-500">
                  Expert Workspace
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Dr. Priya Menon</p>
              <p className="text-xs text-slate-500">
                Verified Expert
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
              PM
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Heading */}
        <section className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
              Expert Projects
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Assigned Projects
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              View the research projects assigned to you, monitor milestone
              progress and access the work that requires your expertise.
            </p>
          </div>

          <Link href="/expert/review">
            <Button>
              <FileCheck2 className="mr-2 h-4 w-4" />
              Open Review Queue
            </Button>
          </Link>
        </section>

        {/* Summary */}
        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-slate-400">
                Current
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Total Assigned
            </p>

            <p className="mt-1 text-3xl font-bold">3</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-emerald-600">
                1 active
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Active Projects
            </p>

            <p className="mt-1 text-3xl font-bold">1</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Clock3 className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-amber-600">
                Action needed
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Reviews Required
            </p>

            <p className="mt-1 text-3xl font-bold">1</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <Award className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-slate-400">
                Current cycle
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Rewards / Credits
            </p>

            <p className="mt-1 text-3xl font-bold">80.5k</p>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-6 rounded-2xl border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-3">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search assigned projects..."
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 shrink-0"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              <button className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                All Projects
              </button>

              <button className="rounded-lg px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50">
                Active
              </button>

              <button className="rounded-lg px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50">
                Review
              </button>

              <button className="hidden rounded-lg px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50 sm:block">
                Completed
              </button>
            </div>
          </div>
        </section>

        {/* Project cards */}
        <section className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {/* Card header */}
              <div className="border-b px-6 py-5">
                <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-start">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <BookOpen className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                          {project.id}
                        </span>

                        <StatusBadge status={project.status} />
                      </div>

                      <h2 className="mt-2 max-w-4xl text-lg font-bold leading-7 text-slate-950">
                        {project.title}
                      </h2>

                      <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <Link href="/expert/review">
                    <Button variant="outline" size="sm">
                      {project.status === "Review Required"
                        ? "Review Project"
                        : "Open Project"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Project information */}
              <div className="grid border-b md:grid-cols-2 lg:grid-cols-4">
                <div className="border-b p-5 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Your Role
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-semibold">
                      {project.role}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Sponsor: {project.sponsor}
                  </p>
                </div>

                <div className="border-b p-5 md:border-r lg:border-b-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Current Milestone
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    {project.milestone}
                  </p>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Due {project.due}
                  </div>
                </div>

                <div className="border-b p-5 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Team
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-semibold">
                      {project.members} members
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Collaborative research team
                  </p>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Engagement
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <CircleDollarSign className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-semibold">
                      {project.engagement}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Reward: {project.reward}
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="border-b bg-slate-50 px-6 py-5">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Project Progress
                    </p>
                  </div>

                  <span className="text-sm font-bold text-slate-800">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${
                      project.progress === 100
                        ? "bg-emerald-600"
                        : "bg-blue-700"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Security and charter */}
              <div className="border-b px-6 py-4">
                <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Project Controls
                    </span>

                    <SecurityBadge type="success">
                      Identity Verified
                    </SecurityBadge>

                    <SecurityBadge type="blue">
                      Access {project.access}
                    </SecurityBadge>

                    <SecurityBadge type="success">
                      COI {project.conflict}
                    </SecurityBadge>

                    <SecurityBadge type="neutral">
                      Charter {project.charter}
                    </SecurityBadge>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Fingerprint className="h-3.5 w-3.5" />
                    Contribution activity is audit-visible
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col justify-between gap-4 px-6 py-5 md:flex-row md:items-center">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Next recommended action
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {project.nextAction}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Users className="mr-2 h-4 w-4" />
                    View Team
                  </Button>

                  <Button variant="outline" size="sm">
                    <FileCheck2 className="mr-2 h-4 w-4" />
                    View Charter
                  </Button>

                  <Link href="/expert/review">
                    <Button size="sm">
                      Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Access note */}
        <section className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <LockKeyhole className="h-5 w-5" />
            </div>

            <div>
              <h3 className="font-semibold text-blue-950">
                Project-scoped expert access
              </h3>

              <p className="mt-1 text-sm leading-6 text-blue-900/75">
                Experts only receive access to projects and research
                information relevant to their assigned role. Confidential
                project material should remain within its approved access
                scope.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified identity
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
                  <LockKeyhole className="h-3.5 w-3.5" />
                  Scoped access
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
                  <Fingerprint className="h-3.5 w-3.5" />
                  Audit-visible activity
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Demo disclaimer */}
        <p className="mt-5 text-center text-xs leading-5 text-slate-400">
          Demo interface using synthetic project data. Verification,
          access-control and audit indicators represent the intended Nex.Res
          workflow and should be connected to backend enforcement later.
        </p>
      </div>
    </main>
  );
}