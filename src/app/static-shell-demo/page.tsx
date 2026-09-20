import { getCachedProducts } from "../_lib/cached-products";

const StaticShellDemoPage = async () => {
  const products = await getCachedProducts();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <header>
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Static Shell Demo
          </p>

          <h1 className="mt-4 text-4xl font-bold">Featured Products</h1>

          <p className="mt-3 text-zinc-400">
            This heading is predictable static content.
          </p>
        </header>

        <section className="mt-8 space-y-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-xl border border-zinc-800 p-5"
            >
              <h2 className="font-semibold">{product.title}</h2>

              <p className="mt-2 text-zinc-400">${product.price}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default StaticShellDemoPage;
