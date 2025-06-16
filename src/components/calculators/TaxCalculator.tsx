
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateTax = () => {
    const grossIncome = parseFloat(income) || 0;
    const totalDeductions = parseFloat(deductions) || 0;
    const taxableIncome = Math.max(0, grossIncome - totalDeductions);
    
    // Simplified tax calculation (using rough 2024 tax brackets)
    let tax = 0;
    if (taxableIncome > 609350) tax = 183647.25 + 0.37 * (taxableIncome - 609350);
    else if (taxableIncome > 243725) tax = 55678.5 + 0.35 * (taxableIncome - 243725);
    else if (taxableIncome > 191950) tax = 37104 + 0.32 * (taxableIncome - 191950);
    else if (taxableIncome > 95375) tax = 16290 + 0.24 * (taxableIncome - 95375);
    else if (taxableIncome > 44725) tax = 5147 + 0.22 * (taxableIncome - 44725);
    else if (taxableIncome > 11000) tax = 1100 + 0.12 * (taxableIncome - 11000);
    else tax = taxableIncome * 0.10;
    
    setResult(Math.round(tax));
  };

  return (
    <Card className="bg-slate-800/50 border-emerald-400/20">
      <CardHeader>
        <CardTitle className="text-emerald-400">Tax Calculator</CardTitle>
        <p className="text-slate-300 text-sm">Estimate your federal tax liability</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="income" className="text-slate-200">Annual Income</Label>
          <Input
            id="income"
            type="number"
            placeholder="e.g., 75000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="bg-slate-700/50 border-slate-600 text-slate-100"
          />
        </div>
        <div>
          <Label htmlFor="deductions" className="text-slate-200">Total Deductions</Label>
          <Input
            id="deductions"
            type="number"
            placeholder="e.g., 15000"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
            className="bg-slate-700/50 border-slate-600 text-slate-100"
          />
        </div>
        <Button 
          onClick={calculateTax}
          className="w-full bg-emerald-500 hover:bg-emerald-600"
        >
          Calculate Tax
        </Button>
        
        {result !== null && (
          <div className="mt-4 p-4 bg-slate-700/30 rounded-lg">
            <p className="text-slate-200">Estimated Federal Tax: <span className="text-emerald-400 font-bold">${result.toLocaleString()}</span></p>
            <p className="text-xs text-slate-400 mt-2">*This is a simplified calculation for estimation purposes only.</p>
            <Button 
              variant="outline"
              className="w-full mt-3 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10"
              onClick={() => window.open('/contact', '_blank')}
            >
              Get Professional Tax Planning - Free Assessment
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
