
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
    <header className="w-full bg-slate-900/95 backdrop-blur-sm border-b border-emerald-400/20 sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/lovable-uploads/f13fb6ec-0ea5-426d-b9cc-42271e186d52.png"
            alt="Craven Financial Solutions Logo"
            className="h-12 w-12 rounded-xl border-2 border-emerald-400 shadow-lg"
            loading="eager"
          />
          <div className="flex flex-col">
            <span className="font-black text-xl text-slate-100 tracking-wide">
              Craven Financial Solutions
            </span>
            <span className="text-emerald-400 text-xs font-bold tracking-widest">
              NATIONWIDE CFO & CPA SERVICES
            </span>
          </div>
        </div>
        <ul className="flex gap-8 items-center">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-bold px-4 py-2 transition-all duration-300 rounded-lg ${
                  location.pathname === link.path
                    ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/30"
                    : "text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50"
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
