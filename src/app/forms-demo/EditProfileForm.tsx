import type { Profile } from "./profile-store";

import { deleteProfile, updateProfile } from "./actions";

type EditProfileFormProps = {
  profile: Profile;
};

export default function EditProfileForm({ profile }: EditProfileFormProps) {
  const updateProfileWithId = updateProfile.bind(null, profile.id);

  const deleteProfileWithId = deleteProfile.bind(null, profile.id);

  return (
    <div className="space-y-8">
      <form action={updateProfileWithId} className="space-y-5">
        <div>
          <label htmlFor="edit-name" className="block text-sm text-zinc-300">
            Name
          </label>

          <input
            id="edit-name"
            name="name"
            type="text"
            defaultValue={profile.name}
            className="mt-2 w-full rounded-lg
              bg-zinc-900 p-3"
          />
        </div>

        <div>
          <label htmlFor="edit-email" className="block text-sm text-zinc-300">
            Email
          </label>

          <input
            id="edit-email"
            name="email"
            type="email"
            defaultValue={profile.email}
            className="mt-2 w-full rounded-lg
              bg-zinc-900 p-3"
          />
        </div>

        <div>
          <label htmlFor="edit-age" className="block text-sm text-zinc-300">
            Age
          </label>

          <input
            id="edit-age"
            name="age"
            type="number"
            defaultValue={profile.age}
            className="mt-2 w-full rounded-lg
              bg-zinc-900 p-3"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-emerald-600
            px-5 py-3 font-medium"
        >
          Update Profile
        </button>
      </form>

      <div className="border-t border-zinc-800 pt-6">
        <p className="mb-3 text-sm text-zinc-400">
          Delete this profile permanently.
        </p>

        <form action={deleteProfileWithId}>
          <button
            type="submit"
            className="rounded-lg bg-red-600
              px-5 py-3 font-medium"
          >
            Delete Profile
          </button>
        </form>
      </div>
    </div>
  );
}
