
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
    <section className="max-w-7xl mx-auto px-4 pt-20 pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black text-amber-400 mb-6 animate-fade-in tracking-tight">
          Services That Drive Results Across the USA
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-medium leading-relaxed">
          Comprehensive financial solutions from our strategic locations in Texas, serving ambitious businesses nationwide
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8 text-emerald-300 font-semibold">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <span>Dallas-Fort Worth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <span>Austin</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <span>Houston</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <span>San Antonio</span>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {lines.map((line, index) => (
          <a
            key={line.name}
            href={line.link}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border-2 border-amber-400/20 shadow-2xl overflow-hidden transition-all duration-300 hover:border-amber-400/60 hover:shadow-amber-400/20 hover:shadow-3xl flex flex-col h-full animate-fade-in hover:scale-105"
            style={{ 
              animationDelay: `${index * 100}ms`,
              boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.15)" 
            }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={line.image}
                alt={line.name + ' - Service specialty by Craven Financial Solutions'}
                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-slate-900/40 to-transparent" />
              <div className="absolute top-4 right-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-lg">{index + 1}</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col p-8">
              <h3 className="text-2xl font-black mb-4 text-amber-400 group-hover:text-amber-300 transition-colors">{line.name}</h3>
              <p className="text-slate-300 flex-1 text-lg leading-relaxed font-medium">{line.description}</p>
              <div className="mt-6 flex items-center text-emerald-400 font-bold text-lg group-hover:text-emerald-300 transition-colors">
                <span className="mr-2">Explore Service</span>
                <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center group-hover:translate-x-2 transition-transform">
                  <span>→</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
