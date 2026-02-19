import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white">

      {/* HERO SECTION */}
      <section className="bg-black py-28 text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">
          ThriftBooks
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Your personal Thrifting Vault!
        </p>

<div className="flex justify-center gap-4">
      <Link
      href="/signin"
      className="bg-gray-700 px-6 py-2 rounded-md hover:bg-purple-700 transition"
      >
      Sign In
      </Link>

      <Link
      href="/register"
      className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition"
      >
      Register
      </Link>
</div>
      </section>

      {/* IMAGE PLACEHOLDER SECTION */}
      <section className="bg-gray-950 py-20 flex justify-center">
        <div className="w-96 h-64 bg-gray-700 flex items-center justify-center rounded-lg">
                      <img
          src="/icons/item.png"
          alt="item icon"
          className="w-6 h-6 opacity-70"
            />
          <span className="text-gray-600">Image Placeholder</span>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="bg-black py-20 px-6">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Reviews from our users!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="border border-gray-700 rounded-lg p-6">
            <p className="text-lg mb-4">
              “I've always needed a way to keep track of all my finds, now I've found it!”
            </p>
            <p className="text-sm text-gray-400">
              Tina — Content Creator
            </p>
          </div>

          <div className="border border-gray-700 rounded-lg p-6">
            <p className="text-lg mb-4">
              “Great site. No notes.”
            </p>
            <p className="text-sm text-gray-400">
              Frank — Antique Store Owner
            </p>
          </div>

          <div className="border border-gray-700 rounded-lg p-6">
            <p className="text-lg mb-4">
              “I love ThriftBooks!”
            </p>
            <p className="text-sm text-gray-400">
              Gweneth — Librarian
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
