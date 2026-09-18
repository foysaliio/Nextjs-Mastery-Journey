const Loading = () => {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Loading
        </p>

        <h1 className="mt-4 text-4xl font-bold">Loading posts...</h1>

        <div className="mt-8 space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-28 animate-pulse rounded-xl bg-zinc-900"
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;
