"use client";

import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { signInSchema } from "@/lib/schemas/auth.schema";

const SignInPage = () => {
  const router = useRouter();

  const [message, setMessage] = useState("");

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");
    setIsPending(true);

    const formData = new FormData(event.currentTarget);

    const formValues = {
      email: String(formData.get("email") ?? ""),

      password: String(formData.get("password") ?? ""),
    };

    const result = signInSchema.safeParse(formValues);

    if (!result.success) {
      setMessage(result.error.issues[0]?.message ?? "Invalid form data");

      setIsPending(false);

      return;
    }

    const { error } = await authClient.signIn.email({
      email: result.data.email,
      password: result.data.password,
    });

    if (error) {
      
      setMessage(error.message ?? "Sign in failed");

      setIsPending(false);

      return;
    }

    router.push("/");

    router.refresh();
  };

  return (
    <main>
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>

          <input id="email" name="email" type="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input id="password" name="password" type="password" />
        </div>

        <button type="submit" disabled={isPending}>
          {isPending ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
};

export default SignInPage;
