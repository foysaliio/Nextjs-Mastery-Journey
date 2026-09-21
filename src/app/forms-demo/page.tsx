import OptimisticProfileList from "./OptimisticProfileList";

import ProfileForm from "./ProfileForm";

import { getProfiles } from "./profile-store";

export default function FormsDemoPage() {
  const profiles = getProfiles();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Server Action Form
        </p>

        <h1 className="mt-4 text-4xl font-bold">Create Profile</h1>

        <ProfileForm />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Profiles</h2>

          <div className="mt-5">
            <OptimisticProfileList profiles={profiles} />
          </div>
        </section>
      </div>
    </main>
  );
}
