interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductsResponse {
  products: Product[];
}

const CachedProductList = async () => {
  "use cache";

  console.log("Rendering cached product list...");

  const response = await fetch("https://dummyjson.com/products?limit=5");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await response.json();

  return (
    <section className="space-y-4">
      {data.products.map((product) => (
        <article
          key={product.id}
          className="rounded-xl border border-zinc-800 p-5"
        >
          <h2 className="text-lg font-semibold">{product.title}</h2>

          <p className="mt-2 text-zinc-400">${product.price}</p>
        </article>
      ))}
    </section>
  );
};

export default CachedProductList;
