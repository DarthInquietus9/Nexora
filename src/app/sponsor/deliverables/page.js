"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Fingerprint,
  LockKeyhole,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  AlertTriangle,
  RefreshCcw,
  Award,
  CircleDollarSign,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const deliverables = [
  {
    id: "D-001",
    milestone: "Milestone 1",
    title: "Dataset & Research Framework",
    description:
      "Curated dataset specification, preprocessing strategy, research assumptions and initial validation framework.",
    owner: "Aarav Sharma",
    role: "AI / Research Lead",
    submitted: "Oct 8, 2026",
    status: "Accepted",
    visibility: "Confidential",
    integrity: "Verified",
    similarity: "2.4%",
    reward: "₹20,000",
    version: "v1.2",
  },
  {
    id: "D-002",
    milestone: "Milestone 2",
    title: "Edge Detection Model",
    description:
      "Initial lightweight detection model designed for deployment on resource-constrained edge devices.",
    owner: "Meera Nair",
    role: "ML Engineer",
    submitted: "Oct 14, 2026",
    status: "Under Review",
    visibility: "Confidential",
    integrity: "Verified",
    similarity: "4.1%",
    reward: "₹30,000",
    version: "v1.0",
  },
  {
    id: "D-003",
    milestone: "Milestone 3",
    title: "Performance Evaluation Report",
    description:
      "Evaluation results covering accuracy, inference time, limitations and comparison against baseline models.",
    owner: "Rohan Mehta",
    role: "Research Analyst",
    submitted: "Oct 18, 2026",
    status: "Needs Revision",
    visibility: "Confidential",
    integrity: "Review Required",
    similarity: "14.8%",
    reward: "₹25,000",
    version: "v0.9",
  },
  {
    id: "D-004",
    milestone: "Milestone 4",
    title: "Final Research Package",
    description:
      "Final model package, documentation, findings and sponsor-ready research summary.",
    owner: "Team Nex.Res",
    role: "Collaborative Output",
    submitted: "Pending",
    status: "Pending",
    visibility: "Public Summary",
    integrity: "Pending",
    similarity: "—",
    reward: "₹25,000",
    version: "—",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Accepted:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Under Review":
      "bg-blue-50 text-blue-700 border-blue-200",
    "Needs Revision":
      "bg-amber-50 text-amber-700 border-amber-200",
    Pending:
      "bg-slate-100 text-slate-600 border-slate-200",
  };

  const icons = {
    Accepted: CheckCircle2,
    "Under Review": Clock3,
    "Needs Revision": RefreshCcw,
    Pending: Clock3,
  };

  const Icon = icons[status] || Clock3;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
        styles[status] || styles.Pending
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}

