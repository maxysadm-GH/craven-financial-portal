
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900/98 backdrop-blur-sm border-t border-amber-400/20 mt-16 py-12 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/548a3c8c-9c9c-482c-b561-20562d9045af.png"
                alt="Craven Financial Solutions Logo"
                className="h-12 w-auto rounded-xl shadow-lg brightness-110"
                loading="lazy"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              America's premier CFO & CPA advisory firm, transforming businesses nationwide with precision accounting and strategic financial leadership.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-400/20 transition-colors">
                <Facebook className="w-4 h-4 text-slate-400 hover:text-emerald-400" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-400/20 transition-colors">
                <Twitter className="w-4 h-4 text-slate-400 hover:text-emerald-400" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-400/20 transition-colors">
                <Linkedin className="w-4 h-4 text-slate-400 hover:text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-400 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-amber-400 font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services#cfo" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Outsourced CFO Services
                </Link>
              </li>
              <li>
                <Link to="/services#tax" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Tax Planning & Compliance
                </Link>
              </li>
              <li>
                <Link to="/services#accounting" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services#payroll" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Business Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Contact */}
          <div>
            <h3 className="text-amber-400 font-bold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link to="/#tools" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Tax Calculator
                </Link>
              </li>
              <li>
                <Link to="/#tools" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Retirement Planner
                </Link>
              </li>
              <li>
                <Link to="/#tools" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Budget Planner
                </Link>
              </li>
              <li>
                <Link to="/#tools" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Loan Calculator
                </Link>
              </li>
            </ul>
            
            <h4 className="text-amber-400 font-bold mb-3">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-emerald-400" />
                <a href="tel:+18555555555" className="text-slate-300 hover:text-emerald-400 transition-colors text-xs">
                  +1 (855) 555-5555
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-emerald-400" />
                <a href="mailto:info@cravenfs.com" className="text-slate-300 hover:text-emerald-400 transition-colors text-xs">
                  info@cravenfs.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-emerald-400 mt-0.5" />
                <div className="text-slate-300 text-xs">
                  <div>Dallas • Austin</div>
                  <div>Houston • San Antonio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm text-center md:text-left">
            © 2025 Craven Financial Solutions. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
