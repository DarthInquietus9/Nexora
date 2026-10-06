"use client";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FolderKanban,
  Home,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Menu,
  Search,
  ShieldCheck,
  Users,
  WalletCards,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProjectCharter() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const navItems = [
    {
      label: "Overview",
      icon: LayoutDashboard,
      href: "/student",
    },
    {
      label: "Discover Projects",
      icon: Search,
      href: "/student/discover",
    },
    {
      label: "My Team",
      icon: Users,
      href: "#",
    },
    {
      label: "Workspace",
      icon: FolderKanban,
      href: "#",
    },
    {
      label: "Contributions",
      icon: CheckCircle2,
      href: "#",
    },
    {
      label: "Rewards",
      icon: Award,
      href: "#",
    },
    {
      label: "Portfolio",
      icon: BriefcaseBusiness,
      href: "#",
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
        {/* Logo */}
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

        {/* Navigation */}
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

        {/* User */}
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
                <span>Project Charter</span>
              </div>

              <h1 className="text-lg font-semibold text-slate-900">
                Project Charter
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

        {/* Content */}
        <main className="mx-auto max-w-[1250px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Back */}
          <a
            href="/student/project"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#123B6D]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Project Details
          </a>

          {/* Project header */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#1D63A5]">
                    Charter v1.0
                  </span>

                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Current Version
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  AI-Assisted Crop Disease Detection
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  AgriTech Research Lab · Funded research engagement
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Charter status
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {accepted ? "Accepted by you" : "Awaiting your acceptance"}
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <InfoBox
                icon={WalletCards}
                label="Reward"
                value="₹40,000"
              />

              <InfoBox
                icon={Users}
                label="Team"
                value="4 members"
              />

              <InfoBox
                icon={FileCheck2}
                label="Version"
                value="v1.0 · Accepted draft"
              />
            </div>
          </section>

          {/* Important notice */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

            <div>
              <p className="text-sm font-semibold text-amber-900">
                Review before accepting
              </p>

              <p className="mt-1 text-xs leading-5 text-amber-800">
                The accepted charter establishes the project terms. Changes
                after acceptance require a new charter version and
                re-acceptance.
              </p>
            </div>
          </div>

          {/* Charter sections */}
          <section className="mt-6 space-y-6">
            {/* Scope */}
            <CharterCard
              icon={FileCheck2}
              title="1. Project Scope"
              description="What the team has agreed to work on."
            >
              <p className="text-sm leading-7 text-slate-600">
                The team will research and develop an AI-assisted approach for
                detecting crop diseases from field images. Work includes
                dataset preparation, model development, evaluation, and
                research documentation.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <ScopeItem
                  title="Included"
                  items={[
                    "Dataset preparation",
                    "Model experimentation",
                    "Performance evaluation",
                    "Research documentation",
                  ]}
                />

                <ScopeItem
                  title="Not included"
                  items={[
                    "Commercial product launch",
                    "Unapproved external data sharing",
                    "Production deployment without review",
                    "Work outside agreed milestones",
                  ]}
                />
              </div>
            </CharterCard>

            {/* People and roles */}
            <CharterCard
              icon={Users}
              title="2. People & Roles"
              description="Responsibilities are agreed before work begins."
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <RoleCard
                  initials="AR"
                  name="AgriTech Research Lab"
                  role="Sponsor"
                  description="Provides project direction, requirements, and agreed reward."
                />

                <RoleCard
                  initials="DJ"
                  name="Dilip Jha"
                  role="Student Researcher"
                  description="Contributes to frontend research tooling and project documentation."
                />

                <RoleCard
                  initials="SM"
                  name="Research Mentor"
                  role="Expert / Mentor"
                  description="Reviews research direction and provides domain guidance."
                />

                <RoleCard
                  initials="AI"
                  name="Research Assistant"
                  role="AI Agent"
                  description="Scoped AI assistance under a named human owner and project permissions."
                />
              </div>
            </CharterCard>

            {/* Engagement and rewards */}
            <CharterCard
              icon={WalletCards}
              title="3. Engagement & Rewards"
              description="The reward terms are defined before contribution."
            >
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-emerald-600">
                    <WalletCards className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-emerald-900">
                      Funded engagement
                    </p>

                    <p className="mt-1 text-xs text-emerald-700">
                      Simulated project reward: ₹40,000
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Term title="Reward principle">
                  Every accepted contribution is credited according to the
                  agreed roles and contribution impact.
                </Term>

                <Term title="AI contributions">
                  AI does not receive rewards. Human direction, review, and
                  accepted contribution ownership are credited.
                </Term>

                <Term title="Negative results">
                  A valid negative result can still count as a meaningful
                  accepted research contribution.
                </Term>

                <Term title="Funding">
                  For funded projects, the agreed milestone funding is placed
                  into simulated escrow before work begins.
                </Term>
              </div>
            </CharterCard>

            {/* IP */}
            <CharterCard
              icon={BookOpen}
              title="4. Intellectual Property & Publication"
              description="How research outputs and publication are handled."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Term title="Research outputs">
                  Project outputs are attributed to the contributors defined
                  in the accepted charter.
                </Term>

                <Term title="Publication">
                  Publication decisions require agreement from the relevant
                  project participants and sponsor.
                </Term>

                <Term title="Attribution">
                  Accepted human contributions are recorded so contributors
                  can receive appropriate credit.
                </Term>

                <Term title="Future commercialization">
                  Any future commercialization follows the terms agreed by the
                  project participants.
                </Term>
              </div>
            </CharterCard>

            {/* Confidentiality */}
            <CharterCard
              icon={ShieldCheck}
              title="5. Confidentiality & Access"
              description="Information access is controlled according to project sensitivity."
            >
              <div className="grid gap-4 md:grid-cols-3">
                <SecurityBox
                  icon={LockKeyhole}
                  title="Access control"
                  text="Project information is shared only with authorized participants."
                />

                <SecurityBox
                  icon={ShieldCheck}
                  title="Sensitive information"
                  text="Confidential material follows the project's defined disclosure rules."
                />

                <SecurityBox
                  icon={FileCheck2}
                  title="Audit trail"
                  text="Important project actions can be recorded for transparency."
                />
              </div>
            </CharterCard>

            {/* Exit and disputes */}
            <CharterCard
              icon={BriefcaseBusiness}
              title="6. Exit & Dispute Handling"
              description="What happens when someone leaves or disagreements occur."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Term title="Voluntary exit">
                  A participant may request to leave according to the agreed
                  project process, while previously accepted contributions
                  remain credited.
                </Term>

                <Term title="Disputes">
                  Project disagreements should first be handled through the
                  defined review process and relevant project stakeholders.
                </Term>
              </div>
            </CharterCard>
          </section>

          {/* Acceptance */}
          <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    accepted
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-blue-50 text-[#1D63A5]"
                  }`}
                >
                  {accepted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <FileCheck2 className="h-5 w-5" />
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    {accepted
                      ? "You have accepted this charter"
                      : "Accept the project charter"}
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                    {accepted
                      ? "Your acceptance is currently represented in this frontend demo. Backend recording will be connected later."
                      : "By accepting, you confirm that you have reviewed the project scope, roles, engagement, reward, confidentiality, IP, publication, and exit terms."}
                  </p>
                </div>
              </div>

              <Button
                onClick={() => setAccepted(true)}
                disabled={accepted}
                className={`shrink-0 gap-2 rounded-xl px-6 ${
                  accepted
                    ? "bg-emerald-600 hover:bg-emerald-600"
                    : "bg-[#123B6D] hover:bg-[#0E315B]"
                }`}
              >
                {accepted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Charter Accepted
                  </>
                ) : (
                  <>
                    Accept Charter
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
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

/* ---------------- Components ---------------- */

function InfoBox({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-slate-400" />

        <span className="text-xs font-medium text-slate-500">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function CharterCard({
  icon: Icon,
  title,
  description,
  children,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D63A5]">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-950">
            {title}
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}

function ScopeItem({ title, items }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
        {title}
      </p>

      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

            <span className="text-xs leading-5 text-slate-600">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoleCard({
  initials,
  name,
  role,
  description,
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123B6D] text-xs font-bold text-white">
          {initials}
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">
            {name}
          </p>

          <p className="mt-0.5 text-xs font-medium text-[#1D63A5]">
            {role}
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function Term({ title, children }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-xs font-semibold text-slate-800">
        {title}
      </p>

      <p className="mt-2 text-xs leading-6 text-slate-500">
        {children}
      </p>
    </div>
  );
}

function SecurityBox({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <Icon className="h-5 w-5 text-[#1D63A5]" />

      <p className="mt-3 text-sm font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </div>
  );
}