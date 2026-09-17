interface User {
  id: number;
  name: string;
  email: string;
}

const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

const ServerUsers = async () => {
  const users = await getUsers();
  return (
    <section className="mt-8 rounded-xl border border-zinc-800 p-6">
      <p className="text-sm text-zinc-400">Server Component Data</p>

      <h2 className="mt-2 text-2xl font-bold">Users</h2>

      <div className="mt-5 space-y-3">
        {users.slice(0, 3).map((user) => (
          <article key={user.id} className="rounded-lg bg-zinc-900 p-4">
            <h3 className="font-semibold">{user.name}</h3>

            <p className="text-sm text-zinc-400">{user.email}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServerUsers;
