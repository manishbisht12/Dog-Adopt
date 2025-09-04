// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className=" relative  min-h-screen m-0 bg-cover bg-center flex items-center justify-center p-8"
      style={{ backgroundImage: "url('/images/Home.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-4xl text-center text-white  z-10">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          WELCOME TO DOG ADOPTION CENTER
        </h1>
        <p className="text-xl mb-8 drop-shadow-md">
          Adopt a furry friend and give them a loving home.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/dogs"
            className="px-6 py-3 bg-teal-600 bg-opacity-90 rounded hover:bg-teal-700 transition"
          >
            Browse Dogs
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-300 bg-opacity-90 text-gray-900 rounded hover:bg-gray-400 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
