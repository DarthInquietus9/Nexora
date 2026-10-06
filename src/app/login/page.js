"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left - Brand / Information */}
        <section className="relative hidden overflow-hidden bg-primary lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary-foreground)/0.10),transparent_35%),radial-gradient(circle_at_bottom_left,hsl(var(--primary-foreground)/0.08),transparent_35%)]" />

          <div className="relative flex w-full flex-col justify-between p-10 xl:p-14">
            {/* Logo */}
            <Link href="/" className="flex w-fit items-center gap-3 text-primary-foreground">
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

            {/* Main content */}
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 text-xs font-medium text-primary-foreground/80">
                <ShieldCheck className="h-3.5 w-3.5" />
                Secure Research Collaboration
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-foreground xl:text-5xl">
                Continue building research that matters.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/70">
                Access your research projects, verified teams, contribution
                history, AI-assisted workspace, and project credentials from
                one secure ecosystem.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <BrainCircuit className="h-4 w-4 text-primary-foreground" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-primary-foreground">
                      Responsible AI assistance
                    </div>
                    <div className="mt-1 text-xs leading-5 text-primary-foreground/60">
                      Project-scoped AI agents with human ownership and
                      accountable actions.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <ShieldCheck className="h-4 w-4 text-primary-foreground" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-primary-foreground">
                      Protected collaboration
                    </div>
                    <div className="mt-1 text-xs leading-5 text-primary-foreground/60">
                      Controlled access, contribution tracking, and integrity
                      verification.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="text-xs text-primary-foreground/50">
              Collaborate. Contribute. Get Credited.
            </div>
          </div>
        </section>

        {/* Right - Login */}
        <section className="flex min-h-screen items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="mb-10 lg:hidden">
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
                <LockKeyhole className="h-3.5 w-3.5" />
                Secure sign in
              </div>

              <h2 className="text-3xl font-bold tracking-tight">
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Sign in to continue to your Nex.Res workspace.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5">
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

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-11 rounded-lg pl-10 pr-11"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-input accent-primary"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground"
                >
                  Remember me
                </label>
              </div>

              {/* Sign in */}
              <Button
                type="submit"
                className="h-11 w-full rounded-lg"
              >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">
                New to Nex.Res?
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Register */}
            <Button
              asChild
              variant="outline"
              className="h-11 w-full rounded-lg"
            >
              <Link href="/register">
                Create an account
              </Link>
            </Button>

            {/* Footer note */}
            <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">
              By continuing, you agree to use Nex.Res only for authorized
              research collaboration and project activities.
            </p>

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