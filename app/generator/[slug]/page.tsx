"use client";

import { calculatorCategories } from "@/config/calculators";
import { CalculatorRegistry } from "@/components/calculators/registry";
import { notFound } from "next/navigation";
import * as React from "react";

type Params = Promise<{
    slug: string;
}>;

export default function GeneratorPage({ params }: { params: Params }) {
    const { slug } = React.use(params);

    // Find generator and category across all categories
    let itemConfig = null;
    let categoryConfig = null;

    for (const cat of calculatorCategories) {
        const found = cat.calculators.find(i => i.slug === slug);
        if (found) {
            itemConfig = found;
            categoryConfig = cat;
            break;
        }
    }

    if (!itemConfig || !categoryConfig) return notFound();

    return <CalculatorRegistry item={itemConfig} category={categoryConfig} />;
}
