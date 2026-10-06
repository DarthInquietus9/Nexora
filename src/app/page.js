"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  FileCheck2,
  Fingerprint,
  GitBranch,
  GraduationCap,
  Handshake,
  LockKeyhole,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const roles = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Discover meaningful research opportunities, contribute to projects, and build a verified record of your work.",
    points: [
      "Discover research projects",
      "Join verified teams",
      "Build contribution credentials",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Experts & Mentors",
    description:
      "Guide research teams, review contributions, and receive transparent credit for your expertise.",
    points: [
      "Mentor project teams",
      "Review contributions",
      "Build verified expertise",
    ],
  },
  {
    icon: WalletCards,
    title: "Sponsors",
    description:
      "Post research challenges, define project terms, fund milestones, and track outcomes securely.",
    points: [
      "Post research challenges",
      "Fund project milestones",
      "Track verified outcomes",
    ],
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI-Assisted Research",
    description:
      "Use project-scoped AI agents to break research into milestones, support investigation, and accelerate collaboration.",
  },
  {
    icon: Network,
    title: "Intelligent Matching",
    description:
      "Connect projects with suitable students and experts using transparent matching explanations.",
  },
  {
    icon: GitBranch,
    title: "Contribution Ledger",
    description:
      "Record human and AI contributions in a tamper-evident, hash-chained activity history.",
  },
  {
    icon: Handshake,
    title: "Fair Recognition",
    description:
      "Make contribution, credit, rewards, and project outcomes visible according to the accepted project charter.",
  },
  {
    icon: LockKeyhole,
    title: "Controlled Access",
    description:
      "Keep confidential research information protected through role-based and project-scoped access.",
  },
  {
    icon: FileCheck2,
    title: "Project Charter",
    description:
      "Define scope, roles, rewards, IP, publication, confidentiality, and dispute terms before work begins.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Post",
    description:
      "A sponsor publishes a research challenge with a public summary and controlled confidential details.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Match",
    description:
      "AI helps scope the work and identifies suitable students and experts with explainable recommendations.",
    icon: Users,
  },
  {
    number: "03",
    title: "Collaborate",
    description:
      "The accepted team works inside a shared workspace with scoped AI assistance and logged activity.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Get Credited",
    description:
      "Accepted contributions are recorded and translated into transparent monetary or non-monetary recognition.",
    icon: CircleCheck,
  },
];

