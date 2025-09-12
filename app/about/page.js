export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-white transition-opacity duration-1000 opacity-0 animate-fadeIn">
      <h1 className="text-4xl font-bold mb-6 text-teal-300">About Us</h1>

      <p className="text-gray-200 mb-4 leading-relaxed">
        Welcome to <strong>DogAdopt</strong> – a loving home for dogs waiting to be adopted! 🐾
      </p>

      <p className="text-gray-300 mb-3 leading-relaxed">
        We are a passionate group of animal lovers committed to helping rescue dogs find forever homes. Whether you're looking for a playful pup or a calm companion, we’ve got the right furry friend for you.
      </p>

      <p className="text-gray-300 mb-8 leading-relaxed">
        Every adoption helps us continue our mission of rescuing and rehabilitating abandoned dogs. Thank you for being a part of the journey!
      </p>

     <h2 className="text-2xl font-semibold text-teal-300 mb-3">📍 Our Location</h2>

<div className="w-full h-[250px] rounded-md overflow-hidden shadow-md border border-gray-700">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.6505988737576!2d79.52843693802232!3d29.223354736810855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09aeef6ba6a21%3A0x15da1a6fa6e6f992!2sTikonia%20Churaha%2C%20Haldwani%2C%20Uttarakhand%20263139!5e1!3m2!1sen!2sin!4v1757664189466!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </main>
  );
}
