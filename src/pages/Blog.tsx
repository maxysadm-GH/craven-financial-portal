
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Link } from "react-router-dom";
import { BookOpen, Clock, TrendingUp } from "lucide-react";

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

        {/* Coming Soon Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-12 shadow-2xl text-center mb-16">
          <div className="w-24 h-24 bg-emerald-400/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-12 h-12 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            Valuable Resources Coming Soon!
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team is preparing comprehensive insights and resources to help you navigate the complex world of business finance. Stay tuned for expert articles, case studies, and strategic guides.
          </p>
          
          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-700/50 rounded-xl p-6 border border-emerald-400/20">
              <TrendingUp className="w-8 h-8 text-emerald-400 mb-4 mx-auto" />
              <h3 className="text-emerald-400 font-bold mb-2">Market Insights</h3>
              <p className="text-slate-300 text-sm">Weekly analysis of financial trends and market opportunities</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6 border border-emerald-400/20">
              <BookOpen className="w-8 h-8 text-emerald-400 mb-4 mx-auto" />
              <h3 className="text-emerald-400 font-bold mb-2">Expert Guides</h3>
              <p className="text-slate-300 text-sm">In-depth guides on tax strategies, financial planning, and business growth</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6 border border-emerald-400/20">
              <Clock className="w-8 h-8 text-emerald-400 mb-4 mx-auto" />
              <h3 className="text-emerald-400 font-bold mb-2">Timely Updates</h3>
              <p className="text-slate-300 text-sm">Latest regulatory changes and compliance requirements</p>
            </div>
          </div>

          <div className="bg-emerald-400/10 rounded-xl p-6 border border-emerald-400/30 mb-8">
            <p className="text-emerald-300 font-semibold">
              Integration with n8n workflow automation and Databox analytics coming soon for automated content delivery and performance tracking.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-black px-10 py-4 text-lg rounded-2xl shadow-2xl transition-all duration-300 hover-scale inline-block"
          >
            Get Notified When We Launch
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-emerald-900/50 via-slate-800/80 to-emerald-900/50 backdrop-blur-sm rounded-3xl p-8 text-center border border-emerald-400/20 shadow-2xl">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">
            Stay Informed
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Be the first to receive our latest insights, industry updates, and exclusive content when our blog launches.
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