function IntegrityBadge({ status }) {
  const verified = status === "Verified";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        verified
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : status === "Review Required"
          ? "border-amber-200 bg-amber-50 text-amber-700"
          : "border-slate-200 bg-slate-50 text-slate-600"
      }`}
    >
      {verified ? (
        <ShieldCheck className="h-3.5 w-3.5" />
      ) : (
        <AlertTriangle className="h-3.5 w-3.5" />
      )}
      {status}
    </span>
  );
}

export default function SponsorDeliverablesPage() {
  const acceptedCount = deliverables.filter(
    (item) => item.status === "Accepted"
  ).length;

  const reviewCount = deliverables.filter(
    (item) => item.status === "Under Review"
  ).length;

  const revisionCount = deliverables.filter(
    (item) => item.status === "Needs Revision"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/sponsor/escrow">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900 text-white">
                  <FileCheck2 className="h-4 w-4" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  Nex.Res
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Sponsor Workspace / Deliverables
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 sm:inline-flex">
              Demo Project
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-800">
              S
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
              Final Review
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Deliverables & Acceptance
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Review submitted research outputs, verify contribution
              integrity, provide feedback and accept deliverables before
              milestone rewards are released.
            </p>
          </div>

          <div className="flex gap-3">
            <Link href="/sponsor/project">
              <Button variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                Project Overview
              </Button>
            </Link>

            <Button>
              <FileCheck2 className="mr-2 h-4 w-4" />
              Review Queue
            </Button>
          </div>
        </div>

        {/* Project banner */}
        <section className="mb-6 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="border-b bg-slate-950 px-6 py-5 text-white">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  Active Research Project
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Low-cost detection of diabetic retinopathy from fundus
                  images on edge devices
                </h2>

                <p className="mt-2 text-sm text-slate-300">
                  Project ID: NXR-2026-014 • Funded engagement • 4 milestones
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                <p className="text-xs text-slate-400">Total Project Reward</p>
                <p className="mt-1 text-2xl font-bold">₹1,00,000</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x md:grid-cols-4">
            <div className="p-5">
              <p className="text-xs font-medium text-slate-500">
                Deliverables
              </p>
              <p className="mt-1 text-2xl font-bold">4</p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium text-slate-500">
                Accepted
              </p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">
                {acceptedCount}
              </p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium text-slate-500">
                Under Review
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-700">
                {reviewCount}
              </p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium text-slate-500">
                Revision Required
              </p>
              <p className="mt-1 text-2xl font-bold text-amber-600">
                {revisionCount}
              </p>
            </div>
          </div>
        </section>

        {/* Security notice */}
        <section className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <h3 className="font-semibold text-blue-950">
                Integrity-aware deliverable review
              </h3>

              <p className="mt-1 text-sm leading-6 text-blue-900/80">
                Each submission displays its visibility classification,
                integrity status and similarity indicator. In this frontend
                demo, these values are simulated representations of the
                platform&apos;s intended security workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="space-y-5">
          {deliverables.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {/* Top */}
              <div className="border-b px-6 py-5">
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <FileText className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {item.id}
                        </span>

                        <span className="text-xs text-slate-300">•</span>

                        <span className="text-xs font-medium text-blue-700">
                          {item.milestone}
                        </span>

                        <StatusBadge status={item.status} />
                      </div>

                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View File
                    </Button>

                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="grid border-b md:grid-cols-2 lg:grid-cols-4">
                <div className="border-b p-5 md:border-r lg:border-b-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Contributor
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      <UserRound className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.owner}
                      </p>
                      <p className="text-xs text-slate-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b p-5 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Submission
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {item.submitted}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Version {item.version}
                  </p>
                </div>

                <div className="border-b p-5 md:border-r lg:border-b-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Access Classification
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <LockKeyhole className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-900">
                      {item.visibility}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Controlled project access
                  </p>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Milestone Reward
                  </p>

                  <p className="mt-2 text-sm font-bold text-slate-950">
                    {item.reward}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Released after acceptance
                  </p>
                </div>
              </div>

              {/* Integrity */}
              <div className="border-b bg-slate-50 px-6 py-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Fingerprint className="h-4 w-4 text-slate-500" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Integrity Check
                      </span>
                    </div>

                    <IntegrityBadge status={item.integrity} />

                    <span className="text-xs text-slate-500">
                      Similarity:
                    </span>

                    <span
                      className={`text-xs font-bold ${
                        item.similarity !== "—" &&
                        parseFloat(item.similarity) > 10
                          ? "text-amber-700"
                          : "text-slate-700"
                      }`}
                    >
                      {item.similarity}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <LockKeyhole className="h-3.5 w-3.5" />
                    Access and review actions are audit-visible
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-between gap-4 px-6 py-5 lg:flex-row lg:items-center">
                <div>
                  {item.status === "Accepted" && (
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                      Deliverable accepted. Reward eligible for release.
                    </div>
                  )}

                  {item.status === "Under Review" && (
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
                      <Clock3 className="h-4 w-4" />
                      Sponsor review is currently in progress.
                    </div>
                  )}

                  {item.status === "Needs Revision" && (
                    <div className="flex items-center gap-2 text-sm font-medium text-amber-700">
                      <RefreshCcw className="h-4 w-4" />
                      Revision requested before milestone acceptance.
                    </div>
                  )}

                  {item.status === "Pending" && (
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                      <Clock3 className="h-4 w-4" />
                      Awaiting team submission.
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.status === "Under Review" && (
                    <>
                      <Button variant="outline">
                        <RefreshCcw className="mr-2 h-4 w-4" />
                        Request Revision
                      </Button>

                      <Button>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Accept Deliverable
                      </Button>
                    </>
                  )}

                  {item.status === "Needs Revision" && (
                    <Button variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Review Comments
                    </Button>
                  )}

                  {item.status === "Accepted" && (
                    <Button variant="outline">
                      <Award className="mr-2 h-4 w-4" />
                      Reward Details
                    </Button>
                  )}

                  {item.status === "Pending" && (
                    <Button variant="outline" disabled>
                      Awaiting Submission
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Review summary */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-bold text-slate-950">
              Accepted Outputs
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Accepted deliverables can move toward milestone reward
              release according to the agreed project charter.
            </p>

            <div className="mt-5 text-2xl font-bold text-emerald-700">
              ₹20,000
            </div>

            <p className="text-xs text-slate-500">
              Current accepted reward amount
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <Users className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-bold text-slate-950">
              Contribution Review
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Human contributions remain attributable to their owners.
              AI-generated work is associated with the human directing or
              reviewing it.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" />
              AI activity remains scoped
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <CircleDollarSign className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-bold text-slate-950">
              Reward Release
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Rewards are linked to accepted milestone outputs rather than
              raw activity or commit counts.
            </p>

            <div className="mt-5 text-sm font-semibold text-amber-700">
              Charter-controlled release
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="border-b px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Award className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-950">
                  Project Completion Summary
                </h2>

                <p className="text-sm text-slate-500">
                  Final acceptance state for the current research project
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            <div className="border-b p-6 md:border-b-0 md:border-r">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Overall Progress
              </p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-3xl font-bold">75%</span>
                <span className="pb-1 text-xs text-slate-500">
                  3 of 4 milestones reviewed
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-3/4 rounded-full bg-blue-700" />
              </div>
            </div>

            <div className="border-b p-6 md:border-b-0 md:border-r">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Integrity State
              </p>

              <div className="mt-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span className="font-bold text-slate-950">
                  Review in progress
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                One submission requires additional review before final
                acceptance.
              </p>
            </div>

            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Next Sponsor Action
              </p>

              <p className="mt-3 font-bold text-slate-950">
                Review Milestone 3
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Resolve the similarity warning and confirm whether the
                contributor should revise the submission.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 border-t bg-slate-50 px-6 py-5 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm">
                <LockKeyhole className="h-4 w-4" />
              </div>

              <p className="text-xs leading-5 text-slate-500">
                Demo mode: acceptance, similarity, integrity and reward
                controls shown here are frontend representations until
                connected to the backend.
              </p>
            </div>

            <Link href="/sponsor/project">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Project
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}