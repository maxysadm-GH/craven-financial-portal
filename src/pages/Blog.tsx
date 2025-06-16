
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Link } from "react-router-dom";
import { BookOpen, Clock, TrendingUp, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tax Planning Strategies Every Texas Business Owner Should Know",
    excerpt: "Discover essential tax planning techniques that can save your business thousands in 2025, including depreciation strategies and retirement plan contributions.",
    author: "Sarah Johnson, CPA",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "When to Hire an Outsourced CFO: 7 Clear Signs Your Business is Ready",
    excerpt: "Learn the key indicators that signal it's time to bring in strategic financial leadership to scale your business operations effectively.",
    author: "Michael Chen, CFO",
    date: "January 12, 2025",
    readTime: "7 min read",
    category: "CFO Services",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Cash Flow Management: The Ultimate Guide for Small Businesses",
    excerpt: "Master the fundamentals of cash flow forecasting and management with our comprehensive guide designed specifically for growing businesses.",
    author: "Lisa Rodriguez, CPA",
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "Financial Management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Retirement Planning for Business Owners: Beyond the 401(k)",
    excerpt: "Explore advanced retirement strategies including SEP-IRAs, Solo 401(k)s, and defined benefit plans that can maximize your retirement savings.",
    author: "David Kim, CFP",
    date: "January 8, 2025",
    readTime: "6 min read",
    category: "Retirement Planning",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Understanding Texas Franchise Tax: A Complete Business Guide",
    excerpt: "Navigate the complexities of Texas franchise tax with our detailed breakdown of calculations, exemptions, and filing requirements.",
    author: "Jennifer Adams, CPA",
    date: "January 5, 2025",
    readTime: "9 min read",
    category: "Tax Compliance",
    image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Bookkeeping Best Practices for Growing Service Businesses",
    excerpt: "Implement proven bookkeeping systems that scale with your service business, from client billing to expense tracking and financial reporting.",
    author: "Robert Martinez, CPA",
    date: "January 3, 2025",
    readTime: "7 min read",
    category: "Bookkeeping",
    image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Blog() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-100 mb-6 tracking-tight">
            Financial <span className="text-emerald-400">Insights</span> & Resources
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            Stay ahead of the curve with expert insights, industry trends, and strategic guidance from Craven Financial Solutions.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-emerald-900/50 via-slate-800/80 to-emerald-900/50 backdrop-blur-sm rounded-3xl p-8 text-center border border-emerald-400/20 shadow-2xl">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">
            Stay Informed
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get the latest insights, industry updates, and exclusive content delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
            />
            <button className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
