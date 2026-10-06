"use client";

import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  GripVertical,
  LockKeyhole,
  Plus,
  ShieldCheck,
  Target,
  Users,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const milestones = [
  {
    number: "01",
    title: "Research & Dataset Preparation",
    description:
      "Review relevant research, define dataset requirements, prepare the working data and establish evaluation criteria.",
    amount: "₹20,000",
    percentage: "20%",
    duration: "2 weeks",
    dates: "Oct 06 – Oct 19, 2026",
    owner: "AI / ML Researcher",
    status: "Ready",
    deliverables: [
      "Literature review",
      "Dataset preparation report",
      "Evaluation criteria",
    ],
  },
  {
    number: "02",
    title: "Lightweight Model Development",
    description:
      "Develop and evaluate a compact computer vision model suitable for the project's edge-device constraints.",
    amount: "₹35,000",
    percentage: "35%",
    duration: "3 weeks",
    dates: "Oct 20 – Nov 09, 2026",
    owner: "AI / ML Researcher",
    status: "Upcoming",
    deliverables: [
      "Baseline model",
      "Optimized model",
      "Performance evaluation",
    ],
  },
  {
    number: "03",
    title: "Edge Deployment & Testing",
    description:
      "Adapt the selected model for edge inference and evaluate performance under realistic resource constraints.",
    amount: "₹30,000",
    percentage: "30%",
    duration: "2 weeks",
    dates: "Nov 10 – Nov 23, 2026",
    owner: "Edge AI Developer",
    status: "Upcoming",
    deliverables: [
      "Edge inference prototype",
      "Performance benchmarks",
      "Testing report",
    ],
  },
  {
    number: "04",
    title: "Final Validation & Demonstration",
    description:
      "Consolidate results, document the research process and prepare the final demonstration.",
    amount: "₹15,000",
    percentage: "15%",
    duration: "1 week",
    dates: "Nov 24 – Nov 30, 2026",
    owner: "Research Team",
    status: "Upcoming",
    deliverables: [
      "Final research report",
      "Demonstration",
      "Project documentation",
    ],
  },
];

function StatusBadge({ children, type = "default" }) {
  const styles = {
    default: "bg-slate-100 text-slate-700",
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  );
}

