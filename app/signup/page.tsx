"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Calculator } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Right Column - Visual (Left in layout for visual balance on signup usually, but let's keep consistent with login mirrored or same) */}
            {/* Let's flip it for variety: Visual Left, Form Right */}
            <div className="hidden lg:flex flex-col justify-center items-center bg-slate-900 relative overflow-hidden p-12 text-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full" />

                <div className="relative z-10 max-w-lg space-y-12">
                    <div>
                        <div className="bg-white/10 backdrop-blur-md w-fit p-3 rounded-2xl border border-white/10 mb-8">
                            <Calculator className="h-8 w-8 text-blue-400" />
                        </div>
                        <h2 className="text-4xl font-bold leading-tight mb-6">
                            Start your journey to financial clarity
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Create an account to save your calculations, track your progress, and access premium corporate tools.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            "Access to 100+ Premium Calculators",
                            "Save and Export Reports (PDF/Excel)",
                            "Personalized Financial Dashboard",
                            "Ad-free Experience"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="bg-green-500/10 p-1 rounded-full text-green-400">
                                    <CheckCircle2 size={18} />
                                </div>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Left Column - Form (Right side now) */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-24 bg-white">
                <div className="w-full max-w-md mx-auto space-y-8">
                    <div className="space-y-2">
                        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Home
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
                        <p className="text-gray-500">Get started with Financerslot for free</p>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="first-name" className="text-sm font-medium text-gray-700">First name</label>
                                <input id="first-name" type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="last-name" className="text-sm font-medium text-gray-700">Last name</label>
                                <input id="last-name" type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input id="email" type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                            <input id="password" type="password" placeholder="Create a password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white" />
                        </div>

                        <Button className="w-full h-12 text-base rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 text-white">
                            Create Account
                        </Button>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/login" className="font-bold text-blue-600 hover:underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
