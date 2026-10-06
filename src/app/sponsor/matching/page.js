"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  Info,
  Mail,
  MapPin,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const candidates = [
  {
    id: 1,
    name: "Ananya Menon",
    role: "AI / ML Researcher",
    type: "Student",
    university: "East Point College of Engineering",
    location: "Bengaluru, India",
    match: 96,
    availability: "Available",
    verified: true,
    conflict: false,
    skills: [
      "Computer Vision",
      "Python",
      "Deep Learning",
      "TensorFlow",
      "Research",
    ],
    experience: "2 research projects",
    reason:
      "Strong match for computer vision and deep learning requirements. Previous project experience aligns with medical image classification.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Edge AI Developer",
    type: "Student",
    university: "RV College of Engineering",
    location: "Bengaluru, India",
    match: 92,
    availability: "Available",
    verified: true,
    conflict: false,
    skills: [
      "Edge AI",
      "Python",
      "Model Optimization",
      "TensorFlow Lite",
      "C++",
    ],
    experience: "3 technical projects",
    reason:
      "Excellent fit for edge deployment and model optimization. Experience with resource-constrained inference environments.",
  },
  {
    id: 3,
    name: "Dr. Meera Iyer",
    role: "AI Research Mentor",
    type: "Expert",
    university: "Research Consultant",
    location: "Bengaluru, India",
    match: 89,
    availability: "Limited",
    verified: true,
    conflict: false,
    skills: [
      "Medical AI",
      "Computer Vision",
      "Research",
      "Model Evaluation",
      "Mentoring",
    ],
    experience: "8+ years research experience",
    reason:
      "Strong domain expertise in medical AI and research methodology. Recommended as an expert mentor.",
  },
  {
    id: 4,
    name: "Vikram Nair",
    role: "Data & ML Student",
    type: "Student",
    university: "PES University",
    location: "Bengaluru, India",
    match: 84,
    availability: "Available",
    verified: true,
    conflict: true,
    skills: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "Pandas",
      "Research",
    ],
    experience: "1 research project",
    reason:
      "Good technical match for data analysis, but a potential conflict of interest requires sponsor review.",
  },
];

const selectedCandidates = [
  {
    name: "Ananya Menon",
    role: "AI / ML Researcher",
    match: 96,
  },
  {
    name: "Rahul Sharma",
    role: "Edge AI Developer",
    match: 92,
  },
];

function Badge({ children, type = "default" }) {
  const styles = {
    default: "bg-slate-100 text-slate-700",
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    red: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  );
}

function MatchScore({ score }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{ width: `${score}%` }}
        />
      </div>

      <span className="text-sm font-bold text-blue-700">{score}%</span>
    </div>
  );
}

