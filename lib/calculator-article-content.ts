import { CalculatorDefinition, CategoryDefinition } from "@/config/calculators";
import allArticlesData from "./all_articles.json";

export interface FAQItem {
    question: string;
    answer: string;
}

export interface CalculatorArticleData {
    intro: string;
    whatIsHowItWorks: string;
    formulaTitle: string;
    formulaEquation: string;
    formulaExplanation: string;
    exampleTitle: string;
    exampleScenario: string;
    exampleSteps: Array<{ step: string; detail: string }>;
    exampleSummary: string;
    faqs: FAQItem[];
    conclusion: string;
    htmlContent?: string;
    metaTitle?: string;
    metaDesc?: string;
    faqSchema?: any;
}

const articlesMap = allArticlesData as Record<string, any>;

export function getArticleForCalculator(item: CalculatorDefinition, category: CategoryDefinition): CalculatorArticleData {
    const slug = item.slug;
    
    if (articlesMap[slug]) {
        const art = articlesMap[slug];
        return {
            intro: item.description,
            whatIsHowItWorks: "",
            formulaTitle: `${item.name} Formula & Analysis`,
            formulaEquation: "PMT = \\frac{P \\times r \\times (1 + r)^n}{(1 + r)^n - 1}",
            formulaExplanation: "Calculated using standard fixed-rate amortization mathematics.",
            exampleTitle: `Worked Example: ${item.name}`,
            exampleScenario: "Full real-world scenario breakdown.",
            exampleSteps: [],
            exampleSummary: "Detailed schedule analysis.",
            faqs: [],
            conclusion: "Thank you for using FinancersLot.",
            htmlContent: art.content,
            metaTitle: art.meta_title,
            metaDesc: art.meta_desc,
            faqSchema: art.faq_schema
        };
    }

    // Default Fallback
    return {
        intro: `The **${item.name}** on FinancersLot is a comprehensive financial tool designed to simplify calculations for ${item.name.toLowerCase()}.`,
        whatIsHowItWorks: `### What Is ${item.name}?`,
        formulaTitle: `Mathematical Mechanics of ${item.name}`,
        formulaEquation: "PMT = \\frac{P \\times r \\times (1 + r)^n}{(1 + r)^n - 1}",
        formulaExplanation: "Standard financial compounding equation.",
        exampleTitle: `Worked Example for ${item.name}`,
        exampleScenario: "Sample financial calculation model.",
        exampleSteps: [],
        exampleSummary: "Detailed summary.",
        faqs: [],
        conclusion: "Use the calculator above for instant estimates."
    };
}
