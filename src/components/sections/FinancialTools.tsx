
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import TaxCalculator from "@/components/calculators/TaxCalculator";
import RetirementCalculator from "@/components/calculators/RetirementCalculator";
import BudgetPlanner from "@/components/calculators/BudgetPlanner";
import LoanCalculator from "@/components/calculators/LoanCalculator";

export default function FinancialTools() {
  const [hasAccess, setHasAccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    employees: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client info submitted:", form);
    setHasAccess(true);
    // Optional: Send to webhook or backend
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

      {!hasAccess ? (
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
              <Label htmlFor="name" className="text-slate-200">Full Name *</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="John Smith"
                required
                value={form.name}
                onChange={handleInputChange}
                className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-emerald-400"
              />
            </div>
            <div>
              <Label htmlFor="company" className="text-slate-200">Company *</Label>
              <Input
                type="text"
                name="company"
                id="company"
                placeholder="ABC Corporation"
                required
                value={form.company}
                onChange={handleInputChange}
                className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-emerald-400"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-200">Email Address *</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="john@company.com"
                required
                value={form.email}
                onChange={handleInputChange}
                className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-emerald-400"
              />
            </div>
            <div>
              <Label htmlFor="employees" className="text-slate-200">Number of Employees *</Label>
              <Input
                type="number"
                name="employees"
                id="employees"
                placeholder="25"
                required
                value={form.employees}
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
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="text-emerald-400 font-semibold">Welcome, {form.name}!</p>
            <p className="text-slate-300">Use our calculators to analyze your financial situation</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <TaxCalculator />
            <RetirementCalculator />
            <BudgetPlanner />
            <LoanCalculator />
          </div>
          
          <div className="text-center mt-12">
            <div className="max-w-2xl mx-auto bg-slate-800/30 border border-emerald-400/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4">
                Ready to Optimize Your Financial Strategy?
              </h3>
              <p className="text-slate-300 mb-6">
                These calculators provide estimates. Get personalized recommendations from our financial experts with a free assessment call.
              </p>
              <Button
                onClick={() => window.open('/contact', '_blank')}
                className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-bold px-8 py-3"
              >
                Schedule Your Free Assessment Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
