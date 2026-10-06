"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  Gauge,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  Network,
  Pencil,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const milestones = [
  {
    number: "01",
    title: "Research & Dataset Preparation",
    description:
      "Review relevant research, define dataset requirements, prepare data and establish evaluation criteria.",
    duration: "2 weeks",
    skills: ["Research", "Python", "Data Analysis"],
    deliverables: [
      "Dataset preparation report",
      "Literature review",
      "Evaluation criteria",
    ],
  },
  {
    number: "02",
    title: "Lightweight Model Development",
    description:
      "Develop and evaluate a compact computer vision model suitable for the project's edge-device constraints.",
    duration: "3 weeks",
    skills: ["Computer Vision", "Deep Learning", "Python"],
    deliverables: [
      "Baseline model",
      "Optimized model",
      "Performance evaluation",
    ],
  },
  {
    number: "03",
    title: "Edge Deployment & Testing",
    description:
      "Adapt the selected model for edge inference and evaluate performance under realistic resource constraints.",
    duration: "2 weeks",
    skills: ["Edge AI", "Model Optimization", "Deployment"],
    deliverables: [
      "Edge inference prototype",
      "Performance benchmarks",
      "Testing report",
    ],
  },
  {
    number: "04",
    title: "Final Validation & Demonstration",
    description:
      "Consolidate results, document the research process and prepare the final demonstration.",
    duration: "1 week",
    skills: ["Documentation", "Validation", "Presentation"],
    deliverables: [
      "Final research report",
      "Demonstration",
      "Project documentation",
    ],
  },
];

const skills = [
  {
    name: "Computer Vision",
    importance: "High",
    reason: "Core requirement for fundus-image analysis.",
  },
  {
    name: "Deep Learning",
    importance: "High",
    reason: "Required for model development and evaluation.",
  },
  {
    name: "Python",
    importance: "High",
    reason: "Primary implementation language for the research workflow.",
  },
  {
    name: "Edge AI",
    importance: "High",
    reason: "Required to optimize and deploy the model on constrained devices.",
  },
  {
    name: "Data Analysis",
    importance: "Medium",
    reason: "Supports dataset analysis and evaluation.",
  },
  {
    name: "Technical Documentation",
    importance: "Medium",
    reason: "Required for reproducible research and final reporting.",
  },
];

function Badge({ children, type = "default" }) {
  const styles = {
    default: "bg-slate-100 text-slate-700",
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  );
}

function SectionTitle({ icon: Icon, title, description }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
}

