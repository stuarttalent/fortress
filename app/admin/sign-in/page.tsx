"use client";

import { type FormEvent, useMemo, useState } from "react";
import Card from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { HelperText, Label, TextInput } from "../../../components/ui/Field";
import Link from "next/link";

export default function AdminSignInPage() {
  const [adminEmail, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signedIn, setSignedIn] = useState(false);

  const canSubmit = useMemo(() => {
    return adminEmail.trim().includes("@") && password.trim().length >= 6;
  }, [adminEmail, password]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!canSubmit) {
      setError("Enter a valid admin email and a password (6+ characters).");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 650));

    // Frontend-only demo authentication.
    // Placeholder for backend auth to be added later:
    // - POST /api/admin/sign-in
    // - Verify credentials and create session/JWT
    if (adminEmail.toLowerCase() === "admin@fotressdrone.com" && password === "Admin123!") {
      setSignedIn(true);
    } else {
      setError("Invalid credentials. Use admin@fotressdrone.com / Admin123! for the demo.");
    }
    setLoading(false);
  }

  return (
    <div className="content-shell flex min-h-[70vh] items-center justify-center py-10">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="text-xs font-semibold text-charcoal-20">
            Secure Admin Access
          </div>
          <h1 className="mt-2 text-2xl font-semibold text-charcoal-30">
            Admin Sign In
          </h1>
          <p className="mt-2 text-sm font-medium text-charcoal-20">
            For internal repair management and query monitoring.
          </p>
        </div>

        <Card className="p-6">
          {signedIn ? (
            <div className="space-y-4">
              <div className="rounded-2xl border border-brand-500/20 bg-brand-50 p-4">
                <div className="text-sm font-semibold text-brand-600">
                  Signed in (demo)
                </div>
                <div className="mt-1 text-sm font-medium text-charcoal-20">
                  This page is frontend-only right now. Connect backend
                  authentication when ready.
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full"
                  onClick={() => setSignedIn(false)}
                >
                  Sign out
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="space-y-2">
                <Label>Admin email</Label>
                <TextInput
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="admin@fotressdrone.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <TextInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
                <HelperText>Demo: Admin123!</HelperText>
              </div>

              {error ? (
                <div className="rounded-2xl border border-red-500/20 bg-red-50 p-4 text-sm font-semibold text-red-700">
                  {error}
                </div>
              ) : null}

              <div className="flex flex-col gap-3">
                <Button type="submit" disabled={loading || !canSubmit}>
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
                <div className="text-center">
                  <Link
                    href="#"
                    className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </form>
          )}
        </Card>

        <div className="text-center text-xs font-semibold text-charcoal-20">
          Tip: Use your admin credentials to manage repair queries.
        </div>
      </div>
    </div>
  );
}

