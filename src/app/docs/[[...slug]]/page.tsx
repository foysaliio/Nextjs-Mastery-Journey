type DocsPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;

  const path = slug?.join(" / ") ?? "Documentation Home";

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Documentation
        </p>

        <h1 className="mt-4 text-4xl font-bold">Optional Catch-All Route</h1>

        <p className="mt-4 text-zinc-300">Path: {path}</p>
      </div>
    </main>
  );
}
