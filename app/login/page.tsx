"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Form */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-24 bg-white">
                <div className="w-full max-w-md mx-auto space-y-8">
                    <div className="space-y-2">
                        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Home
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
                        <p className="text-gray-500">Enter your credentials to access your account</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                <Link href="#" className="text-sm font-medium text-blue-600 hover:underline">Forgot password?</Link>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                            />
                        </div>

                        <Button className="w-full h-12 text-base rounded-xl bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-200">
                            Sign In
                        </Button>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link href="/signup" className="font-bold text-blue-600 hover:underline">
                            Sign up for free
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Column - Visual */}
            <div className="hidden lg:flex flex-col justify-center items-center bg-slate-50 relative overflow-hidden p-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-200/30 blur-[100px] rounded-full" />

                <div className="relative z-10 max-w-lg text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <Calculator className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tighter text-slate-900">Financer<span className="text-blue-600">slot</span></span>
                    </div>

                    <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                        Unlock professional financial insights
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Join thousands of individuals and businesses making smarter money decisions with our suite of 100+ premium calculators.
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-8">
                        {[
                            { label: "Calculators", val: "100+" },
                            { label: "Users", val: "50k+" },
                            { label: "Accuracy", val: "99.9%" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-2xl font-bold text-slate-900">{stat.val}</div>
                                <div className="text-xs font-medium text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
