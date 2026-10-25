"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { authClient } from "@/lib/auth-client";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage(null);
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const { error } = await authClient.requestPasswordReset({
        email,
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        setErrorMessage(error.message ?? "Could not request a password reset.");
      } else {
        setMessage(
          "If an account exists for this email, a reset link will be sent.",
        );
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Forgot Password</h1>

      <p className="mt-2 text-sm">
        Enter your email address to request a password reset link.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block">
            Email address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded bg-black p-2 text-white disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
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

      <Link href="/sign-in" className="mt-4 inline-block underline">
        Back to sign in!
      </Link>
    </main>
  );
};

export default ForgotPasswordPage;
