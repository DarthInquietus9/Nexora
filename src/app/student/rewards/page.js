"use client";

import { useState } from "react";
import {
  Award,
  BadgeCheck,
  Banknote,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  Gift,
  GraduationCap,
  Info,
  LockKeyhole,
  MoreHorizontal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Ananya Rao",
    role: "Student Researcher",
    contribution: "31%",
    reward: "₹31,000",
    status: "Eligible",
    initials: "AR",
  },
  {
    name: "Rahul Menon",
    role: "ML Engineer",
    contribution: "24%",
    reward: "₹24,000",
    status: "Eligible",
    initials: "RM",
  },
  {
    name: "Meera Iyer",
    role: "Research & Documentation",
    contribution: "18%",
    reward: "₹18,000",
    status: "Eligible",
    initials: "MI",
  },
  {
    name: "Vikram Shah",
    role: "Data Researcher",
    contribution: "12%",
    reward: "₹12,000",
    status: "Under Review",
    initials: "VS",
  },
];

const rewardHistory = [
  {
    title: "Dataset Preparation",
    amount: "₹18,000",
    date: "Oct 5, 2026",
    status: "Released",
    milestone: "Milestone 1",
  },
  {
    title: "Literature & Research",
    amount: "₹13,000",
    date: "Oct 5, 2026",
    status: "Released",
    milestone: "Milestone 1",
  },
  {
    title: "Model Optimization",
    amount: "₹24,000",
    date: "Pending acceptance",
    status: "In Escrow",
    milestone: "Milestone 2",
  },
];

const credentials = [
  {
    title: "Research Contributor",
    issuer: "Nex.Res",
    date: "Oct 5, 2026",
    description:
      "Recognizes verified contribution to the collaborative research project.",
    icon: Award,
  },
  {
    title: "AI-Assisted Research",
    issuer: "Nex.Res",
    date: "Oct 5, 2026",
    description:
      "Recognizes responsible human-directed use of project-scoped AI tools.",
    icon: Bot,
  },
  {
    title: "Research Milestone Contributor",
    issuer: "Nex.Res",
    date: "Pending",
    description:
      "Credential will be issued after the next milestone is accepted.",
    icon: GraduationCap,
  },
];

