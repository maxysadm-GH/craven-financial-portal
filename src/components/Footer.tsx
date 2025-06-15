
export default function Footer() {
  return (
    <footer className="w-full bg-slate-900/95 backdrop-blur-sm border-t border-emerald-400/20 mt-16 py-12 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=60&q=80"
            alt="Craven Financial Solutions Logo"
            className="h-12 w-12 rounded-xl border-2 border-emerald-400 shadow-lg"
            loading="lazy"
          />
          <div className="flex flex-col">
            <span className="text-slate-100 font-black text-lg tracking-wide">
              Craven Financial Solutions
            </span>
            <span className="text-emerald-400 text-sm font-bold">
              Nationwide CFO & CPA Excellence
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-emerald-400 font-bold mb-2">Our Strategic Locations</div>
          <div className="flex flex-wrap justify-center gap-4 text-slate-300 text-sm">
            <span>Dallas-Fort Worth</span>
            <span>•</span>
            <span>Austin</span>
            <span>•</span>
            <span>Houston</span>
            <span>•</span>
            <span>San Antonio</span>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row items-center gap-6">
            <li>
              <a 
                href="mailto:info@cravenfs.com" 
                className="hover:text-emerald-400 text-slate-300 font-semibold transition-colors"
              >
                info@cravenfs.com
              </a>
            </li>
            <li>
              <a 
                href="tel:+18555555555" 
                className="hover:text-emerald-400 text-slate-300 font-semibold transition-colors"
              >
                +1 (855) 555-5555
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="hidden md:inline text-emerald-400">|</span>
              <span className="text-slate-400 text-sm">© {new Date().getFullYear()} CravenFS</span>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
