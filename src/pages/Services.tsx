
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Users className="w-8 h-8 text-emerald-400" />,
    title: "Outsourced CFO Services",
    description: "Strategic financial leadership without the full-time executive cost",
    features: [
      "Financial planning & analysis",
      "Cash flow management",
      "Strategic business planning",
      "Board reporting & presentations"
    ]
  },
  {
    icon: <Calculator className="w-8 h-8 text-emerald-400" />,
    title: "Accounting & Bookkeeping",
    description: "Comprehensive accounting solutions for businesses of all sizes",
    features: [
      "Monthly financial statements",
      "Accounts payable/receivable",
      "General ledger maintenance",
      "Financial reconciliations"
    ]
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-400" />,
    title: "Tax Planning & Compliance",
    description: "Strategic tax optimization and comprehensive compliance management",
    features: [
      "Federal & state tax preparation",
      "Tax planning strategies",
      "IRS representation",
      "Multi-entity tax coordination"
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    title: "Business Consulting",
    description: "Strategic guidance to optimize operations and drive growth",
    features: [
      "Process optimization",
      "Performance metrics",
      "Growth strategy development",
      "Operational efficiency"
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 mb-6 tracking-tight">
              Professional Financial <span className="text-emerald-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-medium leading-relaxed">
              Comprehensive CFO and CPA services designed to transform your business operations and drive sustainable growth across multiple Texas locations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 shadow-2xl hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-400/10 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-400">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-300 mb-6 text-lg">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-900/50 via-slate-800/80 to-amber-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-amber-400/20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-100 mb-6">
              Ready to Transform Your <span className="text-amber-400">Financial Operations</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful businesses who trust Craven Financial Solutions for their critical financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-black px-8 py-4 text-lg rounded-xl shadow-2xl transition-all duration-300 hover-scale inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="bg-slate-800/80 backdrop-blur-sm border-2 border-emerald-400 text-emerald-400 font-black px-8 py-4 text-lg rounded-xl shadow-xl hover:bg-slate-700/80 transition-all duration-300 hover-scale inline-flex items-center justify-center gap-2"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
