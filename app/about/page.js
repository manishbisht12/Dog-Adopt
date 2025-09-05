// app/about/page.js

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-6 text-teal-300">About Us</h1>
      
      <p className="text-gray-200 mb-4 leading-relaxed">
        Welcome to <strong>DogAdopt</strong> – a loving home for dogs waiting to be adopted! 🐾
      </p>
      
      <p className="text-gray-300 mb-3 leading-relaxed">
        We are a passionate group of animal lovers committed to helping rescue dogs find forever homes. Whether you're looking for a playful pup or a calm companion, we’ve got the right furry friend for you.
      </p>
      
      <p className="text-gray-300 leading-relaxed">
        Every adoption helps us continue our mission of rescuing and rehabilitating abandoned dogs. Thank you for being a part of the journey!
      </p>
    </main>
  );
}
