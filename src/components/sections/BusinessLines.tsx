
const lines = [
  {
    name: "Accounting & Bookkeeping",
    description:
      "Precision accounting for Texas businesses and families—monthly bookkeeping, GL reconciliation, and proactive tax management for retail, service, and real estate holdings.",
    link: "/services",
  },
  {
    name: "Outsourced CFO & Payroll",
    description:
      "Part-time and virtual CFO services. Our expert staff oversees payroll, onboarding, compliance, W-9/1099 administration, direct deposit, TWC and Form 941/940 filings, and more.",
    link: "/services",
  },
  {
    name: "Business & IT Consulting",
    description:
      "Comprehensive consulting across strategic planning, vendor management, sales tax, and outsourced IT services for Texas-based and multi-state companies.",
    link: "/services",
  },
];

export default function BusinessLines() {
  return (
    <section className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-6 pb-16">
      {lines.map(line => (
        <a
          key={line.name}
          href={line.link}
          className="group hover-scale bg-white border border-gray-200 rounded-xl p-8 shadow hover:shadow-xl transition flex flex-col h-full"
        >
          <h3 className="text-xl font-semibold mb-2 text-blue-800 group-hover:underline">{line.name}</h3>
          <p className="text-gray-600 mb-2 flex-1">{line.description}</p>
          <span className="text-blue-700 mt-3 font-medium story-link">See Service →</span>
        </a>
      ))}
    </section>
  );
}
