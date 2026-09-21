"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-blue-600 px-5 py-3
        font-medium disabled:cursor-not-allowed
        disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Submit Profile"}
    </button>
  );
}
