"use client";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FolderKanban,
  Home,
  Info,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProjectDetails() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: "Overview", icon: LayoutDashboard, href: "/student" },
    {
      label: "Discover Projects",
      icon: Search,
      href: "/student/discover",
    },
    { label: "My Team", icon: Users, href: "#" },
    { label: "Workspace", icon: FolderKanban, href: "#" },
    { label: "Contributions", icon: CheckCircle2, href: "#" },
    { label: "Rewards", icon: Award, href: "#" },
    { label: "Portfolio", icon: BriefcaseBusiness, href: "#" },
  ];

  const skills = [
    "Python",
    "Machine Learning",
    "Computer Vision",
    "Data Analysis",
  ];

  const milestones = [
    {
      number: "01",
      title: "Dataset Preparation",
      description:
        "Prepare, clean, and document the research dataset required for model development.",
      duration: "Week 1–2",
    },
    {
      number: "02",
      title: "Model Development",
      description:
        "Develop and evaluate an AI model suitable for low-cost field deployment.",
      duration: "Week 3–4",
    },
    {
      number: "03",
      title: "Evaluation & Documentation",
      description:
        "Evaluate results, document findings, and prepare the final research deliverables.",
      duration: "Week 5–6",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123B6D]">
              <div className="relative h-6 w-6">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-white" />
                <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-blue-300" />
                <span className="absolute bottom-0 left-2 h-2 w-2 rounded-full bg-emerald-400" />
                <span className="absolute left-1 top-3 h-px w-4 rotate-[-25deg] bg-white/70" />
                <span className="absolute left-2 top-3 h-px w-4 rotate-[25deg] bg-white/70" />
              </div>
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight text-[#123B6D]">
                Nex.Res
              </div>

              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Research Network
              </div>
            </div>
          </a>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-4 py-6">
          <div className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Workspace
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  <Icon className="h-[18px] w-[18px] text-slate-400" />
                  {item.label}

                  {item.label === "Contributions" && (
                    <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      Verified
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t border-slate-200 p-4">
          <div className="mb-3 rounded-xl bg-slate-50 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123B6D] text-sm font-semibold text-white">
                DJ
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  Dilip Jha
                </p>

                <p className="truncate text-xs text-slate-500">
                  Student Researcher
                </p>
              </div>
            </div>
          </div>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
            <LogOut className="h-[18px] w-[18px]" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-72">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div>
              <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
                <Home className="h-3.5 w-3.5" />
                <ChevronRight className="h-3 w-3" />
                <span>Student</span>
                <ChevronRight className="h-3 w-3" />
                <span>Discover Projects</span>
                <ChevronRight className="h-3 w-3" />
                <span>Project Details</span>
              </div>

              <h1 className="text-lg font-semibold text-slate-900">
                Project Details
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            <div className="hidden h-7 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-slate-900">
                  Dilip Jha
                </p>
                <p className="text-xs text-slate-500">
                  Student Researcher
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123B6D] text-xs font-semibold text-white">
                DJ
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Back */}
          <a
            href="/student/discover"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#123B6D]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Discover Projects
          </a>

          {/* Hero */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5 sm:p-7 lg:p-8">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                <div className="max-w-4xl">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#1D63A5]">
                      Funded Project
                    </span>

                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Verified Sponsor
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                    AI-Assisted Crop Disease Detection
                  </h2>

                  <p className="mt-3 text-sm font-medium text-slate-500">
                    AgriTech Research Lab
                  </p>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">
                    Develop an AI-assisted system for identifying crop diseases
                    from field images while keeping the solution affordable and
                    practical for small-scale farmers.
                  </p>
                </div>

                {/* Match */}
                <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-emerald-200 bg-white">
                    <span className="text-lg font-bold text-emerald-700">
                      94%
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-emerald-800">
                      Excellent match
                    </p>

                    <p className="mt-1 max-w-[180px] text-xs leading-5 text-emerald-700/80">
                      Based on your skills and research interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project summary */}
            <div className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              <SummaryItem
                icon={WalletCards}
                label="Reward"
                value="₹40,000"
                subtext="Funded engagement"
              />

              <SummaryItem
                icon={Clock3}
                label="Timeline"
                value="6 weeks"
                subtext="18 days remaining"
              />

              <SummaryItem
                icon={Users}
                label="Team"
                value="4 members"
                subtext="2 positions available"
              />

              <SummaryItem
                icon={BookOpen}
                label="Research Area"
                value="AI / Computer Vision"
                subtext="Agricultural technology"
              />
            </div>
          </section>

          {/* Main content */}
          <section className="mt-7 grid gap-7 xl:grid-cols-[minmax(0,1fr)_370px]">
            {/* Left */}
            <div className="space-y-7">
              {/* About */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <SectionHeading
                  icon={BookOpen}
                  title="About the Project"
                />

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                  <p>
                    The project aims to explore an accessible computer vision
                    approach for detecting common crop diseases from images
                    captured in field conditions.
                  </p>

                  <p>
                    The research team will study suitable datasets, develop and
                    evaluate machine learning approaches, and document the
                    findings for future research and deployment.
                  </p>
                </div>
              </div>

              {/* Objectives */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <SectionHeading
                  icon={CheckCircle2}
                  title="Research Objectives"
                />

                <div className="mt-5 space-y-3">
                  {[
                    "Prepare and document a suitable image dataset.",
                    "Develop and compare machine learning approaches.",
                    "Evaluate model performance using agreed research metrics.",
                    "Document findings, limitations, and possible future improvements.",
                  ].map((objective, index) => (
                    <div
                      key={objective}
                      className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-[#1D63A5]">
                        {index + 1}
                      </div>

                      <p className="text-sm leading-6 text-slate-600">
                        {objective}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <SectionHeading
                  icon={FolderKanban}
                  title="Project Milestones"
                />

                <div className="mt-6 space-y-0">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.number}
                      className="relative flex gap-4 pb-7 last:pb-0"
                    >
                      {index !== milestones.length - 1 && (
                        <div className="absolute left-[15px] top-9 h-[calc(100%-20px)] w-px bg-slate-200" />
                      )}

                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#123B6D] text-[10px] font-bold text-white">
                        {milestone.number}
                      </div>

                      <div className="flex-1 rounded-xl border border-slate-200 p-4">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row">
                          <h4 className="text-sm font-semibold text-slate-900">
                            {milestone.title}
                          </h4>

                          <span className="text-xs font-medium text-slate-400">
                            {milestone.duration}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <SectionHeading
                  icon={Sparkles}
                  title="Skills & Requirements"
                />

                <p className="mt-3 text-sm text-slate-500">
                  The project team is looking for contributors comfortable
                  with the following areas.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {/* Action card */}
              <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-950">
                  Interested in this project?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Express your interest to begin the matching and acceptance
                  process.
                </p>

                <Button className="mt-5 w-full gap-2 rounded-xl bg-[#123B6D] py-5 hover:bg-[#0E315B]">
                  Express Interest
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <FileCheck2 className="h-4 w-4" />
                  View Project Charter
                </button>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

                    <p className="text-xs leading-5 text-slate-500">
                      The confidential project brief becomes available only
                      after the required project acceptance process.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Match */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#1D63A5] shadow-sm">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Why you matched
                    </h3>

                    <p className="text-xs text-slate-500">
                      AI-assisted project matching
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <MatchReason text="Python experience" />
                  <MatchReason text="Interest in AI / ML" />
                  <MatchReason text="Computer vision skills" />
                  <MatchReason text="Research project experience" />
                </div>

                <p className="mt-4 text-[11px] leading-5 text-slate-500">
                  Matching recommendations support discovery. Final project
                  participation is determined by the project team and agreed
                  charter.
                </p>
              </div>

              {/* Security */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Collaboration safeguards
                    </h3>

                    <p className="text-xs text-slate-500">
                      Designed for transparent research
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <SecurityItem
                    icon={LockKeyhole}
                    title="Access controlled"
                    description="Project information is shared according to defined access levels."
                  />

                  <SecurityItem
                    icon={FileCheck2}
                    title="Charter governed"
                    description="Roles, scope, rewards, IP, and confidentiality can be agreed before work begins."
                  />

                  <SecurityItem
                    icon={ShieldCheck}
                    title="Contribution integrity"
                    description="Accepted contributions can be recorded in the project contribution history."
                  />
                </div>
              </div>

              {/* Sponsor */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Project sponsor
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123B6D] text-sm font-bold text-white">
                    AR
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      AgriTech Research Lab
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Agricultural AI Research
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Verified organization
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            Nex.Res · Collaborate. Contribute. Get Credited.
          </footer>
        </main>
      </div>
    </div>
  );
}

function SummaryItem({ icon: Icon, label, value, subtext }) {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
          <Icon className="h-4 w-4" />
        </div>

        <p className="text-xs font-medium text-slate-500">{label}</p>
      </div>

      <p className="mt-4 text-base font-bold text-slate-900">{value}</p>

      <p className="mt-1 text-xs text-slate-400">{subtext}</p>
    </div>
  );
}

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#1D63A5]">
        <Icon className="h-4 w-4" />
      </div>

      <h3 className="font-semibold text-slate-950">{title}</h3>
    </div>
  );
}

function MatchReason({ text }) {
  return (
    <div className="flex items-center gap-2.5">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />

      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
}

function SecurityItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

      <div>
        <p className="text-xs font-semibold text-slate-800">{title}</p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}