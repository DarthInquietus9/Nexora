"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
  UserRound,
  Users,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const roles = [
  {
    value: "student",
    label: "Student",
    description: "Discover projects and build your research portfolio.",
    icon: GraduationCap,
  },
  {
    value: "expert",
    label: "Expert / Mentor",
    description: "Guide teams and contribute your research expertise.",
    icon: Users,
  },
  {
    value: "sponsor",
    label: "Sponsor",
    description: "Post research challenges and support projects.",
    icon: WalletCards,
  },
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("student");

  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left branding panel */}
        <section className="relative hidden overflow-hidden bg-primary lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary-foreground)/0.10),transparent_35%),radial-gradient(circle_at_bottom_right,hsl(var(--primary-foreground)/0.08),transparent_35%)]" />

          <div className="relative flex w-full flex-col justify-between p-10 xl:p-14">
            <Link
              href="/"
              className="flex w-fit items-center gap-3 text-primary-foreground"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10">
                <Network className="h-5 w-5" />
              </div>

              <div>
                <div className="text-xl font-bold tracking-tight">
                  Nex.Res
                </div>

                <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-primary-foreground/60">
                  Research Ecosystem
                </div>
              </div>
            </Link>

            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 text-xs font-medium text-primary-foreground/80">
                <BrainCircuit className="h-3.5 w-3.5" />
                Collaborative Research
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-foreground xl:text-5xl">
                Your research journey starts here.
              </h1>

              <p className="mt-5 text-base leading-7 text-primary-foreground/70">
                Join a trusted ecosystem where students, experts, and sponsors
                can collaborate on meaningful research projects and receive
                transparent recognition for their contributions.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Verified collaboration",
                    text: "Work with structured roles and controlled project access.",
                  },
                  {
                    icon: BrainCircuit,
                    title: "AI-assisted research",
                    text: "Use responsible, project-scoped AI assistance.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Fair recognition",
                    text: "Build a visible record of accepted contributions.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                        <Icon className="h-4 w-4 text-primary-foreground" />
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-primary-foreground">
                          {item.title}
                        </div>

                        <div className="mt-1 text-xs leading-5 text-primary-foreground/60">
                          {item.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-xs text-primary-foreground/50">
              Collaborate. Contribute. Get Credited.
            </div>
          </div>
        </section>

        {/* Registration form */}
        <section className="flex min-h-screen items-center justify-center px-6 py-10">
          <div className="w-full max-w-2xl">
            {/* Mobile logo */}
            <div className="mb-8 lg:hidden">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Network className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-xl font-bold tracking-tight">
                    Nex.Res
                  </div>

                  <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Research Ecosystem
                  </div>
                </div>
              </Link>
            </div>

            {/* Heading */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <UserRound className="h-3.5 w-3.5" />
                Create your account
              </div>

              <h2 className="text-3xl font-bold tracking-tight">
                Join Nex.Res
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Create your account and become part of a collaborative
                research ecosystem.
              </p>
            </div>

            <form className="mt-7 space-y-5">
              {/* Full name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                >
                  Full name
                </label>

                <div className="relative">
                  <UserRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-11 rounded-lg pl-10"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 rounded-lg pl-10"
                  />
                </div>
              </div>

              {/* Role */}
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">
                    Choose your role
                  </label>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Your role determines the type of workspace you will
                    access.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    const isSelected = selectedRole === role.value;

                    return (
                      <button
                        key={role.value}
                        type="button"
                        onClick={() => setSelectedRole(role.value)}
                        className={`relative rounded-xl border p-4 text-left transition-all ${
                          isSelected
                            ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                            : "border-border bg-background hover:border-primary/40 hover:bg-muted/40"
                        }`}
                      >
                        {isSelected && (
                          <CheckCircle2 className="absolute right-3 top-3 h-4 w-4 text-primary" />
                        )}

                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="mt-3 text-sm font-semibold">
                          {role.label}
                        </div>

                        <div className="mt-1 text-xs leading-5 text-muted-foreground">
                          {role.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Password fields */}
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="h-11 rounded-lg pl-10 pr-11"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium"
                  >
                    Confirm password
                  </label>

                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm your password"
                      className="h-11 rounded-lg pl-10 pr-11"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 rounded-xl border bg-muted/30 p-4">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-muted-foreground"
                >
                  I agree to use Nex.Res only for authorized research
                  collaboration and project activities. I understand that
                  project participation and contributions may be recorded
                  for transparency and recognition.
                </label>
              </div>

              {/* Create account */}
              <Button
                type="submit"
                className="h-11 w-full rounded-lg"
              >
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Login link */}
            <div className="mt-7 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <span>Already have an account?</span>

              <Link
                href="/login"
                className="font-semibold text-primary hover:underline"
              >
                Sign in
              </Link>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                ← Back to Nex.Res
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}