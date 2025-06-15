
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-emerald-900/50 via-slate-800/80 to-emerald-900/50 backdrop-blur-sm py-20 mt-12 rounded-3xl shadow-2xl border border-emerald-400/20 mx-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-9">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-6">
            Ready to elevate your business with 
            <span className="text-emerald-400"> nationwide expertise</span>?
          </h2>
          <p className="text-xl text-slate-300 font-medium max-w-2xl">
            Join hundreds of successful businesses across America who trust Craven Financial Solutions for their most critical financial decisions.
          </p>
          <div className="flex items-center gap-6 mt-6 text-emerald-400 font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Dallas-Fort Worth</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Austin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Houston</span>
            </div>
          </div>
        </div>
        <div className="flex gap-6 flex-col sm:flex-row">
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-black px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-300 hover-scale text-center"
          >
            Start Your Journey
          </Link>
          <Link 
            to="/client-portal" 
            className="bg-slate-800/80 backdrop-blur-sm border-2 border-emerald-400 text-emerald-400 font-black px-10 py-5 text-xl rounded-2xl shadow-xl hover:bg-slate-700/80 transition-all duration-300 hover-scale text-center"
          >
            Client Portal
          </Link>
        </div>
      </div>
    </section>
  );
}
