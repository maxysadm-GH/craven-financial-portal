
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Link } from "react-router-dom";
import { Calculator, FileText, Users, TrendingUp, Server } from "lucide-react";

const serviceDetails = [
  {
    category: "Accounting & Bookkeeping",
    icon: Calculator,
    details: [
      "Monthly, quarterly & annual accounting",
      "GL (General Ledger) reconciliation & reporting", 
      "Vendor payment processing and management",
      "Expense management and financial controls",
      "Real-time cloud bookkeeping for actionable insights",
    ],
  },
  {
    category: "Tax Preparation & Compliance",
    icon: FileText,
    details: [
      "Federal Income Tax Preparation",
      "Franchise Tax (Texas)",
      "Sales Tax Filing & Compliance",
      "1099/1096 & W-9 reporting and issuance",
      "Year-end closeout, audit, and advisory",
    ],
  },
  {
    category: "Payroll Services", 
    icon: Users,
    details: [
      "Full-service payroll processing (multi-state)",
      "Onboarding paperwork & direct deposit setup",
      "Form 941 & 940 federal filings",
      "Texas Workforce Commission (TWC) reporting",
      "Child support payment management",
      "Employee classification & compliance consulting",
    ],
  },
  {
    category: "Outsourced CFO & Business Consulting",
    icon: TrendingUp,
    details: [
      "Fractional/virtual CFO for strategic planning",
      "Cash flow forecasting; budgeting & growth modeling",
      "Leadership consulting and board advisory",
      "Operational systems, process, and IT integration",
      "M&A, turnaround, and business formation support",
    ],
  },
  {
    category: "Outsourced IT Services",
    icon: Server,
    details: [
      "Network, compliance, and security audits",
      "Cloud and on-premise IT management", 
      "Secure data handling and reporting integration",
      "Remote support for digital transitions",
    ],
  },
];

const industries = [
  {
    label: "Retail",
    text: "From independent shops to nationwide chains, our team understands inventory, sales tax, and compliance. We maximize margin and minimize risk with the right accounting foundation.",
  },
  {
    label: "Service Businesses", 
    text: "Hair salons, home services, consulting and more: we manage day-to-day bookkeeping, payroll, and vendor payments so owners can focus on clients.",
  },
  {
    label: "Ranching",
    text: "Texas ranches rely on Craven for agricultural payroll, 1099/W-9 management, and insight into complex land and equipment assets.",
  },
  {
    label: "High Net Worth Individuals",
    text: "We help high-net-worth clients and family offices manage multi-entity portfolios, from real estate to investments—ensuring privacy, compliance, and strategic tax planning.",
  },
  {
    label: "Family Offices",
    text: "Our comprehensive solutions simplify monthly reporting, payroll, and tax for both single and multi-family offices nationwide.",
  },
  {
    label: "Real Estate Holdings",
    text: "Whether it's a commercial building or single-family rentals, our CPA team delivers cash flow tracking, rent roll reporting, and all state/local compliance.",
  },
  {
    label: "Rental Property",
    text: "Efficient accounting and tax support for landlords, investors, and property managers—maximize your returns with seasoned guidance.",
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-100 mb-6 tracking-tight">
            Services for <span className="text-emerald-400">Nationwide</span> Businesses & Families
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
            Craven Financial Solutions brings together certified public accounting (CPA), outsourced CFO, and IT consulting under one roof for ambitious clients across America. Whether you're launching a startup, growing a family office, or need turnkey tax compliance—the CravenFS team delivers professionalism, accuracy, and peace of mind.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {serviceDetails.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.category} className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 shadow-2xl hover:bg-slate-800/70 transition-all duration-300 hover-scale">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="font-bold text-xl text-emerald-400">
                    {service.category}
                  </h2>
                </div>
                <ul className="space-y-3 text-slate-300">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-black text-center mb-4 text-slate-100">
            Industries We <span className="text-emerald-400">Serve</span>
          </h2>
          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Our expertise spans across diverse industries, delivering tailored solutions for unique business challenges.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-6 shadow-xl hover:bg-slate-800/70 transition-all duration-300"
              >
                <h3 className="font-bold text-emerald-400 mb-3 text-lg">
                  {ind.label}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {ind.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-900/50 via-slate-800/80 to-emerald-900/50 backdrop-blur-sm rounded-3xl p-12 text-center border border-emerald-400/20 shadow-2xl">
          <h3 className="text-3xl font-black text-slate-100 mb-4">Ready for Clarity?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Transform your business with our comprehensive financial solutions and strategic expertise.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-black px-12 py-4 text-xl rounded-2xl shadow-2xl transition-all duration-300 hover-scale inline-block"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
