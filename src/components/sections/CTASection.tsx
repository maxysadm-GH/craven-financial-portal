
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="w-full bg-blue-50 py-12 mt-4 rounded-xl shadow-inner border border-blue-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        <h2 className="text-2xl font-bold text-blue-800 flex-1 mb-2">
          Ready to elevate your business or financial journey?
        </h2>
        <div className="flex gap-6 flex-col sm:flex-row">
          <Link to="/contact" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition hover-scale text-center">Get Started</Link>
          <Link to="/client-portal" className="bg-white border border-blue-700 text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition hover-scale text-center">Client Portal</Link>
        </div>
      </div>
    </section>
  );
}
