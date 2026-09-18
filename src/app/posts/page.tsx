import { getPosts } from "../_lib/posts";

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Server Data Fetching
        </p>

        <h1 className="mt-4 text-4xl font-bold">Posts</h1>

        <div className="mt-8 space-y-4">
          {posts.slice(0, 5).map((post) => (
            <article
              key={post.id}
              className="rounded-xl border border-zinc-800 p-5"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>

              <p className="mt-2 text-zinc-400">{post.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PostsPage;
