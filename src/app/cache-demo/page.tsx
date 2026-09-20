import { getCachedProducts } from "../_lib/cached-products";

export default async function CacheDemoPage() {
  const products = await getCachedProducts();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Data Cache
        </p>

        <h1 className="mt-4 text-4xl font-bold">Cached Products</h1>

        <div className="mt-8 space-y-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-xl border border-zinc-800 p-5"
            >
              <h2 className="text-lg font-semibold">{product.title}</h2>

              <p className="mt-2 text-zinc-400">${product.price}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
