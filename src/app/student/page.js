"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FolderKanban,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import AppNavigation from "@/components/AppNavigation";

const stats = [
  {
    label: "Active Projects",
    value: "03",
    icon: FolderKanban,
    description: "Projects you're working on",
  },
  {
    label: "Contributions",
    value: "18",
    icon: FileCheck2,
    description: "Recorded contributions",
  },
  {
    label: "Credits Earned",
    value: "124",
    icon: Award,
    description: "Verified project credits",
  },
  {
    label: "Team Members",
    value: "08",
    icon: Users,
    description: "Across active projects",
  },
];

const projects = [
  {
    title: "Low-cost Diabetic Retinopathy Detection",
    sponsor: "HealthTech Research Labs",
    role: "Student Researcher",
    progress: 68,
    status: "Active",
    href: "/student/project",
  },
  {
    title: "Edge AI for Medical Imaging",
    sponsor: "Vision Research Initiative",
    role: "ML Contributor",
    progress: 42,
    status: "Active",
    href: "/student/project",
  },
  {
    title: "Privacy-Preserving Healthcare AI",
    sponsor: "Open Research Network",
    role: "Technical Contributor",
    progress: 84,
    status: "Review",
    href: "/student/project",
  },
];

const activities = [
  {
    title: "Contribution accepted",
    description:
      "Edge preprocessing pipeline was accepted by the project reviewer.",
    time: "18 min ago",
    icon: CheckCircle2,
  },
  {
    title: "AI-assisted work recorded",
    description:
      "Your AI-use declaration was attached to a new contribution.",
    time: "1 hour ago",
    icon: Sparkles,
  },
  {
    title: "Milestone updated",
    description:
      "Milestone 2 reached 68% completion.",
    time: "3 hours ago",
    icon: Clock3,
  },
  {
    title: "Project charter accepted",
    description:
      "You accepted the latest version of the project charter.",
    time: "Yesterday",
    icon: BookOpen,
  },
];

const quickActions = [
  {
    title: "Open Workspace",
    description: "Continue your current project",
    href: "/workspace/overview",
    icon: ShieldCheck,
  },
  {
    title: "View Contributions",
    description: "Review your recorded work",
    href: "/student/contributions",
    icon: FileCheck2,
  },
  {
    title: "Check Rewards",
    description: "View credits and rewards",
    href: "/student/rewards",
    icon: Award,
  },
  {
    title: "View Portfolio",
    description: "Showcase verified work",
    href: "/student/portfolio",
    icon: BriefcaseBusiness,
  },
];

const securityChecks = [
  "Identity verified",
  "Project access authorized",
  "AI-use declaration enabled",
  "Contribution integrity monitored",
  "Charter acceptance recorded",
];

export default function StudentDashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Global Navigation */}
      <AppNavigation
        role="Student"
        name="Aarav Mehta"
        initials="AM"
      />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Welcome Hero */}
        <section className="overflow-hidden rounded-2xl bg-slate-950 text-white shadow-sm">
          <div className="relative p-6 md:p-8">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified student workspace
                </div>

                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Welcome back, Aarav
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  Continue your research projects, review your contributions,
                  and keep track of the credit you have earned.
                </p>
              </div>

              <Link
                href="/student/discover"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Discover Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-2xl font-bold text-slate-950">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {stat.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Main Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Active Projects */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Active projects
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Your current research collaborations
                </p>
              </div>

              <Link
                href="/student/discover"
                className="text-xs font-semibold text-slate-700 transition hover:text-slate-950"
              >
                View projects
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  className="block p-5 transition hover:bg-slate-50"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-slate-900">
                          {project.title}
                        </h3>

                        <span
                          className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                            project.status === "Active"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : "border-amber-200 bg-amber-50 text-amber-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-slate-500">
                        {project.sponsor}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                        <BriefcaseBusiness className="h-3.5 w-3.5" />
                        {project.role}
                      </div>
                    </div>

                    <div className="w-full sm:w-40">
                      <div className="mb-1.5 flex justify-between text-xs">
                        <span className="text-slate-500">
                          Progress
                        </span>

                        <span className="font-semibold text-slate-700">
                          {project.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-slate-900 transition-all"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-sm font-bold text-slate-900">
                Quick actions
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Continue where you left off
              </p>
            </div>

            <div className="space-y-2 p-4">
              {quickActions.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition hover:bg-slate-50 hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                      <Icon className="h-4 w-4 text-slate-700" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        {/* Activity + Security */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Recent Activity */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-sm font-bold text-slate-900">
                Recent activity
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your latest project events
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    className="flex gap-3 px-5 py-4 transition hover:bg-slate-50"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                      <Icon className="h-4 w-4 text-slate-700" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row">
                        <p className="text-sm font-semibold text-slate-900">
                          {activity.title}
                        </p>

                        <span className="text-xs text-slate-400">
                          {activity.time}
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-slate-200 px-5 py-4">
              <Link
                href="/workspace/audit-trail"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-950"
              >
                View complete audit trail
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </section>

          {/* Security */}
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                <ShieldCheck className="h-5 w-5 text-emerald-700" />
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Project security
                </h2>

                <p className="text-xs text-emerald-700">
                  All checks currently healthy
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {securityChecks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/workspace/integrity"
              className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Open Integrity Center
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </section>
        </div>

        {/* Workspace Shortcuts */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="text-sm font-bold text-slate-900">
              Research workspace
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Access the tools that support your current project.
            </p>
          </div>

          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">
            <WorkspaceShortcut
              href="/workspace/overview"
              icon={FolderKanban}
              title="Overview"
              description="Project status and progress"
            />

            <WorkspaceShortcut
              href="/workspace/ai-agent"
              icon={Sparkles}
              title="AI Agent"
              description="Scoped AI activity and approvals"
            />

            <WorkspaceShortcut
              href="/workspace/contributions"
              icon={FileCheck2}
              title="Contributions"
              description="Review recorded work"
            />

            <WorkspaceShortcut
              href="/workspace/audit-trail"
              icon={BookOpen}
              title="Audit Trail"
              description="View project history"
            />
          </div>
        </section>

        {/* Demo Notice */}
        <section className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

            <div>
              <p className="text-xs font-bold text-blue-900">
                Nex.Res demonstration environment
              </p>

              <p className="mt-1 text-xs leading-5 text-blue-700">
                The dashboard currently uses synthetic project, contribution,
                reward, and activity data. These values will be connected to
                the backend during integration.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function WorkspaceShortcut({
  href,
  icon: Icon,
  title,
  description,
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
          <Icon className="h-4 w-4 text-slate-700" />
        </div>

        <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-slate-600" />
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </Link>
  );
}