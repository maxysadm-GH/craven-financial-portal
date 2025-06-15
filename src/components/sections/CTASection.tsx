
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="w-full bg-blue-50 py-16 mt-8 rounded-2xl shadow-inner border border-blue-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-9">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 flex-1 mb-4">
          Ready to elevate your business or financial journey?
        </h2>
        <div className="flex gap-8 flex-col sm:flex-row">
          <Link to="/contact" className="bg-primary hover:bg-blue-800 text-white font-bold px-8 py-4 text-lg rounded-xl shadow transition hover-scale text-center">Get Started</Link>
          <Link to="/client-portal" className="bg-white border border-primary text-primary font-bold px-8 py-4 text-lg rounded-xl shadow hover:bg-blue-50 transition hover-scale text-center">Client Portal</Link>
        </div>
      </div>
    </section>
  );
}
