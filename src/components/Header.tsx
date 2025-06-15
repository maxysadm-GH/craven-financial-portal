
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
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-800 via-gray-200 to-blue-400 flex items-center justify-center shadow text-white font-extrabold text-2xl">
            CF
          </div>
          <span className="font-semibold text-xl text-gray-900 tracking-wide">
            Craven Financial Solutions
          </span>
        </div>
        <ul className="flex gap-6 items-center">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-medium px-2 py-1 transition-colors rounded ${
                  location.pathname === link.path
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
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
