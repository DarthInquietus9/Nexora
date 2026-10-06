"use client";

import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Bot,
  Calendar,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Flag,
  LockKeyhole,
  Milestone,
  ShieldCheck,
  Sparkles,
  Target,
  User,
  Users,
  WalletCards,
} from "lucide-react";

const milestones = [
  {
    id: "MS-01",
    number: "01",
    title: "Dataset preparation",
    description:
      "Prepare and validate the approved fundus image dataset for model development.",
    progress: 100,
    status: "Completed",
    owner: "Dr. Priya Nair",
    ownerRole: "Expert / Mentor",
    deadline: "Oct 4, 2026",
    reward: "₹20,000",
    deliverables: [
      "Dataset validation report",
      "Preprocessing specification",
      "Data quality summary",
    ],
    review: "Accepted",
    aiAssisted: true,
  },
  {
    id: "MS-02",
    number: "02",
    title: "Edge preprocessing pipeline",
    description:
      "Build and validate a lightweight preprocessing pipeline suitable for edge deployment.",
    progress: 68,
    status: "In Progress",
    owner: "Arjun Menon",
    ownerRole: "Student Researcher",
    deadline: "Oct 8, 2026",
    reward: "₹25,000",
    deliverables: [
      "Preprocessing pipeline",
      "Edge performance report",
      "Test results",
    ],
    review: "Under Review",
    aiAssisted: true,
  },
  {
    id: "MS-03",
    number: "03",
    title: "Model optimization",
    description:
      "Optimize the detection model for accuracy, latency, and resource constraints.",
    progress: 35,
    status: "In Progress",
    owner: "Kavya Rao",
    ownerRole: "ML Contributor",
    deadline: "Oct 12, 2026",
    reward: "₹30,000",
    deliverables: [
      "Optimized model",
      "Benchmark report",
      "Accuracy comparison",
    ],
    review: "Not Submitted",
    aiAssisted: true,
  },
  {
    id: "MS-04",
    number: "04",
    title: "Final validation & delivery",
    description:
      "Complete human review, integrity checks, final validation, and project delivery.",
    progress: 10,
    status: "Not Started",
    owner: "Project Team",
    ownerRole: "Collaborative",
    deadline: "Oct 16, 2026",
    reward: "₹25,000",
    deliverables: [
      "Final model",
      "Validation report",
      "Project documentation",
    ],
    review: "Pending",
    aiAssisted: false,
  },
];

