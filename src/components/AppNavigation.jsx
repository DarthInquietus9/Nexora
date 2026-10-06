"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChevronDown,
  FolderKanban,
  Grid2X2,
  Home,
  Search,
  ShieldCheck,
  UserRound,
  Users,
  WalletCards,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    href: "/student",
    icon: Grid2X2,
  },
  {
    label: "Discover Projects",
    href: "/student/discover",
    icon: Search,
  },
  {
    label: "Project",
    href: "/student/project",
    icon: FolderKanban,
  },
  {
    label: "My Team",
    href: "/student/team",
    icon: Users,
  },
  {
    label: "Workspace",
    href: "/student/workspace",
    icon: ShieldCheck,
  },
];

export default function AppNavigation({
  role = "Student",
  name = "Aarav Mehta",
  initials = "AM",
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="flex h-16 items-center justify-between gap-4 px-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/student"
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#12345B] text-white shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div className="hidden sm:block">
            <p className="text-base font-bold tracking-tight text-slate-900">
              Nex.Res
            </p>

            <p className="text-[10px] font-medium text-slate-500">
              Collaborate. Contribute. Get Credited.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/student" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#111827] text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          {/* User */}
          <button
            type="button"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 transition hover:bg-slate-50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-xs font-bold text-white">
              {initials}
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-xs font-semibold text-slate-900">
                {role}
              </p>

              <p className="text-[10px] text-slate-500">
                Dashboard
              </p>
            </div>

            <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="overflow-x-auto border-t border-slate-100 lg:hidden">
        <nav className="flex min-w-max items-center gap-1 px-4 py-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/student" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition ${
                  isActive
                    ? "bg-[#111827] text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}