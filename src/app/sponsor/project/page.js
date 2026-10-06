"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  FileText,
  Fingerprint,
  Globe2,
  GraduationCap,
  Info,
  LockKeyhole,
  Pencil,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const project = {
  title: "Low-cost detection of diabetic retinopathy from fundus images on edge devices",
  projectId: "NXR-DR-2026-014",
  status: "Draft",
  domain: "Healthcare AI",
  created: "October 5, 2026",
  summary:
    "Develop a low-cost AI-assisted approach for detecting diabetic retinopathy from fundus images, with a focus on efficient inference on edge devices.",
  confidentialBrief:
    "The project will investigate lightweight computer vision approaches, model optimization and deployment constraints for resource-limited environments.",
  objective:
    "Build and validate a lightweight prototype capable of assisting with diabetic retinopathy screening while maintaining a transparent and auditable research workflow.",
};

const team = [
  {
    role: "AI / ML Researcher",
    count: 1,
    skills: ["Computer Vision", "Python", "Deep Learning"],
  },
  {
    role: "Edge AI Developer",
    count: 1,
    skills: ["Model Optimization", "TensorFlow", "Edge Deployment"],
  },
  {
    role: "Research Student",
    count: 2,
    skills: ["Data Analysis", "Documentation", "Literature Review"],
  },
];

const milestones = [
  {
    number: "01",
    title: "Research & Dataset Preparation",
    amount: "₹20,000",
    duration: "2 weeks",
    status: "Planned",
  },
  {
    number: "02",
    title: "Model Development & Optimization",
    amount: "₹35,000",
    duration: "3 weeks",
    status: "Planned",
  },
  {
    number: "03",
    title: "Edge Deployment & Evaluation",
    amount: "₹30,000",
    duration: "2 weeks",
    status: "Planned",
  },
  {
    number: "04",
    title: "Final Report & Demonstration",
    amount: "₹15,000",
    duration: "1 week",
    status: "Planned",
  },
];

function SectionHeader({ icon: Icon, title, description }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </div>
    </div>
  );
}

