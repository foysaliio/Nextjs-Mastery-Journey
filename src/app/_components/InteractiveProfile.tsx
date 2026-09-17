'use client'

import { useState } from "react";

const InteractiveProfile = () => {
  
    const [name, setName] = useState<string>('');
    const [likes, setLikes] = useState<number>(0);

  return (
    <section className="mt-8 rounded-xl border border-zinc-800 p-6">
      <p className="text-sm text-zinc-400">Interactive Client Component</p>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
        placeholder="Enter your name"
        className="mt-4 w-full rounded bg-zinc-900 p-3"
      />

      <p className="mt-4 text-zinc-300">Hello, {name || "Guest"}</p>

      <button
        type="button"
        onClick={() => setLikes((current) => current + 1)}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Likes: {likes}
      </button>
    </section>
  );
};

export default InteractiveProfile;
