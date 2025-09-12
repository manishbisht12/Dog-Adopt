"use client";

import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import Link from "next/link";
import dogs from "../../lib/dogs";

export default function DogsPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [searchBreed, setSearchBreed] = useState("");
  const [filterAge, setFilterAge] = useState(""); // age filter dropdown

  // Filter dogs based on breed and age filter
  const filteredDogs = dogs.filter((dog) => {
    const breedMatch = dog.breed.toLowerCase().includes(searchBreed.toLowerCase());
    const ageMatch = filterAge ? dog.age === Number(filterAge) : true;
    return breedMatch && ageMatch;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">All Dogs</h1>

      {/* Search and Filter Inputs */}
      <div className="flex gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search by breed"
          value={searchBreed}
          onChange={(e) => setSearchBreed(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 flex-1"
        />

        <select
          value={filterAge}
          onChange={(e) => setFilterAge(e.target.value)}
          className="border text-green-300 border-gray-300 rounded px-3 py-2"
        >
          <option value="">All Ages</option>
          {[...Array(15)].map((_, i) => {
            const age = i + 1;
            return (
              <option key={age} value={age}>
                {age} {age === 1 ? "year" : "years"}
              </option>
            );
          })}
        </select>
      </div>

      {/* Dogs Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredDogs.map((dog) => {
          const isFavorite = favorites.some((d) => d.id === dog.id);

          return (
            <div
              key={dog.id}
              className="bg-white rounded shadow p-4 transition-transform"
            >
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
                  className={`absolute top-3 right-3 text-3xl transition-colors cursor-pointer ${
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
        {filteredDogs.length === 0 && (
          <p className="text-center col-span-full text-gray-600">
            No dogs found matching your criteria.
          </p>
        )}
      </div>
    </main>
  );
}
21