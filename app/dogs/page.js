import Link from "next/link";
import Image from "next/image";


const dogs = [
  {
    id: "1",
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3,
    image: "/images/dogs/buddy.jpg",
  },
  {
    id: "2",
    name: "Luna",
    breed: "Beagle",
    age: 2,
    image: "/images/dogs/luna.jpg",
  },
  {
    id: "3",
    name: "Max",
    breed: "Labrador",
    age: 4,
    image: "/images/dogs/max.jpg",
  },
  {
    id: "4",
    name: "Dogesh",
    breed: "Dog",
    age: 4,
    image: "/images/dogs/dogesh.jpg",
  },
  {
    id: "5",
    name: "Hassu",
    breed: "Husky",
    age: 2,
    image: "/images/dogs/hassu.jpg",
  },
  {
    id: "6",
    name: "Jerry",
    breed: "Germen Shepherd",
    age: 7,
    image: "/images/dogs/jerry.jpg",
  },
  
];

export default function DogsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white  mb-6">All Dogs</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {dogs.map((dog) => (
          <div key={dog.id} className="bg-white rounded shadow p-4 ">
            <Image
              src={dog.image}
              alt={dog.name}
              width={400}
              height={300}
              className="rounded mb-4 hover:scale-105"
            />
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
