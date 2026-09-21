"use client";

import { useOptimistic } from "react";

import { deleteProfile } from "./actions";

import type { Profile } from "./profile-store";

type OptimisticProfileListProps = {
  profiles: Profile[];
};

export default function OptimisticProfileList({
  profiles,
}: OptimisticProfileListProps) {
  const [optimisticProfiles, removeOptimisticProfile] = useOptimistic(
    profiles,
    (currentProfiles, deletedId: number) =>
      currentProfiles.filter((profile) => profile.id !== deletedId),
  );

  async function deleteAction(id: number) {
    removeOptimisticProfile(id);

    await deleteProfile(id);
  }

  if (optimisticProfiles.length === 0) {
    return <p className="text-zinc-400">No profiles found.</p>;
  }

  return (
    <div className="space-y-3">
      {optimisticProfiles.map((profile) => {
        const deleteWithId = deleteAction.bind(null, profile.id);

        return (
          <article
            key={profile.id}
            className="rounded-lg
                bg-zinc-900 p-4"
          >
            <p className="font-medium">{profile.name}</p>

            <p className="text-sm text-zinc-400">{profile.email}</p>

            <p className="text-sm text-zinc-400">Age: {profile.age}</p>

            <form action={deleteWithId} className="mt-4">
              <button
                type="submit"
                className="rounded-md bg-red-600
                    px-3 py-2 text-sm"
              >
                Delete
              </button>
            </form>
          </article>
        );
      })}
    </div>
  );
}
