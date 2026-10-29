"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { CalculatorDefinition, CategoryDefinition } from "@/config/calculators";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { FinancialMath } from "@/lib/financial-math";
import { formatCurrency } from "@/lib/utils";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface EmiCalculatorProps {
    item: CalculatorDefinition;
    category: CategoryDefinition;
}

export default function EmiCalculator({ item, category }: EmiCalculatorProps) {
    // State management
    const [loanAmount, setLoanAmount] = useState(300000); // $300k default
    const [interestRate, setInterestRate] = useState(7.5); // 7.5% default
    const [tenureYears, setTenureYears] = useState(30);

    // Derived values
    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const currencyFormat = (val: number) => formatCurrency(val);

    useEffect(() => {
        const tenureMonths = tenureYears * 12;
        const calculatedEMI = FinancialMath.calculateEMI({ principal: loanAmount, rate: interestRate, tenureMonths });
        const totalPayable = calculatedEMI * tenureMonths;
        const interestComponent = totalPayable - loanAmount;

        setEmi(Math.round(calculatedEMI));
        setTotalAmount(Math.round(totalPayable));
        setTotalInterest(Math.round(interestComponent));
    }, [loanAmount, interestRate, tenureYears]);

    // Chart Data
    const data = [
        { name: "Principal Amount", value: loanAmount, color: "#94a3b8" }, // slate-400
        { name: "Interest Amount", value: totalInterest, color: "#2563eb" }, // blue-600
    ];

    return (
        <CalculatorLayout
            calculator={item}
            category={category}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Inputs Section */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-slate-700">Loan Amount</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <Input
                                    type="number"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                    className="pl-8 w-36 font-bold text-right"
                                />
                            </div>
                        </div>
                        <Slider
                            value={[loanAmount]}
                            onValueChange={(val: number[]) => setLoanAmount(val[0])}
                            max={10000000}
                            step={50000}
                            className="py-4"
                        />
                        <p className="text-xs text-muted-foreground text-right">{currencyFormat(loanAmount)}</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-slate-700">Interest Rate (% p.a)</label>
                            <div className="relative">
                                <Input
                                    type="number"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    className="w-24 font-bold text-right bg-blue-50/50 border-blue-100"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">%</span>
                            </div>
                        </div>
                        <Slider
                            value={[interestRate]}
                            onValueChange={(val: number[]) => setInterestRate(val[0])}
                            max={30}
                            step={0.1}
                            className="py-4"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-slate-700">Loan Tenure</label>
                            <div className="flex items-center gap-2">
                                <Input
                                    type="number"
                                    value={tenureYears}
                                    onChange={(e) => setTenureYears(Number(e.target.value))}
                                    className="w-20 font-bold text-right"
                                />
                                <span className="text-sm font-medium text-slate-500">Years</span>
                            </div>
                        </div>
                        <Slider
                            value={[tenureYears]}
                            onValueChange={(val: number[]) => setTenureYears(val[0])}
                            max={30}
                            step={1}
                            className="py-4"
                        />
                    </div>
                </div>

                {/* Results Section - Concentro Style */}
                <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -z-10" />

                    <div className="space-y-8 relative z-10">
                        <div className="text-center">
                            <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-2">Monthly EMI</p>
                            <h3 className="text-5xl font-bold tracking-tight">{currencyFormat(emi)}</h3>
                        </div>

                        <div className="h-64 relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value: number) => currencyFormat(value)}
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                            {/* Center Text in Donut */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                <div className="text-xs text-slate-400">Total Payable</div>
                                <div className="font-bold text-sm">{currencyFormat(totalAmount)}</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {data.map((item, i) => (
                                <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-sm font-medium text-slate-300">{item.name}</span>
                                    </div>
                                    <span className="font-bold">{currencyFormat(item.value)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </CalculatorLayout>
    );
}