function SectionHeader({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
}

export default function SponsorMilestonesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/sponsor/matching"
              className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Candidate Matching
            </Link>

            <ChevronRight className="h-4 w-4 text-slate-300" />

            <div>
              <p className="text-xs font-medium text-slate-400">Sponsor</p>
              <p className="text-sm font-semibold text-slate-900">
                Milestones
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge type="blue">4 milestones</StatusBadge>

            <Link href="/sponsor/escrow">
              <Button className="bg-blue-700 text-white hover:bg-blue-800">
                Continue to Escrow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Hero */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="p-7">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div className="max-w-3xl">
                <div className="mb-3 flex items-center gap-2">
                  <StatusBadge type="blue">Execution plan</StatusBadge>

                  <span className="text-xs text-slate-400">
                    NXR-DR-2026-014
                  </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  Project milestones
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Review the AI-generated execution plan, confirm milestone
                  deliverables and allocate the project budget before funding
                  begins.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[500px]">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    Milestones
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">4</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    Duration
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">8 wk</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    Budget
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    ₹1L
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    Funded
                  </p>
                  <p className="mt-1 text-lg font-bold text-amber-600">
                    0%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t border-slate-200 px-7 py-5">
            <div className="flex items-center">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.number}
                  className="flex flex-1 items-center"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                        index === 0
                          ? "bg-blue-700 text-white"
                          : "border border-slate-200 bg-white text-slate-500"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <span className="hidden text-xs font-medium text-slate-600 lg:block">
                      {milestone.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>

                  {index < milestones.length - 1 && (
                    <div className="mx-3 h-px flex-1 bg-slate-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          {/* Main milestones */}
          <div className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionHeader
                icon={Target}
                title="Milestone plan"
                description="Four structured stages generated from the approved project scope."
              />

              <div className="mt-6 space-y-4">
                {milestones.map((milestone, index) => (
                  <article
                    key={milestone.number}
                    className="overflow-hidden rounded-xl border border-slate-200"
                  >
                    {/* Milestone header */}
                    <div className="border-b border-slate-200 bg-slate-50 p-5">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                            {milestone.number}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm font-bold text-slate-900">
                                {milestone.title}
                              </h3>

                              <StatusBadge
                                type={index === 0 ? "green" : "default"}
                              >
                                {milestone.status}
                              </StatusBadge>
                            </div>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                              {milestone.description}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="self-start rounded-lg p-2 text-slate-400 transition hover:bg-white hover:text-slate-700"
                          title="Reorder milestone"
                        >
                          <GripVertical className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="grid grid-cols-2 divide-x divide-slate-200 border-b border-slate-200 md:grid-cols-4">
                      <div className="p-4">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                          Funding
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <CircleDollarSign className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm font-bold text-slate-800">
                            {milestone.amount}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                          Allocation
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-800">
                          {milestone.percentage}
                        </p>
                      </div>

                      <div className="p-4">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                          Duration
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-slate-400" />
                          <span className="text-sm font-semibold text-slate-800">
                            {milestone.duration}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                          Owner
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <Users className="h-4 w-4 text-slate-400" />
                          <span className="truncate text-sm font-semibold text-slate-800">
                            {milestone.owner}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <FileCheck2 className="h-4 w-4 text-slate-400" />
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                              Deliverables
                            </p>
                          </div>

                          <div className="mt-3 grid gap-2 md:grid-cols-3">
                            {milestone.deliverables.map((deliverable) => (
                              <div
                                key={deliverable}
                                className="flex items-start gap-2 rounded-lg bg-slate-50 p-3"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                                <span className="text-xs leading-5 text-slate-600">
                                  {deliverable}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="shrink-0">
                          <Button
                            variant="outline"
                            className="border-slate-200 text-slate-700"
                          >
                            Edit
                          </Button>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {milestone.dates}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <LockKeyhole className="h-3.5 w-3.5" />
                          Funding released after acceptance
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Add milestone */}
              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 p-4 text-sm font-semibold text-slate-500 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add another milestone
              </button>
            </section>

            {/* Funding rules */}
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <WalletCards className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Milestone funding rule
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Each milestone has a defined reward amount. Funding can be
                    prepared for escrow before work begins and associated with
                    the accepted milestone terms.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <StatusBadge type="amber">
                      Total allocation: ₹1,00,000
                    </StatusBadge>

                    <StatusBadge>4 milestones</StatusBadge>

                    <StatusBadge type="green">
                      Allocation balanced
                    </StatusBadge>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Budget summary */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <CircleDollarSign className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Budget allocation
                  </h2>
                  <p className="text-xs text-slate-500">
                    Milestone distribution
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-end justify-between">
                  <span className="text-xs text-slate-500">
                    Allocated budget
                  </span>
                  <span className="text-xl font-bold text-slate-900">
                    ₹1,00,000
                  </span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="flex h-full w-full">
                    <div className="h-full w-[20%] bg-blue-300" />
                    <div className="h-full w-[35%] bg-blue-500" />
                    <div className="h-full w-[30%] bg-blue-700" />
                    <div className="h-full w-[15%] bg-slate-800" />
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    ["M1", "₹20,000", "20%"],
                    ["M2", "₹35,000", "35%"],
                    ["M3", "₹30,000", "30%"],
                    ["M4", "₹15,000", "15%"],
                  ].map(([milestone, amount, percent]) => (
                    <div
                      key={milestone}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-slate-500">
                        {milestone}
                      </span>

                      <div className="flex gap-3">
                        <span className="font-semibold text-slate-700">
                          {amount}
                        </span>
                        <span className="w-8 text-right text-slate-400">
                          {percent}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Schedule */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-blue-700" />
                <h2 className="text-sm font-semibold text-slate-900">
                  Project schedule
                </h2>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    Start
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    October 6, 2026
                  </p>
                </div>

                <div className="h-px bg-slate-100" />

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    Estimated completion
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    November 30, 2026
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-slate-400" />
                    <span className="text-xs font-medium text-slate-600">
                      Total duration: 8 weeks
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Validation */}
            <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                <h2 className="text-sm font-semibold text-slate-900">
                  Milestone validation
                </h2>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  "All milestones have deliverables",
                  "Budget allocation equals ₹1,00,000",
                  "Timeline covers 8 weeks",
                  "Each milestone has an owner",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span className="text-xs leading-5 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Warning */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />

                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Before funding
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Review the milestone scope and reward allocation before
                    preparing the simulated escrow.
                  </p>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <h2 className="text-sm font-semibold">
                  Controlled funding
                </h2>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                Funding is represented as a simulated escrow workflow for the
                hackathon demonstration. No real financial transaction is
                performed.
              </p>

              <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/10 p-3">
                <LockKeyhole className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-medium text-slate-200">
                  Ready for escrow setup
                </span>
              </div>
            </section>

            {/* Continue */}
            <Link href="/sponsor/escrow">
              <Button className="w-full bg-blue-700 text-white hover:bg-blue-800">
                Continue to Escrow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}