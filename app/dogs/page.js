// app/dogs/page.js or wherever your DogsPage is located
import dogs from "../../lib/dogs";
import Link from "next/link";

export default function DogsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">All Dogs</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {dogs.map((dog) => (
          <div key={dog.id} className="bg-white rounded shadow p-4 transition-transform">
            
            {/* Image with corner-in hover effect */}
            <div className="overflow-hidden group rounded mb-4">
              <img
                src={dog.image}
                alt={dog.name}
                width={400}
                height={300}
                 className="rounded transform transition duration-500 group-hover:scale-95 group-hover:rotate-1 group-hover:skew-x-1 group-hover:skew-y-1"
              />
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
        ))}
      </div>
    </main>
  );
}
