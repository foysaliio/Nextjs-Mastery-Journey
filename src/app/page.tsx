import { Suspense } from "react";
import AsyncMessage from "./_components/AsyncMessage";
import InteractiveProfile from "./_components/InteractiveProfile";
import JourneyBadge from "./_components/JourneyBadge";
import ServerGreeting from "./_components/ServerGreeting";
import ServerUsers from "./_components/ServerUsers";
import UserPanel from "./_components/UserPanel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <JourneyBadge />

        <h1 className="mt-4 text-4xl font-bold">
          Learning Next.js with the App Router
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          This page is rendered from src/app/page.tsx.
        </p>

        <ServerGreeting />

        <UserPanel>
          <ServerUsers />
        </UserPanel>

        <Suspense
          fallback={
            <section className="mt-8 rounded-xl border border-zinc-800 p-6">
              <p className="text-sm text-zinc-400">Loading...</p>

              <h2 className="mt-2 text-2xl font-bold">Loading message...</h2>
            </section>
          }
        >
          <AsyncMessage />
        </Suspense>

        <InteractiveProfile />
      </div>
    </main>
  );
}
