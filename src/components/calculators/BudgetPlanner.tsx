
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function BudgetPlanner() {
  const [income, setIncome] = useState("");
  const [housing, setHousing] = useState("");
  const [transportation, setTransportation] = useState("");
  const [food, setFood] = useState("");
  const [utilities, setUtilities] = useState("");
  const [other, setOther] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateBudget = () => {
    const monthlyIncome = parseFloat(income) || 0;
    const expenses = {
      housing: parseFloat(housing) || 0,
      transportation: parseFloat(transportation) || 0,
      food: parseFloat(food) || 0,
      utilities: parseFloat(utilities) || 0,
      other: parseFloat(other) || 0
    };
    
    const totalExpenses = Object.values(expenses).reduce((sum, expense) => sum + expense, 0);
    const remainingBudget = monthlyIncome - totalExpenses;
    const savingsRate = monthlyIncome > 0 ? (remainingBudget / monthlyIncome) * 100 : 0;
    
    setResult({
      totalExpenses,
      remainingBudget,
      savingsRate: Math.round(savingsRate * 10) / 10,
      expenses
    });
  };

  return (
    <Card className="bg-slate-800/50 border-emerald-400/20">
      <CardHeader>
        <CardTitle className="text-emerald-400">Budget Planner</CardTitle>
        <p className="text-slate-300 text-sm">Create and optimize your monthly budget</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="income" className="text-slate-200">Monthly Income</Label>
          <Input
            id="income"
            type="number"
            placeholder="5000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="bg-slate-700/50 border-slate-600 text-slate-100"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="housing" className="text-slate-200">Housing</Label>
            <Input
              id="housing"
              type="number"
              placeholder="1500"
              value={housing}
              onChange={(e) => setHousing(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-slate-100"
            />
          </div>
          <div>
            <Label htmlFor="transportation" className="text-slate-200">Transportation</Label>
            <Input
              id="transportation"
              type="number"
              placeholder="400"
              value={transportation}
              onChange={(e) => setTransportation(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-slate-100"
            />
          </div>
          <div>
            <Label htmlFor="food" className="text-slate-200">Food</Label>
            <Input
              id="food"
              type="number"
              placeholder="600"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-slate-100"
            />
          </div>
          <div>
            <Label htmlFor="utilities" className="text-slate-200">Utilities</Label>
            <Input
              id="utilities"
              type="number"
              placeholder="200"
              value={utilities}
              onChange={(e) => setUtilities(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-slate-100"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="other" className="text-slate-200">Other Expenses</Label>
          <Input
            id="other"
            type="number"
            placeholder="500"
            value={other}
            onChange={(e) => setOther(e.target.value)}
            className="bg-slate-700/50 border-slate-600 text-slate-100"
          />
        </div>
        <Button 
          onClick={calculateBudget}
          className="w-full bg-emerald-500 hover:bg-emerald-600"
        >
          Analyze Budget
        </Button>
        
        {result && (
          <div className="mt-4 p-4 bg-slate-700/30 rounded-lg">
            <div className="space-y-2">
              <p className="text-slate-200">Total Expenses: <span className="text-red-400 font-bold">${result.totalExpenses.toLocaleString()}</span></p>
              <p className="text-slate-200">Remaining Budget: <span className={`font-bold ${result.remainingBudget >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>${result.remainingBudget.toLocaleString()}</span></p>
              <p className="text-slate-200">Savings Rate: <span className="text-emerald-400 font-bold">{result.savingsRate}%</span></p>
            </div>
            <Button 
              variant="outline"
              className="w-full mt-3 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10"
              onClick={() => window.open('/contact', '_blank')}
            >
              Optimize Your Budget Strategy - Free Assessment
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
