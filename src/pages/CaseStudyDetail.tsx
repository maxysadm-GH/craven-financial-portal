
import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { ArrowLeft, TrendingUp, DollarSign, Users, Target, Award, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    title: "Retail Chain Transformation",
    industry: "Retail & E-commerce",
    challenge: "Multi-location retail client struggling with inventory management, cash flow, and compliance across 15 Texas locations",
    solution: "Implemented automated bookkeeping system, centralized financial controls, and strategic CFO oversight",
    detailedChallenge: `
      <p>Our client, a rapidly growing retail chain with 15 locations across Texas, was facing significant operational and financial challenges that threatened their expansion plans. The company had grown organically over five years but lacked the financial infrastructure to support their continued growth.</p>
      
      <h3>Key Challenges:</h3>
      <ul>
        <li>Inconsistent inventory tracking across locations leading to stockouts and overstock situations</li>
        <li>Manual bookkeeping processes resulting in frequent errors and delayed financial reporting</li>
        <li>Poor cash flow visibility making it difficult to plan for seasonal fluctuations</li>
        <li>Compliance issues with sales tax reporting across multiple jurisdictions</li>
        <li>Lack of standardized vendor management processes</li>
        <li>Inadequate fraud prevention measures</li>
      </ul>
    `,
    detailedSolution: `
      <p>Craven Financial Solutions implemented a comprehensive financial transformation program that addressed each of the client's challenges through strategic planning and technology implementation.</p>
      
      <h3>Implementation Process:</h3>
      <ul>
        <li><strong>Phase 1 - Assessment & Planning (Month 1):</strong> Conducted thorough analysis of existing processes and identified key improvement areas</li>
        <li><strong>Phase 2 - System Implementation (Months 2-3):</strong> Deployed automated bookkeeping system and established centralized financial controls</li>
        <li><strong>Phase 3 - Process Optimization (Months 4-5):</strong> Streamlined vendor relationships and implemented fraud prevention measures</li>
        <li><strong>Phase 4 - Strategic Oversight (Month 6+):</strong> Ongoing CFO services for strategic financial management</li>
      </ul>
      
      <h3>Key Solutions Implemented:</h3>
      <ul>
        <li>QuickBooks Enterprise integration with POS systems across all locations</li>
        <li>Automated inventory management with real-time tracking</li>
        <li>Centralized accounts payable and receivable processes</li>
        <li>Standardized chart of accounts and reporting procedures</li>
        <li>Monthly financial dashboard with KPI tracking</li>
        <li>Automated sales tax compliance across all jurisdictions</li>
      </ul>
    `,
    results: [
      "$45,000 annual cost savings",
      "75% reduction in accounting errors",
      "Streamlined vendor relationships",
      "Enhanced fraud prevention"
    ],
    detailedResults: `
      <p>The transformation delivered measurable results across all key performance indicators, positioning the client for continued growth and expansion.</p>
      
      <h3>Financial Impact:</h3>
      <ul>
        <li><strong>$45,000 Annual Cost Savings:</strong> Reduced accounting staff costs and eliminated duplicate vendor payments</li>
        <li><strong>75% Error Reduction:</strong> Automated processes eliminated manual data entry errors</li>
        <li><strong>30% Faster Month-End Close:</strong> Streamlined processes reduced closing time from 15 days to 10 days</li>
        <li><strong>100% Tax Compliance:</strong> Zero late filings or penalties since implementation</li>
      </ul>
      
      <h3>Operational Improvements:</h3>
      <ul>
        <li>Real-time visibility into inventory levels across all locations</li>
        <li>Standardized vendor payment terms and negotiated better rates</li>
        <li>Implemented segregation of duties to prevent fraud</li>
        <li>Monthly financial reviews with strategic recommendations</li>
      </ul>
    `,
    metrics: {
      savings: "$45K",
      timeframe: "6 months",
      improvement: "75%"
    },
    testimonial: "Craven Financial Solutions transformed our operations completely. The automated systems and strategic oversight have given us the clarity and control we never had before. We can now focus on growing our business instead of fighting fires.",
    client: "Regional Retail Chain Owner"
  }
];

export default function CaseStudyDetail() {
  const { id } = useParams();
  const studyId = parseInt(id || "0");
  const study = caseStudies.find(s => s.id === studyId);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-900/50 to-slate-800/80 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-400/10 rounded-xl flex items-center justify-center">
                {study.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">
                  {study.title}
                </h1>
                <p className="text-amber-400 font-semibold text-lg">
                  {study.industry}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-emerald-400 mb-1">
                  {study.metrics.savings}
                </div>
                <div className="text-slate-300 text-sm">Annual Savings</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-emerald-400 mb-1">
                  {study.metrics.timeframe}
                </div>
                <div className="text-slate-300 text-sm">Implementation</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-emerald-400 mb-1">
                  {study.metrics.improvement}
                </div>
                <div className="text-slate-300 text-sm">Improvement</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Challenge */}
            <section>
              <h2 className="text-2xl font-bold text-amber-400 mb-4">The Challenge</h2>
              <div 
                className="prose prose-lg prose-invert text-slate-300"
                dangerouslySetInnerHTML={{ __html: study.detailedChallenge }}
              />
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold text-amber-400 mb-4">Our Solution</h2>
              <div 
                className="prose prose-lg prose-invert text-slate-300"
                dangerouslySetInnerHTML={{ __html: study.detailedSolution }}
              />
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold text-amber-400 mb-4">Results & Impact</h2>
              <div 
                className="prose prose-lg prose-invert text-slate-300"
                dangerouslySetInnerHTML={{ __html: study.detailedResults }}
              />
            </section>

            {/* Testimonial */}
            <section className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-emerald-400">
              <blockquote className="text-slate-300 italic text-lg mb-4">
                "{study.testimonial}"
              </blockquote>
              <cite className="text-emerald-400 font-semibold">
                — {study.client}
              </cite>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-emerald-900/50 via-slate-800/80 to-emerald-900/50 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Ready for Similar Results?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Let us help you transform your financial operations and achieve measurable business growth.
              </p>
              <Link
                to="/contact"
                className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block"
              >
                Schedule Your Free Assessment
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