function InfoRow({ label, value, icon: Icon }) {
  return (
    <div className="flex items-start gap-3 border-b border-slate-100 py-4 last:border-0">
      {Icon && (
        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
      )}

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function StatusBadge({ children, type = "default" }) {
  const styles = {
    default: "bg-slate-100 text-slate-700",
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-700",
    blue: "bg-blue-50 text-blue-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  );
}

export default function SponsorProjectPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/sponsor/dashboard"
              className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </Link>

            <ChevronRight className="h-4 w-4 text-slate-300" />

            <div>
              <p className="text-xs font-medium text-slate-400">Project</p>
              <p className="max-w-[360px] truncate text-sm font-semibold text-slate-900">
                {project.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge type="warning">{project.status}</StatusBadge>

            <Link href="/sponsor/create-project">
              <Button
                variant="outline"
                className="border-slate-200 bg-white text-slate-700"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit Project
              </Button>
            </Link>

            <Link href="/sponsor/ai-scoping">
              <Button className="bg-blue-700 text-white hover:bg-blue-800">
                Continue to AI Scoping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Hero */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-7">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div className="max-w-4xl">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <StatusBadge type="blue">{project.domain}</StatusBadge>

                  <span className="text-xs text-slate-400">
                    Project ID: {project.projectId}
                  </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  {project.title}
                </h1>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
                  {project.summary}
                </p>
              </div>

              <div className="shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-4 lg:w-52">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Created
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {project.created}
                </p>

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Engagement
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Funded Research
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="grid grid-cols-1 divide-y border-b border-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Project status
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="text-sm font-semibold text-slate-800">
                  Draft
                </span>
              </div>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Team required
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                4 contributors
              </p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Total budget
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                ₹1,00,000
              </p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Duration
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                8 weeks
              </p>
            </div>
          </div>
        </section>

        {/* Main layout */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            {/* Research overview */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionHeader
                icon={Target}
                title="Research Overview"
                description="The intended research direction and expected outcome."
              />

              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-sm font-semibold text-slate-800">
                    Research Objective
                  </p>
                  <p className="text-sm leading-6 text-slate-600">
                    {project.objective}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-slate-800">
                    Expected Outcomes
                  </p>

                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      "Lightweight AI model prototype",
                      "Edge-device inference workflow",
                      "Evaluation and performance report",
                      "Research documentation and demonstration",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Visibility */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionHeader
                icon={Globe2}
                title="Information Visibility"
                description="Different information can be disclosed at different stages of collaboration."
              />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-emerald-700" />
                    <h3 className="font-semibold text-slate-900">
                      Public Summary
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Visible to potential contributors
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
                  <div className="flex items-center gap-2">
                    <LockKeyhole className="h-5 w-5 text-amber-700" />
                    <h3 className="font-semibold text-slate-900">
                      Confidential Brief
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {project.confidentialBrief}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-amber-700">
                    <LockKeyhole className="h-4 w-4" />
                    Restricted project information
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <p className="text-xs leading-5 text-blue-800">
                  Confidential information should only be disclosed according
                  to the project's agreed access and acceptance rules.
                </p>
              </div>
            </section>

            {/* Team requirements */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionHeader
                icon={Users}
                title="Team Requirements"
                description="Roles and expertise required for this project."
              />

              <div className="overflow-hidden rounded-xl border border-slate-200">
                <div className="grid grid-cols-[1.2fr_80px_1fr] border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <span>Role</span>
                  <span>Qty.</span>
                  <span>Required skills</span>
                </div>

                {team.map((member) => (
                  <div
                    key={member.role}
                    className="grid grid-cols-[1.2fr_80px_1fr] items-center border-b border-slate-100 px-4 py-4 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                        <Users className="h-4 w-4 text-slate-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {member.role}
                      </span>
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {member.count}
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Engagement & rewards */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionHeader
                icon={CircleDollarSign}
                title="Engagement & Rewards"
                description="The agreed reward structure for accepted contributions."
              />

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-slate-200 p-4">
                  <CircleDollarSign className="h-5 w-5 text-blue-700" />
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Engagement
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Funded Project
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <WalletCards className="h-5 w-5 text-blue-700" />
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Total Reward Pool
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    ₹1,00,000
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <Scale className="h-5 w-5 text-blue-700" />
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Reward Principle
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Charter-based
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-800">
                  Reward allocation
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    ["AI / ML Research", "35%", "₹35,000"],
                    ["Edge AI Development", "30%", "₹30,000"],
                    ["Research & Analysis", "20%", "₹20,000"],
                    ["Documentation & Validation", "15%", "₹15,000"],
                  ].map(([role, percent, amount]) => (
                    <div
                      key={role}
                      className="flex items-center justify-between rounded-lg bg-white px-4 py-3"
                    >
                      <span className="text-sm text-slate-700">{role}</span>

                      <div className="flex items-center gap-5">
                        <span className="text-xs font-medium text-slate-400">
                          {percent}
                        </span>
                        <span className="text-sm font-semibold text-slate-800">
                          {amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* IP and security */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionHeader
                icon={ShieldCheck}
                title="IP, Confidentiality & Security"
                description="Project-level rules for information, research outputs and AI usage."
              />

              <div className="grid gap-4 md:grid-cols-2">
                <InfoRow
                  icon={FileCheck2}
                  label="IP Ownership"
                  value="Defined in accepted project charter"
                />

                <InfoRow
                  icon={Globe2}
                  label="Publication"
                  value="Publication subject to sponsor review"
                />

                <InfoRow
                  icon={LockKeyhole}
                  label="Confidentiality"
                  value="Confidential research information"
                />

                <InfoRow
                  icon={Fingerprint}
                  label="Identity & Access"
                  value="Role-based project access"
                />

                <InfoRow
                  icon={Bot}
                  label="AI Policy"
                  value="Scoped AI access with human oversight"
                />

                <InfoRow
                  icon={ShieldCheck}
                  label="Integrity"
                  value="Contribution activity is auditable"
                />
              </div>
            </section>

            {/* AI policy */}
            <section className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    AI Collaboration Policy
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    AI agents can assist with scoped project activities, but
                    their access and actions should remain attributable to a
                    named human owner.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {[
                  "Project-scoped access",
                  "Named human owner",
                  "Human review required",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-blue-100 bg-white p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Milestones */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionHeader
                icon={Clock3}
                title="Project Milestones"
                description="Planned milestones and associated funding."
              />

              <div className="space-y-3">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.number}
                    className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                        {milestone.number}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {milestone.title}
                        </p>

                        <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                          <span>{milestone.duration}</span>
                          <span>•</span>
                          <span>{milestone.amount}</span>
                        </div>
                      </div>
                    </div>

                    <StatusBadge>{milestone.status}</StatusBadge>
                  </div>
                ))}
              </div>
            </section>

            {/* Charter */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionHeader
                icon={FileText}
                title="Project Charter"
                description="The charter defines the terms participants accept before work begins."
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Charter is ready for review
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      The current draft includes scope, engagement model,
                      reward allocation, IP and publication terms,
                      confidentiality, credit split, exit and dispute rules,
                      and commercialization terms.
                    </p>

                    <Link
                      href="/student/charter"
                      className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      View charter structure
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            {/* Project summary */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Project Summary
              </h2>

              <div className="mt-4">
                <InfoRow
                  icon={BriefcaseBusiness}
                  label="Domain"
                  value="Healthcare AI"
                />

                <InfoRow
                  icon={CircleDollarSign}
                  label="Budget"
                  value="₹1,00,000"
                />

                <InfoRow
                  icon={Users}
                  label="Team"
                  value="4 contributors"
                />

                <InfoRow
                  icon={Clock3}
                  label="Timeline"
                  value="8 weeks"
                />

                <InfoRow
                  icon={GraduationCap}
                  label="Engagement"
                  value="Funded Research"
                />
              </div>
            </section>

            {/* Readiness */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">
                  Project Readiness
                </h2>

                <span className="text-sm font-bold text-blue-700">78%</span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[78%] rounded-full bg-blue-700" />
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ["Project information", true],
                  ["Team requirements", true],
                  ["Security policy", true],
                  ["Milestones", true],
                  ["AI scoping", false],
                  ["Candidate matching", false],
                ].map(([label, complete]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-600">{label}</span>

                    {complete ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <span className="h-4 w-4 rounded-full border-2 border-slate-300" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Security */}
            <section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold">Security Controls</h2>
                  <p className="text-xs text-slate-400">
                    Project-level protection
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Confidential brief restricted",
                  "AI access must be scoped",
                  "Human ownership required",
                  "Contribution activity auditable",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-xs leading-5 text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Next step */}
            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-700" />
                <h2 className="text-sm font-semibold text-slate-900">
                  Recommended Next Step
                </h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Run AI-assisted scoping to convert the research objective into
                milestones, deliverables and required expertise.
              </p>

              <Link href="/sponsor/ai-scoping">
                <Button className="mt-4 w-full bg-blue-700 text-white hover:bg-blue-800">
                  Start AI Scoping
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