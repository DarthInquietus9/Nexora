"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  Fingerprint,
  History,
  Info,
  LockKeyhole,
  MessageSquare,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reviewItems = [
  {
    id: "REV-001",
    title: "Performance Evaluation Report",
    project:
      "Low-cost detection of diabetic retinopathy from fundus images on edge devices",
    projectId: "NXR-2026-014",
    milestone: "Milestone 3",
    contributor: "Rohan Mehta",
    role: "Research Analyst",
    submitted: "2 hours ago",
    status: "Needs Review",
    priority: "High",
    similarity: 14.8,
    integrity: "Review Required",
    aiDeclaration: "Declared",
    version: "v0.9",
  },
  {
    id: "REV-002",
    title: "Dataset Preprocessing Notes",
    project:
      "Privacy-preserving analysis of medical imaging datasets",
    projectId: "NXR-2026-021",
    milestone: "Milestone 2",
    contributor: "Ananya Rao",
    role: "ML Researcher",
    submitted: "Yesterday",
    status: "Needs Review",
    priority: "Normal",
    similarity: 3.2,
    integrity: "Verified",
    aiDeclaration: "Declared",
    version: "v1.1",
  },
  {
    id: "REV-003",
    title: "Edge Deployment Documentation",
    project:
      "Low-cost detection of diabetic retinopathy from fundus images on edge devices",
    projectId: "NXR-2026-014",
    milestone: "Milestone 3",
    contributor: "Meera Nair",
    role: "ML Engineer",
    submitted: "2 days ago",
    status: "Needs Review",
    priority: "Normal",
    similarity: 4.1,
    integrity: "Verified",
    aiDeclaration: "Declared",
    version: "v1.0",
  },
];

const activity = [
  {
    time: "09:42",
    title: "Deliverable submitted",
    description: "Rohan Mehta submitted Performance Evaluation Report v0.9.",
    type: "submission",
  },
  {
    time: "09:43",
    title: "Integrity analysis completed",
    description:
      "Similarity analysis identified a higher-than-usual overlap score.",
    type: "security",
  },
  {
    time: "09:44",
    title: "AI-use declaration recorded",
    description:
      "Contributor declared use of an approved AI assistant for analysis support.",
    type: "ai",
  },
  {
    time: "09:45",
    title: "Review assigned",
    description:
      "The submission was added to the expert review queue.",
    type: "review",
  },
];

