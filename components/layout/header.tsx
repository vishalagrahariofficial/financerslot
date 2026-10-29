"use client";

import * as React from "react";
import Link from "next/link";
import {
    ChevronDown,
    Menu,
    X,
    Moon,
    Sun,
    Search,
    ArrowRight,
    ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { calculatorCategories } from "@/config/calculators";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageContext";
import { usePathname } from "next/navigation";

export function Header() {
    const { t, tCategory, tCategoryShort } = useLanguage();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
    const [mobileExpandedCat, setMobileExpandedCat] = React.useState<string | null>(null);
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-all duration-200">
            {/* Top Subtle Purple Tint Accent Bar (matching reference photo) */}
            <div className="h-1.5 w-full bg-gradient-to-r from-purple-100 via-indigo-200 to-pink-100 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950" />

            <div className="container-custom flex items-center justify-between h-16 px-4 md:px-8">
                {/* Left Brand Logo + Vertical Divider (matching reference photo) */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center group">
                        <span className="font-extrabold text-2xl text-slate-900 dark:text-white tracking-tight">
                            Financer<span className="text-indigo-600 dark:text-indigo-400">slot</span>
                        </span>
                    </Link>

                    {/* Vertical Divider (matching reference photo) */}
                    <div className="hidden sm:block h-6 w-[1.5px] bg-slate-200 dark:bg-slate-700 mx-5" />
                </div>

                {/* Center Horizontal Navigation Links (matching reference photo with blue active underline indicator) */}
                <nav className="hidden xl:flex items-center gap-6 lg:gap-8">
                    {calculatorCategories.map((category) => {
                        const isActive = pathname.includes(category.slug) || activeDropdown === category.id;
                        return (
                            <div
                                key={category.id}
                                className="relative py-4"
                                onMouseEnter={() => setActiveDropdown(category.id)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={cn(
                                        "text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
                                        isActive
                                            ? "text-indigo-600 dark:text-indigo-400 font-extrabold"
                                            : "text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                                    )}
                                >
                                    <span>{tCategoryShort(category.slug, category.name)}</span>
                                    <ChevronDown className={cn("h-3 w-3 transition-transform opacity-60", activeDropdown === category.id && "rotate-180 opacity-100")} />
                                </button>

                                {/* Solid Blue Active Underline Tab Bar (matching reference photo) */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeHeaderTab"
                                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-indigo-600 dark:bg-indigo-400 rounded-full"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}

                                {/* Dropdown Mega Menu */}
                                <AnimatePresence>
                                    {activeDropdown === category.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 6 }}
                                            transition={{ duration: 0.15 }}
                                            className={cn(
                                                "absolute top-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-5 z-50",
                                                category.calculators.length > 10 ? "w-[580px] -left-24 grid grid-cols-2 gap-3" : "w-[360px] left-0 flex flex-col gap-2"
                                            )}
                                        >
                                            <div className="col-span-full pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <category.icon className="h-4 w-4 text-indigo-600" />
                                                    <span className="font-extrabold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                                                        {tCategory(category.slug, category.name)}
                                                    </span>
                                                </div>
                                                <span className="text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-2.5 py-0.5 rounded-full">
                                                    {category.calculators.length} {t("tools")}
                                                </span>
                                            </div>

                                            <div className={cn("max-h-[50vh] overflow-y-auto custom-scrollbar pr-1", category.calculators.length > 10 && "col-span-full grid grid-cols-2 gap-x-4 gap-y-1")}>
                                                {category.calculators.map((calc) => (
                                                    <Link
                                                        key={calc.slug}
                                                        href={`/calculators/${category.slug}/${calc.slug}`}
                                                        className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center justify-between group/item font-semibold text-xs text-slate-700 dark:text-slate-300"
                                                    >
                                                        <span className="truncate pr-2">{calc.name}</span>
                                                        <ArrowRight size={12} className="opacity-0 group-hover/item:opacity-100 text-indigo-600 transition-opacity shrink-0" />
                                                    </Link>
                                                ))}
                                            </div>

                                            <div className="col-span-full pt-3 border-t border-slate-100 dark:border-slate-800 mt-2">
                                                <Link
                                                    href={`/calculators/${category.slug}`}
                                                    className="flex items-center justify-between text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40 p-2.5 rounded-xl transition-colors"
                                                >
                                                    <span>{t("viewAllTools")}</span>
                                                    <ArrowUpRight size={12} />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </nav>

                {/* Right Action Controls (matching photo style with rounded outline button) */}
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
                    </button>

                    {/* Outlined Action Pill Button (matching rounded rectangle "Sign Up" style from reference image) */}
                    <Link
                        href="#sections"
                        className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold text-slate-900 dark:text-white border border-slate-400 dark:border-slate-600 rounded-lg hover:border-slate-900 dark:hover:border-white transition-colors"
                    >
                        Explore All 60
                    </Link>

                    {/* Mobile Menu Trigger */}
                    <button
                        className="p-2 xl:hidden text-slate-800 dark:text-slate-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
                    >
                        <div className="container-custom py-6 px-4 space-y-4 max-h-[80vh] overflow-y-auto">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">
                                60 Financial Calculators
                            </div>

                            {calculatorCategories.map((category) => {
                                const isExpanded = mobileExpandedCat === category.id;
                                return (
                                    <div key={category.id} className="border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/50">
                                        <button
                                            onClick={() => setMobileExpandedCat(isExpanded ? null : category.id)}
                                            className="w-full flex items-center justify-between p-3.5 font-bold text-sm text-slate-900 dark:text-white"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <category.icon className="h-4 w-4 text-indigo-600" />
                                                <span>{tCategory(category.slug, category.name)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full font-semibold">
                                                    {category.calculators.length}
                                                </span>
                                                <ChevronDown className={cn("h-4 w-4 transition-transform text-slate-400", isExpanded && "rotate-180")} />
                                            </div>
                                        </button>

                                        {isExpanded && (
                                            <div className="p-3 pt-0 space-y-1 border-t border-slate-200/50 dark:border-slate-800/50">
                                                {category.calculators.map((calc) => (
                                                    <Link
                                                        key={calc.slug}
                                                        href={`/calculators/${category.slug}/${calc.slug}`}
                                                        className="block text-xs py-2 px-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 font-medium"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {calc.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}



