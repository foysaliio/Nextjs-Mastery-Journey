import { getProducts } from "../_lib/products";

const ProductsListPage = async () => {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Direct Server Data Access
        </p>

        <h1 className="mt-4 text-4xl font-bold">Our Products</h1>

        <p className="mt-2 text-zinc-400">
          Explore our latest collection of products.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600"
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>

              <p className="mt-3 text-lg font-medium text-emerald-400">
                ${product.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsListPage;
