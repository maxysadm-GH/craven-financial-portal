
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-16 pb-16 md:pb-24 md:pt-24">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
          Financial Clarity. Business Growth. <span className="text-blue-700">Executive Guidance.</span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-700">
          Consolidating experience across finance, consulting, and business operations—Craven Financial Solutions empowers leaders and organizations to thrive.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link to="/contact" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition hover-scale text-center">Schedule a Call</Link>
          <Link to="/services" className="bg-white border border-blue-700 text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition hover-scale text-center">View Services</Link>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center md:justify-end">
        <div className="w-full max-w-xs h-60 md:h-72 rounded-2xl bg-gradient-to-br from-blue-100 via-white to-blue-300 flex items-center justify-center shadow-inner border-2 border-blue-50 relative">
          {/* Placeholder for logo/hero visual */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 flex items-center justify-center shadow-lg">
            <span className="text-white text-5xl font-bold">CF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
