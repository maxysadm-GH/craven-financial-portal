
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-16 pt-32 pb-32 md:pb-40 md:pt-40 relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden animate-fade-in">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl"></div>
      
      <div className="flex-1 z-10 space-y-12 px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="/lovable-uploads/548a3c8c-9c9c-482c-b561-20562d9045af.png"
            alt="Craven Financial Solutions Logo"
            className="w-20 h-auto rounded-2xl shadow-lg"
            loading="eager"
          />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-black text-slate-100 leading-tight max-w-4xl drop-shadow-2xl tracking-tight">
          America's Premier{" "}
          <span className="text-transparent bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text">CFO & CPA</span>{" "}
          <span className="text-amber-400">Advisory</span>
        </h1>
        
        <p className="max-w-2xl text-2xl md:text-3xl text-slate-300 font-medium leading-relaxed">
          Transforming businesses nationwide with precision accounting, strategic tax optimization, and executive-level financial leadership.{" "}
          <span className="text-amber-400 font-bold">Decades of excellence. </span>
          Multiple Texas locations serving clients coast to coast.
        </p>
        
        <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-amber-400 font-bold text-xl mb-4">Our Nationwide Reach</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300 text-lg font-medium">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              Outsourced CFO & Controller Services
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              Strategic Tax Planning & Compliance
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              Advanced Payroll & HR Integration
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              Cloud-Based Financial Systems
            </li>
          </ul>
        </div>
        
        <div className="flex gap-6 flex-col sm:flex-row">
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-black px-12 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-300 hover-scale text-center border-2 border-amber-300"
          >
            Schedule Strategic Consultation
          </Link>
          <Link 
            to="/services" 
            className="bg-slate-800/80 backdrop-blur-sm border-2 border-emerald-400 text-emerald-400 font-black px-12 py-5 text-xl rounded-2xl shadow-xl hover:bg-slate-700/80 transition-all duration-300 hover-scale text-center"
          >
            Explore Our Solutions
          </Link>
        </div>
        
        <div className="text-lg mt-8 text-amber-300 font-bold opacity-95 tracking-wide bg-slate-800/30 backdrop-blur-sm px-6 py-4 rounded-xl border border-amber-400/20">
          🏢 Strategic Texas Locations • 🚀 Cutting-Edge Technology • 💎 Uncompromising Excellence
        </div>
      </div>
      
      {/* Hero Visual */}
      <div className="flex-1 flex items-center justify-center md:justify-end relative z-10">
        <div className="w-full max-w-md h-80 md:h-96 rounded-3xl bg-gradient-to-br from-amber-400/20 via-slate-800/50 to-emerald-900/30 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-amber-400/30 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80"
            alt="Executive team collaboration for nationwide businesses"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-40"
            loading="eager"
          />
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center shadow-2xl relative z-10 border-4 border-slate-100/20">
            <span className="text-slate-900 text-6xl font-black drop-shadow">CF</span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-amber-400/30">
            <div className="text-amber-400 font-bold text-sm">Serving From</div>
            <div className="text-slate-200 font-semibold">Dallas • Austin • Houston • San Antonio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
