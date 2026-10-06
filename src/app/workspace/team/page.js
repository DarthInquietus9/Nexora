"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FolderKanban,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Mail,
  MoreHorizontal,
  ShieldCheck,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const members = [
  {
    name: "Aarav Mehta",
    initials: "AM",
    role: "Student Researcher",
    specialty: "Machine Learning",
    type: "Student",
    verification: "Verified",
    access: "Contributor",
    coi: "Clear",
    aiOwner: true,
    status: "Online",
    contributions: 18,
    joined: "Oct 06, 2026",
  },
  {
    name: "Priya Nair",
    initials: "PN",
    role: "Expert Mentor",
    specialty: "Medical Imaging",
    type: "Expert",
    verification: "Verified",
    access: "Reviewer",
    coi: "Clear",
    aiOwner: false,
    status: "Online",
    contributions: 14,
    joined: "Oct 06, 2026",
  },
  {
    name: "Rahul Sharma",
    initials: "RS",
    role: "Student Researcher",
    specialty: "Edge Computing",
    type: "Student",
    verification: "Verified",
    access: "Contributor",
    coi: "Clear",
    aiOwner: false,
    status: "Away",
    contributions: 11,
    joined: "Oct 06, 2026",
  },
  {
    name: "Dr. Kavya Menon",
    initials: "KM",
    role: "Expert Mentor",
    specialty: "Clinical Research",
    type: "Expert",
    verification: "Verified",
    access: "Reviewer",
    coi: "Clear",
    aiOwner: false,
    status: "Online",
    contributions: 9,
    joined: "Oct 06, 2026",
  },
  {
    name: "Nova Research Labs",
    initials: "NR",
    role: "Project Sponsor",
    specialty: "Research Funding",
    type: "Sponsor",
    verification: "Verified",
    access: "Sponsor",
    coi: "Clear",
    aiOwner: false,
    status: "Online",
    contributions: 6,
    joined: "Oct 05, 2026",
  },
  {
    name: "AI Scoping Agent",
    initials: "AI",
    role: "Scoped AI Agent",
    specialty: "Planning & Analysis",
    type: "AI Agent",
    verification: "Scoped",
    access: "Project Scoped",
    coi: "N/A",
    aiOwner: false,
    status: "Active",
    contributions: 23,
    joined: "Oct 06, 2026",
  },
];

const accessLevels = [
  {
    title: "Contributor",
    description: "Can access approved project workspace and submit contributions.",
    count: 2,
    color: "blue",
  },
  {
    title: "Reviewer",
    description: "Can review contributions and provide expert feedback.",
    count: 2,
    color: "purple",
  },
  {
    title: "Sponsor",
    description: "Can manage project scope, milestones and funding.",
    count: 1,
    color: "emerald",
  },
  {
    title: "Project Scoped",
    description: "AI access limited to approved project resources.",
    count: 1,
    color: "amber",
  },
];

function TypeBadge({ type }) {
  const styles = {
    Student: "bg-blue-50 text-blue-700",
    Expert: "bg-purple-50 text-purple-700",
    Sponsor: "bg-emerald-50 text-emerald-700",
    "AI Agent": "bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
        styles[type] || "bg-slate-100 text-slate-600"
      }`}
    >
      {type}
    </span>
  );
}

function VerificationBadge({ status }) {
  const isScoped = status === "Scoped";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
        isScoped ? "text-amber-700" : "text-emerald-700"
      }`}
    >
      {isScoped ? (
        <LockKeyhole className="h-3.5 w-3.5" />
      ) : (
        <CheckCircle2 className="h-3.5 w-3.5" />
      )}
      {status}
    </span>
  );
}

