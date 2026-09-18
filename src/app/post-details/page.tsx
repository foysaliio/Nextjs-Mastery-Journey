interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const getPost = async (): Promise<Post> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
};

const getUser = async (userId: number): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
};

const PostDetailsPage = async () => {
  const post = await getPost();

  const user = await getUser(post.userId);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Sequential Data Fetching
        </p>

        <h1 className="mt-4 text-4xl font-bold">{post.title}</h1>

        <p className="mt-4 text-zinc-300">{post.body}</p>

        <div className="mt-8 rounded-xl border border-zinc-800 p-5">
          <p className="text-sm text-zinc-400">Written by</p>

          <h2 className="mt-2 text-xl font-semibold">{user.name}</h2>

          <p className="mt-1 text-zinc-400">{user.email}</p>
        </div>
      </article>
    </main>
  );
};

export default PostDetailsPage;
