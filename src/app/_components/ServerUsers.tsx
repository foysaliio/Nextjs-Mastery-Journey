import UserCard from "./UserCard";

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
      <p className="text-sm text-zinc-400"> Server → Client Props</p>

      <h2 className="mt-2 text-2xl font-bold">Users</h2>

      <div className="mt-5 space-y-3">
        {users.slice(0, 3).map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default ServerUsers;
