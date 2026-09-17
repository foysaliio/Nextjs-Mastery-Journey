"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <section className="mt-8 rounded-xl border border-zinc-800 p-6">
      <p className="text-sm text-zinc-400">Client Component</p>

      <h2 className="mt-2 text-2xl font-bold">Count: {count}</h2>

      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Increase
      </button>
    </section>
  );
};

export default Counter;
