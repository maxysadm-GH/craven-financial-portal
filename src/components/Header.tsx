
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
            
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-semibold text-slate-300 hover:text-emerald-400 transition-colors duration-300 focus:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-slate-800 border-emerald-400/20">
                    <div className="p-4 w-80">
                      <div className="grid gap-3">
                        <Link
                          to="/services#cfo"
                          className="block p-3 rounded-lg hover:bg-slate-700 transition-colors"
                        >
                          <div className="text-emerald-400 font-semibold text-sm">Outsourced CFO Services</div>
                          <div className="text-slate-300 text-xs mt-1">Strategic financial leadership for your business</div>
                        </Link>
                        <Link
                          to="/services#tax"
                          className="block p-3 rounded-lg hover:bg-slate-700 transition-colors"
                        >
                          <div className="text-emerald-400 font-semibold text-sm">Tax Planning & Compliance</div>
                          <div className="text-slate-300 text-xs mt-1">Comprehensive tax strategies and preparation</div>
                        </Link>
                        <Link
                          to="/services#accounting"
                          className="block p-3 rounded-lg hover:bg-slate-700 transition-colors"
                        >
                          <div className="text-emerald-400 font-semibold text-sm">Accounting & Bookkeeping</div>
                          <div className="text-slate-300 text-xs mt-1">Accurate financial records and reporting</div>
                        </Link>
                        <Link
                          to="/services#payroll"
                          className="block p-3 rounded-lg hover:bg-slate-700 transition-colors"
                        >
                          <div className="text-emerald-400 font-semibold text-sm">Payroll Services</div>
                          <div className="text-slate-300 text-xs mt-1">Complete payroll management solutions</div>
                        </Link>
                        <Link
                          to="/services#consulting"
                          className="block p-3 rounded-lg hover:bg-slate-700 transition-colors"
                        >
                          <div className="text-emerald-400 font-semibold text-sm">Business Consulting</div>
                          <div className="text-slate-300 text-xs mt-1">Expert guidance for business growth</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Tools Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-semibold text-slate-300 hover:text-emerald-400 transition-colors duration-300 focus:bg-transparent">
                    Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-slate-800 border-emerald-400/20">
                    <div className="p-4 w-80">
                      <div className="grid gap-3">
                        <button
                          onClick={scrollToTools}
                          className="block p-3 rounded-lg hover:bg-slate-700 transition-colors text-left"
                        >
                          <div className="text-emerald-400 font-semibold text-sm">Tax Calculator</div>
                          <div className="text-slate-300 text-xs mt-1">Calculate your federal tax liability</div>
                        </button>
                        <button
                          onClick={scrollToTools}
                          className="block p-3 rounded-lg hover:bg-slate-700 transition-colors text-left"
                        >
                          <div className="text-emerald-400 font-semibold text-sm">Retirement Planner</div>
                          <div className="text-slate-300 text-xs mt-1">Plan your retirement savings strategy</div>
                        </button>
                        <button
                          onClick={scrollToTools}
                          className="block p-3 rounded-lg hover:bg-slate-700 transition-colors text-left"
                        >
                          <div className="text-emerald-400 font-semibold text-sm">Budget Planner</div>
                          <div className="text-slate-300 text-xs mt-1">Analyze your monthly budget and expenses</div>
                        </button>
                        <button
                          onClick={scrollToTools}
                          className="block p-3 rounded-lg hover:bg-slate-700 transition-colors text-left"
                        >
                          <div className="text-emerald-400 font-semibold text-sm">Loan Calculator</div>
                          <div className="text-slate-300 text-xs mt-1">Calculate loan payments and interest</div>
                        </button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
