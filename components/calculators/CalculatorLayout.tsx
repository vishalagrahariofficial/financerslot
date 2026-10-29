
import Link from "next/link";
import { ChevronRight, Save, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalculatorDefinition, CategoryDefinition } from "@/config/calculators";

interface CalculatorLayoutProps {
    calculator: CalculatorDefinition;
    category: CategoryDefinition; // Added category prop for breadcrumbs and context
    children: React.ReactNode;
}

export function CalculatorLayout({ calculator, category, children }: CalculatorLayoutProps) {
    return (
        <div className="min-h-screen bg-soft-blue/30">
            <div className="container-custom py-10">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href={`/calculators/${category.slug}`} className="hover:text-primary-600 transition-colors">
                        {category.name}
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-slate-900 font-bold">{calculator.name}</span>
                </nav>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{calculator.name}</h1>
                        <p className="text-slate-500 max-w-2xl">{calculator.description}</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Share2 className="h-4 w-4" /> Share
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                            <Save className="h-4 w-4" /> Save
                        </Button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Calculator Interface (Left/Center) */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 md:p-8">
                            {children}
                        </div>

                        {/* Content/SEO Section */}
                        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 md:p-8 prose prose-slate max-w-none">
                            <h2>How to use this {calculator.name}</h2>
                            <p>
                                Enter your details in the inputs above to get instant results. This {calculator.name.toLowerCase()} helps you plan your financials better by providing accurate estimates based on standard formulas.
                            </p>
                            {/* Add more SEO content placeholders here */}
                        </div>
                    </div>

                    {/* Sidebar / Related (Right) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-primary-900 text-white rounded-[2rem] p-8">
                            <h3 className="text-xl font-bold mb-4">Need Professional Help?</h3>
                            <p className="text-primary-100 mb-6 text-sm">Get expert advice on your financial planning. Connect with certified financial planners today.</p>
                            <Button className="w-full bg-white text-primary-900 hover:bg-primary-50">Find an Expert</Button>
                        </div>

                        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6">
                            <h3 className="font-bold text-lg mb-4">Related Calculators</h3>
                            <div className="flex flex-col gap-2">
                                {category.calculators
                                    .filter((c: any) => c.slug !== calculator.slug)
                                    .slice(0, 5)
                                    .map((rel: any) => (
                                        <Link
                                            key={rel.slug}
                                            href={`/calculators/${category.slug}/${rel.slug}`}
                                            className="text-sm text-slate-600 hover:text-primary-600 hover:bg-slate-50 p-2 rounded-lg transition-colors"
                                        >
                                            {rel.name}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
