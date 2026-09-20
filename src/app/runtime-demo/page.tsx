import { cookies } from "next/headers";
import { Suspense } from "react";

const UserPreferences = async () => {
  const cookieStore = await cookies();

  const theme = cookieStore.get("theme")?.value ?? "Not set";

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <section className="rounded-xl border border-zinc-800 p-5">
      <h2 className="text-xl font-semibold">Runtime Preferences</h2>

      <p className="mt-2 text-zinc-400">Theme cookie: {theme}</p>
    </section>
  );
};

const RuntimeDemoPage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <header>
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Runtime Demo
          </p>

          <h1 className="mt-4 text-4xl font-bold">Static + Runtime Content</h1>

          <p className="mt-3 text-zinc-400">
            This section can be part of the static shell.
          </p>
        </header>

        <div className="mt-8">
          <Suspense
            fallback={
              <div className="h-28 animate-pulse rounded-xl bg-zinc-900" />
            }
          >
            <UserPreferences />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default RuntimeDemoPage;
