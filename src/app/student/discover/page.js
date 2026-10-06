"use client";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Filter,
  FolderKanban,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Sparkles,
  Users,
  WalletCards,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DiscoverProjects() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [engagement, setEngagement] = useState("All");

  const navItems = [
    { label: "Overview", icon: LayoutDashboard, href: "/student" },
    {
      label: "Discover Projects",
      icon: Search,
      active: true,
      href: "/student/discover",
    },
    { label: "My Team", icon: Users, href: "#" },
    { label: "Workspace", icon: FolderKanban, href: "#" },
    { label: "Contributions", icon: CheckCircle2, href: "#" },
    { label: "Rewards", icon: Award, href: "#" },
    { label: "Portfolio", icon: BriefcaseBusiness, href: "#" },
  ];

  const projects = [
    {
      title: "AI-Assisted Crop Disease Detection",
      organization: "AgriTech Research Lab",
      description:
        "Develop an AI-assisted system for identifying crop diseases from field images while keeping the solution affordable for small-scale farmers.",
      match: 94,
      engagement: "Funded",
      reward: "₹40,000",
      deadline: "18 days left",
      members: 4,
      skills: ["Python", "Machine Learning", "Computer Vision"],
      verified: true,
    },
    {
      title: "Privacy-Preserving Health Analytics",
      organization: "Digital Health Institute",
      description:
        "Explore privacy-preserving approaches for analyzing sensitive health datasets while maintaining useful research insights.",
      match: 89,
      engagement: "Knowledge Sharing",
      reward: "Research Credential",
      deadline: "24 days left",
      members: 5,
      skills: ["Python", "Data Science", "Privacy"],
      verified: true,
    },
    {
      title: "Sustainable Battery Materials",
      organization: "Clean Energy Research Lab",
      description:
        "Investigate data-driven approaches for identifying promising sustainable battery materials and documenting research findings.",
      match: 86,
      engagement: "Institutional Credit",
      reward: "Certificate",
      deadline: "31 days left",
      members: 6,
      skills: ["Data Analysis", "Research", "Materials"],
      verified: true,
    },
    {
      title: "Low-Cost Air Quality Monitoring",
      organization: "Green Innovation Lab",
      description:
        "Build and evaluate an affordable environmental monitoring approach using sensors and data analytics.",
      match: 83,
      engagement: "Stipend",
      reward: "₹15,000",
      deadline: "12 days left",
      members: 4,
      skills: ["IoT", "Data Analysis", "Python"],
      verified: true,
    },
    {
      title: "Edge AI for Medical Imaging",
      organization: "HealthTech Research Initiative",
      description:
        "Study lightweight AI models that can perform medical image analysis on resource-constrained edge devices.",
      match: 81,
      engagement: "Funded",
      reward: "₹35,000",
      deadline: "27 days left",
      members: 5,
      skills: ["AI/ML", "Computer Vision", "Edge AI"],
      verified: true,
    },
    {
      title: "Secure Medical Data Sharing",
      organization: "Open Research Foundation",
      description:
        "Research secure and transparent methods for sharing medical research data between authorized collaborators.",
      match: 78,
      engagement: "Knowledge Sharing",
      reward: "Project Credential",
      deadline: "21 days left",
      members: 6,
      skills: ["Cybersecurity", "Blockchain", "Research"],
      verified: true,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesEngagement =
      engagement === "All" || project.engagement === engagement;

    return matchesSearch && matchesEngagement;
  });

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
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    item.active
                      ? "bg-blue-50 text-[#123B6D]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    className={`h-[18px] w-[18px] ${
                      item.active ? "text-[#1D63A5]" : "text-slate-400"
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

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
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
                <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                <span>Student</span>
                <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                <span>Discover Projects</span>
              </div>

              <h1 className="text-lg font-semibold text-slate-900">
                Discover Projects
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800">
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

        <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Back */}
          <a
            href="/student"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#123B6D]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </a>

          {/* Page intro */}
          <section className="mb-7">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#1D63A5]">
                    <Search className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-semibold text-[#1D63A5]">
                    Research Marketplace
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Find your next research project.
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Explore verified research opportunities matched to your
                  skills, interests, and preferred engagement model.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#1D63A5]" />

                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      AI-assisted matching
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Matches are based on project requirements and your
                      profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Search + filters */}
          <section className="mb-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects, organizations, or skills..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2">
                <Filter className="hidden h-4 w-4 text-slate-400 sm:block" />

                <select
                  value={engagement}
                  onChange={(e) => setEngagement(e.target.value)}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 sm:w-56"
                >
                  <option value="All">All engagement models</option>
                  <option value="Funded">Funded</option>
                  <option value="Stipend">Stipend / Honorarium</option>
                  <option value="Knowledge Sharing">
                    Knowledge Sharing
                  </option>
                  <option value="Institutional Credit">
                    Institutional Credit
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-medium text-slate-500">
                Quick filters:
              </span>

              {["All", "Funded", "Knowledge Sharing", "Institutional Credit"].map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => setEngagement(filter)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                      engagement === filter
                        ? "border-blue-200 bg-blue-50 text-[#123B6D]"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </section>

          {/* Result heading */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {filteredProjects.length} research opportunities
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Showing projects available for student researchers
              </p>
            </div>

            <button className="hidden items-center gap-2 text-xs font-medium text-slate-600 sm:flex">
              Sort by
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700">
                Best match
                <ChevronDown className="ml-2 inline h-3.5 w-3.5" />
              </span>
            </button>
          </div>

          {/* Projects */}
          {filteredProjects.length > 0 ? (
            <section className="grid gap-5 xl:grid-cols-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-6"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-[#1D63A5]">
                          {project.engagement}
                        </span>

                        {project.verified && (
                          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                            <CheckCircle2 className="h-3 w-3" />
                            Verified
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold leading-7 text-slate-950">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        {project.organization}
                      </p>
                    </div>

                    {/* Match */}
                    <div className="shrink-0 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-50">
                        <span className="text-sm font-bold text-emerald-700">
                          {project.match}%
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] font-medium text-slate-400">
                        Match
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-5">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Skills
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-5 grid grid-cols-3 gap-3 border-y border-slate-100 py-4">
                    <div>
                      <div className="mb-1 flex items-center gap-1.5 text-slate-400">
                        <WalletCards className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-medium uppercase">
                          Reward
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-slate-800">
                        {project.reward}
                      </p>
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-1.5 text-slate-400">
                        <Clock3 className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-medium uppercase">
                          Timeline
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-slate-800">
                        {project.deadline}
                      </p>
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-1.5 text-slate-400">
                        <Users className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-medium uppercase">
                          Team
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-slate-800">
                        {project.members} members
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <Button className="flex-1 gap-2 rounded-xl bg-[#123B6D] hover:bg-[#0E315B]">
                      View Project
                      <ArrowRight className="h-4 w-4" />
                    </Button>

                    <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                      <BookOpen className="h-4 w-4" />
                      Save
                    </button>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <Search className="h-5 w-5 text-slate-400" />
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                No projects found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                Try changing your search terms or selecting a different
                engagement model.
              </p>

              <button
                onClick={() => {
                  setSearchQuery("");
                  setEngagement("All");
                }}
                className="mt-5 text-sm font-semibold text-[#1D63A5]"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Trust information */}
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Research projects are designed for transparent
                    collaboration
                  </h3>

                  <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
                    Before collaboration begins, project terms can define
                    scope, roles, confidentiality, intellectual property,
                    publication, credit, rewards, and dispute handling.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-emerald-700">
                <ShieldIcon />
                Secure by design
              </div>
            </div>
          </section>

          <footer className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            Nex.Res · Collaborate. Contribute. Get Credited.
          </footer>
        </main>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6l7-3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4"
      />
    </svg>
  );
}