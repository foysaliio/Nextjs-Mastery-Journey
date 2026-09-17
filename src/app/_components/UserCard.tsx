"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const [showEmail, setShowEmail] = useState<boolean>(false);

  return (
    <article className="rounded-lg bg-zinc-900 p-4">
      <h3 className="font-semibold">{user.name}</h3>

      {showEmail && <p className="mt-2 text-sm text-zinc-400">{user.email}</p>}

      <button
        type="button"
        onClick={() => setShowEmail((current) => !current)}
        className="mt-3 rounded bg-blue-600 px-3 py-2 text-sm"
      >
        {showEmail ? "Hide Email" : "Show Email"}
      </button>
    </article>
  );
}

export default UserCard;
