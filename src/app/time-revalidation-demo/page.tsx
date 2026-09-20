import { getRevalidatedProducts } from "../_lib/revalidated-products";

const TimeRevalidationDemoPage = async () => {
  const { products, generatedAt } = await getRevalidatedProducts();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Time Revalidation
        </p>

        <h1 className="mt-4 text-4xl font-bold">Revalidated Products</h1>

        <p className="mt-3 text-zinc-400">Generated at: {generatedAt}</p>

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
};

export default TimeRevalidationDemoPage;
