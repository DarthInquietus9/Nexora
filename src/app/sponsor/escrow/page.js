"use client";

import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Banknote,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  Info,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const milestones = [
  {
    id: "M1",
    title: "Research & Dataset Preparation",
    amount: "₹20,000",
    percentage: "20%",
    status: "Ready to fund",
    description: "Literature review, dataset preparation and evaluation criteria.",
  },
  {
    id: "M2",
    title: "Lightweight Model Development",
    amount: "₹35,000",
    percentage: "35%",
    status: "Pending",
    description: "Baseline model, optimization and performance evaluation.",
  },
  {
    id: "M3",
    title: "Edge Deployment & Testing",
    amount: "₹30,000",
    percentage: "30%",
    status: "Pending",
    description: "Edge inference prototype and performance benchmarking.",
  },
  {
    id: "M4",
    title: "Final Validation & Demonstration",
    amount: "₹15,000",
    percentage: "15%",
    status: "Pending",
    description: "Final report, demonstration and project documentation.",
  },
];

const activity = [
  {
    time: "Today, 09:42",
    title: "Escrow workflow created",
    description: "Project budget was allocated to the simulated escrow.",
    type: "system",
  },
  {
    time: "Today, 09:38",
    title: "Milestone plan approved",
    description: "Four milestones were confirmed for funding.",
    type: "approved",
  },
  {
    time: "Yesterday, 18:20",
    title: "Project charter reviewed",
    description: "Reward and milestone terms were reviewed by the sponsor.",
    type: "review",
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

function SummaryCard({ icon: Icon, label, value, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-blue-700">
          <Icon className="h-5 w-5" />
        </div>

        <StatusBadge type="green">Demo</StatusBadge>
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </div>
  );
}

export default function SponsorEscrowPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/sponsor/milestones"
              className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Milestones
            </Link>

            <ChevronRight className="h-4 w-4 text-slate-300" />

            <div>
              <p className="text-xs font-medium text-slate-400">Sponsor</p>
              <p className="text-sm font-semibold text-slate-900">
                Escrow
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge type="amber">Simulation mode</StatusBadge>

            <Link href="/sponsor/deliverables">
              <Button className="bg-blue-700 text-white hover:bg-blue-800">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

          <div>
            <p className="text-sm font-semibold text-amber-900">
              Simulated escrow — no real money is transferred
            </p>

            <p className="mt-1 text-xs leading-5 text-amber-800">
              This screen demonstrates milestone-based funding for the
              hackathon. The amounts shown are synthetic and do not represent
              real financial transactions.
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="p-7">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div className="max-w-3xl">
                <div className="mb-3 flex items-center gap-2">
                  <StatusBadge type="blue">Funding control</StatusBadge>

                  <span className="text-xs text-slate-400">
                    NXR-DR-2026-014
                  </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  Project escrow
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Prepare the project's milestone budget in a simulated escrow
                  before contributors begin work.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <LockKeyhole className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Escrow status
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    Ready for funding
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="border-t border-slate-200 bg-slate-50 px-7 py-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Funding progress
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  ₹0 of ₹1,00,000 funded
                </p>
              </div>

              <div className="w-full md:w-72">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>0%</span>
                  <span>₹1,00,000</span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-0 rounded-full bg-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            icon={CircleDollarSign}
            label="Total budget"
            value="₹1,00,000"
            description="Approved project reward pool"
          />

          <SummaryCard
            icon={WalletCards}
            label="In escrow"
            value="₹0"
            description="Ready to be funded"
          />

          <SummaryCard
            icon={CheckCircle2}
            label="Milestones"
            value="0 / 4"
            description="Currently funded"
          />

          <SummaryCard
            icon={Clock3}
            label="Release model"
            value="Milestone"
            description="Based on accepted work"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_330px]">
          {/* Main */}
          <div className="space-y-6">
            {/* Escrow account */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Banknote className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-base font-semibold text-slate-900">
                      Simulated escrow account
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Funds are associated with the project's accepted
                      milestone terms.
                    </p>
                  </div>
                </div>

                <StatusBadge type="green">Verified setup</StatusBadge>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Available project balance
                    </p>

                    <p className="mt-2 text-3xl font-bold">₹1,00,000</p>

                    <p className="mt-2 text-xs text-slate-400">
                      Synthetic balance for demonstration only
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4 md:w-56">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-slate-200">
                        Protected allocation
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Allocation follows the approved project milestones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-xs text-slate-400">Escrow ID</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    ESC-DEMO-014
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-xs text-slate-400">Project</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    NXR-DR-2026-014
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-xs text-slate-400">Currency</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    INR
                  </p>
                </div>
              </div>
            </section>

            {/* Milestone funding */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">
                      Milestone funding
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Fund milestones according to the approved project plan.
                    </p>
                  </div>

                  <StatusBadge type="blue">4 milestones</StatusBadge>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="p-5">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                          {milestone.id}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-semibold text-slate-900">
                              {milestone.title}
                            </h3>

                            <StatusBadge
                              type={index === 0 ? "blue" : "default"}
                            >
                              {milestone.status}
                            </StatusBadge>
                          </div>

                          <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
                            {milestone.description}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
                            <span>{milestone.percentage} of budget</span>
                            <span>•</span>
                            <span>Release after acceptance</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-4">
                        <div className="text-right">
                          <p className="text-xs text-slate-400">Allocation</p>
                          <p className="mt-1 text-lg font-bold text-slate-900">
                            {milestone.amount}
                          </p>
                        </div>

                        {index === 0 ? (
                          <Button className="bg-emerald-700 text-white hover:bg-emerald-800">
                            <LockKeyhole className="mr-2 h-4 w-4" />
                            Fund
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            disabled
                            className="border-slate-200"
                          >
                            Fund
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Funding confirmation */}
            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white">
                  <FileCheck2 className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-slate-900">
                    Funding is linked to the accepted project terms
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    The simulated escrow uses the milestone allocation defined
                    in the project plan. In a production system, funding and
                    release would require appropriate backend controls.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <StatusBadge type="green">
                      Charter terms available
                    </StatusBadge>

                    <StatusBadge type="green">
                      Milestone allocation validated
                    </StatusBadge>
                  </div>
                </div>
              </div>
            </section>

            {/* Activity */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <ReceiptText className="h-5 w-5 text-blue-700" />
                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Escrow activity
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Recent events in the simulated funding workflow.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {activity.map((item) => (
                  <div
                    key={`${item.time}-${item.title}`}
                    className="flex gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        item.type === "approved"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {item.type === "approved" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Clock3 className="h-4 w-4" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row">
                        <p className="text-sm font-semibold text-slate-800">
                          {item.title}
                        </p>

                        <span className="text-xs text-slate-400">
                          {item.time}
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Funding summary */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Funding summary
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Project budget
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    ₹1,00,000
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Funded
                  </span>
                  <span className="text-sm font-bold text-emerald-700">
                    ₹0
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Remaining
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    ₹1,00,000
                  </span>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      Funding progress
                    </span>
                    <span className="text-xs font-bold text-blue-700">
                      0%
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-0 bg-blue-700" />
                  </div>
                </div>
              </div>
            </section>

            {/* Release conditions */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <h2 className="text-sm font-semibold text-slate-900">
                  Release conditions
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Milestone deliverables submitted",
                  "Contribution activity recorded",
                  "Integrity checks completed",
                  "Sponsor accepts milestone",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span className="text-xs leading-5 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Protection */}
            <section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white">
              <div className="flex items-center gap-3">
                <LockKeyhole className="h-5 w-5" />
                <h2 className="text-sm font-semibold">
                  Funding protection
                </h2>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                The demo represents a controlled milestone-based escrow
                workflow. Actual financial custody and release require secure
                backend implementation.
              </p>

              <div className="mt-4 rounded-lg bg-white/10 p-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-200">
                    No real money involved
                  </span>
                </div>
              </div>
            </section>

            {/* Next step */}
            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h2 className="text-sm font-semibold text-slate-900">
                Next step
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                After the escrow setup, continue to the deliverables area to
                track project outputs and acceptance.
              </p>

              <Link href="/sponsor/deliverables">
                <Button className="mt-4 w-full bg-blue-700 text-white hover:bg-blue-800">
                  Continue to Deliverables
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}