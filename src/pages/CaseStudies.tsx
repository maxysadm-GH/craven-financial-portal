
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { ArrowRight, TrendingUp, DollarSign, Users, Clock, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    title: "Retail Chain Transformation",
    industry: "Retail & E-commerce",
    challenge: "Multi-location retail client struggling with inventory management, cash flow, and compliance across 15 Texas locations",
    solution: "Implemented automated bookkeeping system, centralized financial controls, and strategic CFO oversight",
    results: [
      "$45,000 annual cost savings",
      "75% reduction in accounting errors",
      "Streamlined vendor relationships",
      "Enhanced fraud prevention"
    ],
    metrics: {
      savings: "$45K",
      timeframe: "6 months",
      improvement: "75%"
    },
    testimonial: "Craven Financial Solutions transformed our operations completely. The automated systems and strategic oversight have given us the clarity and control we never had before.",
    client: "Regional Retail Chain Owner"
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-400" />,
    title: "Family Office Optimization",
    industry: "Wealth Management",
    challenge: "High net worth family office needed consolidated tax preparation, real estate management, and payroll coordination",
    solution: "Comprehensive tax strategy, streamlined W-9/1099 workflows, and integrated federal, franchise, and sales tax management",
    results: [
      "Simplified tax compliance process",
      "Consolidated financial reporting",
      "Optimized real estate holdings",
      "Streamlined payroll operations"
    ],
    metrics: {
      savings: "$120K",
      timeframe: "12 months", 
      improvement: "60%"
    },
    testimonial: "The level of expertise and attention to detail is exceptional. Our family's complex financial structure is now managed seamlessly.",
    client: "Family Office Principal"
  },
  {
    icon: <DollarSign className="w-8 h-8 text-emerald-400" />,
    title: "Service Business Growth",
    industry: "Professional Services",
    challenge: "Multi-location service provider needed virtual CFO support for cash flow planning and compliance management",
    solution: "Strategic cash-flow planning, comprehensive payroll management, and automated TWC and child support filings",
    results: [
      "Double-digit revenue growth",
      "Stress-free compliance management", 
      "Improved cash flow predictability",
      "Enhanced operational efficiency"
    ],
    metrics: {
      savings: "$85K",
      timeframe: "9 months",
      improvement: "40%"
    },
    testimonial: "Having Craven as our virtual CFO has been a game-changer. We can focus on growing our business while they handle all the financial complexities.",
    client: "Service Company CEO"
  },
  {
    icon: <Target className="w-8 h-8 text-emerald-400" />,
    title: "Manufacturing Efficiency Boost",
    industry: "Manufacturing",
    challenge: "Mid-size manufacturer faced rising costs, inefficient processes, and needed better financial visibility for expansion planning",
    solution: "Implemented cost accounting systems, optimized workflows, and provided strategic financial planning for growth initiatives",
    results: [
      "22% reduction in operational costs",
      "Improved financial forecasting accuracy",
      "Successful expansion planning",
      "Enhanced inventory management"
    ],
    metrics: {
      savings: "$180K",
      timeframe: "15 months",
      improvement: "22%"
    },
    testimonial: "The cost savings and operational improvements have positioned us perfectly for our next phase of growth.",
    client: "Manufacturing Director"
  },
  {
    icon: <Award className="w-8 h-8 text-emerald-400" />,
    title: "Tech Startup Financial Foundation",
    industry: "Technology",
    challenge: "Rapidly growing tech startup needed scalable financial systems, investor reporting, and compliance frameworks",
    solution: "Built comprehensive financial infrastructure, established investor reporting protocols, and implemented scalable accounting systems",
    results: [
      "Streamlined investor communications",
      "Scalable financial processes",
      "Improved cash flow management",
      "Enhanced financial transparency"
    ],
    metrics: {
      savings: "$95K",
      timeframe: "8 months",
      improvement: "85%"
    },
    testimonial: "Craven gave us the financial foundation we needed to scale confidently. Their expertise in working with growing companies is invaluable.",
    client: "Tech Startup Founder"
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 mb-6 tracking-tight">
              Client Success <span className="text-emerald-400">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-medium leading-relaxed">
              Discover how Craven Financial Solutions has transformed businesses across Texas with strategic financial leadership and innovative solutions.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Case Study Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-emerald-400/10 rounded-xl flex items-center justify-center">
                        {study.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-400">
                          {study.title}
                        </h2>
                        <p className="text-amber-400 font-semibold">
                          {study.industry}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-amber-400 font-bold mb-2">Challenge</h3>
                        <p className="text-slate-300 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-amber-400 font-bold mb-2">Solution</h3>
                        <p className="text-slate-300 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-amber-400 font-bold mb-3">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-slate-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-slate-900/50 rounded-xl p-4 border-l-4 border-emerald-400">
                        <blockquote className="text-slate-300 italic mb-2">
                          "{study.testimonial}"
                        </blockquote>
                        <cite className="text-emerald-400 text-sm font-semibold">
                          — {study.client}
                        </cite>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="bg-slate-900/50 rounded-2xl p-6 h-fit">
                    <h3 className="text-amber-400 font-bold mb-6 text-center">Key Metrics</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-black text-emerald-400 mb-1">
                          {study.metrics.savings}
                        </div>
                        <div className="text-slate-400 text-sm">Annual Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-emerald-400 mb-1">
                          {study.metrics.timeframe}
                        </div>
                        <div className="text-slate-400 text-sm">Implementation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-emerald-400 mb-1">
                          {study.metrics.improvement}
                        </div>
                        <div className="text-slate-400 text-sm">Improvement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-emerald-900/50 via-slate-800/80 to-amber-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-amber-400/20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-100 mb-6">
              Ready to Write Your <span className="text-amber-400">Success Story</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join these successful businesses and discover how Craven Financial Solutions can transform your financial operations.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-black px-8 py-4 text-lg rounded-xl shadow-2xl transition-all duration-300 hover-scale inline-flex items-center justify-center gap-2"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
