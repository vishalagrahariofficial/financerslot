"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Hammer } from "lucide-react";

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-soft-blue/30 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-[2rem] p-8 md:p-12 text-center shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />

                <div className="h-20 w-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-8 text-slate-800">
                    <Hammer size={32} />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100/50 text-yellow-700 text-xs font-bold uppercase tracking-widest mb-6">
                    <Clock size={12} /> Under Construction
                </div>

                <h1 className="text-3xl font-bold text-slate-900 mb-4">Coming Soon</h1>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                    We are currently building this page. The Financerslot team is working hard to bring you the best financial tools on the web.
                </p>

                <div className="space-y-4">
                    <Link href="/">
                        <Button className="w-full h-12 rounded-xl bg-slate-900 hover:bg-slate-800" size="lg">
                            <ArrowLeft size={16} className="mr-2" /> Return Home
                        </Button>
                    </Link>
                    <button className="w-full text-sm font-medium text-slate-500 hover:text-slate-900" onClick={() => window.history.back()}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