function AccessBadge({ access }) {
  const styles = {
    Contributor: "bg-blue-50 text-blue-700",
    Reviewer: "bg-purple-50 text-purple-700",
    Sponsor: "bg-emerald-50 text-emerald-700",
    "Project Scoped": "bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
        styles[access] || "bg-slate-100 text-slate-600"
      }`}
    >
      {access}
    </span>
  );
}

function COIBadge({ value }) {
  if (value === "N/A") {
    return (
      <span className="text-xs font-medium text-slate-400">
        N/A
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
      <CheckCircle2 className="h-3.5 w-3.5" />
      {value}
    </span>
  );
}

export default function WorkspaceTeamPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-800 bg-slate-950 text-white lg:flex lg:flex-col">
        <div className="flex h-20 items-center border-b border-slate-800 px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                Nex.Res
              </p>
              <p className="text-[11px] text-slate-400">
                Research Ecosystem
              </p>
            </div>
          </Link>
        </div>

        <div className="border-b border-slate-800 px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Current Project
          </p>

          <div className="rounded-xl bg-slate-900 p-3">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                <FolderKanban className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  EdgeVision Research
                </p>

                <p className="mt-1 text-[10px] text-slate-500">
                  NX-042
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Workspace
          </p>

          <nav className="space-y-1">
            <WorkspaceLink
              href="/workspace/overview"
              icon={<LayoutDashboard className="h-4 w-4" />}
              label="Overview"
            />

            <WorkspaceLink
              href="/workspace/team"
              icon={<Users className="h-4 w-4" />}
              label="Team"
              active
            />

            <WorkspaceLink
              href="/workspace/ai-agent"
              icon={<Bot className="h-4 w-4" />}
              label="AI Agent"
            />

            <WorkspaceLink
              href="/workspace/contributions"
              icon={<FileCheck2 className="h-4 w-4" />}
              label="Contributions"
            />

            <WorkspaceLink
              href="/workspace/integrity"
              icon={<ShieldCheck className="h-4 w-4" />}
              label="Integrity"
            />

            <WorkspaceLink
              href="/workspace/charter"
              icon={<FileCheck2 className="h-4 w-4" />}
              label="Charter"
            />

            <WorkspaceLink
              href="/workspace/milestones"
              icon={<TargetIcon />}
              label="Milestones"
            />

            <WorkspaceLink
              href="/workspace/rewards"
              icon={<WalletIcon />}
              label="Rewards"
            />

            <WorkspaceLink
              href="/workspace/audit"
              icon={<HashIcon />}
              label="Audit Trail"
            />
          </nav>
        </div>

        <div className="mt-auto border-t border-slate-800 p-4">
          <div className="mb-3 rounded-xl bg-slate-900 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold">
                AM
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Aarav Mehta
                </p>
                <p className="text-xs text-slate-500">
                  Student Researcher
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/student"
            className="mb-2 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <LayoutDashboard className="h-4 w-4" />
            Student Dashboard
          </Link>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Link
                  href="/workspace/overview"
                  className="hover:text-slate-900"
                >
                  Workspace
                </Link>

                <ChevronRight className="h-3.5 w-3.5" />

                <span className="font-medium text-slate-700">
                  Team
                </span>
              </div>

              <h1 className="mt-1 text-xl font-bold text-slate-950">
                Project Team
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="hidden gap-2 sm:flex">
                <Mail className="h-4 w-4" />
                Invite Member
              </Button>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                AM
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] p-5 sm:p-8">
          {/* Intro */}
          <section className="mb-6">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <Users className="h-3.5 w-3.5" />
                  6 project participants
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Team & Access
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Manage project participants, roles, verification,
                  access scope and accountability for the research
                  workspace.
                </p>
              </div>

              <Button className="gap-2">
                <UserCheck className="h-4 w-4" />
                Invite Participant
              </Button>
            </div>
          </section>

          {/* Security banner */}
          <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-emerald-950">
                    Team access is currently verified
                  </h3>

                  <p className="mt-1 max-w-3xl text-xs leading-5 text-emerald-900/75">
                    All current participants have an approved project
                    role. The AI agent is restricted to project-scoped
                    access and has a named human owner.
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700">
                Access review passed
              </span>
            </div>
          </section>

          {/* Stats */}
          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <TeamStat
              title="Members"
              value="06"
              detail="Current participants"
              icon={<Users className="h-4 w-4" />}
            />

            <TeamStat
              title="Students"
              value="02"
              detail="Research contributors"
              icon={<UserCheck className="h-4 w-4" />}
              type="blue"
            />

            <TeamStat
              title="Experts"
              value="02"
              detail="Review & mentorship"
              icon={<ShieldCheck className="h-4 w-4" />}
              type="purple"
            />

            <TeamStat
              title="Verified"
              value="05"
              detail="Identity verified"
              icon={<CheckCircle2 className="h-4 w-4" />}
              type="green"
            />

            <TeamStat
              title="AI Agents"
              value="01"
              detail="Project-scoped"
              icon={<Bot className="h-4 w-4" />}
              type="amber"
            />
          </section>

          {/* Team table */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-950">
                  Team Members
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Roles and project permissions
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Access controls active
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1250px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left">
                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Member
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Type
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Verification
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Access
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      COI
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      AI Owner
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Contributions
                    </th>

                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {members.map((member) => (
                    <tr
                      key={member.name}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                              {member.initials}
                            </div>

                            <span
                              className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${
                                member.status === "Online" ||
                                member.status === "Active"
                                  ? "bg-emerald-500"
                                  : "bg-amber-400"
                              }`}
                            />
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {member.name}
                            </p>

                            <p className="mt-1 text-[11px] text-slate-500">
                              {member.role}
                            </p>

                            <p className="mt-1 text-[10px] text-slate-400">
                              {member.specialty}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <TypeBadge type={member.type} />
                      </td>

                      <td className="px-4 py-4">
                        <VerificationBadge
                          status={member.verification}
                        />
                      </td>

                      <td className="px-4 py-4">
                        <AccessBadge access={member.access} />
                      </td>

                      <td className="px-4 py-4">
                        <COIBadge value={member.coi} />
                      </td>

                      <td className="px-4 py-4">
                        {member.aiOwner ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                            <Bot className="h-3.5 w-3.5" />
                            Owner
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400">
                            —
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-4">
                        <span className="text-sm font-bold text-slate-800">
                          {member.contributions}
                        </span>

                        <span className="ml-1 text-[10px] text-slate-400">
                          records
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1">
                          <button
                            title="View member"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-700"
                          >
                            <UserCheck className="h-4 w-4" />
                          </button>

                          <button
                            title="More actions"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Access levels */}
          <section className="mt-6">
            <div className="mb-4">
              <h3 className="font-semibold text-slate-950">
                Access Levels
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Project permissions are based on the participant's
                approved role.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {accessLevels.map((level) => (
                <AccessCard
                  key={level.title}
                  title={level.title}
                  description={level.description}
                  count={level.count}
                  color={level.color}
                />
              ))}
            </div>
          </section>

          {/* AI ownership */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Bot className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    AI Agent Ownership
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    AI activity is linked to a named human owner and
                    restricted to approved project resources.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-purple-100 bg-purple-50/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-purple-900">
                      AI Scoping Agent
                    </p>

                    <p className="mt-1 text-[11px] text-purple-700">
                      Owner: Aarav Mehta
                    </p>
                  </div>

                  <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-purple-700">
                    Scoped
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-white p-3">
                    <p className="text-[10px] text-slate-400">
                      Access scope
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-700">
                      Project only
                    </p>
                  </div>

                  <div className="rounded-lg bg-white p-3">
                    <p className="text-[10px] text-slate-400">
                      Human approval
                    </p>

                    <p className="mt-1 text-xs font-semibold text-emerald-700">
                      Required
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/workspace/ai-agent"
                className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Manage AI access
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* COI */}
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <UserCheck className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Identity & Conflict Review
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Participant verification and conflict-of-interest
                    status are represented for project governance.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <ReviewRow
                  label="Identity verification"
                  value="5 / 5 human participants"
                  status="Verified"
                />

                <ReviewRow
                  label="Conflict declarations"
                  value="5 / 5 submitted"
                  status="Clear"
                />

                <ReviewRow
                  label="Pending review"
                  value="0 participants"
                  status="Clear"
                />
              </div>
            </div>
          </section>

          {/* Access warning */}
          <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-amber-950">
                  Access changes should be reviewed
                </h3>

                <p className="mt-1 max-w-3xl text-xs leading-5 text-amber-900/75">
                  Changes to participant roles or confidential-data access
                  should be reflected in the project's audit trail and,
                  where required, trigger renewed acceptance of the relevant
                  project terms.
                </p>
              </div>
            </div>
          </section>

          {/* Demo note */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

            <p>
              <span className="font-semibold text-slate-700">
                Demo data:
              </span>{" "}
              Team members, verification states, access levels, AI
              ownership and conflict-of-interest states are synthetic
              representations for the hackathon prototype. Actual identity
              verification and access enforcement depend on the backend.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function WorkspaceLink({
  href,
  icon,
  label,
  active = false,
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
        active
          ? "bg-blue-600 font-medium text-white"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

function TeamStat({
  title,
  value,
  detail,
  icon,
  type = "default",
}) {
  const styles = {
    default: "border-slate-200 bg-white text-slate-500",
    blue: "border-blue-200 bg-blue-50/60 text-blue-700",
    purple: "border-purple-200 bg-purple-50/60 text-purple-700",
    green: "border-emerald-200 bg-emerald-50/60 text-emerald-700",
    amber: "border-amber-200 bg-amber-50/60 text-amber-700",
  };

  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm ${
        styles[type]
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium">{title}</p>
        {icon}
      </div>

      <p className="mt-2 text-2xl font-bold">{value}</p>

      <p className="mt-1 text-xs">{detail}</p>
    </div>
  );
}

function AccessCard({
  title,
  description,
  count,
  color,
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-700",
    purple: "bg-purple-50 text-purple-700",
    emerald: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-md px-2.5 py-1 text-[10px] font-semibold ${styles[color]}`}
        >
          {title}
        </span>

        <span className="text-lg font-bold text-slate-900">
          {count}
        </span>
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function ReviewRow({ label, value, status }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3">
      <div>
        <p className="text-xs font-medium text-slate-700">
          {label}
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          {value}
        </p>
      </div>

      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        {status}
      </span>
    </div>
  );
}

function TargetIcon() {
  return <div className="h-4 w-4 rounded-full border-2 border-current" />;
}

function WalletIcon() {
  return <CircleDollarIcon />;
}

function CircleDollarIcon() {
  return <div className="h-4 w-4 rounded-full border-2 border-current" />;
}

function HashIcon() {
  return <HashSymbol />;
}

function HashSymbol() {
  return <div className="text-xs font-bold">#</div>;
}