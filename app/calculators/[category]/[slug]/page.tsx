"use client";

import { calculatorCategories } from "@/config/calculators";
import { CalculatorRegistry } from "@/components/calculators/registry";
import { notFound } from "next/navigation";
import * as React from "react";

type Params = Promise<{
    category: string;
    slug: string;
}>;

export default function CalculatorPage({ params }: { params: Params }) {
    const { category, slug } = React.use(params);

    const categoryConfig = calculatorCategories.find(c => c.slug === category);

    if (!categoryConfig) return notFound();

    const item = categoryConfig.calculators.find(i => i.slug === slug);
    if (!item) return notFound();

    return <CalculatorRegistry item={item} category={categoryConfig} />;
}
