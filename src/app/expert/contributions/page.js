"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Download,
  FileCheck2,
  Fingerprint,
  History,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contributions = [
  {
    id: "CON-1042",
    projectId: "NXR-2026-014",
    project:
      "Low-cost detection of diabetic retinopathy from fundus images on edge devices",
    title: "Edge model evaluation and optimization",
    type: "Research Contribution",
    milestone: "Milestone 2",
    date: "Oct 14, 2026",
    status: "Accepted",
    impact: "High",
    credit: "18 Credits",
    reward: "₹12,500",
    attribution: "Human-led",
    integrity: "Verified",
  },
  {
    id: "CON-1035",
    projectId: "NXR-2026-021",
    project:
      "Privacy-preserving analysis of medical imaging datasets",
    title: "Privacy evaluation methodology",
    type: "Expert Review",
    milestone: "Milestone 1",
    date: "Oct 10, 2026",
    status: "Accepted",
    impact: "High",
    credit: "12 Credits",
    reward: "₹8,000",
    attribution: "Human-led",
    integrity: "Verified",
  },
  {
    id: "CON-1028",
    projectId: "NXR-2026-014",
    project:
      "Low-cost detection of diabetic retinopathy from fundus images on edge devices",
    title: "Research methodology review",
    type: "Expert Review",
    milestone: "Milestone 1",
    date: "Oct 8, 2026",
    status: "Accepted",
    impact: "Medium",
    credit: "8 Credits",
    reward: "₹6,000",
    attribution: "Human-led",
    integrity: "Verified",
  },
  {
    id: "CON-1019",
    projectId: "NXR-2026-008",
    project:
      "Explainable AI framework for agricultural disease detection",
    title: "Explainability framework review",
    type: "Research Contribution",
    milestone: "Milestone 3",
    date: "Oct 3, 2026",
    status: "Accepted",
    impact: "Medium",
    credit: "10 Credits",
    reward: "Knowledge Credit",
    attribution: "Human-led",
    integrity: "Verified",
  },
  {
    id: "CON-1012",
    projectId: "NXR-2026-021",
    project:
      "Privacy-preserving analysis of medical imaging datasets",
    title: "Privacy risk assessment",
    type: "Research Review",
    milestone: "Milestone 2",
    date: "Oct 1, 2026",
    status: "Pending",
    impact: "Under Review",
    credit: "—",
    reward: "—",
    attribution: "Human-led",
    integrity: "Review Pending",
  },
];

const credentials = [
  {
    title: "Verified Research Expert",
    issuer: "Nex.Res",
    date: "Oct 3, 2026",
    icon: ShieldCheck,
  },
  {
    title: "Medical AI Research Contributor",
    issuer: "Nex.Res",
    date: "Oct 14, 2026",
    icon: Award,
  },
  {
    title: "Research Review Mentor",
    issuer: "Nex.Res",
    date: "Sep 28, 2026",
    icon: FileCheck2,
  },
];

function StatusBadge({ status }) {
  if (status === "Accepted") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Accepted
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
      <History className="h-3.5 w-3.5" />
      Pending Review
    </span>
  );
}

