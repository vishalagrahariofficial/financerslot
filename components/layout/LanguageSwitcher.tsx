"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, LANGUAGE_OPTIONS, LanguageCode } from "@/components/providers/LanguageContext";
import { Globe, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
    const { language, setLanguage, currentLanguageOption } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                aria-label="Select Language"
            >
                <Globe className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm">{currentLanguageOption.flag}</span>
                <span className="hidden sm:inline-block uppercase tracking-wider">{currentLanguageOption.code}</span>
                <ChevronDown className={cn("h-3 w-3 transition-transform text-slate-400", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-1">
                        Select Language
                    </div>
                    <div className="space-y-1">
                        {LANGUAGE_OPTIONS.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition-colors text-left",
                                    language === lang.code
                                        ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold"
                                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                )}
                            >
                                <span className="flex items-center gap-2.5">
                                    <span className="text-base">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </span>
                                {language === lang.code && <Check className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
