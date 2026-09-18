const SlowSection = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <section className="rounded-xl border border-zinc-800 p-6">
      <h2 className="text-2xl font-bold">Slow Section</h2>

      <p className="mt-3 text-zinc-400">This content loaded after 3 seconds.</p>
    </section>
  );
};

export default SlowSection;
