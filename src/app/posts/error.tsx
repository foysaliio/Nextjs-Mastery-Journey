"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-red-400">Error</p>

        <h1 className="mt-4 text-4xl font-bold">Something went wrong</h1>

        <p className="mt-4 text-zinc-400">We could not load the posts.</p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded bg-blue-600 px-4 py-2"
        >
          Try Again
        </button>
      </div>
    </main>
  );
};

export default Error;
