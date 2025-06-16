
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const scrollToTools = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#tools';
    } else {
      const toolsSection = document.getElementById('tools');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-slate-900/95 backdrop-blur-sm border-b border-emerald-400/20 sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img
              src="/lovable-uploads/548a3c8c-9c9c-482c-b561-20562d9045af.png"
              alt="Craven Financial Solutions Logo"
              className="h-20 w-auto brightness-125 contrast-125 saturate-110"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-semibold transition-colors duration-300 ${
                isActive("/") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-semibold transition-colors duration-300 ${
                isActive("/about") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`font-semibold transition-colors duration-300 ${
                isActive("/services") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
              }`}
            >
              Services
            </Link>
            <button
              onClick={scrollToTools}
              className="font-semibold text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            >
              Tools
            </button>
            <Link
              to="/case-studies"
              className={`font-semibold transition-colors duration-300 ${
                isActive("/case-studies") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className={`font-semibold transition-colors duration-300 ${
                isActive("/blog") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`font-semibold transition-colors duration-300 ${
                isActive("/contact") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/client-portal"
              className={`bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-black px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover-scale ${
                isActive("/client-portal") ? "ring-2 ring-emerald-300" : ""
              }`}
            >
              Client Portal
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-emerald-400/20 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`font-semibold transition-colors duration-300 ${
                  isActive("/") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-semibold transition-colors duration-300 ${
                  isActive("/about") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`font-semibold transition-colors duration-300 ${
                  isActive("/services") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <button
                onClick={scrollToTools}
                className="font-semibold text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-left"
              >
                Tools
              </button>
              <Link
                to="/case-studies"
                className={`font-semibold transition-colors duration-300 ${
                  isActive("/case-studies") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className={`font-semibold transition-colors duration-300 ${
                  isActive("/blog") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`font-semibold transition-colors duration-300 ${
                  isActive("/contact") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/client-portal"
                className={`bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-black px-6 py-2 rounded-lg shadow-lg transition-all duration-300 inline-block text-center ${
                  isActive("/client-portal") ? "ring-2 ring-emerald-300" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Client Portal
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
