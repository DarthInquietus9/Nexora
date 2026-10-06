"use client";

import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  Eye,
  FileCheck2,
  Filter,
  FolderKanban,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  MoreHorizontal,
  Search,
  ShieldCheck,
  UserCheck,
  UserCog,
  UserX,
  Users,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const users = [
  {
    id: "USR-1024",
    name: "Aarav Mehta",
    email: "aarav.mehta@demo.nexres.io",
    role: "Student",
    verification: "Verified",
    status: "Active",
    projects: 3,
    access: "Standard",
    joined: "Oct 02, 2026",
    initials: "AM",
  },
  {
    id: "USR-1023",
    name: "Priya Nair",
    email: "priya.nair@demo.nexres.io",
    role: "Expert",
    verification: "Verified",
    status: "Active",
    projects: 5,
    access: "Elevated",
    joined: "Sep 28, 2026",
    initials: "PN",
  },
  {
    id: "USR-1022",
    name: "Dr. Rohan Kapoor",
    email: "rohan.kapoor@demo.nexres.io",
    role: "Expert",
    verification: "Verified",
    status: "Active",
    projects: 4,
    access: "Elevated",
    joined: "Sep 25, 2026",
    initials: "RK",
  },
  {
    id: "USR-1021",
    name: "Nova Research Labs",
    email: "sponsor@demo.nexres.io",
    role: "Sponsor",
    verification: "Verified",
    status: "Active",
    projects: 7,
    access: "Sponsor",
    joined: "Sep 22, 2026",
    initials: "NR",
  },
  {
    id: "USR-1020",
    name: "Ishaan Verma",
    email: "ishaan.verma@demo.nexres.io",
    role: "Student",
    verification: "Pending",
    status: "Active",
    projects: 1,
    access: "Standard",
    joined: "Sep 20, 2026",
    initials: "IV",
  },
  {
    id: "USR-1019",
    name: "Meera Thomas",
    email: "meera.thomas@demo.nexres.io",
    role: "Student",
    verification: "Verified",
    status: "Suspended",
    projects: 2,
    access: "Restricted",
    joined: "Sep 18, 2026",
    initials: "MT",
  },
  {
    id: "USR-1018",
    name: "TechNova Foundation",
    email: "foundation@demo.nexres.io",
    role: "Sponsor",
    verification: "Verified",
    status: "Active",
    projects: 9,
    access: "Sponsor",
    joined: "Sep 15, 2026",
    initials: "TF",
  },
  {
    id: "USR-1017",
    name: "Ananya Rao",
    email: "ananya.rao@demo.nexres.io",
    role: "Student",
    verification: "Verified",
    status: "Active",
    projects: 4,
    access: "Standard",
    joined: "Sep 12, 2026",
    initials: "AR",
  },
  {
    id: "USR-1016",
    name: "Vikram Shah",
    email: "vikram.shah@demo.nexres.io",
    role: "Expert",
    verification: "Pending",
    status: "Active",
    projects: 0,
    access: "Review",
    joined: "Sep 10, 2026",
    initials: "VS",
  },
];

const roleFilters = ["All roles", "Student", "Expert", "Sponsor", "Admin"];

