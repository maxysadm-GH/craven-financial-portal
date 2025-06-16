
import { BookOpen, Briefcase, Users } from "lucide-react";

const cases = [
  {
    icon: <Briefcase size={32} className="text-amber-600 mb-2" />,
    title: "Retail Chain Saves $45K with Automated Bookkeeping",
    body: "A Texas-based retail client streamlined their accounting and inventory controls with Craven's CFO oversight, cutting costs and minimizing fraud while improving compliance and vendor relations.",
  },
  {
    icon: <Users size={32} className="text-amber-600 mb-2" />,
    title: "High Net Worth Family Office Gains Tax Clarity",
    body: "Family office in Dallas consolidated tax preparation, real estate holding management, and payroll. Our team simplified W-9/1099 workflows and handled all federal, franchise, and sales tax filings in one place.",
  },
  {
    icon: <BookOpen size={32} className="text-amber-600 mb-2" />,
    title: "Service Business Thrives with Outsourced CFO Services",
    body: "A multi-location service provider engaged Craven as their virtual CFO. Our cash-flow planning, payroll, and compliance support enabled double-digit growth and stress-free TWC and child support filings.",
  },
];

export default function CaseStudies() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-10 text-center tracking-tight">
        Client Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cases.map((cs) => (
          <div key={cs.title} className="bg-slate-800/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-9 shadow-2xl flex flex-col items-center text-center hover:bg-slate-700/50 transition-all duration-300">
            {cs.icon}
            <h3 className="font-bold text-xl mb-2 text-amber-400">{cs.title}</h3>
            <p className="text-slate-300 text-base">{cs.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
