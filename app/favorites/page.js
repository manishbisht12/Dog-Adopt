"use client";

import { useFavorites } from "../context/FavoritesContext";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0)
    return <p className="p-8 text-center">No favorite dogs yet.</p>;

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Dogs</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {favorites.map((dog) => (
          <div key={dog.id} className="bg-white rounded shadow p-4">
            <img
              src={dog.image}
              alt={dog.name}
              className="rounded mb-3"
              width={400}
              height={300}
            />
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
