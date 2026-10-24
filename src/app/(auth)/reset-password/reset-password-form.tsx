"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import { authClient } from "@/lib/auth-client";

export const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const linkError = searchParams.get("error");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage(null);
    setErrorMessage(null);

    if (!token || linkError) {
      setErrorMessage("This reset link is invalid or expired.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await authClient.resetPassword({
        newPassword: password,
        token,
      });

      if (error) {
        setErrorMessage(error.message ?? "Could not reset your password.");
      } else {
        setMessage("Password reset successfully. You can sign in now.");
        setPassword("");
        setConfirmPassword("");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!token || linkError) {
    return (
      <main className="mx-auto max-w-md p-6">
        <h1 className="text-2xl font-semibold">Invalid Reset Link</h1>
        <p className="mt-2">
          This link may have expired. Request a new password reset link.
        </p>
        <Link href="/forgot-password" className="mt-4 inline-block underline">
          Request another link
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Set New Password</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="password" className="mb-1 block">
            New password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            required
            autoComplete="new-password"
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="mb-1 block">
            Confirm new password
          </label>

          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            minLength={8}
            required
            autoComplete="new-password"
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded bg-black p-2 text-white disabled:opacity-50"
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>
      </form>

      {message && (
        <p role="status" className="mt-4 text-sm">
          {message}
        </p>
      )}

      {errorMessage && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      {message && (
        <Link href="/sign-in" className="mt-3 inline-block underline">
          Go to sign in...
        </Link>
      )}
    </main>
  );
};
