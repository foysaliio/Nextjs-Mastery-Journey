import { submitProfile } from "./actions";

const FormsDemoPage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Server Action Form
        </p>

        <h1 className="mt-4 text-4xl font-bold">Create Profile</h1>

        <form action={submitProfile} className="mt-8 space-y-5">
          <div className="">
            <label htmlFor="name" className="block text-sm text-zinc-300">
              Name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              className="mt-2 w-full rounded-lg bg-zinc-900 p-3"
            />
          </div>

          <div className="">
            <label htmlFor="email" className="block text-sm text-zinc-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              className="mt-2 w-full rounded-lg bg-zinc-900 p-3"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium"
          >
            Submit Profile
          </button>
        </form>
      </div>
    </main>
  );
};

export default FormsDemoPage;