const securityItems = [
  "Role-based access and controlled disclosure",
  "Project-scoped AI agents with named human owners",
  "AI-use declarations and contribution logs",
  "Similarity and plagiarism detection",
  "Tamper-evident contribution history",
  "Integrity verification and audit trails",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Network className="h-5 w-5" />
            </div>

            <div className="leading-none">
              <div className="text-lg font-bold tracking-tight">Nex.Res</div>
              <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Research Ecosystem
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#platform"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Platform
            </Link>

            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>

            <Link
              href="#security"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Security
            </Link>

            <Link
              href="#roles"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              For Researchers
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Sign In
            </Link>

            <Button asChild size="sm" className="rounded-lg px-5">
              <Link href="/register">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.10),transparent_38%),radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.06),transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Collaborative Research Ecosystem
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Research together.
              <span className="block text-primary">Get credited fairly.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Nex.Res connects sponsors, experts, and students in secure,
              verified research teams — with AI-assisted collaboration,
              transparent contribution tracking, and fair recognition.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-lg px-6 shadow-sm"
              >
                <Link href="/register">
                  Start Collaborating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg px-6"
              >
                <Link href="#how-it-works">
                  Explore the Platform
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Verified collaboration
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Transparent contributions
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Controlled AI access
              </div>
            </div>
          </div>

          {/* Hero dashboard visual */}
          <div className="relative">
            <div className="rounded-2xl border bg-card p-3 shadow-xl">
              <div className="rounded-xl border bg-muted/30 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">
                      ACTIVE RESEARCH PROJECT
                    </div>

                    <h3 className="mt-2 text-lg font-semibold">
                      Edge AI for Medical Imaging
                    </h3>
                  </div>

                  <span className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-emerald-700">
                    Active
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border bg-background p-4">
                    <div className="text-xs text-muted-foreground">
                      Team
                    </div>
                    <div className="mt-1 text-xl font-bold">08</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      verified members
                    </div>
                  </div>

                  <div className="rounded-xl border bg-background p-4">
                    <div className="text-xs text-muted-foreground">
                      Milestones
                    </div>
                    <div className="mt-1 text-xl font-bold">04</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      planned
                    </div>
                  </div>

                  <div className="rounded-xl border bg-background p-4">
                    <div className="text-xs text-muted-foreground">
                      Integrity
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-xl font-bold">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      Verified
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      contribution chain
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      Contribution activity
                    </span>

                    <span className="text-xs text-muted-foreground">
                      Live ledger
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      ["Literature review accepted", "Student · 4 min ago"],
                      ["Model evaluation completed", "AI Agent · 18 min ago"],
                      ["Research notes reviewed", "Expert · 32 min ago"],
                    ].map(([title, subtitle], index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-lg border p-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium">
                            {title}
                          </div>
                          <div className="mt-0.5 text-xs text-muted-foreground">
                            {subtitle}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border bg-background p-4 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                  <Fingerprint className="h-5 w-5 text-emerald-600" />
                </div>

                <div>
                  <div className="text-xs text-muted-foreground">
                    Integrity Check
                  </div>
                  <div className="text-sm font-semibold">
                    Chain Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform introduction */}
      <section id="platform" className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              One ecosystem
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Bring the right people, tools, and accountability together.
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Nex.Res gives research teams a shared environment for
              discovering projects, agreeing on terms, collaborating with
              scoped AI assistance, and recording meaningful contributions.
            </p>
          </div>

          <div
            id="roles"
            className="mt-10 grid gap-5 lg:grid-cols-3"
          >
            {roles.map((role) => {
              const Icon = role.icon;

              return (
                <div
                  key={role.title}
                  className="group rounded-2xl border bg-background p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {role.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {role.description}
                  </p>

                  <div className="mt-5 space-y-3 border-t pt-5">
                    {role.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/register"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-primary"
                  >
                    Get started
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              How it works
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From research challenge to recognized contribution.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              A transparent workflow designed to keep research collaboration
              structured, secure, and accountable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  <div className="rounded-2xl border bg-card p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-primary">
                        {step.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {index < workflow.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Built for research
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything your research team needs in one workspace.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                From project charters and AI-assisted planning to contribution
                history and rewards, Nex.Res keeps the research lifecycle
                connected.
              </p>

              <Button
                asChild
                variant="outline"
                className="mt-7 rounded-lg"
              >
                <Link href="/register">
                  Explore Nex.Res
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border bg-background p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AI section */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden rounded-3xl border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BrainCircuit className="h-5 w-5" />
                </div>

                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Responsible AI
                </div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  AI that assists the team — not replaces it.
                </h2>

                <p className="mt-5 leading-7 text-muted-foreground">
                  AI agents can help scope projects, organize milestones,
                  support investigation, and accelerate research. Every agent
                  operates within a defined project scope and has a named
                  human owner.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Project-scoped access",
                    "Named human owner",
                    "Logged AI actions",
                    "Human review and approval",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </div>

                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t bg-muted/40 p-8 lg:border-l lg:border-t-0 lg:p-12">
                <div className="rounded-2xl border bg-background p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <BrainCircuit className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-sm font-semibold">
                          Research Agent
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Project scoped
                        </div>
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Active
                    </span>
                  </div>

                  <div className="mt-6 rounded-xl border bg-muted/30 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">
                        ACCESS SCOPE
                      </span>

                      <LockKeyhole className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between rounded-lg border bg-background p-3">
                        <span className="text-sm">Project documents</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </div>

                      <div className="flex items-center justify-between rounded-lg border bg-background p-3">
                        <span className="text-sm">Research notes</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </div>

                      <div className="flex items-center justify-between rounded-lg border bg-background p-3">
                        <span className="text-sm">External data</span>
                        <span className="text-xs font-medium text-amber-600">
                          Restricted
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      </div>

                      <div>
                        <div className="text-sm font-medium">
                          Human approval required
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Actions are recorded in the project log.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Security & integrity
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Trust the research trail.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Nex.Res is designed around controlled disclosure,
                contribution transparency, integrity verification, and
                accountable collaboration.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {securityItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border bg-background p-4"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </div>

                  <span className="text-sm leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground shadow-xl sm:px-12 lg:px-16">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Zap className="h-5 w-5" />
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Build research that people can trust.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-primary-foreground/75">
                Join a collaborative research ecosystem where meaningful
                contributions are visible, protected, and properly credited.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-lg px-6"
                >
                  <Link href="/register">
                    Create your account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="#how-it-works">
                    Learn more
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Network className="h-4 w-4" />
            </div>

            <div>
              <div className="text-sm font-bold">Nex.Res</div>
              <div className="text-xs text-muted-foreground">
                Collaborate. Contribute. Get Credited.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <Link href="#platform" className="hover:text-foreground">
              Platform
            </Link>

            <Link href="#how-it-works" className="hover:text-foreground">
              How It Works
            </Link>

            <Link href="#security" className="hover:text-foreground">
              Security
            </Link>

            <Link href="/login" className="hover:text-foreground">
              Sign In
            </Link>
          </div>

          <div className="text-xs text-muted-foreground">
            © 2026 Nex.Res
          </div>
        </div>
      </footer>
    </main>
  );
}