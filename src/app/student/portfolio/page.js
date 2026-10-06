"use client";

import {
  Award,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileCheck2,
  FileText,
  Github,
  GraduationCap,
  LockKeyhole,
  MoreHorizontal,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Low-cost Diabetic Retinopathy Detection",
    code: "NX-DR-026",
    role: "Student Researcher",
    status: "Active",
    contribution: "31%",
    description:
      "Collaborative research project focused on detecting diabetic retinopathy from fundus images using an edge-device friendly approach.",
    technologies: ["Python", "Computer Vision", "Edge AI"],
    verified: true,
  },
  {
    title: "AI-Assisted Literature Review",
    code: "NX-LR-018",
    role: "Research Contributor",
    status: "Completed",
    contribution: "24%",
    description:
      "Structured literature analysis supported by a project-scoped AI research assistant and human review.",
    technologies: ["Research", "AI", "Data Analysis"],
    verified: true,
  },
  {
    title: "Edge Model Optimization Study",
    code: "NX-EM-011",
    role: "ML Contributor",
    status: "Completed",
    contribution: "18%",
    description:
      "Experimental study focused on improving model inference efficiency for constrained computing environments.",
    technologies: ["Python", "ML", "Optimization"],
    verified: true,
  },
];

const credentials = [
  {
    title: "Research Contributor",
    issuer: "Nex.Res",
    date: "Oct 5, 2026",
    description:
      "Verified participation in a collaborative research project.",
    icon: Award,
  },
  {
    title: "AI-Assisted Research",
    issuer: "Nex.Res",
    date: "Oct 5, 2026",
    description:
      "Responsible use of project-scoped AI under human direction and review.",
    icon: Bot,
  },
  {
    title: "Verified Project Contributor",
    issuer: "Nex.Res",
    date: "Oct 4, 2026",
    description:
      "Recognizes contributions recorded and verified through the project ledger.",
    icon: BadgeCheck,
  },
];

const skills = [
  "Research",
  "Python",
  "Machine Learning",
  "Computer Vision",
  "Data Analysis",
  "AI-assisted Research",
  "Technical Documentation",
  "Team Collaboration",
];

const activity = [
  {
    date: "Oct 5",
    title: "Contribution verified",
    description:
      "Dataset preprocessing contribution was accepted and added to the project ledger.",
    icon: CheckCircle2,
  },
  {
    date: "Oct 5",
    title: "AI-assisted research reviewed",
    description:
      "Literature synthesis generated with the project AI agent was reviewed by a human contributor.",
    icon: Bot,
  },
  {
    date: "Oct 4",
    title: "Research credential earned",
    description:
      "Received the Research Contributor credential for verified project participation.",
    icon: Award,
  },
  {
    date: "Oct 3",
    title: "Joined project team",
    description:
      "Accepted the project charter and joined the research collaboration.",
    icon: Users,
  },
];

