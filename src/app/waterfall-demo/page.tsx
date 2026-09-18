interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
}

interface Comment {
  id: number;
  body: string;
}

const getUser = async (): Promise<User> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
};

const getPosts = async (userId: number): Promise<Post[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const getComments = async (postId: number): Promise<Comment[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  return response.json();
};

const WaterfallDemoPage = async () => {
  const user = await getUser();

  const posts = await getPosts(user.id);

  const comments = await getComments(posts[0].id);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Request Waterfall
        </p>

        <h1 className="mt-4 text-4xl font-bold">{user.name}</h1>

        <p className="mt-6 text-zinc-300">Posts loaded: {posts.length}</p>

        <p className="mt-2 text-zinc-300">
          Comments on first post: {comments.length}
        </p>
      </div>
    </main>
  );
};

export default WaterfallDemoPage;
