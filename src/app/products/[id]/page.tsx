const ProductPage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Products
        </p>

        <h1 className="mt-4 text-4xl font-bold">Dynamic Product Page</h1>

        <p className="mt-4 text-zinc-300">
          This page is rendered from a dynamic route.
        </p>
      </div>
    </main>
  );
};

export default ProductPage;
