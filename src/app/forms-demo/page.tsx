import ProfileForm from "./ProfileForm";

export default function FormsDemoPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Server Action Form
        </p>

        <h1 className="mt-4 text-4xl font-bold">Create Profile</h1>

        <ProfileForm />
      </div>
    </main>
  );
}
