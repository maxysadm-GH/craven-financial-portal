
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full max-w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 pt-4 pb-4 md:pb-20 md:pt-20 relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden animate-fade-in">
      {/* Decorative Elements - Made smaller and responsive */}
      <div className="absolute top-10 right-4 w-32 h-32 md:w-48 md:h-48 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-4 w-40 h-40 md:w-64 md:h-64 bg-emerald-400/5 rounded-full blur-3xl"></div>
      
      <div className="flex-1 z-10 space-y-2 md:space-y-8 px-2 md:px-4 max-w-full w-full overflow-hidden">
        <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 mb-2 md:mb-6">
          <img 
            src="/lovable-uploads/548a3c8c-9c9c-482c-b561-20562d9045af.png" 
            alt="Craven Financial Solutions - Premier CPA and CFO Services in Texas" 
            loading="eager" 
            className="w-full max-w-[160px] md:max-w-80 h-auto shadow-xl border border-amber-400/30 object-cover" 
          />
        </div>
        
        <h1 className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-black text-slate-100 leading-tight max-w-full break-words drop-shadow-xl tracking-tight text-center md:text-left word-break">
          America's Premier{" "}
          <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text">CFO & CPA</span>{" "}
          <span className="text-amber-400">Advisory</span>
        </h1>
        
        <p className="max-w-full text-xs sm:text-sm md:text-lg lg:text-xl text-slate-200 font-medium leading-relaxed text-center md:text-left break-words word-break">
          Transforming businesses nationwide with precision accounting, strategic tax optimization, and executive-level financial leadership.{" "}
          <span className="text-amber-400 font-bold">Decades of excellence. Multiple Texas locations serving clients coast to coast.</span>
        </p>
        
        <div className="bg-slate-800/60 backdrop-blur-sm border border-amber-400/30 rounded-xl p-2 md:p-6 shadow-xl max-w-full overflow-hidden">
          <h2 className="text-amber-400 font-bold text-xs md:text-lg mb-1 md:mb-3 text-center md:text-left">Our Nationwide Reach</h2>
          <ul className="grid grid-cols-1 gap-1 md:gap-3 text-slate-200 text-xs md:text-base font-medium">
            <li className="flex items-center gap-1 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
              <span className="leading-tight break-words text-xs md:text-base">Outsourced CFO & Controller Services</span>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
              <span className="leading-tight break-words text-xs md:text-base">Strategic Tax Planning & Compliance</span>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
              <span className="leading-tight break-words text-xs md:text-base">Advanced Payroll & HR Integration</span>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
              <span className="leading-tight break-words text-xs md:text-base">Cloud-Based Financial Systems</span>
            </li>
          </ul>
        </div>
        
        <div className="flex gap-2 md:gap-3 flex-col sm:flex-row max-w-full">
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-black px-2 md:px-8 py-1.5 md:py-4 text-xs md:text-lg rounded-xl shadow-xl transition-all duration-300 hover-scale text-center border border-amber-300 min-w-0 break-words" 
            aria-label="Schedule Strategic Consultation with Craven Financial Solutions"
          >
            Schedule Strategic Consultation
          </Link>
          <Link 
            to="/services" 
            className="bg-slate-800/80 backdrop-blur-sm border border-emerald-400 text-emerald-400 font-black px-2 md:px-8 py-1.5 md:py-4 text-xs md:text-lg rounded-xl shadow-lg hover:bg-slate-700/80 transition-all duration-300 hover-scale text-center min-w-0 break-words" 
            aria-label="Explore CPA and CFO Services Nationwide"
          >
            Explore Our Solutions
          </Link>
        </div>
        
        <div className="text-xs md:text-base mt-2 md:mt-6 text-amber-300 font-bold opacity-95 tracking-wide bg-slate-800/40 backdrop-blur-sm px-1 md:px-4 py-1 md:py-3 rounded-lg border border-amber-400/30 text-center md:text-left max-w-full overflow-hidden">
          <span className="break-words text-xs md:text-base">🏢 Strategic Texas Locations • 🚀 Cutting-Edge Technology • 💎 Uncompromising Excellence</span>
        </div>
      </div>
      
      {/* Hero Visual - Completely hidden on mobile, properly constrained on desktop */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative z-10 max-w-md">
        <div className="w-full max-w-sm h-64 rounded-2xl bg-gradient-to-br from-amber-400/20 via-slate-800/50 to-emerald-900/30 backdrop-blur-sm flex items-center justify-center shadow-xl border border-amber-400/30 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80" 
            alt="Professional CPA and CFO team serving businesses nationwide from Texas locations" 
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-30" 
            loading="eager" 
          />
          <div className="w-32 h-32 rounded-xl bg-slate-900/90 backdrop-blur-sm flex items-center justify-center shadow-xl relative z-10 border-2 border-amber-400/50">
            <img 
              src="/lovable-uploads/7b6b6b46-16c9-4903-a8a5-267434f78bfa.png" 
              alt="Craven Financial Solutions Icon - Nationwide CPA and CFO Services" 
              className="w-20 h-auto rounded-lg" 
              loading="eager" 
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-sm rounded-lg p-3 border border-amber-400/40">
            <div className="text-amber-400 font-bold text-xs">Serving From</div>
            <div className="text-slate-100 font-semibold text-xs">Dallas • Austin • Houston • San Antonio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
