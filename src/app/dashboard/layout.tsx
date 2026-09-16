import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-5xl">
        <aside className="min-h-screen w-56 border-r border-zinc-800 p-6">
          <h2 className="text-xl font-bold">Dashboard</h2>

          <nav className="mt-6 flex flex-col gap-3">
            <Link
              href="/dashboard/profile"
              className="text-zinc-300 hover:text-white"
            >
              Profile
            </Link>
            <Link
              href="/dashboard/settings"
              className="text-zinc-300 hover:text-white"
            >
              Settings
            </Link>
          </nav>
        </aside>

        <div className="flex-1 p-8">{children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;
