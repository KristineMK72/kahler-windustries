export default function Contact() {
  return (
    <section className="p-10 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

      <p className="text-gray-700 mb-4">
        Ready to schedule service? Have questions? We're here to help.
      </p>

      <p className="mb-2"><strong>Phone:</strong> (555) 218-9044</p>
      <p className="mb-8"><strong>Email:</strong> info@kahlerwindustries.com</p>

      <form className="space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Your Name" />
        <input className="w-full border p-3 rounded" placeholder="Your Email" />
        <textarea className="w-full border p-3 rounded" placeholder="Message" rows="4"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
