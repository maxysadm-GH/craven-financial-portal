
import { useState } from "react";
import { Calculator, TrendingUp, PiggyBank, Home } from "lucide-react";
import TaxCalculator from "@/components/calculators/TaxCalculator";
import RetirementCalculator from "@/components/calculators/RetirementCalculator";
import BudgetPlanner from "@/components/calculators/BudgetPlanner";
import LoanCalculator from "@/components/calculators/LoanCalculator";

export default function FinancialTools() {
  const [showTools, setShowTools] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    employees: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.company && formData.employees) {
      setShowTools(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="tools" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
          Financial <span className="text-emerald-400">Tools & Calculators</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Access powerful financial planning tools to make informed decisions for your business
        </p>
      </div>

      {!showTools ? (
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">
                Get Access to Our Financial Tools
              </h3>
              <p className="text-slate-300">
                Unlock powerful calculators designed specifically for business owners and high-net-worth individuals
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-emerald-400 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-emerald-400 font-semibold mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                    placeholder="Company name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-emerald-400 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-emerald-400 font-semibold mb-2">Number of Employees *</label>
                  <select
                    name="employees"
                    required
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-25">6-25 employees</option>
                    <option value="26-100">26-100 employees</option>
                    <option value="100+">100+ employees</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-black py-3 rounded-lg shadow-xl transition-all duration-300 hover-scale"
              >
                Access Financial Tools
              </button>
            </form>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-emerald-400/20">
                <Calculator className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-slate-300 text-sm font-semibold">Tax Calculator</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-emerald-400/20">
                <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-slate-300 text-sm font-semibold">Retirement Planner</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-emerald-400/20">
                <PiggyBank className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-slate-300 text-sm font-semibold">Budget Planner</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-emerald-400/20">
                <Home className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-slate-300 text-sm font-semibold">Loan Calculator</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="text-emerald-400 font-semibold text-lg">
              Welcome {formData.name}! Access your financial tools below:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <TaxCalculator />
            <RetirementCalculator />
            <BudgetPlanner />
            <LoanCalculator />
          </div>
        </div>
      )}
    </section>
  );
}