export default function SponsorMatchingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/sponsor/ai-scoping"
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              AI Scoping
            </Link>

            <ChevronRight className="h-4 w-4 text-slate-300" />

            <div>
              <p className="text-xs font-medium text-slate-400">Sponsor</p>
              <p className="text-sm font-semibold text-slate-900">
                Candidate Matching
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge type="blue">AI-assisted matching</Badge>

            <Link href="/sponsor/milestones">
              <Button className="bg-blue-700 text-white hover:bg-blue-800">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Hero */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="p-7">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div className="max-w-3xl">
                <div className="mb-3 flex items-center gap-2">
                  <Badge type="blue">Matching complete</Badge>

                  <span className="text-xs text-slate-400">
                    24 profiles analyzed
                  </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  Find the right research team
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Candidate recommendations are ranked against the approved
                  project scope, required expertise and availability.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                  <Network className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Matching engine
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    Scope-based recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 border-t border-slate-200 md:grid-cols-4">
            <div className="border-r border-slate-200 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Profiles analyzed
              </p>
              <p className="mt-2 text-xl font-bold text-slate-900">24</p>
            </div>

            <div className="border-r border-slate-200 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Strong matches
              </p>
              <p className="mt-2 text-xl font-bold text-emerald-700">8</p>
            </div>

            <div className="border-r border-slate-200 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Selected
              </p>
              <p className="mt-2 text-xl font-bold text-blue-700">2 / 4</p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Avg. match
              </p>
              <p className="mt-2 text-xl font-bold text-slate-900">90%</p>
            </div>
          </div>
        </section>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_330px]">
          {/* Candidates */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Recommended candidates
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Ranked by project-scope alignment.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="w-44 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {candidates.map((candidate) => (
                <article key={candidate.id} className="p-5">
                  <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                        {candidate.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-bold text-slate-900">
                            {candidate.name}
                          </h3>

                          {candidate.verified && (
                            <span
                              className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700"
                              title="Identity verified"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Verified
                            </span>
                          )}

                          <Badge
                            type={
                              candidate.type === "Expert" ? "amber" : "default"
                            }
                          >
                            {candidate.type}
                          </Badge>
                        </div>

                        <p className="mt-1 text-sm font-medium text-slate-600">
                          {candidate.role}
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <GraduationCap className="h-3.5 w-3.5" />
                            {candidate.university}
                          </span>

                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {candidate.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <div>
                        <p className="mb-1 text-right text-[11px] font-medium uppercase tracking-wide text-slate-400">
                          Match
                        </p>
                        <MatchScore score={candidate.match} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_260px]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Matched skills
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {candidate.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 rounded-lg bg-slate-50 p-3">
                        <div className="flex items-start gap-2">
                          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          <div>
                            <p className="text-xs font-semibold text-slate-700">
                              Why this candidate?
                            </p>
                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {candidate.reason}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-400">
                          Availability
                        </span>

                        <Badge
                          type={
                            candidate.availability === "Available"
                              ? "green"
                              : "amber"
                          }
                        >
                          {candidate.availability}
                        </Badge>
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                        <Award className="h-4 w-4 text-slate-400" />
                        {candidate.experience}
                      </div>

                      {candidate.conflict ? (
                        <div className="mt-3 flex items-start gap-2 rounded-lg bg-red-50 p-2.5 text-xs text-red-700">
                          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          Potential conflict of interest
                        </div>
                      ) : (
                        <div className="mt-3 flex items-center gap-2 text-xs text-emerald-700">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          No conflict flagged
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap justify-end gap-2">
                    <Button
                      variant="outline"
                      className="border-slate-200 text-slate-700"
                    >
                      View Profile
                    </Button>

                    <Button
                      variant="outline"
                      className="border-slate-200 text-slate-700"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Button>

                    {candidate.conflict ? (
                      <Button
                        variant="outline"
                        className="border-red-200 text-red-700 hover:bg-red-50"
                      >
                        Review Conflict
                      </Button>
                    ) : (
                      <Button className="bg-blue-700 text-white hover:bg-blue-800">
                        <UserCheck className="mr-2 h-4 w-4" />
                        Select
                      </Button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Selected team */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Selected team
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    2 of 4 roles filled
                  </p>
                </div>

                <span className="text-sm font-bold text-blue-700">50%</span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-1/2 rounded-full bg-blue-700" />
              </div>

              <div className="mt-5 space-y-3">
                {selectedCandidates.map((candidate) => (
                  <div
                    key={candidate.name}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                      {candidate.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-800">
                        {candidate.name}
                      </p>
                      <p className="truncate text-[11px] text-slate-400">
                        {candidate.role}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-blue-700">
                      {candidate.match}%
                    </span>

                    <button
                      type="button"
                      className="text-slate-400 hover:text-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-amber-50 p-3">
                <p className="text-xs leading-5 text-amber-800">
                  Two additional roles still need to be filled before the
                  recommended team is complete.
                </p>
              </div>
            </section>

            {/* Required roles */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Required roles
              </h2>

              <div className="mt-4 space-y-3">
                {[
                  ["AI / ML Researcher", true],
                  ["Edge AI Developer", true],
                  ["Research Student", false],
                  ["Research Student", false],
                ].map(([role, filled], index) => (
                  <div
                    key={`${role}-${index}`}
                    className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
                  >
                    <div className="flex items-center gap-2">
                      {filled ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <Clock3 className="h-4 w-4 text-amber-500" />
                      )}

                      <span className="text-xs font-medium text-slate-700">
                        {role}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-semibold ${
                        filled ? "text-emerald-700" : "text-amber-700"
                      }`}
                    >
                      {filled ? "Filled" : "Open"}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* AI explanation */}
            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-blue-700" />
                <h2 className="text-sm font-semibold text-slate-900">
                  How matching works
                </h2>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-600">
                Recommendations are based on the project's required skills,
                role requirements, availability and profile information.
              </p>

              <div className="mt-4 space-y-2">
                {[
                  "Required expertise",
                  "Role alignment",
                  "Availability",
                  "Verification status",
                  "Conflict-of-interest checks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-blue-700" />
                    <span className="text-xs text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Security notice */}
            <section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <h2 className="text-sm font-semibold">
                  Human decision required
                </h2>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                AI recommendations do not automatically add contributors to
                the project. Final selection and acceptance remain subject to
                the sponsor's decision and project rules.
              </p>
            </section>

            {/* Continue */}
            <Link href="/sponsor/milestones">
              <Button className="w-full bg-blue-700 text-white hover:bg-blue-800">
                Continue to Milestones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}