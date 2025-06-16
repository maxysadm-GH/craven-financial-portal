
import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tax Planning Strategies Every Texas Business Owner Should Know",
    content: `
      <p>As we move through 2025, Texas business owners have unique opportunities to optimize their tax strategies. Here are five essential approaches that can significantly reduce your tax burden while positioning your business for growth.</p>
      
      <h2>1. Maximize Section 179 Deductions</h2>
      <p>The Section 179 deduction allows you to deduct the full purchase price of qualifying equipment bought or financed during the tax year. For 2025, you can deduct up to $1,160,000 of equipment purchases, making this an excellent strategy for businesses looking to invest in growth while reducing taxable income.</p>
      
      <h2>2. Strategic Retirement Plan Contributions</h2>
      <p>Business owners can significantly reduce their tax liability through strategic retirement plan contributions. Consider establishing a SEP-IRA, Solo 401(k), or defined benefit plan. These vehicles not only secure your financial future but provide substantial current-year deductions.</p>
      
      <h2>3. Income Timing and Expense Acceleration</h2>
      <p>Carefully timing when you recognize income and when you pay expenses can have a significant impact on your tax liability. Consider deferring income to the following year while accelerating deductible expenses into the current year.</p>
      
      <h2>4. Take Advantage of Texas Tax Benefits</h2>
      <p>Texas doesn't have a state income tax, which is already a significant advantage. However, you still need to be mindful of franchise tax obligations and sales tax requirements. Proper planning can help minimize these obligations.</p>
      
      <h2>5. Entity Structure Optimization</h2>
      <p>Your business entity structure has a major impact on your tax liability. Whether you're operating as a sole proprietorship, LLC, S-Corp, or C-Corp, each structure has different tax implications. Regular review of your entity structure can reveal opportunities for tax savings.</p>
      
      <p>Working with experienced tax professionals like those at Craven Financial Solutions ensures you're taking advantage of all available strategies while remaining compliant with tax regulations.</p>
    `,
    author: "Sarah Johnson, CPA",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "When to Hire an Outsourced CFO: 7 Clear Signs Your Business is Ready",
    content: `
      <p>Deciding when to bring in strategic financial leadership is one of the most important decisions a growing business will make. Here are seven clear indicators that your business is ready for outsourced CFO services.</p>
      
      <h2>1. You're Making Decisions Based on Gut Feel</h2>
      <p>If you're making major business decisions without comprehensive financial data and analysis, it's time for professional CFO guidance. Strategic decision-making requires accurate financial forecasting and scenario planning.</p>
      
      <h2>2. Cash Flow is Unpredictable</h2>
      <p>When you're constantly worried about cash flow or surprised by cash shortages, you need strategic financial planning. A CFO brings cash flow forecasting and management expertise to prevent surprises.</p>
      
      <h2>3. You're Planning for Growth or Expansion</h2>
      <p>Growth requires capital planning, financial modeling, and strategic analysis. Whether you're expanding locations, adding product lines, or entering new markets, CFO expertise is crucial for successful scaling.</p>
      
      <h2>4. Investor Relations are Becoming Complex</h2>
      <p>If you're dealing with investors, lenders, or considering raising capital, professional financial reporting and communication becomes essential. CFOs manage these relationships and ensure compliance with reporting requirements.</p>
      
      <h2>5. Financial Reporting Takes Too Long</h2>
      <p>If it takes weeks to close your books or you're always behind on financial reporting, you need systems and processes that a CFO can implement. Timely, accurate reporting is crucial for business management.</p>
      
      <h2>6. You're Spending Too Much Time on Finance</h2>
      <p>As a business owner, your time should be spent on strategy and growth, not managing day-to-day financial operations. When finance tasks are consuming too much of your time, it's time to delegate to a professional.</p>
      
      <h2>7. You Need Strategic Financial Planning</h2>
      <p>Beyond basic bookkeeping and tax preparation, growing businesses need strategic financial planning, budgeting, and forecasting. This requires CFO-level expertise and experience.</p>
      
      <p>At Craven Financial Solutions, our outsourced CFO services provide the strategic financial leadership you need without the cost of a full-time executive.</p>
    `,
    author: "Michael Chen, CFO",
    date: "January 12, 2025",
    readTime: "7 min read",
    category: "CFO Services",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  }
  // Add more blog posts as needed
];

export default function BlogPost() {
  const { id } = useParams();
  const postId = parseInt(id || "0");
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-emerald-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-slate-100 mb-8 leading-tight">
              {post.title}
            </h1>

            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="bg-gradient-to-r from-emerald-900/50 via-slate-800/80 to-emerald-900/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  Need Expert Financial Guidance?
                </h3>
                <p className="text-slate-300 mb-4">
                  Let our team help you implement these strategies for your business.
                </p>
                <Link
                  to="/contact"
                  className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 inline-block"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
