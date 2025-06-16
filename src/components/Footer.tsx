
export default function Footer() {
  return (
    <footer className="w-full bg-slate-900/95 backdrop-blur-sm border-t border-amber-400/20 mt-16 py-12 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <img
            src="/lovable-uploads/548a3c8c-9c9c-482c-b561-20562d9045af.png"
            alt="Craven Financial Solutions Logo"
            className="h-12 w-auto rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="text-center">
          <div className="text-amber-400 font-bold mb-2">Our Strategic Locations</div>
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
                className="hover:text-amber-400 text-slate-300 font-semibold transition-colors"
              >
                info@cravenfs.com
              </a>
            </li>
            <li>
              <a 
                href="tel:+18555555555" 
                className="hover:text-amber-400 text-slate-300 font-semibold transition-colors"
              >
                +1 (855) 555-5555
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="hidden md:inline text-amber-400">|</span>
              <span className="text-slate-400 text-sm">© {new Date().getFullYear()} CravenFS</span>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
