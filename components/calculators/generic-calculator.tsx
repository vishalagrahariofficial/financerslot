"use client";

import { useState, useEffect } from "react";
import { CalculatorLayout } from "@/components/layout/calculator-layout";
import { Calculator, ArrowRight, ChevronDown, ChevronUp, PieChart as PieIcon } from "lucide-react";
import { CalculatorDefinition, CategoryDefinition } from "@/config/calculators";
import { FinancialMath } from "@/lib/financial-math";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend
} from "recharts";
import { formatCurrency } from "@/lib/utils";
import { CalculatorArticle } from "@/components/calculators/CalculatorArticle";
import { useLanguage } from "@/components/providers/LanguageContext";

interface GenericCalculatorProps {
    item: CalculatorDefinition;
    category: CategoryDefinition;
}

const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function GenericCalculator({ item, category }: GenericCalculatorProps) {
    const { t } = useLanguage();

    if (!item.inputs || !item.formulaKey) {
        return (
            <CalculatorLayout
                title={item.name}
                description={item.description}
                category={category.name}
                categorySlug={category.slug}
                themeColor={item.themeColor}
            >
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-8 min-h-[50vh]">
                    <div className="bg-white p-12 rounded-[2rem] border border-blue-100 shadow-premium max-w-2xl w-full relative overflow-hidden">
                        <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-50 rounded-2xl text-blue-600 mb-6">
                            <Calculator size={32} />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-slate-900">{t("comingSoon")}</h3>
                        <p className="text-slate-500 mb-8 text-lg">
                            We are currently building the <strong>{item.name}</strong>. It will be live very soon.
                        </p>
                        <Button variant="outline">{t("notifyMe")}</Button>
                    </div>
                </div>
            </CalculatorLayout>
        );
    }

    const initialValues = item.inputs.reduce((acc, curr) => ({
        ...acc,
        [curr.name]: curr.defaultValue
    }), {} as Record<string, number>);

    const [values, setValues] = useState<Record<string, number>>(initialValues);
    const [result, setResult] = useState<number>(0);
    const [chartData, setChartData] = useState<any[]>([]);
    const [showReport, setShowReport] = useState(false);
    const [activeView, setActiveView] = useState<'card' | 'chart'>('card');

    const handleInputChange = (name: string, value: number) => {
        setValues(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (item.formulaKey && FinancialMath[item.formulaKey as keyof typeof FinancialMath]) {
            // @ts-ignore
            const formulaFn = FinancialMath[item.formulaKey];

            try {
                const mathRes = formulaFn(values);
                const res = typeof mathRes === 'object' && mathRes !== null ? mathRes.result : mathRes;
                const safeRes = isNaN(res) || !isFinite(res) ? 0 : Math.round(res);
                setResult(safeRes);

                let data: any[] = [];
                if (values.price || values.principal || values.loanAmount || values.purchasePrice) {
                    const base = values.price || values.principal || values.loanAmount || values.purchasePrice || 0;
                    const netLoan = Math.max(0, base - (values.downPayment || 0) - (values.tradeInValue || 0));
                    const totalPayments = safeRes * (values.tenureMonths || 60);
                    const totalInterest = Math.max(0, totalPayments - netLoan);

                    data = [
                        { name: 'Financed Principal', value: Math.round(netLoan) },
                        { name: 'Total Interest', value: Math.round(totalInterest) }
                    ];
                }

                setChartData(data);
            } catch (error) {
                console.error("Calculation Error:", error);
            }
        }
    }, [values, item.formulaKey, item.id]);

    const formatValue = (value: number, type?: string) => {
        if (value === null || value === undefined || isNaN(value)) return "—";
        if (type === 'percentage') return `${value}%`;
        return formatCurrency(value);
    };

    return (
        <CalculatorLayout
            title={item.name}
            description={item.description}
            category={category.name}
            categorySlug={category.slug}
            themeColor={item.themeColor}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Inputs Section */}
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-200/80 dark:border-slate-800">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 text-lg">
                            <Calculator size={22} className="text-indigo-600" /> {t("interactiveInputs")}
                        </h4>
                        <div className="space-y-6">
                            {item.inputs.map((input) => (
                                <div key={input.name} className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">{input.label}</label>
                                        <div className="relative">
                                            <Input
                                                type="number"
                                                value={values[input.name]}
                                                onChange={(e) => handleInputChange(input.name, Number(e.target.value))}
                                                className="w-36 font-bold text-right pl-8 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus-visible:ring-indigo-500"
                                            />
                                            {input.type === 'currency' && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>}
                                            {input.type === 'percentage' && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>}
                                        </div>
                                    </div>
                                    <Slider
                                        value={[values[input.name]]}
                                        onValueChange={(val: number[]) => handleInputChange(input.name, val[0])}
                                        min={input.min}
                                        max={input.max}
                                        step={input.step}
                                        className="py-2"
                                    />
                                    {input.helpText && <p className="text-xs text-slate-400">{input.helpText}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    {chartData.length > 0 && (
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setActiveView('card')}
                                className={`p-2 rounded-lg transition-colors ${activeView === 'card' ? 'bg-indigo-100 text-indigo-600' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                            >
                                <Calculator size={20} />
                            </button>
                            <button
                                onClick={() => setActiveView('chart')}
                                className={`p-2 rounded-lg transition-colors ${activeView === 'chart' ? 'bg-indigo-100 text-indigo-600' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                            >
                                <PieIcon size={20} />
                            </button>
                        </div>
                    )}

                    <div className="bg-slate-950 rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col justify-center min-h-[400px] shadow-2xl border border-slate-800">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -z-10" />

                        {activeView === 'card' ? (
                            <div className="text-center space-y-4">
                                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">{item.resultLabel || t("calculatedResult")}</p>
                                <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
                                    {item.resultLabel?.includes("Months") || item.resultLabel?.includes("Years") ? result : formatValue(result)}
                                </h3>
                                {item.resultLabel?.includes("Months") && (
                                    <p className="text-slate-400 text-sm">approx {(result / 12).toFixed(1)} years</p>
                                )}
                            </div>
                        ) : (
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }} />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        )}

                        <div className="mt-8 flex justify-center">
                            <Button
                                onClick={() => setShowReport(!showReport)}
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full px-8 py-6 text-base font-bold shadow-lg w-full sm:w-auto"
                            >
                                {showReport ? t("hideReport") : t("amortizationReport")}
                                {showReport ? <ChevronUp className="ml-2 w-5 h-5" /> : <ArrowRight className="ml-2 w-5 h-5" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Report Section */}
            {showReport && (
                <div className="mt-12">
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 lg:p-12 shadow-sm border border-slate-200/80 dark:border-slate-800">
                        <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">{t("detailedReportTitle")}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="font-semibold text-slate-400 mb-4 uppercase tracking-wider text-xs">{t("configSummary")}</h4>
                                <ul className="space-y-4">
                                    {item.inputs.map(input => (
                                        <li key={input.name} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                                            <span className="text-slate-600 dark:text-slate-400 text-sm">{input.label}</span>
                                            <span className="font-bold text-slate-900 dark:text-white text-sm">
                                                {input.type === 'currency' ? '$' : ''}
                                                {values[input.name].toLocaleString()}
                                                {input.type === 'percentage' ? '%' : ''}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-400 mb-4 uppercase tracking-wider text-xs">{t("resultBreakdown")}</h4>
                                <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-6 space-y-4 border border-slate-100 dark:border-slate-800">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 dark:text-slate-300 font-medium text-sm">{item.resultLabel}</span>
                                        <span className="text-2xl font-bold text-indigo-600">{formatValue(result)}</span>
                                    </div>

                                    {chartData.length > 0 && (
                                        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                                            {chartData.map((data, i) => (
                                                <div key={i} className="flex justify-between items-center text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                                                        <span className="text-slate-600 dark:text-slate-400">{data.name}</span>
                                                    </div>
                                                    <span className="font-semibold text-slate-900 dark:text-white">{formatValue(data.value)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 1000-1500 WORD STRUCTURED ARTICLE SECTION BELOW EVERY CALCULATOR */}
            <CalculatorArticle calculator={item} category={category} />
        </CalculatorLayout>
    );
}

