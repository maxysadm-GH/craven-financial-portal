
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
  { name: "Client Portal", path: "/client-portal" },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="w-full bg-slate-900/98 backdrop-blur-sm border-b border-amber-400/30 sticky top-0 z-50 shadow-2xl">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/548a3c8c-9c9c-482c-b561-20562d9045af.png"
              alt="Craven Financial Solutions Logo"
              className="h-16 md:h-20 w-auto rounded-xl shadow-lg brightness-110 contrast-125"
              loading="eager"
            />
          </Link>
        </div>
        <ul className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-bold px-3 md:px-4 py-2 transition-all duration-300 rounded-lg text-sm md:text-base ${
                  location.pathname === link.path
                    ? "text-amber-400 bg-amber-400/10 border border-amber-400/30"
                    : "text-slate-300 hover:text-amber-400 hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <button className="lg:hidden text-slate-300 hover:text-amber-400 p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
