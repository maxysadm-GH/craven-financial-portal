
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-14 pt-24 pb-24 md:pb-32 md:pt-32 relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden animate-fade-in">
      {/* Decorative Background Image Overlay */}
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80"
        alt="Accounting technology and modern business workspace"
        className="absolute top-0 right-0 w-2/3 max-w-2xl opacity-25 mix-blend-multiply pointer-events-none hidden md:block"
        loading="lazy"
      />
      <div className="flex-1 z-10 space-y-10 px-2">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight max-w-3xl drop-shadow-sm tracking-tight">
          Texas’s Trusted{" "}
          <span className="text-primary">CFO, CPA & Advisory</span>
        </h1>
        <p className="max-w-xl text-xl md:text-2xl text-gray-800 font-medium">
          Unifying precision accounting, tax optimization, payroll, and business transformation for ambitious businesses and families.{" "}
          <span className="text-primary font-semibold">Decades of results. </span>
          Empower your success with Craven Financial Solutions—serving Dallas, Austin, Houston, San Antonio, and beyond.
        </p>
        <ul className="list-inside list-disc text-primary text-lg font-semibold mb-2 ml-1">
          <li>Outsourced CFO & Controller Services</li>
          <li>Proactive Tax Strategy & Compliance</li>
          <li>Advanced Payroll, Bookkeeping, and IT Integrations</li>
        </ul>
        <div className="flex gap-8 flex-col sm:flex-row">
          <Link to="/contact" className="bg-primary hover:bg-blue-800 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg transition hover-scale text-center ring-2 ring-blue-200">Schedule a Consultation</Link>
          <Link to="/services" className="bg-white border-2 border-primary text-primary font-bold px-10 py-4 text-lg rounded-xl shadow hover:bg-blue-50 transition hover-scale text-center">See How We Help</Link>
        </div>
        <div className="text-base mt-7 text-blue-900 font-medium opacity-95 tracking-wide">
          Texas expertise • Modern technology • Unmatched commitment to your ROI
        </div>
      </div>
      {/* Hero Visual - Modern Workplace */}
      <div className="flex-1 flex items-center justify-center md:justify-end relative z-10">
        <div className="w-full max-w-xs h-64 md:h-80 rounded-3xl bg-gradient-to-br from-blue-200 via-white to-blue-400 flex items-center justify-center shadow-2xl border-2 border-blue-50 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Professional team collaborating for Texas businesses"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-60"
            loading="lazy"
          />
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-900 to-blue-700 flex items-center justify-center shadow-xl relative z-10 border-[5px] border-white/60">
            <span className="text-white text-5xl font-bold drop-shadow">CF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
