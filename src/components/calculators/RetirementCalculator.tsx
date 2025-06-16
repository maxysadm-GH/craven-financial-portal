
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateRetirement = () => {
    const age = parseFloat(currentAge) || 0;
    const retireAge = parseFloat(retirementAge) || 65;
    const savings = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    
    const yearsToRetirement = Math.max(0, retireAge - age);
    const annualReturn = 0.07; // Assuming 7% annual return
    const monthlyReturn = annualReturn / 12;
    const totalMonths = yearsToRetirement * 12;
    
    // Future value of current savings
    const futureCurrentSavings = savings * Math.pow(1 + annualReturn, yearsToRetirement);
    
    // Future value of monthly contributions
    const futureMonthlyContributions = monthly * (Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn;
    
    const totalRetirementSavings = futureCurrentSavings + futureMonthlyContributions;
    setResult(Math.round(totalRetirementSavings));
  };

  return (
    <Card className="bg-slate-800/50 border-emerald-400/20">
      <CardHeader>
        <CardTitle className="text-emerald-400">Retirement Calculator</CardTitle>
        <p className="text-slate-300 text-sm">Plan your retirement savings strategy</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="currentAge" className="text-slate-200">Current Age</Label>
            <Input
              id="currentAge"
              type="number"
              placeholder="35"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-slate-100"
            />
          </div>
          <div>
            <Label htmlFor="retirementAge" className="text-slate-200">Retirement Age</Label>
            <Input
              id="retirementAge"
              type="number"
              placeholder="65"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-slate-100"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="currentSavings" className="text-slate-200">Current Retirement Savings</Label>
          <Input
            id="currentSavings"
            type="number"
            placeholder="50000"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="bg-slate-700/50 border-slate-600 text-slate-100"
          />
        </div>
        <div>
          <Label htmlFor="monthlyContribution" className="text-slate-200">Monthly Contribution</Label>
          <Input
            id="monthlyContribution"
            type="number"
            placeholder="500"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="bg-slate-700/50 border-slate-600 text-slate-100"
          />
        </div>
        <Button 
          onClick={calculateRetirement}
          className="w-full bg-emerald-500 hover:bg-emerald-600"
        >
          Calculate Retirement Savings
        </Button>
        
        {result !== null && (
          <div className="mt-4 p-4 bg-slate-700/30 rounded-lg">
            <p className="text-slate-200">Projected Retirement Savings: <span className="text-emerald-400 font-bold">${result.toLocaleString()}</span></p>
            <p className="text-xs text-slate-400 mt-2">*Assumes 7% annual return. Results are estimates.</p>
            <Button 
              variant="outline"
              className="w-full mt-3 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10"
              onClick={() => window.open('/contact', '_blank')}
            >
              Optimize Your Retirement Strategy - Free Assessment
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
