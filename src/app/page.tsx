export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Next.js Mastery Journey
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Learning Next.js with the App Router
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          This page is rendered from src/app/page.tsx.
        </p>
      </div>
    </main>
  );
}
