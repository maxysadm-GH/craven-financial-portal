
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
    <header className="w-full bg-slate-900/95 backdrop-blur-sm border-b border-amber-400/20 sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/lovable-uploads/548a3c8c-9c9c-482c-b561-20562d9045af.png"
            alt="Craven Financial Solutions Logo"
            className="h-12 w-auto rounded-xl shadow-lg"
            loading="eager"
          />
        </div>
        <ul className="flex gap-8 items-center">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-bold px-4 py-2 transition-all duration-300 rounded-lg ${
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
      </nav>
    </header>
  );
}