function StatusBadge({ children, type = "neutral" }) {
  const styles = {
    success:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    warning:
      "border-amber-200 bg-amber-50 text-amber-700",
    danger:
      "border-red-200 bg-red-50 text-red-700",
    blue:
      "border-blue-200 bg-blue-50 text-blue-700",
    neutral:
      "border-slate-200 bg-slate-50 text-slate-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  );
}

function SimilarityIndicator({ value }) {
  const isHigh = value >= 10;
  const isMedium = value >= 5 && value < 10;

  return (
    <div className="min-w-[180px]">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">
          Similarity
        </span>

        <span
          className={`text-xs font-bold ${
            isHigh
              ? "text-red-700"
              : isMedium
              ? "text-amber-700"
              : "text-emerald-700"
          }`}
        >
          {value}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${
            isHigh
              ? "bg-red-500"
              : isMedium
              ? "bg-amber-500"
              : "bg-emerald-500"
          }`}
          style={{ width: `${Math.min(value * 4, 100)}%` }}
        />
      </div>
    </div>
  );
}

export default function ExpertReviewPage() {
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
                <FileCheck2 className="h-5 w-5" />
              </div>

              <div>
                <p className="font-bold tracking-tight">Nex.Res</p>
                <p className="text-xs text-slate-500">
                  Expert Review Workspace
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">
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
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Page heading */}
        <section className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
              Research Review
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Review Queue
            </h1>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Review submitted research contributions for quality, integrity,
              AI-use disclosure and alignment with the accepted project
              charter before acceptance.
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline">
              <History className="mr-2 h-4 w-4" />
              Review History
            </Button>

            <Button>
              <FileCheck2 className="mr-2 h-4 w-4" />
              3 Pending Reviews
            </Button>
          </div>
        </section>

        {/* Important review principle */}
        <section className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-blue-950">
                Human review remains the acceptance decision
              </h2>

              <p className="mt-1 max-w-4xl text-sm leading-6 text-blue-900/75">
                AI-assisted analysis can surface similarity, integrity or
                quality signals, but the expert reviews the evidence and
                makes the final acceptance or revision decision.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <FileCheck2 className="h-5 w-5" />
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Pending Reviews
            </p>

            <p className="mt-1 text-3xl font-bold">3</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-700">
              <ShieldAlert className="h-5 w-5" />
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Integrity Flags
            </p>

            <p className="mt-1 text-3xl font-bold text-red-700">
              1
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Reviewed This Week
            </p>

            <p className="mt-1 text-3xl font-bold">12</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
              <Clock3 className="h-5 w-5" />
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Average Review Time
            </p>

            <p className="mt-1 text-3xl font-bold">18h</p>
          </div>
        </section>

        {/* Search and filters */}
        <section className="mb-6 rounded-2xl border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search submissions, projects or contributors..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <Button variant="outline">
              All Projects
              <ChevronRight className="ml-2 h-4 w-4 rotate-90" />
            </Button>

            <Button variant="outline">
              All Status
              <ChevronRight className="ml-2 h-4 w-4 rotate-90" />
            </Button>
          </div>
        </section>

        {/* Review items */}
        <section className="space-y-5">
          {reviewItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {/* Header */}
              <div className="border-b px-6 py-5">
                <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-start">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <FileText className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                          {item.id}
                        </span>

                        {item.priority === "High" ? (
                          <StatusBadge type="danger">
                            <ShieldAlert className="h-3 w-3" />
                            High Priority
                          </StatusBadge>
                        ) : (
                          <StatusBadge type="neutral">
                            Normal Priority
                          </StatusBadge>
                        )}

                        <StatusBadge type="warning">
                          <Clock3 className="h-3 w-3" />
                          {item.status}
                        </StatusBadge>
                      </div>

                      <h2 className="mt-2 text-lg font-bold text-slate-950">
                        {item.title}
                      </h2>

                      <p className="mt-1 text-sm text-slate-600">
                        {item.project}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                        <span>{item.projectId}</span>
                        <span>{item.milestone}</span>
                        <span>Version {item.version}</span>
                        <span>Submitted {item.submitted}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Open Submission
                  </Button>
                </div>
              </div>

              {/* Contributor */}
              <div className="grid border-b md:grid-cols-3">
                <div className="border-b p-5 md:border-b-0 md:border-r">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Contributor
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      <UserRound className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        {item.contributor}
                      </p>

                      <p className="text-xs text-slate-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b p-5 md:border-b-0 md:border-r">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    AI-Use Declaration
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-600" />

                    <StatusBadge type="success">
                      <CheckCircle2 className="h-3 w-3" />
                      {item.aiDeclaration}
                    </StatusBadge>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    AI assistance should remain associated with the human
                    contributor directing or reviewing the work.
                  </p>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Access Classification
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <LockKeyhole className="h-4 w-4 text-slate-500" />

                    <span className="text-sm font-semibold">
                      Project Confidential
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Accessible only to approved project participants.
                  </p>
                </div>
              </div>

              {/* Integrity */}
              <div className="border-b bg-slate-50 px-6 py-5">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Fingerprint className="h-4 w-4 text-slate-600" />

                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Contribution Integrity
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {item.integrity === "Verified" ? (
                        <StatusBadge type="success">
                          <ShieldCheck className="h-3 w-3" />
                          Integrity Verified
                        </StatusBadge>
                      ) : (
                        <StatusBadge type="danger">
                          <ShieldAlert className="h-3 w-3" />
                          Review Required
                        </StatusBadge>
                      )}

                      <span className="text-xs text-slate-500">
                        Similarity analysis
                      </span>
                    </div>
                  </div>

                  <SimilarityIndicator value={item.similarity} />
                </div>

                {item.integrity === "Review Required" && (
                  <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4">
                    <div className="flex gap-3">
                      <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                      <div>
                        <p className="text-sm font-semibold text-red-900">
                          Higher similarity requires expert review
                        </p>

                        <p className="mt-1 text-xs leading-5 text-red-800/80">
                          The similarity indicator is a signal for
                          investigation, not an automatic plagiarism
                          verdict. Review the source context and contributor
                          explanation before deciding.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contribution history */}
              <div className="border-b px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <History className="h-4 w-4 text-slate-600" />

                      <h3 className="text-sm font-bold text-slate-950">
                        Contribution History
                      </h3>
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      Recent activity associated with this submission
                    </p>
                  </div>

                  <Button variant="ghost" size="sm">
                    View Full Log
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {activity.slice(0, 4).map((event) => (
                    <div
                      key={event.time + event.title}
                      className="flex gap-3 rounded-xl border bg-slate-50 p-3"
                    >
                      <div className="mt-0.5">
                        {event.type === "security" ? (
                          <ShieldCheck className="h-4 w-4 text-blue-600" />
                        ) : event.type === "ai" ? (
                          <Sparkles className="h-4 w-4 text-violet-600" />
                        ) : event.type === "review" ? (
                          <FileCheck2 className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <FileText className="h-4 w-4 text-slate-500" />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-semibold">
                            {event.title}
                          </p>

                          <span className="text-[10px] text-slate-400">
                            {event.time}
                          </span>
                        </div>

                        <p className="mt-1 text-[11px] leading-5 text-slate-500">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review guidance */}
              <div className="border-b px-6 py-5">
                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white">
                  <div className="border-r px-4 py-4">
                    <Info className="h-5 w-5 text-blue-600" />
                  </div>

                  <div className="p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Review against the accepted charter
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Check whether the work matches the agreed scope,
                      milestone deliverables, research standards and
                      contribution expectations. Consider both positive and
                      negative research results when evaluating the work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-between gap-4 px-6 py-5 lg:flex-row lg:items-center">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Expert Decision
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Your decision will be associated with this review record.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Add Comment
                  </Button>

                  <Button variant="outline">
                    <XCircle className="mr-2 h-4 w-4" />
                    Request Revision
                  </Button>

                  {item.integrity === "Review Required" && (
                    <Button variant="outline">
                      <ShieldAlert className="mr-2 h-4 w-4" />
                      Flag for Investigation
                    </Button>
                  )}

                  <Button>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Accept Contribution
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Review policy */}
        <section className="mt-8 rounded-2xl border bg-white shadow-sm">
          <div className="border-b px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Award className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-950">
                  Review & Credit Principles
                </h2>

                <p className="text-xs text-slate-500">
                  Guidance for fair contribution evaluation
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />

              <h3 className="mt-3 text-sm font-semibold">
                Evaluate the work
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Review the actual research contribution rather than raw
                activity or commit counts.
              </p>
            </div>

            <div>
              <Users className="h-5 w-5 text-blue-600" />

              <h3 className="mt-3 text-sm font-semibold">
                Credit humans
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                AI does not receive project credit. Human direction,
                review and responsibility remain attributable.
              </p>
            </div>

            <div>
              <ShieldCheck className="h-5 w-5 text-violet-600" />

              <h3 className="mt-3 text-sm font-semibold">
                Investigate signals
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Similarity and integrity indicators support investigation;
                they are not automatic verdicts.
              </p>
            </div>

            <div>
              <FileCheck2 className="h-5 w-5 text-amber-600" />

              <h3 className="mt-3 text-sm font-semibold">
                Record the decision
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Accepted or revised outputs should remain traceable to the
                project review record.
              </p>
            </div>
          </div>
        </section>

        {/* Security disclaimer */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-100 p-4">
          <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />

          <p className="text-xs leading-5 text-slate-500">
            <span className="font-semibold text-slate-700">
              Demo interface:
            </span>{" "}
            similarity analysis, contribution logs, AI-use declarations,
            access controls and integrity indicators shown here are
            synthetic representations of the intended Nex.Res workflow.
            Actual enforcement requires backend integration.
          </p>
        </div>
      </div>
    </main>
  );
}