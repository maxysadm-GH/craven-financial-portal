
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-16 pb-16 md:pb-24 md:pt-24">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl">
          <span className="text-blue-700">Texas CFO, CPA & Advisory</span> for Ambitious Businesses & High Net Worth Families
        </h1>
        <p className="max-w-xl text-base md:text-xl text-gray-700">
          Trusted by clients statewide, Craven Financial Solutions delivers high-precision accounting, proactive tax strategy, and expert business consulting. From outsourced CFO and payroll to full-scope IT integration, our Texas-based team powers growth, protects assets, and streamlines compliance for retail, service businesses, ranching, real estate, and beyond.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link to="/contact" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition hover-scale text-center">Schedule a Consultation</Link>
          <Link to="/services" className="bg-white border border-blue-700 text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition hover-scale text-center">Explore Services</Link>
        </div>
        <div className="text-xs mt-4 md:mt-2 text-blue-900 font-medium">
          Serving Dallas, Austin, Houston, San Antonio and clients across Texas.
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
