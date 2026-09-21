import EditProfileForm from "../EditProfileForm";

import { getProfileById } from "../profile-store";

export default function EditProfilePage() {
  const profile = getProfileById(1);

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-bold">Edit Profile</h1>

        <div className="mt-8">
          <EditProfileForm profile={profile} />
        </div>
      </div>
    </main>
  );
}
