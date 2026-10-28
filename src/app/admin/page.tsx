import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { isAdmin } from "@/lib/auth/permissions";

const AdminPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/auth/sign-in");
  if (!isAdmin(session.user)) redirect("/");

  return (
    <main>
      <h1>Admin Dashboard</h1>

      <p>Welcome back, {session.user.name}!</p>

      <p>
        Role: <strong>{session.user.role}</strong>
      </p>
    </main>
  );
};

export default AdminPage;
