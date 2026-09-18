import { Suspense } from "react";
import FastSection from "../_components/FastSection";
import SlowSection from "../_components/SlowSection";

const StreamingDemoPage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold">Suspense & Streaming</h1>

        <FastSection />

        <Suspense
          fallback={
            <div className="h-32 animate-pulse rounded-xl bg-zinc-900" />
          }
        >
          <SlowSection />
        </Suspense>
      </div>
    </main>
  );
};

export default StreamingDemoPage;