export default function SponsorAIScopingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/sponsor/project"
              className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Project Details
            </Link>

            <ChevronRight className="h-4 w-4 text-slate-300" />

            <div>
              <p className="text-xs font-medium text-slate-400">Sponsor</p>
              <p className="text-sm font-semibold text-slate-900">
                AI Scoping
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge type="blue">AI-assisted planning</Badge>

            <Link href="/sponsor/matching">
              <Button className="bg-blue-700 text-white hover:bg-blue-800">
                Continue to Matching
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
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-3 flex items-center gap-2">
                  <Badge type="blue">AI Scoping</Badge>
                  <span className="text-xs text-slate-400">
                    NXR-DR-2026-014
                  </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  AI-assisted project scoping
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Convert the research objective into a structured execution
                  plan with milestones, deliverables, skills and an estimated
                  timeline.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                  <Bot className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    AI Agent
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-800">
                    Scope Assistant
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="border-t border-slate-200 bg-slate-50 px-7 py-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                  1
                </span>
                <span className="text-sm font-medium text-slate-800">
                  Project brief
                </span>
              </div>

              <ChevronRight className="h-4 w-4 text-slate-300" />

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                  2
                </span>
                <span className="text-sm font-medium text-slate-800">
                  AI analysis
                </span>
              </div>

              <ChevronRight className="h-4 w-4 text-slate-300" />

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                  3
                </span>
                <span className="text-sm font-medium text-slate-800">
                  Scope generated
                </span>
              </div>

              <ChevronRight className="h-4 w-4 text-slate-300" />

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-bold text-slate-500">
                  4
                </span>
                <span className="text-sm font-medium text-slate-500">
                  Sponsor approval
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_330px]">
          <div className="space-y-6">
            {/* Input analysis */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionTitle
                icon={Target}
                title="Project objective analyzed"
                description="The AI agent uses the sponsor-provided project information as its planning input."
              />

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Research objective
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Build and validate a lightweight AI-assisted approach for
                  detecting diabetic retinopathy from fundus images, with a
                  focus on efficient inference on edge devices.
                </p>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-lg border border-slate-200 p-4">
                  <BrainCircuit className="h-5 w-5 text-blue-700" />
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Research area
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Computer Vision
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <Gauge className="h-5 w-5 text-blue-700" />
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Constraint
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Edge efficiency
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <Target className="h-5 w-5 text-blue-700" />
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Outcome
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Working prototype
                  </p>
                </div>
              </div>
            </section>

            {/* AI generated plan */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <SectionTitle
                  icon={Sparkles}
                  title="Generated project scope"
                  description="AI-generated planning suggestions for sponsor review."
                />

                <Button
                  variant="outline"
                  className="border-slate-200 text-slate-700"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Regenerate
                </Button>
              </div>

              <div className="mb-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      AI recommendation
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Divide the project into research, model development,
                      edge deployment and final validation so that each stage
                      has measurable outputs and review points.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.number}
                    className="rounded-xl border border-slate-200 p-5"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                          {milestone.number}
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">
                            {milestone.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      <Badge type="blue">{milestone.duration}</Badge>
                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2">
                        <ListChecks className="h-4 w-4 text-slate-400" />
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Deliverables
                        </span>
                      </div>

                      <div className="mt-3 grid gap-2 md:grid-cols-3">
                        {milestone.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 rounded-lg bg-slate-50 p-3"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                            <span className="text-xs leading-5 text-slate-600">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {milestone.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skill requirements */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionTitle
                icon={Users}
                title="Recommended expertise"
                description="Skills inferred from the proposed research scope."
              />

              <div className="overflow-hidden rounded-xl border border-slate-200">
                <div className="grid grid-cols-[1fr_110px_1.4fr] border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <span>Skill</span>
                  <span>Priority</span>
                  <span>Why it matters</span>
                </div>

                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="grid grid-cols-[1fr_110px_1.4fr] items-center border-b border-slate-100 px-4 py-4 last:border-0"
                  >
                    <span className="text-sm font-semibold text-slate-800">
                      {skill.name}
                    </span>

                    <div>
                      <Badge
                        type={
                          skill.importance === "High" ? "blue" : "default"
                        }
                      >
                        {skill.importance}
                      </Badge>
                    </div>

                    <span className="text-sm text-slate-500">
                      {skill.reason}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionTitle
                icon={Clock3}
                title="Estimated timeline"
                description="AI-generated estimate based on the current project scope."
              />

              <div className="relative">
                <div className="absolute left-[19px] top-4 hidden h-[calc(100%-32px)] w-px bg-slate-200 md:block" />

                <div className="space-y-5">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.number}
                      className="relative flex gap-4"
                    >
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-700 text-xs font-bold text-white shadow-sm">
                        {index + 1}
                      </div>

                      <div className="flex-1 rounded-xl border border-slate-200 p-4">
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm font-semibold text-slate-800">
                            {milestone.title}
                          </p>

                          <span className="shrink-0 text-xs font-semibold text-blue-700">
                            {milestone.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-900 p-4 text-white">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Estimated project duration
                  </span>
                </div>

                <span className="text-sm font-bold">8 weeks</span>
              </div>
            </section>

            {/* Approval */}
            <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <FileCheck2 className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Sponsor review required
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Review the AI-generated scope before it becomes part of
                    the project plan. The AI recommendation is not an
                    automatic commitment.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      className="border-slate-200 bg-white text-slate-700"
                    >
                      <Pencil className="mr-2 h-4 w-4" />
                      Review & Edit
                    </Button>

                    <Link href="/sponsor/matching">
                      <Button className="bg-emerald-700 text-white hover:bg-emerald-800">
                        Approve Scope
                        <Check className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Agent identity */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Bot className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Scope Assistant
                  </p>
                  <p className="text-xs text-slate-500">AI Agent</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span className="text-xs leading-5 text-slate-600">
                    Project-scoped access
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span className="text-xs leading-5 text-slate-600">
                    Named human owner
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span className="text-xs leading-5 text-slate-600">
                    Actions recorded for audit
                  </span>
                </div>
              </div>
            </section>

            {/* Scope summary */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Scope Summary
              </h2>

              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Milestones</span>
                  <span className="text-sm font-semibold text-slate-800">
                    4
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Deliverables</span>
                  <span className="text-sm font-semibold text-slate-800">
                    12
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Core skills</span>
                  <span className="text-sm font-semibold text-slate-800">
                    6
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Duration</span>
                  <span className="text-sm font-semibold text-slate-800">
                    8 weeks
                  </span>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <h2 className="text-sm font-semibold">
                  AI Access Controls
                </h2>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                This demo represents a scoped AI workflow. Actual permission
                enforcement, logging and model controls must be implemented by
                the backend.
              </p>

              <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/10 p-3">
                <LockKeyhole className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-medium text-slate-200">
                  Scope: Project planning only
                </span>
              </div>
            </section>

            {/* Matching preview */}
            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="flex items-center gap-2">
                <Network className="h-5 w-5 text-blue-700" />
                <h2 className="text-sm font-semibold text-slate-900">
                  Next: Candidate Matching
                </h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Once the scope is approved, the platform can compare required
                skills with available student and expert profiles.
              </p>

              <Link href="/sponsor/matching">
                <Button className="mt-4 w-full bg-blue-700 text-white hover:bg-blue-800">
                  View Matching
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}