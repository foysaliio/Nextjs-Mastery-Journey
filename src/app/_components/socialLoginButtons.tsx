"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export const SocialLoginButtons = () => {
  const [loadingProvider, setLoadingProvider] = useState<
    "google" | "github" | null
  >(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSocialSignIn = async (provider: "google" | "github") => {
    setErrorMessage(null);
    setLoadingProvider(provider);

    try {
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: "/dashboard",
      });

      if (error) {
        setErrorMessage(
          error.message ?? "Social sign-in failed. Please try again.",
        );
      }
    } catch {
      setErrorMessage("Could not start social sign-in. Please try again.");
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        disabled={loadingProvider !== null}
        onClick={() => void handleSocialSignIn("google")}
      >
        {loadingProvider === "google"
          ? "Connecting to Google..."
          : "Continue with Google"}
      </button>

      <button
        type="button"
        disabled={loadingProvider !== null}
        onClick={() => void handleSocialSignIn("github")}
      >
        {loadingProvider === "github"
          ? "Connecting to GitHub..."
          : "Continue with GitHub"}
      </button>

      {errorMessage && <p role="alert">{errorMessage}</p>}
    </div>
  );
};
