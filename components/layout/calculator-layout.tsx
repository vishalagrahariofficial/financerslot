"use client";

import React from "react";
import Link from "next/link";
import {
    Calculator,
    ChevronRight,
    Share2,
    Download,
    Bookmark,
    HelpCircle,
    TrendingUp,
    Info
} from "lucide-react";
import { calculatorCategories } from "@/config/calculators";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageContext";

// Helper to get theme classes
const getThemeClasses = (theme?: string) => {
    switch (theme) {
        case "blue": return { text: "text-blue-600", bg: "bg-blue-600", bgLight: "bg-blue-50", border: "border-blue-600", glow: "shadow-blue-500/20" };
        case "green": return { text: "text-green-600", bg: "bg-green-600", bgLight: "bg-green-50", border: "border-green-600", glow: "shadow-green-500/20" };
        case "emerald": return { text: "text-emerald-600", bg: "bg-emerald-600", bgLight: "bg-emerald-50", border: "border-emerald-600", glow: "shadow-emerald-500/20" };
        case "teal": return { text: "text-teal-600", bg: "bg-teal-600", bgLight: "bg-teal-50", border: "border-teal-600", glow: "shadow-teal-500/20" };
        case "cyan": return { text: "text-cyan-600", bg: "bg-cyan-600", bgLight: "bg-cyan-50", border: "border-cyan-600", glow: "shadow-cyan-500/20" };
        case "sky": return { text: "text-sky-600", bg: "bg-sky-600", bgLight: "bg-sky-50", border: "border-sky-600", glow: "shadow-sky-500/20" };
        case "indigo": return { text: "text-indigo-600", bg: "bg-indigo-600", bgLight: "bg-indigo-50", border: "border-indigo-600", glow: "shadow-indigo-500/20" };
        case "violet": return { text: "text-violet-600", bg: "bg-violet-600", bgLight: "bg-violet-50", border: "border-violet-600", glow: "shadow-violet-500/20" };
        case "purple": return { text: "text-purple-600", bg: "bg-purple-600", bgLight: "bg-purple-50", border: "border-purple-600", glow: "shadow-purple-500/20" };
        case "fuchsia": return { text: "text-fuchsia-600", bg: "bg-fuchsia-600", bgLight: "bg-fuchsia-50", border: "border-fuchsia-600", glow: "shadow-fuchsia-500/20" };
        case "pink": return { text: "text-pink-600", bg: "bg-pink-600", bgLight: "bg-pink-50", border: "border-pink-600", glow: "shadow-pink-500/20" };
        case "rose": return { text: "text-rose-600", bg: "bg-rose-600", bgLight: "bg-rose-50", border: "border-rose-600", glow: "shadow-rose-500/20" };
        case "red": return { text: "text-red-600", bg: "bg-red-600", bgLight: "bg-red-50", border: "border-red-600", glow: "shadow-red-500/20" };
        case "orange": return { text: "text-orange-600", bg: "bg-orange-600", bgLight: "bg-orange-50", border: "border-orange-600", glow: "shadow-orange-500/20" };
        case "amber": return { text: "text-amber-600", bg: "bg-amber-600", bgLight: "bg-amber-50", border: "border-amber-600", glow: "shadow-amber-500/20" };
        case "slate": return { text: "text-slate-600", bg: "bg-slate-600", bgLight: "bg-slate-50", border: "border-slate-600", glow: "shadow-slate-500/20" };
        default: return { text: "text-primary-600", bg: "bg-primary-600", bgLight: "bg-primary-50", border: "border-primary-600", glow: "shadow-primary-500/20" };
    }
};

interface CalculatorLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    category: string;
    categorySlug: string;
    themeColor?: string;
}

export function CalculatorLayout({
    children,
    title,
    description,
    category,
    categorySlug,
    themeColor = "blue", // Default theme
}: CalculatorLayoutProps & { themeColor?: string }) {
    const { t, tCategory } = useLanguage();
    const theme = getThemeClasses(themeColor);

    const allCalculators = React.useMemo(() => {
        return calculatorCategories.flatMap(cat =>
            cat.calculators.map(calc => ({
                ...calc,
                categorySlug: cat.slug
            }))
        ).filter(c => c.name !== title);
    }, [title]);

    return (
        <div className="container-custom py-10 lg:py-16">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-foreground transition-colors">{t("home")}</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href={`/calculators/${categorySlug}`} className="hover:text-foreground transition-colors">{tCategory(categorySlug, category)}</Link>
                <ChevronRight className="h-4 w-4" />
                <span className={cn("font-medium truncate", theme.text)}>{title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Calculator Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                        <div className="max-w-2xl">
                            <h1 className={cn("text-3xl md:text-4xl font-bold mb-3 tracking-tight", theme.text)}>{title}</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 btn-hover-effect">
                                <Bookmark className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 btn-hover-effect">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* This is where the specific calculator component will render */}
                    <div className={cn("premium-card p-0 md:p-8 lg:p-10 mb-12 shadow-xl overflow-hidden border", theme.border.replace("border-", "border-").concat("/20"))}>
                        {children}
                    </div>

                    {/* Calculator SEO/Info Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                        <section className="space-y-6">
                            <div className={cn("flex items-center gap-2", theme.text)}>
                                <Info className="h-5 w-5" />
                                <h3 className="text-xl font-bold">{t("howToUse")}</h3>
                            </div>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed">
                                <p>Simple and intuitive to use. Just follow these steps:</p>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Enter the required values in the input fields above.</li>
                                    <li>Use the interactive sliders for quick adjustments.</li>
                                    <li>Watch the results update in real-time on the results dashboard.</li>
                                    <li>Analyze the charts and graphs for a visual breakdown of your data.</li>
                                    <li>Download or save your results for future reference.</li>
                                </ol>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <div className={cn("flex items-center gap-2", theme.text)}>
                                <TrendingUp className="h-5 w-5" />
                                <h3 className="text-xl font-bold">{t("whyUse")} {title}?</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our {title} is designed for accuracy and speed. We use industry-standard formulas to ensure you get the most reliable results for your financial planning. Whether you're a beginner or a professional, this tool provides the detailed insights needed to make informed decisions.
                            </p>
                            <div className={cn("p-4 rounded-xl border-l-4 text-[13px]", theme.bgLight, theme.border)}>
                                <strong>Pro Tip:</strong> Use the interactive sliders and amortization report to optimize your financial planning!
                            </div>
                        </section>
                    </div>

                    <section className="mt-20 pt-20 border-t items-center flex flex-col">
                        <div className={cn("flex items-center gap-2 mb-10", theme.text)}>
                            <HelpCircle className="h-6 w-6" />
                            <h2 className="text-2xl font-bold">{t("faq")}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={cn("bg-card border rounded-2xl p-6 transition-colors cursor-pointer group hover:border-current", theme.text.replace("text-", "hover:border-"))}>
                                    <h4 className={cn("font-bold text-sm mb-2 group-hover:text-current")}>Common Question #{i} about {title}?</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">Detailed answer explaining the concept, how the calculator works, and what the results imply for the user.</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar / Related Calculators */}
                <aside className="lg:w-80 space-y-8">
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg px-2">{t("moreTools")}</h4>
                        <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {allCalculators.map((calc, i) => (
                                <Link key={i} href={`/calculators/${calc.categorySlug}/${calc.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors border-transparent border hover:border-border group">
                                    <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center bg-muted transition-colors group-hover:bg-white", theme.text)}>
                                        <Calculator className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{calc.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

