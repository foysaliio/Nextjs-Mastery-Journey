const ServerGreeting = () => {
  const environment = process.env.NODE_ENV;

  return (
    <section className="mt-8 rounded-xl border border-zinc-800 p-6">
      <p className="text-sm text-zinc-400">Rendered by a Server Component</p>

      <h2 className="mt-2 text-2xl font-bold">Hello from the server</h2>

      <p className="mt-3 text-zinc-300">Environment: {environment}</p>
    </section>
  );
};

export default ServerGreeting;
