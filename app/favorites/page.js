"use client";

import { useFavorites } from "../context/FavoritesContext";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0)
    return (
      <div className="p-8 text-center">
        <p className="text-xl mb-4">No favorite dogs yet.</p>
        <Link
          href="/dogs"
          className="inline-block px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
        >
          Browse Dogs →
        </Link>
      </div>
    );

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Dogs</h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
        {favorites.map((dog) => (
          <div key={dog.id} className="bg-white rounded shadow p-4 relative">
            {/* Wishlist Button */}
            <button
              onClick={() => toggleFavorite(dog)}
              aria-label="Remove from wishlist"
              className="absolute top-3 right-3 text-3xl cursor-pointer text-red-500 hover:text-red-700 transition"
            >
              ❤️
            </button>

            {/* Dog Image */}
            <img
              src={dog.image}
              alt={dog.name}
              className="rounded mb-3"
              width={400}
              height={300}
            />

            {/* Dog Info */}
            <h2 className="text-xl text-cyan-500 font-semibold">{dog.name}</h2>
            <p className="text-gray-600">{dog.breed}</p>
            <Link
              href={`/dogs/${dog.id}`}
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
