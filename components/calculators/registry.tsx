"use client";

import { CalculatorDefinition, CategoryDefinition } from "@/config/calculators";
import GenericCalculator from "@/components/calculators/generic-calculator";
import { TI84Calculator } from "@/components/calculators/TI84Calculator";
import { AIFinanceAssistant } from "@/components/calculators/AIFinanceAssistant";
import { BiWeeklyComparator } from "@/components/calculators/BiWeeklyComparator";
import { ZakatCalculatorView } from "@/components/calculators/ZakatCalculatorView";
import { CalculatorLayout } from "@/components/layout/calculator-layout";
import { CalculatorArticle } from "@/components/calculators/CalculatorArticle";

export function CalculatorRegistry({ item, category }: { item: CalculatorDefinition, category: CategoryDefinition }) {

    if (item.slug === "finance-calculator-ti-84") {
        return (
            <CalculatorLayout
                title={item.name}
                description={item.description}
                category={category.name}
                categorySlug={category.slug}
                themeColor={item.themeColor}
            >
                <TI84Calculator />
                <CalculatorArticle calculator={item} category={category} />
            </CalculatorLayout>
        );
    }

    if (item.slug === "finance-calculator-ai") {
        return (
            <CalculatorLayout
                title={item.name}
                description={item.description}
                category={category.name}
                categorySlug={category.slug}
                themeColor={item.themeColor}
            >
                <AIFinanceAssistant />
                <CalculatorArticle calculator={item} category={category} />
            </CalculatorLayout>
        );
    }

    if (item.slug === "car-finance-calculator-bi-weekly") {
        return (
            <CalculatorLayout
                title={item.name}
                description={item.description}
                category={category.name}
                categorySlug={category.slug}
                themeColor={item.themeColor}
            >
                <BiWeeklyComparator />
                <CalculatorArticle calculator={item} category={category} />
            </CalculatorLayout>
        );
    }

    if (item.slug === "zoya-finance-zakat-calculator") {
        return (
            <CalculatorLayout
                title={item.name}
                description={item.description}
                category={category.name}
                categorySlug={category.slug}
                themeColor={item.themeColor}
            >
                <ZakatCalculatorView />
                <CalculatorArticle calculator={item} category={category} />
            </CalculatorLayout>
        );
    }

    return <GenericCalculator item={item} category={category} />;
}
