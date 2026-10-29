"use client";

import Link from "next/link";
import { Calculator, Linkedin, Facebook, Mail, ArrowUpRight } from "lucide-react";
import { calculatorCategories } from "@/config/calculators";
import { useLanguage } from "@/components/providers/LanguageContext";

export function Footer() {
    const { t, tCategory } = useLanguage();

    return (
        <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Column 1: Brand & Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-indigo-600 p-2 rounded-xl shadow-glow text-white">
                                <Calculator className="h-6 w-6" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-tighter text-white">
                                Financer<span className="text-indigo-500">slot</span>
                            </span>
                        </Link>

                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            The world's most comprehensive 60-calculator financial platform. Built for precision, speed, and mathematical transparency.
                        </p>

                        {/* Contact Email Display */}
                        <div className="flex items-center gap-2 text-sm text-indigo-300 bg-slate-800/80 p-3 rounded-2xl border border-slate-700/60 max-w-xs">
                            <Mail className="h-4 w-4 text-indigo-400 shrink-0" />
                            <a href="mailto:contact@financerslot.com" className="hover:underline font-semibold truncate">
                                contact@financerslot.com
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://www.linkedin.com/company/financerslot/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-11 w-11 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all shadow-sm"
                                aria-label="LinkedIn Company Page"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61578340083707"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-11 w-11 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all shadow-sm"
                                aria-label="Facebook Profile Page"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:contact@financerslot.com"
                                className="h-11 w-11 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all shadow-sm"
                                aria-label="Send Email to FinancerSlot"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Popular Hubs */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-indigo-400">{t("popularHubs")}</h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            {calculatorCategories.slice(0, 4).map((category) => (
                                <li key={category.id}>
                                    <Link href={`/calculators/${category.slug}`} className="hover:text-white transition-colors flex items-center gap-1 group text-xs font-medium">
                                        {tCategory(category.slug, category.name)} <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Calculator Suites */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-indigo-400">{t("calculators")}</h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            {calculatorCategories.slice(4).map((category) => (
                                <li key={category.id}>
                                    <Link href={`/calculators/${category.slug}`} className="hover:text-white transition-colors flex items-center gap-1 group text-xs font-medium">
                                        {tCategory(category.slug, category.name)} <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Legal & Policy */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-indigo-400">{t("legalPrivacy")}</h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map(item => {
                                const slug = item.toLowerCase().replace(/\s+/g, "-");
                                return (
                                    <li key={item}>
                                        <Link href={`/${slug}`} className="hover:text-white transition-colors text-xs font-medium">{item}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p className="italic">
                        &copy; {new Date().getFullYear()} FinancerSlot. {t("copyright")}
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <a href="mailto:contact@financerslot.com" className="hover:text-indigo-400 font-semibold transition-colors">
                            contact@financerslot.com
                        </a>
                        <span className="text-slate-700">|</span>
                        <a href="https://www.linkedin.com/company/financerslot/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                            LinkedIn
                        </a>
                        <span className="text-slate-700">|</span>
                        <a href="https://www.facebook.com/profile.php?id=61578340083707" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

