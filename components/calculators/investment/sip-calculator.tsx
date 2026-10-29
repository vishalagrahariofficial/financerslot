"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { CalculatorDefinition, CategoryDefinition } from "@/config/calculators";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { FinancialMath } from "@/lib/financial-math";
import { formatCurrency } from "@/lib/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface SipCalculatorProps {
    item: CalculatorDefinition;
    category: CategoryDefinition;
}

export default function SipCalculator({ item, category }: SipCalculatorProps) {
    const [monthlyInvestment, setMonthlyInvestment] = useState(500);
    const [interestRate, setInterestRate] = useState(10);
    const [durationYears, setDurationYears] = useState(10);
    const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        const res = FinancialMath.calculateSIP(monthlyInvestment, interestRate, durationYears);
        setResult(res);

        // Generate yearly growth data for chart
        const data = [];
        let currentInvested = 0;
        let currentTotal = 0;
        const monthlyRate = interestRate / (12 * 100);

        for (let i = 0; i <= durationYears; i++) {
            if (i === 0) {
                data.push({ year: `Year 0`, invested: 0, value: 0 });
                continue;
            }
            // Simple yearly projection for chart visualization validity
            const months = i * 12;
            const projectedValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
            const invested = monthlyInvestment * months;

            data.push({
                year: `Year ${i}`,
                invested: Math.round(invested),
                value: Math.round(projectedValue)
            });
        }
        setChartData(data);

    }, [monthlyInvestment, interestRate, durationYears]);

    const currencyFormat = (val: number) => formatCurrency(val);

    return (
        <CalculatorLayout
            calculator={item}
            category={category}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Inputs */}
                <div className="lg:col-span-1 space-y-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-slate-700">Monthly Investment</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <Input
                                    type="number"
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                    className="w-32 font-bold text-right pl-6"
                                />
                            </div>
                        </div>
                        <Slider
                            value={[monthlyInvestment]}
                            onValueChange={(val: number[]) => setMonthlyInvestment(val[0])}
                            max={100000}
                            step={500}
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-slate-700">Expected Return (p.a)</label>
                            <div className="relative">
                                <Input
                                    type="number"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    className="w-24 font-bold text-right"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">%</span>
                            </div>
                        </div>
                        <Slider
                            value={[interestRate]}
                            onValueChange={(val: number[]) => setInterestRate(val[0])}
                            max={30}
                            step={0.5}
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-slate-700">Time Period</label>
                            <div className="flex items-center gap-2">
                                <Input
                                    type="number"
                                    value={durationYears}
                                    onChange={(e) => setDurationYears(Number(e.target.value))}
                                    className="w-20 font-bold text-right"
                                />
                                <span className="text-sm font-medium text-slate-500">Years</span>
                            </div>
                        </div>
                        <Slider
                            value={[durationYears]}
                            onValueChange={(val: number[]) => setDurationYears(val[0])}
                            max={40}
                            step={1}
                        />
                    </div>
                </div>

                {/* Visuals */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl border shadow-sm">
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">Invested Amount</p>
                            <h3 className="text-2xl font-bold text-slate-900">{currencyFormat(result.invested)}</h3>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border shadow-sm">
                            <p className="text-xs text-blue-500 uppercase font-bold tracking-wider mb-2">Est. Returns</p>
                            <h3 className="text-2xl font-bold text-blue-600">+{currencyFormat(result.returns)}</h3>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg text-white">
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">Total Value</p>
                            <h3 className="text-3xl font-bold">{currencyFormat(result.total)}</h3>
                        </div>
                    </div>

                    <div className="h-[400px] bg-white p-4 rounded-3xl border shadow-sm">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                <YAxis hide />
                                <Tooltip
                                    formatter={(value: number) => currencyFormat(value)}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                <Area type="monotone" dataKey="invested" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </CalculatorLayout>
    );
}