const activities = [
  {
    icon: CheckCircle2,
    title: "Milestone 1 accepted",
    description:
      "Dataset preparation was reviewed and accepted by the project reviewer.",
    time: "Oct 4 · 4:20 PM",
  },
  {
    icon: FileCheck2,
    title: "Milestone 2 contribution submitted",
    description:
      "Edge preprocessing pipeline was submitted for human review.",
    time: "Oct 6 · 10:18 AM",
  },
  {
    icon: Bot,
    title: "AI scoping recommendation recorded",
    description:
      "The project AI agent suggested the milestone breakdown and estimated effort.",
    time: "Oct 5 · 11:10 AM",
  },
  {
    icon: WalletCards,
    title: "Milestone reward reserved",
    description:
      "The reward for Milestone 2 was reserved according to the accepted project charter.",
    time: "Oct 5 · 5:42 PM",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Completed:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    "In Progress":
      "border-blue-200 bg-blue-50 text-blue-700",
    "Not Started":
      "border-slate-200 bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
        styles[status] || "border-slate-200 bg-slate-50 text-slate-600"
      }`}
    >
      {status === "Completed" ? (
        <CheckCircle2 className="h-3.5 w-3.5" />
      ) : status === "In Progress" ? (
        <Activity className="h-3.5 w-3.5" />
      ) : (
        <Clock3 className="h-3.5 w-3.5" />
      )}
      {status}
    </span>
  );
}

function ReviewBadge({ review }) {
  const styles = {
    Accepted: "border-emerald-200 bg-emerald-50 text-emerald-700",
    "Under Review": "border-amber-200 bg-amber-50 text-amber-700",
    "Not Submitted": "border-slate-200 bg-slate-50 text-slate-500",
    Pending: "border-slate-200 bg-slate-50 text-slate-500",
  };

  return (
    <span
      className={`rounded-full border px-2 py-1 text-[11px] font-semibold ${
        styles[review] || "border-slate-200 bg-slate-50 text-slate-600"
      }`}
    >
      {review}
    </span>
  );
}

export default function WorkspaceMilestonesPage() {
  const completed = milestones.filter(
    (item) => item.status === "Completed"
  ).length;

  const totalProgress = Math.round(
    milestones.reduce((sum, item) => sum + item.progress, 0) /
      milestones.length
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link href="/workspace/overview">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border bg-white text-slate-600 transition hover:bg-slate-50">
                <ArrowLeft className="h-4 w-4" />
              </button>
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-slate-950">
                  Nex.Res
                </span>

                <span className="text-slate-300">/</span>

                <span className="text-sm font-medium text-slate-600">
                  Research Workspace
                </span>
              </div>

              <p className="text-xs text-slate-500">
                Low-cost diabetic retinopathy detection
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-lg border bg-slate-50 px-3 py-2 sm:flex">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-medium text-slate-600">
              Project-scoped access
            </span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden min-h-[calc(100vh-4rem)] w-64 border-r bg-white lg:block">
          <div className="p-4">
            <div className="mb-5 rounded-xl border bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Milestone className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Workspace
                  </p>
                  <p className="text-xs text-slate-500">
                    Project #NXR-2048
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Milestones active
              </div>
            </div>

            <nav className="space-y-1">
              {[
                ["Overview", "/workspace/overview"],
                ["Team", "/workspace/team"],
                ["AI Agent", "/workspace/ai-agent"],
                ["Contributions", "/workspace/contributions"],
                ["Integrity", "/workspace/integrity"],
                ["Charter", "/workspace/charter"],
                ["Milestones", "/workspace/milestones"],
                ["Rewards", "/workspace/rewards"],
                ["Audit Trail", "/workspace/audit-trail"],
              ].map(([label, href]) => {
                const active = label === "Milestones";

                return (
                  <Link
                    key={label}
                    href={href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {label === "Overview" && (
                      <Target className="h-4 w-4" />
                    )}

                    {label === "Team" && (
                      <Users className="h-4 w-4" />
                    )}

                    {label === "AI Agent" && (
                      <Bot className="h-4 w-4" />
                    )}

                    {label === "Contributions" && (
                      <FileCheck2 className="h-4 w-4" />
                    )}

                    {label === "Integrity" && (
                      <ShieldCheck className="h-4 w-4" />
                    )}

                    {label === "Charter" && (
                      <FileText className="h-4 w-4" />
                    )}

                    {label === "Milestones" && (
                      <Milestone className="h-4 w-4" />
                    )}

                    {label === "Rewards" && (
                      <WalletCards className="h-4 w-4" />
                    )}

                    {label === "Audit Trail" && (
                      <Activity className="h-4 w-4" />
                    )}

                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mx-4 mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <div className="flex gap-3">
              <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />

              <div>
                <p className="text-xs font-semibold text-blue-900">
                  Protected workspace
                </p>

                <p className="mt-1 text-xs leading-5 text-blue-700">
                  Milestone information is available only to authorized
                  project participants.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            {/* Page heading */}
            <div className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Milestone className="h-4 w-4" />
                  Project milestones
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950">
                  Plan the work. Track the progress.
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Follow each milestone from scoped work to human review,
                  acceptance, and reward allocation.
                </p>
              </div>

              <div className="rounded-xl border bg-white px-5 py-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                    <Target className="h-5 w-5 text-slate-700" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Overall progress
                    </p>

                    <div className="mt-1 flex items-end gap-2">
                      <span className="text-2xl font-bold text-slate-950">
                        {totalProgress}%
                      </span>

                      <span className="pb-1 text-xs text-slate-500">
                        {completed}/4 completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress summary */}
            <section className="mb-6 rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    Project delivery progress
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Four milestones make up the current project delivery plan.
                  </p>
                </div>

                <div className="w-full md:w-80">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="font-medium text-slate-500">
                      Overall
                    </span>

                    <span className="font-bold text-slate-800">
                      {totalProgress}%
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-slate-900 transition-all"
                      style={{ width: `${totalProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Milestones */}
            <section className="space-y-4">
              {milestones.map((milestone) => (
                <article
                  key={milestone.id}
                  className="overflow-hidden rounded-xl border bg-white shadow-sm"
                >
                  <div className="p-5">
                    <div className="flex flex-col gap-5 xl:flex-row">
                      {/* Number */}
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                          {milestone.number}
                        </div>

                        <div className="min-w-0 xl:hidden">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <StatusBadge status={milestone.status} />

                            {milestone.aiAssisted && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                                <Sparkles className="h-3 w-3" />
                                AI scoped
                              </span>
                            )}
                          </div>

                          <h2 className="text-lg font-bold text-slate-950">
                            {milestone.title}
                          </h2>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Main details */}
                      <div className="min-w-0 flex-1">
                        <div className="hidden xl:block">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <StatusBadge status={milestone.status} />

                            {milestone.aiAssisted && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                                <Sparkles className="h-3 w-3" />
                                AI scoped
                              </span>
                            )}
                          </div>

                          <h2 className="text-lg font-bold text-slate-950">
                            {milestone.title}
                          </h2>

                          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                            {milestone.description}
                          </p>
                        </div>

                        {/* Progress */}
                        <div className="mt-5">
                          <div className="mb-2 flex justify-between">
                            <span className="text-xs font-semibold text-slate-600">
                              Progress
                            </span>

                            <span className="text-xs font-bold text-slate-900">
                              {milestone.progress}%
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className={`h-full rounded-full ${
                                milestone.status === "Completed"
                                  ? "bg-emerald-600"
                                  : milestone.status === "In Progress"
                                  ? "bg-blue-600"
                                  : "bg-slate-300"
                              }`}
                              style={{
                                width: `${milestone.progress}%`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                          <div className="rounded-lg border bg-slate-50 p-3">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <User className="h-3.5 w-3.5" />
                              Owner
                            </div>

                            <p className="mt-1 text-sm font-semibold text-slate-900">
                              {milestone.owner}
                            </p>

                            <p className="text-xs text-slate-500">
                              {milestone.ownerRole}
                            </p>
                          </div>

                          <div className="rounded-lg border bg-slate-50 p-3">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <Calendar className="h-3.5 w-3.5" />
                              Deadline
                            </div>

                            <p className="mt-1 text-sm font-semibold text-slate-900">
                              {milestone.deadline}
                            </p>

                            <p className="text-xs text-slate-500">
                              Project timeline
                            </p>
                          </div>

                          <div className="rounded-lg border bg-slate-50 p-3">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <WalletCards className="h-3.5 w-3.5" />
                              Reward
                            </div>

                            <p className="mt-1 text-sm font-semibold text-slate-900">
                              {milestone.reward}
                            </p>

                            <p className="text-xs text-slate-500">
                              Charter-aligned allocation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom information */}
                    <div className="mt-5 grid gap-5 border-t pt-5 lg:grid-cols-[1fr_1fr]">
                      {/* Deliverables */}
                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <FileCheck2 className="h-4 w-4 text-slate-700" />

                          <h3 className="text-xs font-bold uppercase tracking-wide text-slate-700">
                            Expected deliverables
                          </h3>
                        </div>

                        <div className="space-y-2">
                          {milestone.deliverables.map((deliverable) => (
                            <div
                              key={deliverable}
                              className="flex items-center gap-2 text-xs text-slate-600"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Review */}
                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-slate-700" />

                          <h3 className="text-xs font-bold uppercase tracking-wide text-slate-700">
                            Human review
                          </h3>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border bg-slate-50 p-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              Review status
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              Human acceptance is required before eligible
                              reward release.
                            </p>
                          </div>

                          <ReviewBadge review={milestone.review} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {/* Rules */}
            <section className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <Bot className="h-4 w-4 text-blue-700" />
                </div>

                <h3 className="mt-3 text-sm font-bold text-slate-900">
                  AI-assisted scoping
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  AI can help break the accepted project scope into practical
                  milestones, while humans remain responsible for decisions.
                </p>
              </div>

              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                  <ShieldCheck className="h-4 w-4 text-emerald-700" />
                </div>

                <h3 className="mt-3 text-sm font-bold text-slate-900">
                  Human acceptance
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Deliverables are reviewed by the responsible human reviewer
                  before they are treated as accepted work.
                </p>
              </div>

              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50">
                  <WalletCards className="h-4 w-4 text-purple-700" />
                </div>

                <h3 className="mt-3 text-sm font-bold text-slate-900">
                  Reward protection
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Reward allocation follows the accepted project charter and
                  milestone acceptance conditions.
                </p>
              </div>
            </section>

            {/* Activity */}
            <section className="mt-6 rounded-xl border bg-white shadow-sm">
              <div className="border-b px-5 py-4">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-slate-700" />

                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      Recent milestone activity
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      Important milestone-related events
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y">
                {activities.map((activity) => {
                  const Icon = activity.icon;

                  return (
                    <div
                      key={activity.title}
                      className="flex gap-4 px-5 py-4"
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
            </section>

            {/* Charter Notice */}
            <section className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex gap-3">
                <Flag className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

                <div>
                  <p className="text-sm font-bold text-blue-900">
                    Milestones follow the accepted project charter
                  </p>

                  <p className="mt-1 text-xs leading-5 text-blue-700">
                    Scope, responsibilities, rewards, confidentiality, and
                    project conditions should remain aligned with the accepted
                    charter version. Changes to agreed project terms should be
                    handled through the appropriate charter versioning process.
                  </p>

                  <Link
                    href="/workspace/charter"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-800 hover:text-blue-950"
                  >
                    View project charter
                    <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Demo warning */}
            <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

                <div>
                  <p className="text-xs font-bold text-amber-900">
                    Hackathon demo data
                  </p>

                  <p className="mt-1 text-xs leading-5 text-amber-800">
                    The milestone information shown here is synthetic
                    demonstration data. Actual milestone persistence,
                    acceptance, reward release, and audit recording should be
                    connected to the backend services during integration.
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