import type { Session } from "../_lib/auth/auth.types";

import { canAccessAdminArea } from "../_lib/auth/permissions";

const demoSession: Session | null = {
  user: {
    id: "user-1",
    name: "Foysal",
    email: "foysal@example.com",
    role: "admin",
  },
  expiresAt: "2026-10-10T12:00:00Z",
};

const AuthDemoPage = () => {
  const user = demoSession?.user ?? null;

  const isAuthenticated = Boolean(user);

  const isAuthorized = canAccessAdminArea(user);

  return (
    <main>
      <h1>Authentication Mental Model</h1>

      <p>Authenticated: {isAuthenticated ? "Yes" : "No"}</p>

      <p>Admin Access: {isAuthorized ? "Allowed" : "Denied"}</p>
    </main>
  );
};

export default AuthDemoPage;
