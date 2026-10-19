"use client";

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

const SessionStatus = () => {
  const router = useRouter();

  const { data: session, isPending, error } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();

    router.push("/auth/sign-in");
    router.refresh();
  };

  if (isPending) {
    return <p>Loading session...</p>;
  }

  if (error) {
    return <p>Failed to load session</p>;
  }

  if (!session) {
    return <p>you are not signed in.</p>;
  }

  return (
    <section>
      <h2>Client Session</h2>

      <p>Welcome... {session.user.name}</p>

      <p>{session.user.email}</p>

      <button onClick={handleSignOut}>Sign Out</button>
    </section>
  );
};

export default SessionStatus;
