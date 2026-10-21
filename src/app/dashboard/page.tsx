import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { saveSettingsAction } from "./actions";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <main>
      <h1>Dashboard</h1>

      <p>Welcome, {session.user.name}</p>

      <p>{session.user.email}</p>

      <form action={saveSettingsAction}>
        <label htmlFor="theme">Theme</label>

        <select id="theme" name="theme">
          <option value="light">Light</option>

          <option value="dark">Dark</option>
        </select>

        <button type="submit">Save Settings</button>
      </form>
    </main>
  );
};

export default DashboardPage;
