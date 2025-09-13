"use client";

import Link from "next/link";
import { FaDonate } from "react-icons/fa";
import FAQChat from "./FAQ/page";

export default function HomePage() {
  return (
    <>
      <main
        className="relative min-h-screen m-0 bg-cover bg-center flex items-center justify-center p-8"
        style={{ backgroundImage: "url('/images/Home.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main Content with animation */}
        <div className="relative max-w-4xl text-center text-white z-10 animate-fade-in-down">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
            WELCOME TO DOG ADOPTION CENTER
          </h1>
          <p className="text-xl mb-8 drop-shadow-md">
            Adopt a furry friend and give them a loving home.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-4">
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

          {/* Donate Button */}
          <div className="mt-4 flex justify-center">
            <Link href="/donate">
              <button
                className="flex items-center gap-2 px-5 py-2 bg-yellow-500 text-black font-medium rounded hover:bg-yellow-600 transition cursor-pointer"
              >
                <FaDonate className="text-xl" />
                Donate
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* FAQ Chat widget */}
      <FAQChat />
    </>
  );
}
