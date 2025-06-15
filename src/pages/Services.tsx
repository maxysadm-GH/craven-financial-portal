
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const serviceDetails = [
  {
    category: "Accounting & Bookkeeping",
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
    text: "From independent shops to statewide chains, our team understands inventory, sales tax, and compliance for Texas retailers. We maximize margin and minimize risk with the right accounting foundation.",
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
    text: "Our comprehensive solutions simplify monthly reporting, payroll, and tax for both single and multi-family offices in Texas.",
  },
  {
    label: "Real Estate Holdings",
    text: "Whether it’s a commercial building or single-family rentals, our CPA team delivers cash flow tracking, rent roll reporting, and all state/local compliance.",
  },
  {
    label: "Rental Property",
    text: "Efficient accounting and tax support for landlords, investors, and property managers—maximize your returns with seasoned guidance.",
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Services for Texas Businesses & Families
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Craven Financial Solutions brings together certified public accounting (CPA), outsourced CFO, and IT consulting under one roof for ambitious clients across Texas. Whether you’re launching a startup, growing a family office, or need turnkey tax compliance—the CravenFS team delivers professionalism, accuracy, and peace of mind.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <div key={service.category} className="bg-white border rounded-xl p-7 shadow flex flex-col">
              <h2 className="font-semibold text-xl mb-3 text-blue-800">
                {service.category}
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="mt-12 mb-5 text-2xl font-bold text-blue-800">
          Industries We Serve
        </h2>
        <div className="grid gap-7 md:grid-cols-2">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="bg-blue-50 border border-blue-100 rounded-lg p-6 shadow-sm"
            >
              <h3 className="font-semibold text-blue-900 mb-2">
                {ind.label}
              </h3>
              <p className="text-gray-700">
                {ind.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">Ready for Clarity?</h3>
          <a
            href="/contact"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow transition hover-scale"
          >
            Schedule Your Free Consultation
          </a>
        </div>

      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
