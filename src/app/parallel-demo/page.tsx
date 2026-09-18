interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
}

const getUser = async (): Promise<User> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
};

const getPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const ParallelDemoPage = async () => {
  const [user, posts] = await Promise.all([getUser(), getPosts()]);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Parallel Data Fetching
        </p>

        <h1 className="mt-4 text-4xl font-bold">{user.name}</h1>

        <p className="mt-6 text-zinc-300">Total posts: {posts.length}</p>
      </div>
    </main>
  );
};

export default ParallelDemoPage;
