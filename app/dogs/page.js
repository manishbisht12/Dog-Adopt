"use client";

import { useFavorites } from "../context/FavoritesContext";
import Link from "next/link";
import dogs from "../../lib/dogs";

export default function DogsPage() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-6">All Dogs</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {dogs.map((dog) => {
          const isFavorite = favorites.some((d) => d.id === dog.id);

          return (
            <div
              key={dog.id}
              className="bg-white rounded shadow p-4 transition-transform"
            >
              {/* Image with always visible heart icon */}
              <div className="relative overflow-hidden rounded mb-4">
                <img
                  src={dog.image}
                  alt={dog.name}
                  width={400}
                  height={300}
                  className="rounded"
                />
                <button
                  onClick={() => toggleFavorite(dog)}
                  aria-label="Add to wishlist"
                  className={`absolute top-3 right-3 text-3xl transition-colors ${
                    isFavorite ? "text-red-500" : "text-gray-300 hover:text-red-500"
                  }`}
                >
                  {isFavorite ? "❤️" : "🤍"}
                </button>
              </div>

              <h2 className="text-xl text-black font-semibold">{dog.name}</h2>
              <p className="text-gray-600">{dog.breed}</p>
              <p className="text-sm text-gray-500">Age: {dog.age} years</p>

              <Link
                href={`/dogs/${dog.id}`}
                className="mt-3 inline-block text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
