import CachedProductList from "../_components/CachedProductList";

const UiCacheDemoPage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          UI Cache
        </p>

        <h1 className="mt-4 text-4xl font-bold">Cached Product UI</h1>

        <div className="mt-8">
          <CachedProductList />
        </div>
      </div>
    </main>
  );
};

export default UiCacheDemoPage;
