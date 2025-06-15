
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ROIcalculator() {
  const [payroll, setPayroll] = useState("");
  const [accounting, setAccounting] = useState("");
  const [consulting, setConsulting] = useState("");
  const [roi, setRoi] = useState<number | null>(null);

  // Simple ROI calc: rough heuristic for cost savings
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const p = Number(payroll) || 0;
    const a = Number(accounting) || 0;
    const c = Number(consulting) || 0;
    // Estimate: 20% cost reduction + hours saved per year.
    const savings = (p + a + c) * 0.2 + 5000;
    setRoi(savings);
  };

  return (
    <section className="w-full bg-blue-100/40 p-8 rounded-2xl my-12 shadow-inner flex flex-col items-center animate-fade-in">
      <h2 className="text-2xl font-bold text-blue-900 mb-3 text-center">
        What could you save with a proven CFO partner?
      </h2>
      <p className="mb-6 text-gray-700 text-center max-w-xl">
        Use our quick calculator to estimate your annual savings by upgrading to Craven Financial Solutions for your payroll, accounting, and consulting needs.
      </p>
      <form className="flex flex-col gap-4 w-full max-w-lg" onSubmit={handleCalculate}>
        <label className="font-medium text-blue-800">Current Payroll Expenses (annual)
          <Input
            type="number"
            value={payroll}
            onChange={e => setPayroll(e.target.value)}
            min={0}
            placeholder="e.g. 12000"
            className="mt-1"
          />
        </label>
        <label className="font-medium text-blue-800">Current Accounting Spend (annual)
          <Input
            type="number"
            value={accounting}
            onChange={e => setAccounting(e.target.value)}
            min={0}
            placeholder="e.g. 8000"
            className="mt-1"
          />
        </label>
        <label className="font-medium text-blue-800">Current Consulting/Advisory Spend (annual)
          <Input
            type="number"
            value={consulting}
            onChange={e => setConsulting(e.target.value)}
            min={0}
            placeholder="e.g. 5000"
            className="mt-1"
          />
        </label>
        <Button
          type="submit"
          className="mt-2 bg-blue-700 hover:bg-blue-900 text-white rounded-lg font-bold"
        >
          Calculate My ROI
        </Button>
      </form>
      {roi !== null && (
        <div className="mt-8 bg-white border-2 border-blue-200 p-6 rounded-lg max-w-md text-center animate-scale-in shadow">
          <h3 className="text-xl font-bold text-green-700 mb-2">Estimated Annual ROI</h3>
          <div className="text-3xl font-extrabold text-blue-900 mb-2">${roi.toLocaleString()}</div>
          <p className="text-gray-700 mb-1">Potential savings/year with Craven Financial Solutions.</p>
          <a
            href="/contact"
            className="inline-block mt-5 bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover-scale"
          >
            Schedule Your Free Assessment
          </a>
        </div>
      )}
    </section>
  );
}
