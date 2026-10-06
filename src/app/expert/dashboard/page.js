"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Fingerprint,
  LockKeyhole,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "NXR-2026-014",
    title:
      "Low-cost detection of diabetic retinopathy from fundus images on edge devices",
    role: "ML Research Expert",
    progress: 72,
    milestone: "Milestone 3",
    status: "Active",
    due: "Oct 18, 2026",
    team: 4,
  },
  {
    id: "NXR-2026-021",
    title: "Privacy-preserving analysis of medical imaging datasets",
    role: "Research Mentor",
    progress: 45,
    milestone: "Milestone 2",
    status: "Review Required",
    due: "Oct 21, 2026",
    team: 3,
  },
];

const reviews = [
  {
    title: "Performance Evaluation Report",
    project: "NXR-2026-014",
    contributor: "Rohan Mehta",
    submitted: "2 hours ago",
    priority: "High",
  },
  {
    title: "Dataset Preprocessing Notes",
    project: "NXR-2026-021",
    contributor: "Ananya Rao",
    submitted: "Yesterday",
    priority: "Normal",
  },
  {
    title: "Edge Deployment Documentation",
    project: "NXR-2026-014",
    contributor: "Meera Nair",
    submitted: "2 days ago",
    priority: "Normal",
  },
];

export default function ExpertDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900 text-white">
                  <BookOpen className="h-5 w-5" />
                </div>

                <span className="text-xl font-bold tracking-tight">
                  Nex.Res
                </span>
              </div>
            </Link>

            <div className="hidden h-6 w-px bg-slate-200 sm:block" />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">
                Expert Workspace
              </p>
              <p className="text-xs text-slate-500">
                Research & mentorship
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border bg-white text-slate-600 hover:bg-slate-50">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>

            <div className="flex items-center gap-3 border-l pl-4">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-slate-900">
                  Dr. Priya Menon
                </p>
                <p className="text-xs text-slate-500">
                  Verified Expert
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
                PM
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Welcome */}
        <section className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
              Expert Workspace
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Good morning, Dr. Priya.
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Review research contributions, mentor project teams and help
              maintain high-quality, accountable research workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/expert/assigned-projects">
              <Button>
                <BriefcaseBusiness className="mr-2 h-4 w-4" />
                Assigned Projects
              </Button>
            </Link>

            <Link href="/expert/review">
              <Button variant="outline">
                <FileCheck2 className="mr-2 h-4 w-4" />
                Review Queue
              </Button>
            </Link>
          </div>
        </section>

        {/* Verification banner */}
        <section className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-semibold text-emerald-950">
                  Expert identity verified
                </h2>

                <p className="mt-1 text-sm leading-6 text-emerald-900/75">
                  Your expert profile is verified for research participation.
                  Project access remains scoped to the projects you are
                  assigned to.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Verification Active
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-emerald-600">
                +1 this month
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Active Projects
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-950">
              2
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Clock3 className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-amber-600">
                Needs attention
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Pending Reviews
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-950">
              3
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Award className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-slate-500">
                This cycle
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Research Credits
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-950">
              48
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <WalletCards className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-slate-500">
                Charter-based
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Earned Rewards
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-950">
              ₹32,500
            </p>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Assigned projects */}
            <section className="rounded-2xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b px-6 py-5">
                <div>
                  <h2 className="font-bold text-slate-950">
                    Assigned Projects
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Research projects requiring your expertise
                  </p>
                </div>

                <Link
                  href="/expert/assigned-projects"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  View all
                </Link>
              </div>

              <div className="divide-y">
                {projects.map((project) => (
                  <div key={project.id} className="p-6">
                    <div className="flex flex-col justify-between gap-4 md:flex-row">
                      <div className="max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                            {project.id}
                          </span>

                          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                            {project.status}
                          </span>
                        </div>

                        <h3 className="mt-2 font-bold leading-6 text-slate-950">
                          {project.title}
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5" />
                            {project.team} members
                          </span>

                          <span className="flex items-center gap-1.5">
                            <BriefcaseBusiness className="h-3.5 w-3.5" />
                            {project.role}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Clock3 className="h-3.5 w-3.5" />
                            Due {project.due}
                          </span>
                        </div>
                      </div>

                      <Link href="/expert/assigned-projects">
                        <Button variant="outline" size="sm">
                          Open
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-500">
                          {project.milestone}
                        </span>

                        <span className="font-semibold text-slate-700">
                          {project.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-blue-700"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Review queue */}
            <section className="rounded-2xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b px-6 py-5">
                <div>
                  <h2 className="font-bold text-slate-950">
                    Review Queue
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Contributions waiting for expert review
                  </p>
                </div>

                <Link href="/expert/review">
                  <Button variant="outline" size="sm">
                    Open Queue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="divide-y">
                {reviews.map((review) => (
                  <div
                    key={review.title}
                    className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                        <FileCheck2 className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-semibold text-slate-950">
                            {review.title}
                          </h3>

                          {review.priority === "High" && (
                            <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-700">
                              High Priority
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          {review.project} • {review.contributor}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Submitted {review.submitted}
                        </p>
                      </div>
                    </div>

                    <Link href="/expert/review">
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Expert profile */}
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-800">
                    PM
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-950">
                      Dr. Priya Menon
                    </h2>

                    <p className="text-xs text-slate-500">
                      ML Research & Medical AI
                    </p>
                  </div>
                </div>

                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-xs text-slate-500">
                    Verification
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">
                    Verified
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-xs text-slate-500">
                    Projects completed
                  </span>
                  <span className="text-sm font-bold">14</span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-xs text-slate-500">
                    Research credits
                  </span>
                  <span className="text-sm font-bold">126</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Avg. review time
                  </span>
                  <span className="text-sm font-bold">18h</span>
                </div>
              </div>

              <Button variant="outline" className="mt-5 w-full">
                View Expert Profile
              </Button>
            </section>

            {/* Security */}
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <LockKeyhole className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-bold text-slate-950">
                    Access & Security
                  </h2>

                  <p className="text-xs text-slate-500">
                    Current workspace controls
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl border bg-slate-50 p-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span className="text-xs font-medium">
                      Identity verification
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-700">
                    ACTIVE
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border bg-slate-50 p-3">
                  <div className="flex items-center gap-2">
                    <Fingerprint className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-medium">
                      Contribution logging
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-blue-700">
                    ENABLED
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border bg-slate-50 p-3">
                  <div className="flex items-center gap-2">
                    <LockKeyhole className="h-4 w-4 text-slate-600" />
                    <span className="text-xs font-medium">
                      Project-scoped access
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-slate-700">
                    ON
                  </span>
                </div>
              </div>

              <p className="mt-4 text-[11px] leading-5 text-slate-400">
                Security indicators represent the intended platform workflow
                in this frontend demo and are not claims of backend
                enforcement.
              </p>
            </section>

            {/* AI assistant */}
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-bold text-slate-950">
                    AI Research Assistant
                  </h2>

                  <p className="text-xs text-slate-500">
                    Project-scoped assistance
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 text-blue-700" />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      3 review suggestions available
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      The assistant identified areas that may need expert
                      validation before acceptance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <LockKeyhole className="h-3.5 w-3.5" />
                Access scoped to assigned projects
              </div>
            </section>

            {/* Messages */}
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-slate-600" />

                  <h2 className="font-bold text-slate-950">
                    Team Messages
                  </h2>
                </div>

                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                  2 NEW
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl border p-3">
                  <p className="text-xs font-semibold">
                    Meera Nair
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Updated the edge deployment experiment and requested
                    review.
                  </p>
                </div>

                <div className="rounded-xl border p-3">
                  <p className="text-xs font-semibold">
                    Rohan Mehta
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Asked for feedback on the evaluation methodology.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom research impact */}
        <section className="mt-8 rounded-2xl border bg-slate-950 p-6 text-white shadow-sm">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-300">
                <Award className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Research Impact
                </span>
              </div>

              <h2 className="mt-2 text-xl font-bold">
                Your expertise is helping teams produce accountable research.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                Every accepted review and contribution can be reflected in
                your research credits and project credentials according to
                the agreed charter.
              </p>
            </div>

            <Link href="/expert/contributions">
              <Button className="bg-white text-slate-950 hover:bg-slate-100">
                View Contributions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}