import Counter from "./_components/Counter";
import JourneyBadge from "./_components/JourneyBadge";
import ServerGreeting from "./_components/ServerGreeting";

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

        <Counter />
      </div>
    </main>
  );
}