function StatusBadge({ status }) {
  if (status === "Released" || status === "Eligible") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        {status}
      </span>
    );
  }

  if (status === "In Escrow") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
        <LockKeyhole className="h-3.5 w-3.5" />
        {status}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
      <Clock3 className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="flex h-16 items-center border-b border-slate-200 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900 text-sm font-bold text-white">
              N
            </div>

            <div>
              <p className="text-sm font-bold text-slate-950">Nex.Res</p>
              <p className="text-[11px] text-slate-500">
                Research Ecosystem
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <nav className="mt-3 space-y-1">
            {[
              ["Dashboard", "/student"],
              ["Discover Projects", "/student/discover"],
              ["My Projects", "/student/project"],
              ["My Team", "/student/team"],
              ["Workspace", "/student/workspace"],
              ["Contributions", "/student/contributions"],
              ["Rewards", "/student/rewards"],
              ["Portfolio", "/student/portfolio"],
            ].map(([label, href]) => {
              const active = label === "Rewards";

              return (
                <a
                  key={label}
                  href={href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-blue-50 text-blue-800"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      active ? "bg-blue-700" : "bg-slate-300"
                    }`}
                  />
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="mt-8">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Current Project
            </p>

            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-md bg-blue-100 p-1.5 text-blue-700">
                  <FileText className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-800">
                    Diabetic Retinopathy
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    NX-DR-026
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Progress</span>
                <span className="font-semibold text-slate-700">68%</span>
              </div>

              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[68%] rounded-full bg-blue-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700">
              AR
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">
                Ananya Rao
              </p>
              <p className="truncate text-xs text-slate-500">
                Student Researcher
              </p>
            </div>

            <MoreHorizontal className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur lg:px-8">
          <div>
            <p className="text-xs text-slate-500">Student Portal / Project</p>
            <h1 className="text-sm font-bold text-slate-900">
              Rewards & Recognition
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100">
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
              <Trophy className="h-5 w-5" />
            </button>

            <div className="hidden h-7 w-px bg-slate-200 sm:block" />

            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">
                AR
              </div>

              <span className="text-sm font-medium text-slate-700">
                Ananya Rao
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                <span>Project</span>
                <span>/</span>
                <span>Digital Research</span>
                <span>/</span>
                <span className="font-medium text-slate-700">Rewards</span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Rewards & Recognition
              </h2>

              <p className="mt-1 max-w-2xl text-sm text-slate-500">
                Track your agreed project rewards, escrow status, and verified
                research credentials.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Charter-linked rewards
            </div>
          </div>

          {/* Reward hero */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-6">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-blue-50 p-2 text-blue-800">
                      <WalletCards className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                      Your reward position
                    </span>
                  </div>

                  <div className="mt-4 flex items-end gap-3">
                    <p className="text-4xl font-bold tracking-tight text-slate-950">
                      ₹43,000
                    </p>

                    <span className="mb-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      31% contribution share
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    Current estimated reward based on accepted contributions
                    and the project charter.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      Project Pool
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      ₹1,00,000
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      Released
                    </p>
                    <p className="mt-1 text-lg font-bold text-emerald-700">
                      ₹31,000
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      In Escrow
                    </p>
                    <p className="mt-1 text-lg font-bold text-blue-700">
                      ₹12,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 bg-slate-50 p-5 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white p-2 text-emerald-700 shadow-sm">
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Terms accepted
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Charter v1.2
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white p-2 text-blue-700 shadow-sm">
                  <LockKeyhole className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Funds secured
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Simulated escrow
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white p-2 text-violet-700 shadow-sm">
                  <BadgeCheck className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Contribution verified
                  </p>
                  <p className="text-[11px] text-slate-500">
                    19 accepted records
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex gap-1 overflow-x-auto border-b border-slate-200">
            {["Overview", "Reward History", "Team Split", "Credentials"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${
                    activeTab === tab
                      ? "border-blue-800 text-blue-800"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Overview */}
          {activeTab === "Overview" && (
            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Reward breakdown
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Based on the current accepted contribution records.
                    </p>
                  </div>

                  <Award className="h-5 w-5 text-blue-700" />
                </div>

                <div className="mt-6 space-y-5">
                  {[
                    ["Dataset preparation", 42, "₹18,000"],
                    ["Research & literature", 30, "₹13,000"],
                    ["Model optimization", 28, "₹12,000"],
                  ].map(([label, percentage, amount]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-700">
                          {label}
                        </span>

                        <span className="text-sm font-bold text-slate-900">
                          {amount}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-blue-800"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>

                        <span className="w-9 text-right text-xs font-semibold text-slate-500">
                          {percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Current total
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Subject to milestone acceptance
                      </p>
                    </div>

                    <p className="text-xl font-bold text-slate-950">
                      ₹43,000
                    </p>
                  </div>
                </div>
              </section>

              <div className="space-y-6">
                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Banknote className="h-5 w-5 text-emerald-700" />

                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        Escrow status
                      </h3>

                      <p className="text-[11px] text-slate-500">
                        Simulated project funds
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-emerald-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-emerald-800">
                        Secured for project
                      </span>

                      <LockKeyhole className="h-4 w-4 text-emerald-700" />
                    </div>

                    <p className="mt-2 text-2xl font-bold text-emerald-900">
                      ₹1,00,000
                    </p>
                  </div>

                  <div className="mt-4 space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">
                        Released after acceptance
                      </span>
                      <span className="font-semibold text-slate-800">
                        ₹31,000
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">Remaining</span>
                      <span className="font-semibold text-slate-800">
                        ₹69,000
                      </span>
                    </div>
                  </div>
                </section>

                <section className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

                    <div>
                      <h3 className="text-sm font-bold text-blue-900">
                        Reward principle
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-blue-800">
                        Reward credit is based on agreed roles and the impact
                        of accepted contributions, not simply the number of
                        commits.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* Reward History */}
          {activeTab === "Reward History" && (
            <section className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-5">
                <h3 className="text-base font-bold text-slate-900">
                  Reward history
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Milestone-based reward events for this project.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {rewardHistory.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-slate-100 p-2.5 text-slate-600">
                        <Banknote className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item.milestone} · {item.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <p className="text-base font-bold text-slate-900">
                        {item.amount}
                      </p>
                      <StatusBadge status={item.status} />
                      <ChevronRight className="hidden h-4 w-4 text-slate-400 sm:block" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Team Split */}
          {activeTab === "Team Split" && (
            <section className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-5">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-700" />

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Team reward distribution
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Demonstration of the agreed contribution-based split.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">
                        {member.initials}
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          {member.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-wide text-slate-400">
                          Contribution
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-800">
                          {member.contribution}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-wide text-slate-400">
                          Reward
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-800">
                          {member.reward}
                        </p>
                      </div>

                      <StatusBadge status={member.status} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Credentials */}
          {activeTab === "Credentials" && (
            <section className="mt-6">
              <div className="mb-5">
                <h3 className="text-base font-bold text-slate-900">
                  Research credentials
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Non-monetary recognition issued from verified project
                  participation.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {credentials.map((credential) => {
                  const Icon = credential.icon;
                  const pending = credential.date === "Pending";

                  return (
                    <div
                      key={credential.title}
                      className={`rounded-xl border bg-white p-5 shadow-sm ${
                        pending
                          ? "border-dashed border-slate-300"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`rounded-xl p-3 ${
                            pending
                              ? "bg-slate-100 text-slate-400"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        {pending ? (
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                            Pending
                          </span>
                        ) : (
                          <BadgeCheck className="h-5 w-5 text-emerald-600" />
                        )}
                      </div>

                      <h4 className="mt-5 text-sm font-bold text-slate-900">
                        {credential.title}
                      </h4>

                      <p className="mt-1 text-xs font-medium text-blue-700">
                        Issued by {credential.issuer}
                      </p>

                      <p className="mt-3 text-xs leading-5 text-slate-500">
                        {credential.description}
                      </p>

                      <div className="mt-5 border-t border-slate-100 pt-4 text-[11px] text-slate-500">
                        {pending ? "Expected after milestone acceptance" : `Issued ${credential.date}`}
                      </div>

                      {!pending && (
                        <Button
                          variant="outline"
                          className="mt-4 w-full gap-2 text-xs"
                        >
                          <FileCheck2 className="h-4 w-4" />
                          View Credential
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Footer notice */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />

            <div>
              <p className="text-xs font-semibold text-slate-700">
                Demo environment
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                Reward amounts, escrow balances, contribution percentages and
                credentials shown here are synthetic frontend data for the
                hackathon demonstration. Final values will come from the
                project charter, accepted contributions and backend services.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}