export default function PortfolioPage() {
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
              const active = label === "Portfolio";

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
            <p className="text-xs text-slate-500">Student Portal</p>
            <h1 className="text-sm font-bold text-slate-900">
              Research Portfolio
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden gap-2 text-xs sm:flex"
            >
              <ExternalLink className="h-4 w-4" />
              Preview Profile
            </Button>

            <Button className="gap-2 bg-blue-900 text-xs hover:bg-blue-800">
              <Download className="h-4 w-4" />
              Export Portfolio
            </Button>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
          {/* Profile Header */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-28 bg-blue-950" />

            <div className="px-6 pb-6">
              <div className="-mt-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-blue-100 text-2xl font-bold text-blue-800 shadow-sm">
                    AR
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-2xl font-bold text-slate-950">
                        Ananya Rao
                      </h2>

                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verified Researcher
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-600">
                      Student Researcher · AI & Machine Learning
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="h-3.5 w-3.5" />
                        Student
                      </span>

                      <span>•</span>

                      <span className="flex items-center gap-1.5">
                        <BriefcaseBusiness className="h-3.5 w-3.5" />
                        Research Contributor
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      Profile strength
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full w-[86%] rounded-full bg-emerald-600" />
                      </div>

                      <span className="text-sm font-bold text-slate-800">
                        86%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 max-w-3xl">
                <p className="text-sm leading-6 text-slate-600">
                  Student researcher interested in artificial intelligence,
                  machine learning, computer vision, and collaborative
                  research. Experienced in contributing to structured research
                  projects with transparent contribution tracking and
                  responsible AI-assisted workflows.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Verified Contributions",
                value: "19",
                helper: "Accepted project records",
                icon: FileCheck2,
              },
              {
                label: "Projects",
                value: "3",
                helper: "2 completed · 1 active",
                icon: BriefcaseBusiness,
              },
              {
                label: "Credentials",
                value: "3",
                helper: "Verified achievements",
                icon: Award,
              },
              {
                label: "Reward Credit",
                value: "₹43K",
                helper: "Current project value",
                icon: Trophy,
              },
            ].map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        {stat.label}
                      </p>

                      <p className="mt-2 text-2xl font-bold text-slate-950">
                        {stat.value}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-slate-500">
                    {stat.helper}
                  </p>
                </div>
              );
            })}
          </section>

          {/* Main Grid */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Projects */}
            <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 p-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Research projects
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Projects with recorded research participation.
                  </p>
                </div>

                <Button variant="outline" className="gap-2 text-xs">
                  View all
                  <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </div>

              <div className="divide-y divide-slate-100">
                {projects.map((project) => (
                  <div key={project.code} className="p-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                          <BriefcaseBusiness className="h-5 w-5" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-sm font-bold text-slate-900">
                              {project.title}
                            </h4>

                            {project.verified && (
                              <BadgeCheck className="h-4 w-4 text-emerald-600" />
                            )}
                          </div>

                          <p className="mt-1 text-xs text-slate-500">
                            {project.code} · {project.role}
                          </p>

                          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                            {project.description}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex shrink-0 flex-row items-center gap-3 md:flex-col md:items-end">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            project.status === "Active"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-emerald-50 text-emerald-700"
                          }`}
                        >
                          {project.status}
                        </span>

                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wide text-slate-400">
                            Contribution
                          </p>
                          <p className="mt-0.5 text-sm font-bold text-slate-800">
                            {project.contribution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-700">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Contribution verified
                      </div>

                      <span className="text-slate-300">•</span>

                      <button className="flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:text-blue-900">
                        View project
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Credentials */}
            <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-5">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-700" />

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Credentials
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Verified research achievements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {credentials.map((credential) => {
                  const Icon = credential.icon;

                  return (
                    <div key={credential.title} className="p-5">
                      <div className="flex gap-3">
                        <div className="rounded-lg bg-blue-50 p-2.5 text-blue-700">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm font-bold text-slate-900">
                              {credential.title}
                            </h4>

                            <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                          </div>

                          <p className="mt-1 text-[11px] font-medium text-blue-700">
                            {credential.issuer}
                          </p>

                          <p className="mt-2 text-xs leading-5 text-slate-500">
                            {credential.description}
                          </p>

                          <p className="mt-3 text-[10px] text-slate-400">
                            Issued {credential.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-slate-200 p-4">
                <Button variant="outline" className="w-full gap-2 text-xs">
                  <Award className="h-4 w-4" />
                  View all credentials
                </Button>
              </div>
            </section>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Skills */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-blue-700" />

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Skills & expertise
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Skills demonstrated through project participation.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-xs font-medium text-slate-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-violet-100 bg-violet-50 p-4">
                <div className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-700" />

                  <div>
                    <p className="text-xs font-bold text-violet-900">
                      Responsible AI practice
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-violet-800">
                      AI-assisted contributions are declared, project-scoped,
                      and reviewed by human contributors before acceptance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Activity */}
            <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-5">
                <h3 className="text-base font-bold text-slate-900">
                  Research activity
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Recent verified activity on Nex.Res.
                </p>
              </div>

              <div className="p-5">
                <div className="space-y-6">
                  {activity.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="relative flex gap-3">
                        {index !== activity.length - 1 && (
                          <div className="absolute left-[15px] top-8 h-[calc(100%+8px)] w-px bg-slate-200" />
                        )}

                        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-semibold text-slate-800">
                              {item.title}
                            </p>

                            <span className="text-[10px] font-medium text-slate-400">
                              {item.date}
                            </span>
                          </div>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          {/* Public Profile */}
          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-50 p-2.5 text-blue-700">
                  <LockKeyhole className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Shareable research profile
                  </h3>

                  <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
                    Create a professional profile containing verified projects,
                    credentials, skills, and accepted contributions without
                    exposing confidential project information.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="gap-2 text-xs">
                  <ExternalLink className="h-4 w-4" />
                  Preview
                </Button>

                <Button className="gap-2 bg-blue-900 text-xs hover:bg-blue-800">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </section>

          {/* Demo Notice */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />

            <div>
              <p className="text-xs font-semibold text-slate-700">
                Demo portfolio
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                Project records, credentials, statistics and rewards shown
                here are synthetic frontend data. In the final system, the
                portfolio should be generated from verified contributions,
                accepted project records and issued credentials.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}