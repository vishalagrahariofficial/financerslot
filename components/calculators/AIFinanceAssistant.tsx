"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Bot, ArrowRight, CheckCircle2, TrendingUp, HelpCircle } from "lucide-react";
import { FinancialMath } from "@/lib/financial-math";

export function AIFinanceAssistant() {
    const [prompt, setPrompt] = useState<string>("Calculate my monthly payment for a $45,000 Audi with $5,000 down at 4.9% interest for 60 months");
    const [loading, setLoading] = useState<boolean>(false);
    const [analysis, setAnalysis] = useState<{
        summary: string;
        monthlyPayment: number;
        totalInterest: number;
        totalCost: number;
        extractedParams: Record<string, any>;
    } | null>({
        summary: "Based on a vehicle purchase price of $45,000 with a $5,000 down payment at 4.9% APR over 60 months:",
        monthlyPayment: 753,
        totalInterest: 5180,
        totalCost: 50180,
        extractedParams: {
            "Vehicle Price": "$45,000",
            "Down Payment": "$5,000",
            "Loan Amount": "$40,000",
            "Interest Rate": "4.9%",
            "Loan Term": "60 Months"
        }
    });

    const presetPrompts = [
        "What is the payment on a $50,000 BMW with 10% down at 5.5% for 60 months?",
        "If I buy a $15,000 dump trailer with $2,000 down at 8.5% over 48 months?",
        "Calculate Zakat on $25,000 cash and $50,000 stocks with $5,000 debt",
        "Bi-weekly payment on $35,000 loan at 6.5% interest for 5 years"
    ];

    const handleAnalyze = () => {
        setLoading(true);

        setTimeout(() => {
            // Regex parameter extractor for interactive feel
            const priceMatch = prompt.match(/\$?(\d{1,3}(?:,\d{3})*|\d+)(?:\s*(?:k|thousand))/i) || prompt.match(/\$?(\d{2,7})/);
            const downMatch = prompt.match(/(\$?(\d{1,3}(?:,\d{3})*|\d+))\s*down/i);
            const rateMatch = prompt.match(/(\d+(?:\.\d+)?)\s*%/);
            const monthsMatch = prompt.match(/(\d+)\s*months/i) || prompt.match(/(\d+)\s*years/i);

            let price = 40000;
            if (priceMatch) {
                const raw = priceMatch[1].replace(/,/g, '');
                price = Number(raw);
                if (price < 1000 && prompt.toLowerCase().includes('k')) price *= 1000;
            }

            let down = 5000;
            if (downMatch) down = Number(downMatch[2].replace(/,/g, ''));

            let rate = 5.9;
            if (rateMatch) rate = Number(rateMatch[1]);

            let tenureMonths = 60;
            if (monthsMatch) {
                const num = Number(monthsMatch[1]);
                if (prompt.toLowerCase().includes('year')) tenureMonths = num * 12;
                else tenureMonths = num;
            }

            const netLoan = Math.max(0, price - down);
            const monthlyRate = rate / (12 * 100);
            const emi = (netLoan * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
            const totalPayments = emi * tenureMonths;
            const totalInterest = totalPayments - netLoan;

            setAnalysis({
                summary: `AI Analysis complete for asset value of $${price.toLocaleString()} with $${down.toLocaleString()} down at ${rate}% APR for ${tenureMonths} months:`,
                monthlyPayment: Math.round(emi),
                totalInterest: Math.round(totalInterest),
                totalCost: Math.round(totalPayments + down),
                extractedParams: {
                    "Parsed Price": `$${price.toLocaleString()}`,
                    "Parsed Down Payment": `$${down.toLocaleString()}`,
                    "Financed Principal": `$${netLoan.toLocaleString()}`,
                    "Interest Rate": `${rate}%`,
                    "Term": `${tenureMonths} Months`
                }
            });
            setLoading(false);
        }, 600);
    };

    return (
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2.5rem] p-6 md:p-10 text-white border border-indigo-800/40 shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-500/20 text-purple-400 p-3 rounded-2xl border border-purple-500/30">
                    <Bot size={28} />
                </div>
                <div>
                    <h3 className="font-bold text-2xl tracking-tight text-white flex items-center gap-2">
                        FinancerSlot AI Calculator <Sparkles size={20} className="text-purple-400 animate-spin-slow" />
                    </h3>
                    <p className="text-slate-400 text-sm">Ask any financial scenario in natural language and receive an instant breakdown.</p>
                </div>
            </div>

            {/* Prompt Input Box */}
            <div className="space-y-4 mb-8">
                <div className="relative">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={3}
                        placeholder="Type your financial scenario e.g. Calculate loan payment on a $35,000 car with $4,000 down at 5.5% for 5 years..."
                        className="w-full bg-slate-950/80 border border-indigo-700/50 rounded-2xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-sm md:text-base font-sans resize-none"
                    />
                    <Button
                        onClick={handleAnalyze}
                        disabled={loading || !prompt.trim()}
                        className="absolute right-3 bottom-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl px-5 py-2 flex items-center gap-2 shadow-lg"
                    >
                        {loading ? "AI Solving..." : "Solve with AI"}
                        <ArrowRight size={16} />
                    </Button>
                </div>

                {/* Quick Prompts */}
                <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                        <HelpCircle size={12} /> Try example:
                    </span>
                    {presetPrompts.map((p, idx) => (
                        <button
                            key={idx}
                            onClick={() => { setPrompt(p); }}
                            className="text-xs bg-slate-800/80 hover:bg-slate-700 text-purple-300 px-3 py-1.5 rounded-full border border-purple-900/40 transition-colors text-left"
                        >
                            {p.length > 45 ? p.substring(0, 45) + "..." : p}
                        </button>
                    ))}
                </div>
            </div>

            {/* Analysis Output */}
            {analysis && (
                <div className="bg-slate-950/90 border border-purple-800/40 rounded-3xl p-6 md:p-8 space-y-6">
                    <p className="text-slate-300 text-sm leading-relaxed border-b border-slate-800 pb-4">
                        {analysis.summary}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-purple-950/40 border border-purple-800/30 rounded-2xl p-4 text-center">
                            <span className="text-xs text-purple-300 uppercase tracking-wider font-medium">Estimated Monthly</span>
                            <h4 className="text-3xl font-extrabold text-white mt-1">${analysis.monthlyPayment.toLocaleString()}</h4>
                        </div>
                        <div className="bg-indigo-950/40 border border-indigo-800/30 rounded-2xl p-4 text-center">
                            <span className="text-xs text-indigo-300 uppercase tracking-wider font-medium">Total Interest</span>
                            <h4 className="text-2xl font-bold text-indigo-200 mt-1">${analysis.totalInterest.toLocaleString()}</h4>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
                            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Total Cost Out-of-Pocket</span>
                            <h4 className="text-2xl font-bold text-slate-200 mt-1">${analysis.totalCost.toLocaleString()}</h4>
                        </div>
                    </div>

                    {/* Extracted Parameters */}
                    <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800">
                        <h5 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">Extracted Formula Input Breakdown</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {Object.entries(analysis.extractedParams).map(([key, val]) => (
                                <div key={key} className="flex flex-col">
                                    <span className="text-xs text-slate-400">{key}</span>
                                    <span className="text-sm font-semibold text-white">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
