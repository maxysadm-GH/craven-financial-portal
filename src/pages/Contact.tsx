
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  // Just a placeholder for form submit for now
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <form
            className="bg-white border rounded-xl p-8 shadow flex flex-col space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input
                className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none"
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none"
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none"
                rows={4}
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg px-6 py-3 transition"
            >
              {submitted ? "Thank you!" : "Send Message"}
            </button>
            {submitted && (
              <span className="text-green-600 mt-2">Your message has been sent!</span>
            )}
          </form>
          <div className="flex flex-col gap-8">
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col gap-3 border">
              <div className="font-bold text-blue-800 text-lg">General Inquiries</div>
              <div className="text-gray-700">info@cravenfs.com</div>
              <div className="text-gray-700">+1 (855) 555-5555</div>
              <div className="text-sm text-gray-500">123 Main Street, Beverly Hills, CA</div>
            </div>
            <div className="bg-white rounded-xl p-6 border flex flex-col gap-2 shadow min-h-[120px] flex-1 items-start">
              <span className="font-medium text-gray-800">Schedule a Call:</span>
              <div className="w-full">
                <div className="bg-gray-200 rounded h-10 w-40 flex items-center justify-center text-gray-500 text-sm">
                  {/* Scheduling widget placeholder */}
                  Calendly integration coming soon
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl border text-gray-500 text-center flex items-center justify-center min-h-[120px]">
              {/* Map embed placeholder */}
              Map will be displayed here
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
