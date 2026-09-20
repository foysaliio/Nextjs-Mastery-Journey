import { getRevalidatedProducts } from "../_lib/revalidated-products";

import { refreshProductsImmediately, revalidateProducts } from "./actions";

export default async function TimeRevalidationPage() {
  const { products, generatedAt } = await getRevalidatedProducts();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Cache Revalidation
        </p>

        <h1 className="mt-4 text-4xl font-bold">Cached Products</h1>

        <p className="mt-3 text-zinc-400">Generated at: {generatedAt}</p>

        <div className="mt-6 flex gap-3">
          <form action={revalidateProducts}>
            <button type="submit" className="rounded bg-blue-600 px-4 py-2">
              Revalidate
            </button>
          </form>

          <form action={refreshProductsImmediately}>
            <button type="submit" className="rounded bg-emerald-600 px-4 py-2">
              Refresh Immediately
            </button>
          </form>
        </div>

        <div className="mt-8 space-y-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-xl border border-zinc-800 p-5"
            >
              <h2 className="font-semibold">{product.title}</h2>

              <p className="mt-2 text-zinc-400">${product.price}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
