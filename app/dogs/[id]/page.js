// import dogs from "../../../lib/dogs";

// export default function DogDetailPage({ params }) {
//   const dog = dogs.find((d) => d.id === params.id);

//   if (!dog) {
//     return (
//       <div className="max-w-4xl mx-auto py-16 px-4 text-center">
//         <h1 className="text-3xl font-bold text-red-600 mb-4">Dog Not Found</h1>
//         <a href="/dogs" className="text-blue-600 underline">
//           ← Back to Dogs
//         </a>
//       </div>
//     );
//   }

//   return (
//     <main className="max-w-4xl mx-auto py-12 px-4">
//       <div className="flex flex-col md:flex-row items-center gap-8">
//         <img
//           src={dog.image}
//           alt={dog.name}
//           width={400}
//           height={300}
//           className="rounded shadow"
//         />
//         <div>
//           <h1 className="text-4xl font-bold mb-2">{dog.name}</h1>
//           <p className="text-gray-700 text-lg mb-1">Breed: {dog.breed}</p>
//           <p className="text-gray-600 mb-2">Age: {dog.age} years</p>
//           <p className="text-gray-800 mb-4">{dog.description}</p>

//           <a
//             href={`/adopt/${dog.id}`}
//             className="inline-block bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700"
//           >
//             Adopt {dog.name}
//           </a>
//         </div>
//       </div>

//       <div className="mt-10">
//         <a href="/dogs" className="text-blue-600 underline">
//           ← Back to Dogs
//         </a>
//       </div>
//     </main>
//   );
// }




import Image from "next/image";
import dogs from "../../../lib/dogs";

export default async function DogDetailPage({ params }) {
  const awaitedParams = await params;
  const { id } = awaitedParams;

  const dog = dogs.find((d) => d.id === id);

  if (!dog) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Dog Not Found</h1>
        <a href="/dogs" className="text-blue-600 underline">
          ← Back to Dogs
        </a>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src={dog.image}
          alt={dog.name}
          width={400}
          height={300}
          className="rounded shadow"
          priority
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">{dog.name}</h1>
          <p className="text-gray-700 text-lg mb-1">Breed: {dog.breed}</p>
          <p className="text-gray-600 mb-2">Age: {dog.age} years</p>

          {dog.size && <p className="text-gray-600 mb-1">Size: {dog.size}</p>}
          {dog.gender && <p className="text-gray-600 mb-1">Gender: {dog.gender}</p>}
          {dog.temperament && <p className="text-gray-600 mb-4">Temperament: {dog.temperament}</p>}

          <p className="text-gray-800 mb-4">{dog.description}</p>

          <a
            href={`/adopt/${dog.id}`}
            className="inline-block bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700"
          >
            Adopt {dog.name}
          </a>
        </div>
      </div>

      <div className="mt-10">
        <a href="/dogs" className="text-blue-600 underline">
          ← Back to Dogs
        </a>
      </div>
    </main>
  );
}
