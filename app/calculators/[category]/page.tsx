import { use } from "react";
import { calculatorCategories } from "@/config/calculators";
import Link from "next/link";
import { ChevronRight, Calculator, ArrowRight, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = use(params);
    const categoryConfig = calculatorCategories.find(c => c.slug === category);


    if (!categoryConfig) {
        return (
            <div className="container-custom py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
                <p className="text-muted-foreground mb-10">The calculator category you are looking for does not exist.</p>
                <Link href="/" className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] bg-primary-600 text-white shadow-soft hover:bg-primary-700 hover:shadow-glow h-11 px-6 py-2">Go Back Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-soft-blue/30">
            <div className="container-custom py-16">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                    <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-slate-900 font-bold">{categoryConfig.name}</span>
                </nav>

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-100">
                            {categoryConfig.calculators.length} Calculators Available
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">{categoryConfig.name} <span className="text-blue-600">Hub</span></h1>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            Professional-grade tools for {categoryConfig.name.toLowerCase()} results. Optimized for accuracy and ease of use.
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                            <Grid size={32} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryConfig.calculators.map((item, i) => (
                        <div
                            key={item.slug}
                            className="h-full"
                        >
                            <Link
                                href={`/calculators/${categoryConfig.slug}/${item.slug}`}
                                className="group block premium-card p-8 h-full border-primary-500/5 hover:border-primary-600/20"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="h-12 w-12 rounded-2xl bg-muted group-hover:bg-primary-600 group-hover:text-white transition-all flex items-center justify-center">
                                        <Calculator className="h-6 w-6" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{item.name}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-8">
                                    {item.description}
                                </p>
                                <div className="flex items-center text-sm font-bold text-primary-600 group-hover:gap-3 gap-1 transition-all">
                                    Use {item.name} <ArrowRight className="h-4 w-4" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
