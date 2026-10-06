"use client";

import { SubmitEvent, useState } from "react";

import { authClient } from "@/lib/auth-client";
import { signUpSchema } from "@/lib/schemas/auth.schema";

const SignUpPage = () => {
  const [message, setMessage] = useState("");

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");
    setIsPending(true);

    const formData = new FormData(event.currentTarget);

    const formValues = {
      name: String(formData.get("name") ?? ""),

      email: String(formData.get("email") ?? ""),

      password: String(formData.get("password") ?? ""),
    };

    const result = signUpSchema.safeParse(formValues);

    if (!result.success) {
      setMessage(result.error.issues[0]?.message ?? "Invalid form data");

      setIsPending(false);

      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: result.data.name,
      email: result.data.email,
      password: result.data.password,
    });

    if (error) {
      setMessage(error.message ?? "Sign up failed");

      setIsPending(false);

      return;
    }

    setMessage(`Welcome ${data.user.name}!`);

    setIsPending(false);
  };

  return (
    <main>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>

          <input id="name" name="name" type="text" />
        </div>

        <div>
          <label htmlFor="email">Email</label>

          <input id="email" name="email" type="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input id="password" name="password" type="password" />
        </div>

        <button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Sign Up"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
};

export default SignUpPage;
