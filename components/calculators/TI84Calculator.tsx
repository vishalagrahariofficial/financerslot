"use client";

import { useState } from "react";
import { FinancialMath } from "@/lib/financial-math";
import { Button } from "@/components/ui/button";
import { Calculator, Zap, RotateCcw, Check } from "lucide-react";

export function TI84Calculator() {
    const [n, setN] = useState<number>(60);
    const [iy, setIy] = useState<number>(6.5);
    const [pv, setPv] = useState<number>(-30000);
    const [pmt, setPmt] = useState<number>(586.98);
    const [fv, setFv] = useState<number>(0);
    const [py, setPy] = useState<number>(12);
    const [activeVariable, setActiveVariable] = useState<string>("PMT");
    const [solvedOutput, setSolvedOutput] = useState<string>("586.98");
    const [lastAction, setLastAction] = useState<string>("SOLVED PMT");

    const solve = (target: string) => {
        setActiveVariable(target);
        const mathRes = FinancialMath.calculateTI84TVM({
            N: n,
            I_Y: iy,
            PV: pv,
            PMT: pmt,
            FV: fv,
            PY: py
        }, target);

        const val = mathRes.result;
        setSolvedOutput(val.toString());
        setLastAction(`SOLVED FOR ${target}`);

        if (target === 'PMT') setPmt(val);
        if (target === 'PV') setPv(val);
        if (target === 'FV') setFv(val);
    };

    return (
        <div className="bg-slate-950 rounded-[2.5rem] p-6 md:p-8 text-white border border-slate-800 shadow-2xl max-w-3xl mx-auto font-mono">
            {/* TI-84 Top Header */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-xl">
                        <Calculator size={24} />
                    </div>
                    <div>
                        <h3 className="font-sans font-bold text-xl tracking-tight text-white">TI-84 Plus TVM Solver</h3>
                        <p className="font-sans text-xs text-slate-400">Texas Instruments Financial Calculator Simulator</p>
                    </div>
                </div>
                <div className="bg-emerald-950/80 text-emerald-400 text-xs px-3 py-1.5 rounded-full border border-emerald-800/60 font-semibold animate-pulse">
                    MODE: END / AUTO
                </div>
            </div>

            {/* LCD Screen Display */}
            <div className="bg-[#1c2921] border-4 border-[#2d4236] rounded-2xl p-6 mb-8 text-[#5cf59b] shadow-inner font-mono">
                <div className="flex justify-between items-center text-xs text-[#3da668] border-b border-[#294233] pb-2 mb-4">
                    <span>TEXAS INSTRUMENTS TI-84+ TVM</span>
                    <span>{lastAction}</span>
                </div>

                <div className="space-y-3 text-sm md:text-base">
                    <div className="flex justify-between items-center">
                        <span className="text-[#8ef7b8]">N (Periods):</span>
                        <input
                            type="number"
                            value={n}
                            onChange={(e) => setN(Number(e.target.value))}
                            className="bg-[#121c17] text-right px-3 py-1 rounded border border-[#2b4d3a] text-[#5cf59b] focus:outline-none focus:border-[#5cf59b] w-36 font-mono"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#8ef7b8]">I/Y (Interest %/Yr):</span>
                        <input
                            type="number"
                            value={iy}
                            onChange={(e) => setIy(Number(e.target.value))}
                            className="bg-[#121c17] text-right px-3 py-1 rounded border border-[#2b4d3a] text-[#5cf59b] focus:outline-none focus:border-[#5cf59b] w-36 font-mono"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#8ef7b8]">PV (Present Value):</span>
                        <input
                            type="number"
                            value={pv}
                            onChange={(e) => setPv(Number(e.target.value))}
                            className="bg-[#121c17] text-right px-3 py-1 rounded border border-[#2b4d3a] text-[#5cf59b] focus:outline-none focus:border-[#5cf59b] w-36 font-mono"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#8ef7b8]">PMT (Payment):</span>
                        <input
                            type="number"
                            value={pmt}
                            onChange={(e) => setPmt(Number(e.target.value))}
                            className="bg-[#121c17] text-right px-3 py-1 rounded border border-[#2b4d3a] text-[#5cf59b] focus:outline-none focus:border-[#5cf59b] w-36 font-mono"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#8ef7b8]">FV (Future Value):</span>
                        <input
                            type="number"
                            value={fv}
                            onChange={(e) => setFv(Number(e.target.value))}
                            className="bg-[#121c17] text-right px-3 py-1 rounded border border-[#2b4d3a] text-[#5cf59b] focus:outline-none focus:border-[#5cf59b] w-36 font-mono"
                        />
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#294233] flex justify-between items-center">
                    <span className="text-xs text-[#8ef7b8]">SOLVED VARIABLE [{activeVariable}]:</span>
                    <span className="text-2xl font-bold text-white tracking-wide">{solvedOutput}</span>
                </div>
            </div>

            {/* TI-84 Keypad Action Solvers */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 font-sans">
                <Button
                    onClick={() => solve('PMT')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg border border-emerald-400/30 flex flex-col items-center gap-1"
                >
                    <Zap size={18} />
                    <span className="text-xs">SOLVE PMT</span>
                </Button>

                <Button
                    onClick={() => solve('PV')}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg border border-blue-400/30 flex flex-col items-center gap-1"
                >
                    <Zap size={18} />
                    <span className="text-xs">SOLVE PV</span>
                </Button>

                <Button
                    onClick={() => solve('FV')}
                    className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl shadow-lg border border-purple-400/30 flex flex-col items-center gap-1"
                >
                    <Zap size={18} />
                    <span className="text-xs">SOLVE FV</span>
                </Button>

                <Button
                    onClick={() => {
                        setN(60);
                        setIy(6.5);
                        setPv(-30000);
                        setPmt(586.98);
                        setFv(0);
                        setSolvedOutput("0");
                        setLastAction("RESET MEMORY");
                    }}
                    variant="outline"
                    className="bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800 py-4 rounded-xl flex flex-col items-center gap-1"
                >
                    <RotateCcw size={18} />
                    <span className="text-xs">RESET</span>
                </Button>

                <div className="col-span-3 md:col-span-1 bg-slate-900 border border-slate-800 p-2 rounded-xl flex items-center justify-center text-xs text-slate-400 text-center">
                    Press SOLVE to compute TVM variables
                </div>
            </div>
        </div>
    );
}