function RoleBadge({ role }) {
  const styles = {
    Student: "bg-blue-50 text-blue-700 border-blue-200",
    Expert: "bg-purple-50 text-purple-700 border-purple-200",
    Sponsor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Admin: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
        styles[role] || styles.Admin
      }`}
    >
      {role}
    </span>
  );
}

function VerificationBadge({ verification }) {
  if (verification === "Verified") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Verified
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700">
      <CircleAlert className="h-3.5 w-3.5" />
      Pending
    </span>
  );
}

function StatusBadge({ status }) {
  if (status === "Active") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
        Active
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700">
      <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
      Suspended
    </span>
  );
}

function AccessBadge({ access }) {
  const styles = {
    Standard: "bg-slate-50 text-slate-600",
    Elevated: "bg-blue-50 text-blue-700",
    Sponsor: "bg-emerald-50 text-emerald-700",
    Restricted: "bg-red-50 text-red-700",
    Review: "bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`rounded-md px-2 py-1 text-[11px] font-medium ${
        styles[access] || styles.Standard
      }`}
    >
      {access}
    </span>
  );
}

export default function AdminUsersPage() {
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
              <p className="text-lg font-bold tracking-tight">Nex.Res</p>
              <p className="text-[11px] text-slate-400">
                Research Ecosystem
              </p>
            </div>
          </Link>
        </div>

        <div className="px-4 py-5">
          <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Administration
          </div>

          <nav className="space-y-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              href="/admin/users"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium"
            >
              <Users className="h-4 w-4" />
              Users
            </Link>

            <Link
              href="/admin/projects"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <FolderKanban className="h-4 w-4" />
              Projects
            </Link>

            <Link
              href="/admin/audit"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <FileCheck2 className="h-4 w-4" />
              Audit Trail
            </Link>

            <Link
              href="/admin/disputes"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <UserCog className="h-4 w-4" />
              Disputes
            </Link>

            <Link
              href="/admin/ledger"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <ShieldCheck className="h-4 w-4" />
              Ledger
            </Link>
          </nav>
        </div>

        <div className="mt-auto border-t border-slate-800 p-4">
          <div className="mb-3 rounded-xl bg-slate-900 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold">
                AD
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Admin Demo</p>
                <p className="truncate text-xs text-slate-500">
                  Platform Administrator
                </p>
              </div>
            </div>
          </div>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Link
                  href="/admin/dashboard"
                  className="transition hover:text-slate-900"
                >
                  Administration
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="font-medium text-slate-700">Users</span>
              </div>

              <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-950">
                User Management
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                AD
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] p-5 sm:p-8">
          {/* Top section */}
          <section className="mb-6">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <UserCheck className="h-3.5 w-3.5" />
                  Identity & access
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Platform Users
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Review user roles, verification status, project
                  participation and access levels across the research
                  ecosystem.
                </p>
              </div>

              <Button className="gap-2">
                <UserCheck className="h-4 w-4" />
                Review Pending Users
              </Button>
            </div>
          </section>

          {/* Summary cards */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500">
                  Total Users
                </p>
                <Users className="h-4 w-4 text-slate-400" />
              </div>
              <p className="mt-2 text-2xl font-bold text-slate-950">1,284</p>
              <p className="mt-1 text-xs text-slate-500">Across all roles</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500">
                  Students
                </p>
                <Users className="h-4 w-4 text-blue-500" />
              </div>
              <p className="mt-2 text-2xl font-bold text-slate-950">842</p>
              <p className="mt-1 text-xs text-slate-500">66% of users</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500">
                  Experts
                </p>
                <ShieldCheck className="h-4 w-4 text-purple-500" />
              </div>
              <p className="mt-2 text-2xl font-bold text-slate-950">214</p>
              <p className="mt-1 text-xs text-slate-500">Verified experts</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500">
                  Sponsors
                </p>
                <FolderKanban className="h-4 w-4 text-emerald-500" />
              </div>
              <p className="mt-2 text-2xl font-bold text-slate-950">126</p>
              <p className="mt-1 text-xs text-slate-500">Active sponsors</p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-amber-700">
                  Pending Verification
                </p>
                <CircleAlert className="h-4 w-4 text-amber-600" />
              </div>
              <p className="mt-2 text-2xl font-bold text-amber-800">17</p>
              <p className="mt-1 text-xs text-amber-700">
                Require review
              </p>
            </div>
          </section>

          {/* Filters */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                {roleFilters.map((role, index) => (
                  <button
                    key={role}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                      index === 0
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50">
                  <Filter className="h-3.5 w-3.5" />
                  Verification
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>

                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50">
                  <Activity className="h-3.5 w-3.5" />
                  Status
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>

                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50">
                  <LockKeyhole className="h-3.5 w-3.5" />
                  Access
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* User table */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-950">
                  All Users
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Showing 9 of 1,284 users
                </p>
              </div>

              <button className="flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800">
                Export user report
                <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70 text-left">
                    <th className="px-5 py-3">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300"
                      />
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      User
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Role
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Verification
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Projects
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Access
                    </th>

                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Joined
                    </th>

                    <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
                    >
                      <td className="px-5 py-4">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-slate-300"
                        />
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-700">
                            {user.initials}
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900">
                              {user.name}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500">
                              {user.email}
                            </p>
                            <p className="mt-0.5 text-[10px] text-slate-400">
                              {user.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <RoleBadge role={user.role} />
                      </td>

                      <td className="px-4 py-4">
                        <VerificationBadge
                          verification={user.verification}
                        />
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge status={user.status} />
                      </td>

                      <td className="px-4 py-4">
                        <span className="text-sm font-semibold text-slate-800">
                          {user.projects}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <AccessBadge access={user.access} />
                      </td>

                      <td className="px-4 py-4 text-xs text-slate-500">
                        {user.joined}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1">
                          <button
                            title="View user"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-blue-50 hover:text-blue-700"
                          >
                            <Eye className="h-4 w-4" />
                          </button>

                          <button
                            title={
                              user.status === "Active"
                                ? "Suspend user"
                                : "Activate user"
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                          >
                            {user.status === "Active" ? (
                              <UserX className="h-4 w-4" />
                            ) : (
                              <UserCheck className="h-4 w-4" />
                            )}
                          </button>

                          <button
                            title="More actions"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
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

            {/* Pagination */}
            <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Showing <span className="font-semibold text-slate-700">1</span>{" "}
                to <span className="font-semibold text-slate-700">9</span> of{" "}
                <span className="font-semibold text-slate-700">1,284</span>{" "}
                users
              </p>

              <div className="flex items-center gap-1">
                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-400">
                  Previous
                </button>

                <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                  1
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  2
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  3
                </button>

                <span className="px-1 text-xs text-slate-400">...</span>

                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  143
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>
          </section>

          {/* Security / access information */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <LockKeyhole className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Access Control
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    User access should be restricted according to role,
                    project membership and approved project scope.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Standard access
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    842
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-blue-600">
                    Elevated access
                  </p>
                  <p className="mt-1 text-lg font-bold text-blue-800">
                    214
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <CircleAlert className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Verification Queue
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Accounts awaiting identity or profile verification.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div>
                  <p className="text-2xl font-bold text-amber-800">17</p>
                  <p className="text-xs text-amber-700">
                    users waiting for review
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="border-amber-300 bg-white text-amber-800 hover:bg-amber-100"
                >
                  Review queue
                </Button>
              </div>
            </div>
          </section>

          {/* Demo disclaimer */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

            <p>
              <span className="font-semibold text-slate-700">
                Demo data:
              </span>{" "}
              User profiles, verification states, project counts and access
              levels shown on this page are synthetic data for the hackathon
              prototype. Actual identity verification, authentication and
              role-based access control depend on the implemented backend.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}