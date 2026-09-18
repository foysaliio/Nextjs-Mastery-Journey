interface Message {
  title: string;
  description: string;
}

const getMessage = async (): Promise<Message> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    title: "Async Server Component",
    description:
      "This data was loaded before the component finished rendering.",
  };
};

const AsyncMessage = async () => {
  const message = await getMessage();

  return (
    <section className="mt-8 rounded-xl border border-zinc-800 p-6">
      <p className="text-sm text-zinc-400">Server Data</p>

      <h2 className="mt-2 text-2xl font-bold">{message.title}</h2>

      <p className="mt-3 text-zinc-300">{message.description}</p>
    </section>
  );
};

export default AsyncMessage;
