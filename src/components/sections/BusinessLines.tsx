
const lines = [
  {
    name: "Accounting",
    description:
      "Accurate, timely monthly, quarterly, and annual accounting. Modern cloud-based software. Always audit-ready.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=700&q=80",
    link: "/services#accounting",
  },
  {
    name: "Bookkeeping",
    description:
      "Hands-off, always-on bookkeeping so you regain hours and avoid costly errors. GL reconciliation and actionable reporting.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80",
    link: "/services#bookkeeping",
  },
  {
    name: "Tax Preparation & Compliance",
    description:
      "Proactive planning & expert preparation for Federal, Franchise, and Sales taxes. Includes all filings, 1099s, W-9s, and reporting.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=700&q=80",
    link: "/services#tax",
  },
  {
    name: "Payroll Services",
    description:
      "Full-service payroll, onboarding paperwork, direct deposit, forms 941/940, TWC, and child support payments—all handled by experts.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80",
    link: "/services#payroll",
  },
  {
    name: "Vendor & Compliance Management",
    description:
      "Tightly controlled vendor payments, 1099/W-9 workflow, and compliance tracking to reduce fraud and improve relationships.",
    image:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=700&q=80",
    link: "/services#vendor",
  },
  {
    name: "Outsourced CFO & Business Consulting",
    description:
      "From cash flow forecasting to board-level strategy—a trusted CFO who brings discipline and vision to your business.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=700&q=80",
    link: "/services#cfo",
  },
  {
    name: "Outsourced IT Services",
    description:
      "Secure, compliant IT management and cloud solutions for businesses and family offices.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80",
    link: "/services#it",
  },
];

export default function BusinessLines() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-10 pb-20">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center animate-fade-in">
        {`Services That Power Results Across Texas`}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {lines.map(line => (
          <a
            key={line.name}
            href={line.link}
            className="group bg-white rounded-xl border border-blue-100 shadow-lg overflow-hidden transition hover-scale flex flex-col h-full animate-fade-in hover:shadow-2xl"
            style={{ boxShadow: "0 5px 30px 0 rgba(57,99,204,0.07)" }}
          >
            <div className="relative h-36 w-full">
              <img
                src={line.image}
                alt={line.name}
                className="object-cover h-full w-full transition-transform duration-200 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
            </div>
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-semibold mb-1 text-blue-800 group-hover:underline">{line.name}</h3>
              <p className="text-gray-700 flex-1">{line.description}</p>
              <span className="text-blue-700 mt-3 font-medium story-link">Learn More →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
