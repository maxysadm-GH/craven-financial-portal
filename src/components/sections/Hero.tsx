import { Link } from "react-router-dom";
export default function Hero() {
  return <section className="w-full flex flex-col md:flex-row items-center justify-between gap-16 pt-32 pb-32 md:pb-40 md:pt-40 relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden animate-fade-in">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl"></div>
      
      <div className="flex-1 z-10 space-y-12 px-6 max-w-4xl">
        <div className="flex items-center gap-6 mb-8">
          <img src="/lovable-uploads/548a3c8c-9c9c-482c-b561-20562d9045af.png" alt="Craven Financial Solutions - Premier CPA and CFO Services in Texas" loading="eager" className="max-w-96 h-auto max-w-96 shadow-2xl border-2 border-amber-400/30 object-cover" />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-black text-slate-100 leading-tight max-w-4xl drop-shadow-2xl tracking-tight">
          America's Premier{" "}
          
          <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text">CFO &amp; CPA</span>{" "}
          <span className="text-amber-400">Advisory</span>
        </h1>
        
        <p className="max-w-2xl text-2xl md:text-3xl text-slate-200 font-medium leading-relaxed">
          Transforming businesses nationwide with precision accounting, strategic tax optimization, and executive-level financial leadership.{" "}
          <span className="text-amber-400 font-bold">Decades of excellence. Multiple Texas locations serving clients coast to coast.</span>
        </p>
        
        <div className="bg-slate-800/60 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-amber-400 font-bold text-xl mb-4">Our Nationwide Reach</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-200 text-lg font-medium">
            <li className="flex items-center gap-3">
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              Outsourced CFO & Controller Services
            </li>
            <li className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              Strategic Tax Planning & Compliance
            </li>
            <li className="flex items-center gap-3">
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              Advanced Payroll & HR Integration
            </li>
            <li className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              Cloud-Based Financial Systems
            </li>
          </ul>
        </div>
        
        <div className="flex gap-6 flex-col sm:flex-row">
          <Link to="/contact" className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-black px-12 py-6 text-xl rounded-2xl shadow-2xl transition-all duration-300 hover-scale text-center border-2 border-amber-300" aria-label="Schedule Strategic Consultation with Craven Financial Solutions">
            Schedule Strategic Consultation
          </Link>
          <Link to="/services" className="bg-slate-800/80 backdrop-blur-sm border-2 border-emerald-400 text-emerald-400 font-black px-12 py-6 text-xl rounded-2xl shadow-xl hover:bg-slate-700/80 transition-all duration-300 hover-scale text-center" aria-label="Explore CPA and CFO Services Nationwide">
            Explore Our Solutions
          </Link>
        </div>
        
        <div className="text-lg mt-8 text-amber-300 font-bold opacity-95 tracking-wide bg-slate-800/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-amber-400/30">
          🏢 Strategic Texas Locations • 🚀 Cutting-Edge Technology • 💎 Uncompromising Excellence
        </div>
      </div>
      
      {/* Hero Visual with new Icon */}
      <div className="flex-1 flex items-center justify-center md:justify-end relative z-10">
        <div className="w-full max-w-md h-80 md:h-96 rounded-3xl bg-gradient-to-br from-amber-400/20 via-slate-800/50 to-emerald-900/30 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-amber-400/30 relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80" alt="Professional CPA and CFO team serving businesses nationwide from Texas locations" className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-30" loading="eager" />
          <div className="w-48 h-48 rounded-2xl bg-slate-900/90 backdrop-blur-sm flex items-center justify-center shadow-2xl relative z-10 border-4 border-amber-400/50">
            <img src="/lovable-uploads/7b6b6b46-16c9-4903-a8a5-267434f78bfa.png" alt="Craven Financial Solutions Icon - Nationwide CPA and CFO Services" className="w-32 h-auto rounded-xl" loading="eager" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 border border-amber-400/40">
            <div className="text-amber-400 font-bold text-sm">Serving From</div>
            <div className="text-slate-100 font-semibold">Dallas • Austin • Houston • San Antonio</div>
          </div>
        </div>
      </div>
    </section>;
}