"use client";

import { useState } from "react";
import { CalculatorDefinition, CategoryDefinition } from "@/config/calculators";
import { getArticleForCalculator } from "@/lib/calculator-article-content";
import { BookOpen, CheckCircle2, ChevronDown, ChevronUp, HelpCircle, Lightbulb, Info, Scale, ArrowRight } from "lucide-react";

interface CalculatorArticleProps {
    calculator: CalculatorDefinition;
    category: CategoryDefinition;
}

export function CalculatorArticle({ calculator, category }: CalculatorArticleProps) {
    const article = getArticleForCalculator(calculator, category);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    if (article.htmlContent) {
        return (
            <article className="mt-12 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200/80 dark:border-slate-800 space-y-8 font-sans text-slate-800 dark:text-slate-200">
                {article.faqSchema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(article.faqSchema) }}
                    />
                )}
                <div 
                    className="article-body prose dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.htmlContent }} 
                />
            </article>
        );
    }

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <article className="mt-12 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200/80 dark:border-slate-800 space-y-12 font-sans text-slate-800 dark:text-slate-200">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <BookOpen size={14} /> Comprehensive Financial Guide & Formula Analysis
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                    Ultimate Guide to {calculator.name}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-base mt-2">
                    Master the mechanics, mathematical formulas, step-by-step examples, and expert FAQs for {calculator.name.toLowerCase()}.
                </p>
            </div>

            <section className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Info size={22} className="text-indigo-600 dark:text-indigo-400" />
                    1. Introduction
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                    {article.intro}
                </p>
            </section>
        </article>
    );
}
