"use client";

import { useState } from "react";
import { FinancialMath } from "@/lib/financial-math";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { CheckCircle2, TrendingDown, Clock, ShieldCheck } from "lucide-react";

export function BiWeeklyComparator() {
    const [principal, setPrincipal] = useState<number>(32000);
    const [rate, setRate] = useState<number>(6.5);
    const [tenureMonths, setTenureMonths] = useState<number>(60);

    const mathRes = FinancialMath.calculateBiWeeklyAuto({
        principal,
        rate,
        tenureMonths
    });

    const details = mathRes.details || {
        monthlyPayment: 625,
        biWeeklyPayment: 313,
        monthsSaved: 6,
        interestSaved: 1420,
        totalInterestBiWeekly: 4580,
        totalInterestMonthly: 6000
    };

    return (
        <div className="space-y-8">
            {/* Input Configurator */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
                <h4 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="text-blue-600" /> Bi-Weekly Loan Parameters
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700">Car Loan Amount ($)</label>
                        <Input
                            type="number"
                            value={principal}
                            onChange={(e) => setPrincipal(Number(e.target.value))}
                            className="font-bold border-slate-200"
                        />
                        <Slider
                            value={[principal]}
                            onValueChange={(val) => setPrincipal(val[0])}
                            min={2000}
                            max={120000}
                            step={1000}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700">Interest Rate (% APR)</label>
                        <Input
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="font-bold border-slate-200"
                        />
                        <Slider
                            value={[rate]}
                            onValueChange={(val) => setRate(val[0])}
                            min={0.1}
                            max={20}
                            step={0.1}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700">Term (Months)</label>
                        <Input
                            type="number"
                            value={tenureMonths}
                            onChange={(e) => setTenureMonths(Number(e.target.value))}
                            className="font-bold border-slate-200"
                        />
                        <Slider
                            value={[tenureMonths]}
                            onValueChange={(val) => setTenureMonths(val[0])}
                            min={12}
                            max={84}
                            step={12}
                        />
                    </div>
                </div>
            </div>

            {/* Side-by-Side Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Standard Monthly Card */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                        <span className="text-slate-400 font-semibold text-sm">STANDARD MONTHLY SCHEDULING</span>
                        <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300">12 Payments / Yr</span>
                    </div>

                    <div>
                        <span className="text-xs text-slate-400 uppercase">Monthly Payment Amount</span>
                        <h3 className="text-4xl font-extrabold text-white mt-1">${details.monthlyPayment.toLocaleString()}</h3>
                    </div>

                    <div className="space-y-3 pt-2 text-sm">
                        <div className="flex justify-between text-slate-400">
                            <span>Total Interest Paid:</span>
                            <span className="font-semibold text-slate-200">${details.totalInterestMonthly.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                            <span>Payoff Duration:</span>
                            <span className="font-semibold text-slate-200">{tenureMonths} Months</span>
                        </div>
                    </div>
                </div>

                {/* Accelerated Bi-Weekly Card */}
                <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 text-white border border-blue-700/50 shadow-xl space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-500 text-xs font-bold text-white px-4 py-1.5 rounded-bl-2xl">
                        SAVINGS CHAMPION
                    </div>

                    <div className="flex justify-between items-center border-b border-blue-800/60 pb-4">
                        <span className="text-blue-200 font-semibold text-sm">BI-WEEKLY ACCELERATED SCHEDULING</span>
                        <span className="text-xs bg-blue-800/80 px-3 py-1 rounded-full text-blue-200">26 Payments / Yr</span>
                    </div>

                    <div>
                        <span className="text-xs text-blue-300 uppercase">Bi-Weekly Payment (Every 2 Weeks)</span>
                        <h3 className="text-4xl font-extrabold text-white mt-1">${details.biWeeklyPayment.toLocaleString()}</h3>
                    </div>

                    <div className="space-y-3 pt-2 text-sm">
                        <div className="flex justify-between text-blue-200">
                            <span className="flex items-center gap-1.5"><TrendingDown size={16} className="text-emerald-400" /> Interest Saved:</span>
                            <span className="font-bold text-emerald-400 text-base">+${details.interestSaved.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-blue-200">
                            <span className="flex items-center gap-1.5"><Clock size={16} className="text-cyan-400" /> Earlier Payoff:</span>
                            <span className="font-bold text-cyan-300">{details.monthsSaved} Months Sooner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
