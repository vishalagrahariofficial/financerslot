"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, TrendingUp, DollarSign, PieChart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogPosts = [
    {
        id: 1,
        title: "5 Smart Ways to Beat Inflation in 2026",
        excerpt: "Inflation can erode your savings. Discover actionable strategies to protect your purchasing power and grow your wealth.",
        date: "Jan 15, 2026",
        author: "Sarah Jenkins",
        category: "Personal Finance",
        icon: TrendingUp,
        color: "bg-blue-100 text-blue-600"
    },
    {
        id: 2,
        title: "The Ultimate Guide to Tax Harvesting",
        excerpt: "Learn how to legally reduce your tax liability by strategically selling losing investments to offset gains.",
        date: "Jan 10, 2026",
        author: "Michael Ross",
        category: "Tax Planning",
        icon: DollarSign,
        color: "bg-green-100 text-green-600"
    },
    {
        id: 3,
        title: "Retirement: How Much is Really Enough?",
        excerpt: "We break down the math behind retirement planning and help you calculate your magic number.",
        date: "Jan 05, 2026",
        author: "Elena Rodriguez",
        category: "Retirement",
        icon: PieChart,
        color: "bg-purple-100 text-purple-600"
    }
];

export function BlogSection() {
    return (
        <section className="container-custom pt-20 pb-10">
            <div className="bg-white rounded-[2rem] p-10 lg:p-14 shadow-sm border relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-xs font-bold mb-4 text-blue-600 uppercase tracking-wider">
                            Financial Insights
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Latest from our experts</h2>
                        <p className="text-muted-foreground text-lg">
                            Stay ahead of the curve with our latest articles, guides, and market analysis.
                        </p>
                    </div>
                    <Link href="/blog">
                        <Button variant="outline" className="gap-2">
                            View All Articles <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-slate-50 border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-48 w-full ${post.color} flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity`}>
                                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <post.icon size={48} className="opacity-80" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User size={12} /> {post.author}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                    <Link href={`/blog/${post.id}`} className="hover:underline">
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-500 mb-6 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mt-auto group/link"
                                >
                                    Read Article
                                    <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
