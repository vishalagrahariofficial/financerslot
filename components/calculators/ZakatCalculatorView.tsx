"use client";

import { useState } from "react";
import { FinancialMath } from "@/lib/financial-math";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Coins, Heart, ShieldCheck, CheckCircle2 } from "lucide-react";

export function ZakatCalculatorView() {
    const [cashBank, setCashBank] = useState<number>(15000);
    const [goldSilver, setGoldSilver] = useState<number>(5000);
    const [halalStocks, setHalalStocks] = useState<number>(25000);
    const [cryptoValue, setCryptoValue] = useState<number>(4000);
    const [businessAssets, setBusinessAssets] = useState<number>(10000);
    const [shortTermDebts, setShortTermDebts] = useState<number>(3000);

    const mathRes = FinancialMath.calculateZakat({
        cashBank,
        goldSilver,
        halalStocks,
        cryptoValue,
        businessAssets,
        shortTermDebts
    });

    const details = mathRes.details || {
        grossAssets: 59000,
        deductibleDebts: 3000,
        netZakatableWealth: 56000
    };

    return (
        <div className="space-y-8">
            {/* Input Form Grid */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="bg-emerald-100 text-emerald-700 p-2.5 rounded-xl">
                        <Coins size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900">Zoya Halal Wealth & Zakat Configuration</h4>
                        <p className="text-xs text-slate-500">Calculate 2.5% Zakat on net eligible assets above Nisab threshold.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700">Cash & Bank Accounts ($)</label>
                        <Input
                            type="number"
                            value={cashBank}
                            onChange={(e) => setCashBank(Number(e.target.value))}
                            className="font-bold border-slate-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700">Gold & Silver Jewelry/Bullion ($)</label>
                        <Input
                            type="number"
                            value={goldSilver}
                            onChange={(e) => setGoldSilver(Number(e.target.value))}
                            className="font-bold border-slate-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700">Halal Stocks & Mutual Funds ($)</label>
                        <Input
                            type="number"
                            value={halalStocks}
                            onChange={(e) => setHalalStocks(Number(e.target.value))}
                            className="font-bold border-slate-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700">Crypto Assets Value ($)</label>
                        <Input
                            type="number"
                            value={cryptoValue}
                            onChange={(e) => setCryptoValue(Number(e.target.value))}
                            className="font-bold border-slate-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700">Liquid Business Assets & Merchandise ($)</label>
                        <Input
                            type="number"
                            value={businessAssets}
                            onChange={(e) => setBusinessAssets(Number(e.target.value))}
                            className="font-bold border-slate-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700">Minus: Short-Term Debts Due ($)</label>
                        <Input
                            type="number"
                            value={shortTermDebts}
                            onChange={(e) => setShortTermDebts(Number(e.target.value))}
                            className="font-bold border-rose-200 text-rose-700"
                        />
                    </div>
                </div>
            </div>

            {/* Zakat Result Card */}
            <div className="bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950 rounded-3xl p-8 text-white border border-emerald-800/40 shadow-2xl relative overflow-hidden text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs px-4 py-1.5 rounded-full border border-emerald-500/30">
                    <Heart size={14} /> Islamic Finance Standard (2.5% Rate)
                </div>

                <div>
                    <span className="text-slate-300 text-sm font-medium uppercase tracking-widest block">Total Zakat Due This Lunar Year</span>
                    <h3 className="text-5xl md:text-6xl font-extrabold text-white mt-2 tracking-tight">
                        ${mathRes.result.toLocaleString()}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-emerald-800/50 max-w-3xl mx-auto text-sm">
                    <div className="bg-emerald-900/40 p-4 rounded-2xl border border-emerald-700/30">
                        <span className="text-xs text-emerald-300">Gross Zakatable Assets</span>
                        <h5 className="font-bold text-lg text-white mt-1">${details.grossAssets.toLocaleString()}</h5>
                    </div>
                    <div className="bg-emerald-900/40 p-4 rounded-2xl border border-emerald-700/30">
                        <span className="text-xs text-emerald-300">Deductible Liabilities</span>
                        <h5 className="font-bold text-lg text-rose-300 mt-1">-${details.deductibleDebts.toLocaleString()}</h5>
                    </div>
                    <div className="bg-emerald-900/40 p-4 rounded-2xl border border-emerald-700/30">
                        <span className="text-xs text-emerald-300">Net Zakatable Wealth</span>
                        <h5 className="font-bold text-lg text-cyan-200 mt-1">${details.netZakatableWealth.toLocaleString()}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
