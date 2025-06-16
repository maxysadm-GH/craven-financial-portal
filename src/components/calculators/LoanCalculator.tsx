
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100 / 12;
    const months = (parseFloat(loanTerm) || 0) * 12;
    
    if (principal <= 0 || rate <= 0 || months <= 0) return;
    
    const monthlyPayment = principal * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;
    
    setResult({
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100
    });
  };

  return (
    <Card className="bg-slate-800/50 border-emerald-400/20">
      <CardHeader>
        <CardTitle className="text-emerald-400">Loan Calculator</CardTitle>
        <p className="text-slate-300 text-sm">Calculate loan payments and total costs</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="loanAmount" className="text-slate-200">Loan Amount</Label>
          <Input
            id="loanAmount"
            type="number"
            placeholder="250000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="bg-slate-700/50 border-slate-600 text-slate-100"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="interestRate" className="text-slate-200">Interest Rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              step="0.01"
              placeholder="6.5"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-slate-100"
            />
          </div>
          <div>
            <Label htmlFor="loanTerm" className="text-slate-200">Loan Term (Years)</Label>
            <Input
              id="loanTerm"
              type="number"
              placeholder="30"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-slate-100"
            />
          </div>
        </div>
        <Button 
          onClick={calculateLoan}
          className="w-full bg-emerald-500 hover:bg-emerald-600"
        >
          Calculate Loan
        </Button>
        
        {result && (
          <div className="mt-4 p-4 bg-slate-700/30 rounded-lg">
            <div className="space-y-2">
              <p className="text-slate-200">Monthly Payment: <span className="text-emerald-400 font-bold">${result.monthlyPayment.toLocaleString()}</span></p>
              <p className="text-slate-200">Total Payment: <span className="text-slate-300">${result.totalPayment.toLocaleString()}</span></p>
              <p className="text-slate-200">Total Interest: <span className="text-red-400">${result.totalInterest.toLocaleString()}</span></p>
            </div>
            <Button 
              variant="outline"
              className="w-full mt-3 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10"
              onClick={() => window.open('/contact', '_blank')}
            >
              Explore Better Financing Options - Free Assessment
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
