
import React, { useState } from "react";
import { Calculator, PiggyBank, CreditCard, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const tools = [
  {
    icon: <Calculator className="w-8 h-8 text-emerald-400" />,
    title: "Tax Calculator",
    description: "Estimate your tax obligations and savings opportunities",
    link: "#tax-calc"
  },
  {
    icon: <PiggyBank className="w-8 h-8 text-emerald-400" />,
    title: "Retirement Planner", 
    description: "Plan your retirement savings and investment strategy",
    link: "#retirement-calc"
  },
  {
    icon: <CreditCard className="w-8 h-8 text-emerald-400" />,
    title: "Budget Analyzer",
    description: "Analyze spending patterns and optimize your budget",
    link: "#budget-calc"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    title: "Loan Calculator",
    description: "Calculate loan payments and compare financing options",
    link: "#loan-calc"
  }
];

export default function FinancialTools() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Optional: Send to webhook or backend
    console.log("Form submitted:", form);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-100 mb-4 md:mb-6 tracking-tight">
          Financial Tools & <span className="text-emerald-400">Calculators</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
          Access our suite of professional-grade financial calculators and planning tools
        </p>
      </div>

      {!formSubmitted ? (
        <div className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-2">
              Get Access to Financial Tools
            </h3>
            <p className="text-slate-300">
              Enter your details to unlock our professional calculators
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={form.name}
                onChange={handleInputChange}
                className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-emerald-400"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={form.email}
                onChange={handleInputChange}
                className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-emerald-400"
              />
            </div>
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                value={form.phone}
                onChange={handleInputChange}
                className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-emerald-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-bold py-3"
            >
              Access Financial Tools
            </Button>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-6 shadow-2xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-400/10 rounded-xl mb-4 mx-auto">
                {tool.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-emerald-400 mb-2 text-center">
                {tool.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base mb-4 text-center">
                {tool.description}
              </p>
              <Button
                variant="outline"
                className="w-full border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10"
                onClick={() => window.open(tool.link, '_blank')}
              >
                Open Calculator
              </Button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
