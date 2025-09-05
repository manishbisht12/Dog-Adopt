import dogs from "../../lib/dogs";

export default function DogsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">All Dogs</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {dogs.map((dog) => (
          <div key={dog.id} className="bg-white rounded shadow p-4 hover:scale-105 transition-transform">
            <img
              src={dog.image}
              alt={dog.name}
              width={400}
              height={300}
              className="rounded mb-4"
            />
            <h2 className="text-xl text-black font-semibold">{dog.name}</h2>
            <p className="text-gray-600">{dog.breed}</p>
            <p className="text-sm text-gray-500">Age: {dog.age} years</p>

            <a
              href={`/dogs/${dog.id}`}
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
