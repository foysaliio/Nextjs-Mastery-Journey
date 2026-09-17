"use client";

import React, { useState } from "react";

interface UserPanelProps {
  children: React.ReactNode;
}

const UserPanel = ({ children }: UserPanelProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <section className="mt-8 rounded-xl border border-zinc-800 p-6">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="rounded bg-blue-600 px-4 py-2"
      >
        {isOpen ? "Hide Users" : "Show Users"}
      </button>

      {isOpen && <div className="mt-5">{children}</div>}
    </section>
  );
};

export default UserPanel;
