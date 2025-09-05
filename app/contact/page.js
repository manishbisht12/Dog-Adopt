// app/contact/page.js

export default function ContactPage() {
  return (
    <main className="w-full bg-black text-white py-12 px-110">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-teal-300">Contact Us</h1>

        <p className="text-gray-300 mb-6">
          Have questions? Need help with adoption? We'd love to hear from you!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-200">
              Message
            </label>
            <textarea
              rows="5"
              required
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
