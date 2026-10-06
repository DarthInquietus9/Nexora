"use client";

import {
  Award,
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FolderKanban,
  Home,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MyTeam() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      href: "/student/team",
      active: true,
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

  const members = [
    {
      initials: "DJ",
      name: "Dilip Jha",
      role: "Student Researcher",
      area: "Frontend & Research Tools",
      status: "You",
      verified: true,
      color: "bg-[#123B6D]",
    },
    {
      initials: "AR",
      name: "AgriTech Research Lab",
      role: "Sponsor",
      area: "Project Direction",
      status: "Sponsor",
      verified: true,
      color: "bg-emerald-700",
    },
    {
      initials: "SM",
      name: "Dr. Sarah Menon",
      role: "Expert / Mentor",
      area: "Agricultural AI",
      status: "Mentor",
      verified: true,
      color: "bg-violet-700",
    },
    {
      initials: "RK",
      name: "Rahul Kumar",
      role: "Student Researcher",
      area: "Machine Learning",
      status: "Member",
      verified: true,
      color: "bg-slate-700",
    },
    {
      initials: "AI",
      name: "Research Assistant",
      role: "AI Agent",
      area: "Scoped AI Assistance",
      status: "AI Agent",
      verified: true,
      color: "bg-blue-700",
    },
  ];

  const responsibilities = [
    {
      title: "Dataset Preparation",
      owner: "Rahul Kumar",
      status: "In Progress",
      progress: 72,
    },
    {
      title: "Research Interface",
      owner: "Dilip Jha",
      status: "In Progress",
      progress: 64,
    },
    {
      title: "Model Development",
      owner: "Dr. Sarah Menon",
      status: "Review",
      progress: 48,
    },
    {
      title: "Research Documentation",
      owner: "Research Assistant",
      status: "AI Assisted",
      progress: 35,
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
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    item.active
                      ? "bg-blue-50 text-[#123B6D]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    className={`h-[18px] w-[18px] ${
                      item.active
                        ? "text-[#1D63A5]"
                        : "text-slate-400"
                    }`}
                  />

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
                <span>My Team</span>
              </div>

              <h1 className="text-lg font-semibold text-slate-900">
                My Team
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
          {/* Page header */}
          <section className="mb-7">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-sm font-medium text-[#1D63A5]">
                  Research Team
                </p>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  AI-Assisted Crop Disease Detection
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Collaborate with verified team members, understand
                  responsibilities, and keep project roles transparent.
                </p>
              </div>

              <Button className="w-fit gap-2 rounded-xl bg-[#123B6D] hover:bg-[#0E315B]">
                <Plus className="h-4 w-4" />
                Invite Member
              </Button>
            </div>
          </section>

          {/* Team summary */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <SummaryCard
              icon={Users}
              label="Team Members"
              value="5"
              description="4 human members + 1 AI agent"
            />

            <SummaryCard
              icon={UserCheck}
              label="Verified Members"
              value="5 / 5"
              description="Identity status confirmed"
            />

            <SummaryCard
              icon={FileCheck2}
              label="Charter"
              value="Accepted"
              description="Version 1.0"
            />

            <SummaryCard
              icon={ShieldCheck}
              label="Access"
              value="Controlled"
              description="Project-scoped permissions"
            />
          </section>

          {/* Main content */}
          <section className="mt-7 grid gap-7 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Left */}
            <div className="space-y-7">
              {/* Members */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Team Members
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      People and AI agents participating in this project
                    </p>
                  </div>

                  <span className="flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified team
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {members.map((member) => (
                    <div
                      key={member.name}
                      className="p-5 transition hover:bg-slate-50/70 sm:p-6"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${member.color}`}
                          >
                            {member.initials}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-sm font-semibold text-slate-900">
                                {member.name}
                              </h4>

                              {member.verified && (
                                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                                  <CheckCircle2 className="h-3 w-3" />
                                  Verified
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs font-medium text-[#1D63A5]">
                              {member.role}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              {member.area}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-600">
                            {member.status}
                          </span>

                          <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                            <MessageSquare className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 p-5 sm:p-6">
                  <h3 className="font-semibold text-slate-950">
                    Responsibilities
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Current responsibilities based on the accepted project
                    charter
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {responsibilities.map((item) => (
                    <div key={item.title} className="p-5 sm:p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-xs text-slate-500">
                            Owner:{" "}
                            <span className="font-medium text-slate-700">
                              {item.owner}
                            </span>
                          </p>
                        </div>

                        <span
                          className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            item.status === "Review"
                              ? "bg-amber-50 text-amber-700"
                              : item.status === "AI Assisted"
                              ? "bg-violet-50 text-violet-700"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-4">
                        <div className="mb-2 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">
                            Progress
                          </span>

                          <span className="font-semibold text-slate-700">
                            {item.progress}%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-[#1D63A5]"
                            style={{
                              width: `${item.progress}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-7">
              {/* Team health */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Team Trust Status
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Project collaboration safeguards
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <StatusRow
                    title="Member verification"
                    value="Complete"
                    icon={CheckCircle2}
                  />

                  <StatusRow
                    title="Charter acceptance"
                    value="Complete"
                    icon={FileCheck2}
                  />

                  <StatusRow
                    title="Access controls"
                    value="Active"
                    icon={LockKeyhole}
                  />

                  <StatusRow
                    title="Contribution tracking"
                    value="Enabled"
                    icon={ShieldCheck}
                  />
                </div>
              </div>

              {/* AI agent */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#1D63A5] shadow-sm">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Project AI Agent
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Research Assistant
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Access status
                    </span>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                      Scoped
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-semibold text-slate-800">
                      Human owner
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Dr. Sarah Menon
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-semibold text-slate-800">
                      Allowed tasks
                    </p>

                    <div className="mt-2 space-y-2">
                      {[
                        "Research summarization",
                        "Dataset documentation",
                        "Draft analysis assistance",
                      ].map((task) => (
                        <div
                          key={task}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-xs text-slate-600">
                            {task}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-[11px] leading-5 text-slate-500">
                  AI access is project-scoped and operates under a named human
                  owner.
                </p>
              </div>

              {/* Communication */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <MessageSquare className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Team Communication
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Coordinate project work
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left hover:bg-slate-50">
                    <MessageSquare className="h-4 w-4 text-[#1D63A5]" />

                    <div>
                      <p className="text-xs font-semibold text-slate-800">
                        Project discussion
                      </p>

                      <p className="mt-1 text-[11px] text-slate-500">
                        4 unread messages
                      </p>
                    </div>

                    <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
                  </button>

                  <button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left hover:bg-slate-50">
                    <Mail className="h-4 w-4 text-[#1D63A5]" />

                    <div>
                      <p className="text-xs font-semibold text-slate-800">
                        Contact sponsor
                      </p>

                      <p className="mt-1 text-[11px] text-slate-500">
                        Send a project message
                      </p>
                    </div>

                    <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Charter */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <FileCheck2 className="mt-0.5 h-5 w-5 text-[#1D63A5]" />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Accepted Project Charter
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      All team responsibilities and project terms are governed
                      by the accepted charter.
                    </p>

                    <a
                      href="/student/charter"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#1D63A5]"
                    >
                      View charter
                      <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
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

/* ---------- Reusable components ---------- */

function SummaryCard({
  icon: Icon,
  label,
  value,
  description,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {label}
          </p>

          <p className="mt-2 text-xl font-bold text-slate-950">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1D63A5]">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}

function StatusRow({
  title,
  value,
  icon: Icon,
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-emerald-600" />

        <span className="text-xs text-slate-600">
          {title}
        </span>
      </div>

      <span className="text-[11px] font-semibold text-emerald-700">
        {value}
      </span>
    </div>
  );
}