function ImpactBadge({ impact }) {
  const styles = {
    High: "border-blue-200 bg-blue-50 text-blue-700",
    Medium: "border-slate-200 bg-slate-50 text-slate-600",
    "Under Review": "border-amber-200 bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
        styles[impact] || styles.Medium
      }`}
    >
      {impact}
    </span>
  );
}

export default function ExpertContributionsPage() {
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
                  Expert Contributions
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
        {/* Heading */}
        <section className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
              Contribution Record
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              My Contributions
            </h1>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Track accepted research contributions, expert reviews,
              research credits, rewards and the attribution record attached
              to your work.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Record
            </Button>

            <Link href="/expert/review">
              <Button>
                <FileCheck2 className="mr-2 h-4 w-4" />
                Review Queue
              </Button>
            </Link>
          </div>
        </section>

        {/* Profile impact card */}
        <section className="mb-6 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="border-b bg-slate-950 px-6 py-6 text-white">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-900">
                  PM
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold">
                      Dr. Priya Menon
                    </h2>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Verified Expert
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-300">
                    ML Research • Medical AI • Research Mentorship
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                  <p className="text-xs text-slate-400">
                    Research Credits
                  </p>
                  <p className="mt-1 text-2xl font-bold">
                    126
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                  <p className="text-xs text-slate-400">
                    Accepted Contributions
                  </p>
                  <p className="mt-1 text-2xl font-bold">
                    17
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                  <p className="text-xs text-slate-400">
                    Projects
                  </p>
                  <p className="mt-1 text-2xl font-bold">
                    14
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            <div className="border-b p-5 md:border-b-0 md:border-r">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Contribution Impact
              </p>

              <div className="mt-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                <span className="text-lg font-bold">
                  High Impact
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Based on accepted research and expert reviews
              </p>
            </div>

            <div className="border-b p-5 md:border-b-0 md:border-r">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Rewards
              </p>

              <div className="mt-3 flex items-center gap-2">
                <WalletCards className="h-5 w-5 text-blue-600" />
                <span className="text-lg font-bold">
                  ₹32,500
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Accepted funded-project contributions
              </p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Integrity
              </p>

              <div className="mt-3 flex items-center gap-2">
                <Fingerprint className="h-5 w-5 text-emerald-600" />
                <span className="text-lg font-bold">
                  Verified
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Accepted contribution records verified
              </p>
            </div>
          </div>
        </section>

        {/* Contribution principles */}
        <section className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Award className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-blue-950">
                Contribution impact matters more than activity count
              </h2>

              <p className="mt-1 max-w-4xl text-sm leading-6 text-blue-900/75">
                Research credit is based on the agreed project roles and
                contribution impact, not simply the number of commits or
                actions. AI does not earn credit; human direction,
                review and responsibility remain attributable to the human
                contributor.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-6 rounded-2xl border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search contributions or projects..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <Button variant="outline">
              All Projects
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline">
              All Types
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline">
              All Status
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Contribution list */}
        <section className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-3 border-b px-6 py-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-bold text-slate-950">
                Contribution History
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Accepted and pending research activity
              </p>
            </div>

            <span className="text-xs font-medium text-slate-400">
              Showing 5 records
            </span>
          </div>

          <div className="divide-y">
            {contributions.map((item) => (
              <article
                key={item.id}
                className="p-6 transition hover:bg-slate-50/70"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      {item.type === "Expert Review" ? (
                        <FileCheck2 className="h-5 w-5" />
                      ) : (
                        <BookOpen className="h-5 w-5" />
                      )}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                          {item.id}
                        </span>

                        <StatusBadge status={item.status} />

                        <ImpactBadge impact={item.impact} />
                      </div>

                      <h3 className="mt-2 text-base font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                        {item.project}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                        <span>{item.projectId}</span>
                        <span>{item.type}</span>
                        <span>{item.milestone}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    View Record
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl border bg-slate-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Research Credit
                    </p>

                    <p className="mt-2 text-sm font-bold text-slate-950">
                      {item.credit}
                    </p>
                  </div>

                  <div className="rounded-xl border bg-slate-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Reward
                    </p>

                    <p className="mt-2 text-sm font-bold text-slate-950">
                      {item.reward}
                    </p>
                  </div>

                  <div className="rounded-xl border bg-slate-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Attribution
                    </p>

                    <div className="mt-2 flex items-center gap-1.5 text-sm font-bold text-slate-950">
                      <UserRound className="h-4 w-4 text-blue-600" />
                      {item.attribution}
                    </div>
                  </div>

                  <div className="rounded-xl border bg-slate-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Integrity
                    </p>

                    <div className="mt-2 flex items-center gap-1.5">
                      {item.integrity === "Verified" ? (
                        <>
                          <ShieldCheck className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm font-bold text-emerald-700">
                            Verified
                          </span>
                        </>
                      ) : (
                        <>
                          <History className="h-4 w-4 text-amber-600" />
                          <span className="text-sm font-bold text-amber-700">
                            Review Pending
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section className="mt-8 rounded-2xl border bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-3 border-b px-6 py-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-bold text-slate-950">
                Research Credentials
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Non-monetary recognition associated with verified work
              </p>
            </div>

            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Credentials
            </Button>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-3">
            {credentials.map((credential) => {
              const Icon = credential.icon;

              return (
                <div
                  key={credential.title}
                  className="rounded-2xl border bg-slate-50 p-5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </div>

                  <h3 className="mt-5 text-sm font-bold text-slate-950">
                    {credential.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Issued by {credential.issuer}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock3 className="h-3.5 w-3.5" />
                    {credential.date}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-3 px-0 text-blue-700 hover:bg-transparent hover:text-blue-800"
                  >
                    View Credential
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Attribution & audit */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-950">
                  AI-Assisted Attribution
                </h2>

                <p className="text-xs text-slate-500">
                  Transparent human ownership
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 text-violet-600" />

                <div>
                  <p className="text-sm font-semibold">
                    AI assistance recorded
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Some contributions used project-scoped AI assistance.
                    The associated human expert remains the accountable
                    contributor for direction and review.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <span className="text-xs text-slate-500">
                AI does not receive research credit
              </span>

              <span className="text-xs font-bold text-violet-700">
                Human attribution
              </span>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Fingerprint className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-950">
                  Contribution Integrity
                </h2>

                <p className="text-xs text-slate-500">
                  Traceable contribution records
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-xl border bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-medium">
                    Accepted records verified
                  </span>
                </div>

                <span className="text-xs font-bold text-emerald-700">
                  17
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <History className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-medium">
                    Audit-visible decisions
                  </span>
                </div>

                <span className="text-xs font-bold text-blue-700">
                  Enabled
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <LockKeyhole className="h-4 w-4 text-slate-600" />
                  <span className="text-xs font-medium">
                    Project-scoped records
                  </span>
                </div>

                <span className="text-xs font-bold text-slate-700">
                  Active
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-100 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />

            <p className="text-xs leading-5 text-slate-500">
              <span className="font-semibold text-slate-700">
                Demo interface:
              </span>{" "}
              contribution credits, rewards, credentials, attribution and
              integrity indicators use synthetic data. In the completed
              platform, these records should be generated from accepted
              contributions, the project charter and the audit/ledger
              system.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}