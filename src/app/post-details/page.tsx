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

const fetchPost = async (): Promise<Post> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");

  if (!response.ok) {
    throw new Error("Failed to load post");
  }

  return response.json();
};

const fetchUser = async (userId: number): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load user");
  }

  return response.json();
};

const PostDetailsPage = async () => {
  const post = await fetchPost();

  const user = await fetchUser(post.userId);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Post Details
        </p>

        <h1 className="mt-5 text-4xl font-bold text-white">{post.title}</h1>

        <p className="mt-5 text-lg leading-8 text-slate-300">{post.body}</p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Author Information</p>

          <h2 className="mt-3 text-2xl font-semibold text-indigo-300">
            {user.name}
          </h2>

          <p className="mt-2 text-slate-400">{user.email}</p>
        </div>
      </article>
    </main>
  );
};

export default PostDetailsPage;
