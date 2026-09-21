"use client";

import { useActionState } from "react";

import { submitProfile, type FormState } from "./actions";

const initialState: FormState = {
  errors: {},
  message: "",
};

export default function ProfileForm() {
  const [state, formAction] = useActionState(submitProfile, initialState);

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm text-zinc-300">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className="mt-2 w-full rounded-lg bg-zinc-900 p-3"
        />

        <div id="name-error" aria-live="polite">
          {state.errors?.name?.map((error) => (
            <p key={error} className="mt-2 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-zinc-300">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          aria-describedby="email-error"
          className="mt-2 w-full rounded-lg bg-zinc-900 p-3"
        />

        <div id="email-error" aria-live="polite">
          {state.errors?.email?.map((error) => (
            <p key={error} className="mt-2 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="age" className="block text-sm text-zinc-300">
          Age
        </label>

        <input
          id="age"
          name="age"
          type="number"
          aria-describedby="age-error"
          className="mt-2 w-full rounded-lg bg-zinc-900 p-3"
        />

        <div id="age-error" aria-live="polite">
          {state.errors?.age?.map((error) => (
            <p key={error} className="mt-2 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-3 font-medium"
      >
        Submit Profile
      </button>

      {state.message && (
        <p aria-live="polite" className="text-sm text-zinc-300">
          {state.message}
        </p>
      )}
    </form>
  );
}
