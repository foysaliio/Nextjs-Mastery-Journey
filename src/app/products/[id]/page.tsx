interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Products
        </p>

        <h1 className="mt-4 text-4xl font-bold">Product ID: {id}</h1>

        <p className="mt-4 text-zinc-300">This ID came from the dynamic URL.</p>
      </div>
    </main>
  );
};

export default ProductPage;
