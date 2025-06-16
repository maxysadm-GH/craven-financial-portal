
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lock, BarChart3, FileText, DollarSign, TrendingUp } from "lucide-react";

export default function ClientPortal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (loginForm.email.trim() && loginForm.password.trim()) {
      setLoggedIn(true);
    } else {
      setError("Please enter email & password.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-4xl">
          {!loggedIn ? (
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
                Client <span className="text-emerald-400">Portal</span>
              </h1>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Access your personalized dashboard with real-time financial insights, reports, and analytics.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Login Form */}
                <form
                  className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 shadow-2xl"
                  onSubmit={handleLogin}
                  autoComplete="off"
                >
                  <div className="w-16 h-16 bg-emerald-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-100 mb-6 text-center">Secure Login</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-emerald-400 font-semibold mb-2">Email Address</label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                        type="email"
                        placeholder="your.email@company.com"
                        required
                        value={loginForm.email}
                        onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                        autoComplete="username"
                      />
                    </div>
                    <div>
                      <label className="block text-emerald-400 font-semibold mb-2">Password</label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={loginForm.password}
                        onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                        autoComplete="current-password"
                      />
                    </div>
                    {error && <div className="text-red-400 text-sm bg-red-400/10 rounded-lg p-3 border border-red-400/20">{error}</div>}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-black py-3 rounded-lg shadow-xl transition-all duration-300 hover-scale"
                    >
                      Access Dashboard
                    </button>
                  </div>
                  
                  <div className="text-center mt-6">
                    <div className="text-sm text-slate-400">Demo Mode - Use any credentials</div>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold">
                      Forgot Password?
                    </a>
                  </div>
                </form>

                {/* Features Preview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-100 mb-6">
                    What's Inside Your <span className="text-emerald-400">Dashboard</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg border border-emerald-400/20">
                      <div className="w-10 h-10 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-slate-100 font-semibold">Real-time Analytics</div>
                        <div className="text-slate-400 text-sm">Live financial metrics and KPIs</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg border border-emerald-400/20">
                      <div className="w-10 h-10 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-slate-100 font-semibold">Financial Reports</div>
                        <div className="text-slate-400 text-sm">Monthly statements and tax documents</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg border border-emerald-400/20">
                      <div className="w-10 h-10 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-slate-100 font-semibold">Cash Flow Tracking</div>
                        <div className="text-slate-400 text-sm">Monitor income and expenses</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg border border-emerald-400/20">
                      <div className="w-10 h-10 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-slate-100 font-semibold">Growth Insights</div>
                        <div className="text-slate-400 text-sm">Strategic recommendations and forecasts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-100 mb-4">Welcome Back!</h2>
                <p className="text-slate-300">Your personalized financial dashboard</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-6 border border-emerald-400/20 text-center">
                  <DollarSign className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-100">$245,680</div>
                  <div className="text-slate-400 text-sm">Monthly Revenue</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6 border border-emerald-400/20 text-center">
                  <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-100">+23.5%</div>
                  <div className="text-slate-400 text-sm">Growth Rate</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6 border border-emerald-400/20 text-center">
                  <BarChart3 className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-100">94.2%</div>
                  <div className="text-slate-400 text-sm">Efficiency Score</div>
                </div>
              </div>

              <div className="bg-slate-700/50 rounded-xl p-8 border border-emerald-400/20 text-center min-h-[300px] flex flex-col items-center justify-center mb-8">
                <BarChart3 className="w-16 h-16 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-100 mb-2">Databox Dashboard Integration</h3>
                <p className="text-slate-300 mb-4">Your comprehensive financial analytics will be displayed here</p>
                <div className="text-sm text-slate-400 bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                  Databox embedded dashboard coming soon with real-time data visualization, custom reports, and automated insights.
                </div>
              </div>

              <div className="text-center">
                <button
                  className="text-emerald-400 hover:text-emerald-300 font-semibold underline"
                  onClick={() => setLoggedIn(false)}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
