"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    ArrowRight,
    Calculator,
    ShieldCheck,
    Zap,
    Search,
    Car,
    Truck,
    Wrench,
    Building2,
    Briefcase,
    Sparkles,
    Flame,
    CheckCircle2,
    TrendingUp,
    Star,
    Globe,
    Lock,
    Users,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { calculatorCategories, getAllCalculators } from "@/config/calculators";
import { cn } from "@/lib/utils";
import { BlogSection } from "@/components/home/blog-section";
import { useLanguage } from "@/components/providers/LanguageContext";

export default function HomePage() {
    const { t, tCategory } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");
    const allCalculators = getAllCalculators();

    const filteredCalculators = searchQuery.trim() === ""
        ? []
        : allCalculators.filter(c =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div className="flex flex-col gap-28 pb-20 bg-soft-blue/30 overflow-hidden min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 lg:pt-32 text-center container-custom">
                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/10 blur-[120px] -z-10 rounded-full" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-indigo-100 shadow-sm text-xs font-bold mb-8 text-indigo-700 uppercase tracking-widest">
                        <Flame className="h-4 w-4 text-orange-500 animate-bounce" />
                        {t("heroBadge")}
                    </div>

                    <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-5xl mx-auto">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">{t("heroTitlePrefix")}</span> <br />
                        {t("heroTitleSuffix")}
                    </h1>

                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
                        {t("heroSubtitle")}
                    </p>

                    {/* Instant Search Bar */}
                    <div className="max-w-2xl mx-auto relative mb-8">
                        <div className="relative flex items-center">
                            <Search className="absolute left-5 text-slate-400 h-5 w-5" />
                            <Input
                                type="text"
                                placeholder={t("searchPlaceholder")}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-16 pl-14 pr-6 rounded-full text-base bg-white/95 backdrop-blur-xl border-2 border-indigo-200 shadow-xl focus-visible:ring-indigo-500 font-sans"
                            />
                        </div>

                        {/* Live Search Results Dropdown */}
                        {searchQuery.trim() !== "" && (
                            <div className="absolute top-20 left-0 right-0 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 text-left max-h-96 overflow-y-auto">
                                {filteredCalculators.length > 0 ? (
                                    <div className="p-2 divide-y divide-slate-100">
                                        {filteredCalculators.map((calc) => (
                                            <Link
                                                key={calc.slug}
                                                href={`/calculators/${calc.categorySlug}/${calc.slug}`}
                                                className="p-4 hover:bg-slate-50 flex items-start justify-between group transition-colors block"
                                            >
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                                                        {calc.name}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 line-clamp-1">{calc.description}</p>
                                                </div>
                                                <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full whitespace-nowrap ml-2">
                                                    {tCategory(calc.categorySlug, calc.categoryName)}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-8 text-center text-slate-500">
                                        No calculator matching "{searchQuery}". Browse sections below.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Quick Launch Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <Link href="#auto-vehicle-finance">
                            <Button size="lg" className="h-12 px-8 rounded-full shadow-premium text-base bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-none transition-all hover:scale-105">
                                {t("browseAuto")}
                            </Button>
                        </Link>
                        <Link href="#sections">
                            <Button variant="outline" size="lg" className="h-12 px-8 rounded-full bg-white/70 border-slate-200 hover:bg-white text-base text-slate-900 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                                {t("exploreAll")}
                            </Button>
                        </Link>
                    </div>

                    {/* Interactive Mock Dashboard UI Banner */}
                    <div className="relative mx-auto max-w-5xl">
                        <div className="relative rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-xl p-3 shadow-2xl ring-1 ring-slate-900/5">
                            <div className="rounded-2xl bg-slate-950 text-white overflow-hidden p-6 md:p-8 text-left">
                                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-rose-500" />
                                        <div className="h-3 w-3 rounded-full bg-amber-500" />
                                        <div className="h-3 w-3 rounded-full bg-emerald-500" />
                                        <span className="text-xs text-slate-400 font-mono ml-2">FINANCERSLOT ENGINE DEMO</span>
                                    </div>
                                    <div className="text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                                        60 ACTIVE CALCULATORS
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-xs text-slate-400 uppercase font-semibold">Sample Loan Calculation</span>
                                            <h3 className="text-3xl font-extrabold text-white mt-1">$45,000 Audi Vehicle</h3>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between text-slate-400">
                                                <span>Estimated Payment:</span>
                                                <span className="font-bold text-emerald-400">$753 / mo</span>
                                            </div>
                                            <div className="flex justify-between text-slate-400">
                                                <span>Total Interest:</span>
                                                <span className="font-semibold text-slate-200">$5,180</span>
                                            </div>
                                            <div className="flex justify-between text-slate-400">
                                                <span>Bi-Weekly Option:</span>
                                                <span className="font-semibold text-cyan-300">$376 / 2 wks</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
                                        <div className="flex justify-between items-center mb-4 text-xs text-slate-400">
                                            <span>Loan Balance vs Repayment Trajectory</span>
                                            <span className="text-indigo-400 font-semibold">60 Months Term</span>
                                        </div>
                                        <div className="h-36 flex items-end justify-between gap-2 pt-4">
                                            {[100, 88, 76, 64, 52, 40, 28, 16, 6, 0].map((h, i) => (
                                                <div key={i} className="w-full bg-slate-800 rounded-t-md relative group h-full flex items-end">
                                                    <div
                                                        className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-md transition-all duration-700 group-hover:from-indigo-500 group-hover:to-pink-500"
                                                        style={{ height: `${h}%` }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Feature Pill */}
                        <div className="absolute -left-8 top-16 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden lg:block text-left">
                            <div className="flex items-center gap-3">
                                <div className="bg-indigo-600 p-2.5 rounded-xl text-white"><TrendingUp size={18} /></div>
                                <div>
                                    <div className="text-xs text-slate-500 font-medium">Bi-Weekly Savings</div>
                                    <div className="text-sm font-bold text-slate-900">Save up to $1,800+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Interactive Solvers Banner */}
            <section className="container-custom">
                <div className="bg-slate-950 rounded-[2.5rem] p-8 lg:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-slate-800 pb-6">
                        <div>
                            <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-widest mb-1">
                                <Star size={14} className="fill-purple-400" /> {t("interactiveSolvers")}
                            </div>
                            <h2 className="text-3xl font-bold text-white">{t("powerSolversTitle")}</h2>
                        </div>
                        <p className="text-slate-400 text-sm max-w-md">
                            {t("powerSolversDesc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "TI-84 TVM Solver",
                                desc: "Texas Instruments simulator solving for N, I/Y, PV, PMT, FV.",
                                link: "/calculators/specialized-solvers-ai/finance-calculator-ti-84",
                                badge: "Simulator",
                                badgeBg: "bg-emerald-500/20 text-emerald-400"
                            },
                            {
                                title: "AI Finance Assistant",
                                desc: "Natural language financial prompt parser & automated solver.",
                                link: "/calculators/specialized-solvers-ai/finance-calculator-ai",
                                badge: "AI Powered",
                                badgeBg: "bg-purple-500/20 text-purple-400"
                            },
                            {
                                title: "Bi-Weekly Comparator",
                                desc: "Side-by-side comparison of 26 half-payments vs monthly loan cost.",
                                link: "/calculators/mortgage-property-housing/car-finance-calculator-bi-weekly",
                                badge: "Savings Engine",
                                badgeBg: "bg-blue-500/20 text-blue-400"
                            },
                            {
                                title: "Zoya Zakat Solver",
                                desc: "Halal net wealth 2.5% Zakat calculator for stocks, crypto, cash.",
                                link: "/calculators/specialized-solvers-ai/zoya-finance-zakat-calculator",
                                badge: "Islamic Finance",
                                badgeBg: "bg-teal-500/20 text-teal-400"
                            }
                        ].map((card, i) => (
                            <Link key={i} href={card.link} className="group">
                                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col justify-between hover:-translate-y-1 shadow-lg">
                                    <div>
                                        <span className={cn("text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full inline-block mb-4", card.badgeBg)}>
                                            {card.badge}
                                        </span>
                                        <h3 className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
                                    </div>
                                    <div className="mt-6 flex items-center gap-1 text-xs font-bold text-purple-400 group-hover:translate-x-1 transition-transform">
                                        {t("launchSolver")} <ArrowRight size={14} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION BY SECTION 60-CALCULATOR DIRECTORY */}
            <div id="sections" className="container-custom space-y-24">
                {calculatorCategories.map((category) => (
                    <section key={category.id} id={category.slug} className="scroll-mt-24">
                        {/* Section Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200/80 gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-2">
                                    <category.icon size={16} /> {t("categorySection")} ({category.calculators.length} {t("tools")})
                                </div>
                                <h2 className="text-3xl font-extrabold text-slate-900">{tCategory(category.slug, category.name)}</h2>
                                <p className="text-slate-500 text-sm mt-1 max-w-2xl">{category.description}</p>
                            </div>
                            <Link
                                href={`/calculators/${category.slug}`}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 py-2.5 rounded-full transition-colors self-start md:self-auto"
                            >
                                {t("viewCategoryHub")} <ArrowUpRight size={14} />
                            </Link>
                        </div>

                        {/* Calculator Grid for this Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.calculators.map((calc) => (
                                <div
                                    key={calc.slug}
                                    className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                                                <Calculator size={20} />
                                            </div>
                                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                {tCategory(category.slug, calc.categoryName)}
                                            </span>
                                        </div>

                                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                                            {calc.name}
                                        </h3>

                                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-6">
                                            {calc.description}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/calculators/${calc.categorySlug}/${calc.slug}`}
                                        className="inline-flex items-center justify-between w-full font-bold text-xs text-indigo-600 group-hover:text-indigo-700 bg-indigo-50/80 group-hover:bg-indigo-100 px-4 py-3 rounded-2xl transition-colors"
                                    >
                                        <span>{t("useCalculator")} {calc.name}</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Platform Features Section */}
            <section className="container-custom relative">
                <div className="bg-white rounded-[2.5rem] p-10 lg:p-16 shadow-sm border border-slate-200/80 relative overflow-hidden text-center">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="h-16 w-16 mx-auto bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-indigo-600">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{t("fastAccurate")}</h2>
                        <p className="text-slate-600 leading-relaxed mb-12 text-base">
                            {t("freeForever")}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { title: t("freeAccess"), icon: ShieldCheck },
                                { title: t("noSignUp"), icon: Globe },
                                { title: t("realTimeSliders"), icon: Zap },
                                { title: t("instantExport"), icon: Briefcase },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <item.icon className="h-5 w-5 text-indigo-600" />
                                    <h4 className="font-bold text-xs tracking-wide uppercase text-slate-800">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <BlogSection />
        </div>
    );
}

