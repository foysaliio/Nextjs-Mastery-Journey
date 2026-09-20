interface Product {
  id: number;
  title: string;
  price: number;
}

const getProducts = async (): Promise<Product[]> => {
  "use cache";

  console.log("Fetching products...");

  const response = await fetch("https://dummyjson.com/products?limit=5");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: {
    products: Product[];
  } = await response.json();

  return data.products;
};

const CacheDemoPage = async () => {
  const products = await getProducts();
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Cache Demo
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
};

export default CacheDemoPage;
