import { headers } from "next/headers";

import { auth } from "@/lib/auth";

import SessionStatus from "./session-status";

const SessionDemoPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main>
      <h1>Session Demo</h1>

      <h2>Server Session</h2>

      {session ? (
        <div>
          <p>Name: {session.user.name}</p>
          <p>Email: {session.user.email}</p>
          <p>User ID: {session.user.id}</p>
        </div>
      ) : (
        <p>No active session</p>
      )}

      <hr />

      <SessionStatus />
    </main>
  );
};

export default SessionDemoPage;