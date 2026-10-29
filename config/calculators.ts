import {
    Car,
    Truck,
    Building2,
    Briefcase,
    Calculator,
    Zap,
    Home,
    Wrench,
    Coins,
    Sparkles,
    Shield,
    DollarSign,
    Layers,
    Bot,
    Compass,
    TrendingUp,
    Scale,
    Cpu,
    type LucideIcon
} from "lucide-react";

export interface CalculatorInput {
    name: string;
    label: string;
    defaultValue: number;
    type?: 'currency' | 'percentage' | 'number';
    min?: number;
    max?: number;
    step?: number;
    helpText?: string;
}

export interface CalculatorDefinition {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon?: LucideIcon;
    inputs: CalculatorInput[];
    formulaKey: string;
    resultLabel: string;
    categorySlug: string;
    categoryName: string;
    themeColor?: "blue" | "green" | "emerald" | "teal" | "cyan" | "sky" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "red" | "orange" | "amber" | "yellow" | "slate";
    educationalNote?: string;
    isFeatured?: boolean;
}

export interface CategoryDefinition {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: LucideIcon;
    calculators: CalculatorDefinition[];
}

export const calculatorCategories: CategoryDefinition[] = [
    {
        id: "auto-vehicle-finance",
        name: "Auto & Manufacturer Finance",
        slug: "auto-vehicle-finance",
        description: "Official & aftermarket auto financing calculators for leading vehicle brands and seller-financed car deals.",
        icon: Car,
        calculators: [
            {
                id: "seller-financing-calculator",
                name: "Seller Financing Calculator",
                slug: "seller-financing-calculator",
                description: "Calculate payments, balloon notes, and interest for owner-financed auto or property sales.",
                formulaKey: "calculateSellerFinancing",
                resultLabel: "Monthly Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "purchasePrice", label: "Purchase Price", defaultValue: 25000, type: "currency", min: 1000, max: 500000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 5000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (%)", defaultValue: 7.5, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "amortYears", label: "Amortization Period (Years)", defaultValue: 10, type: "number", min: 1, max: 30, step: 1 },
                    { name: "balloonYears", label: "Balloon Due Date (Years)", defaultValue: 5, type: "number", min: 1, max: 20, step: 1 }
                ],
                themeColor: "indigo",
                isFeatured: true
            },
            {
                id: "audi-finance-calculator",
                name: "Audi Finance Calculator",
                slug: "audi-finance-calculator",
                description: "Estimate monthly loan payments and sales tax for Audi Financial Services models.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Estimated Monthly Audi Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Audi Vehicle Price", defaultValue: 52000, type: "currency", min: 10000, max: 250000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 6000, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "tradeInValue", label: "Trade-in Value", defaultValue: 12000, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "salesTaxRate", label: "Sales Tax Rate (%)", defaultValue: 7, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "APR (%)", defaultValue: 4.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "rose"
            },
            {
                id: "toyota-finance-calculator",
                name: "Toyota Finance Calculator",
                slug: "toyota-finance-calculator",
                description: "Calculate Toyota Financial Services (TFS) monthly payments with trade-in and promotional APR.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Toyota Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Toyota MSRP / Price", defaultValue: 32000, type: "currency", min: 5000, max: 150000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 4000, type: "currency", min: 0, max: 50000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 8000, type: "currency", min: 0, max: 50000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "TFS APR (%)", defaultValue: 3.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "red"
            },
            {
                id: "bmw-finance-calculator",
                name: "BMW Finance Calculator",
                slug: "bmw-finance-calculator",
                description: "BMW Financial Services loan & select payment calculator with luxury options.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly BMW Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "BMW Vehicle Price", defaultValue: 65000, type: "currency", min: 10000, max: 300000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 8000, type: "currency", min: 0, max: 100000, step: 1000 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 15000, type: "currency", min: 0, max: 100000, step: 1000 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "BMW FS APR (%)", defaultValue: 5.49, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "blue"
            },
            {
                id: "ford-finance-calculator",
                name: "Ford Finance Calculator",
                slug: "ford-finance-calculator",
                description: "Estimate monthly payments for Ford Credit trucks, SUVs, and EVs.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Ford Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Ford Vehicle Price", defaultValue: 48000, type: "currency", min: 5000, max: 150000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 5000, type: "currency", min: 0, max: 50000, step: 500 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 10000, type: "currency", min: 0, max: 50000, step: 500 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Ford Credit APR (%)", defaultValue: 4.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 72, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "sky"
            },
            {
                id: "hyundai-finance-calculator",
                name: "Hyundai Finance Calculator",
                slug: "hyundai-finance-calculator",
                description: "Calculate Hyundai Motor Finance (HMF) payments with low APR promos.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Hyundai Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Hyundai Vehicle Price", defaultValue: 28000, type: "currency", min: 5000, max: 100000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 5000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "HMF APR (%)", defaultValue: 3.49, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "kia-finance-calculator",
                name: "Kia Finance Calculator",
                slug: "kia-finance-calculator",
                description: "Kia Finance America auto loan payment solver with trade-in credits.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Kia Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Kia Vehicle Price", defaultValue: 29500, type: "currency", min: 5000, max: 100000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 6000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Kia Finance APR (%)", defaultValue: 3.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "purple"
            },
            {
                id: "lexus-finance-calculator",
                name: "Lexus Finance Calculator",
                slug: "lexus-finance-calculator",
                description: "Lexus Financial Services luxury car loan & monthly payment estimator.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Lexus Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Lexus Vehicle Price", defaultValue: 58000, type: "currency", min: 10000, max: 200000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 7000, type: "currency", min: 0, max: 80000, step: 500 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 14000, type: "currency", min: 0, max: 80000, step: 500 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "LFS APR (%)", defaultValue: 4.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "slate"
            },
            {
                id: "harley-finance-calculator",
                name: "Harley Finance Calculator",
                slug: "harley-finance-calculator",
                description: "Harley-Davidson motorcycle financing solver including gear & accessories financing.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Harley-Davidson Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Motorcycle Price", defaultValue: 22000, type: "currency", min: 2000, max: 75000, step: 500 },
                    { name: "addons", label: "Gear & Upgrades Add-on", defaultValue: 2500, type: "currency", min: 0, max: 20000, step: 100 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "tradeInValue", label: "Bike Trade-in Allowance", defaultValue: 4000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "H-D Financial APR (%)", defaultValue: 7.9, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "orange"
            },
            {
                id: "lamborghini-finance-calculator",
                name: "Lamborghini Finance Calculator",
                slug: "lamborghini-finance-calculator",
                description: "Supercar finance calculator with balloon payment options for Lamborghini models.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Lamborghini Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Lamborghini Price", defaultValue: 280000, type: "currency", min: 50000, max: 1500000, step: 5000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 50000, type: "currency", min: 0, max: 500000, step: 5000 },
                    { name: "tradeInValue", label: "Exotic Trade-in Allowance", defaultValue: 40000, type: "currency", min: 0, max: 500000, step: 5000 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Exotic Financing APR (%)", defaultValue: 6.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "amber"
            },
            {
                id: "mercedes-benz-finance-calculator",
                name: "Mercedes Benz Finance Calculator",
                slug: "mercedes-benz-finance-calculator",
                description: "Mercedes-Benz Financial Services (MBFS) monthly payment estimator.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Mercedes-Benz Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Mercedes Vehicle Price", defaultValue: 62000, type: "currency", min: 10000, max: 350000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 7500, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 12000, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "MBFS APR (%)", defaultValue: 5.29, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "cyan"
            },
            {
                id: "nissan-finance-calculator",
                name: "Nissan Finance Calculator",
                slug: "nissan-finance-calculator",
                description: "Nissan Motor Acceptance Company (NMAC) auto loan payment calculator.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Nissan Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Nissan Vehicle Price", defaultValue: 30000, type: "currency", min: 5000, max: 100000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3500, type: "currency", min: 0, max: 40000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 6500, type: "currency", min: 0, max: 40000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "NMAC APR (%)", defaultValue: 4.29, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "red"
            },
            {
                id: "porsche-finance-calculator",
                name: "Porsche Finance Calculator",
                slug: "porsche-finance-calculator",
                description: "Porsche Financial Services auto loan & sports car payment calculator.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Porsche Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Porsche Vehicle Price", defaultValue: 115000, type: "currency", min: 20000, max: 500000, step: 2500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 15000, type: "currency", min: 0, max: 150000, step: 1000 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 25000, type: "currency", min: 0, max: 150000, step: 1000 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Porsche FS APR (%)", defaultValue: 5.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "yellow"
            },
            {
                id: "subaru-finance-calculator",
                name: "Subaru Finance Calculator",
                slug: "subaru-finance-calculator",
                description: "Subaru Motors Finance payment estimator with special AWD rate promos.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Subaru Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Subaru MSRP / Price", defaultValue: 33500, type: "currency", min: 5000, max: 80000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 4000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 8000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Subaru APR (%)", defaultValue: 3.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "blue"
            },
            {
                id: "mazda-finance-calculator",
                name: "Mazda Finance Calculator",
                slug: "mazda-finance-calculator",
                description: "Mazda Financial Services monthly payment solver.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Mazda Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Mazda Vehicle Price", defaultValue: 31000, type: "currency", min: 5000, max: 80000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3500, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 7000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Mazda FS APR (%)", defaultValue: 3.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "red"
            },
            {
                id: "volkswagen-finance-calculator",
                name: "Volkswagen Finance Calculator",
                slug: "volkswagen-finance-calculator",
                description: "VW Credit auto loan payment calculator for Jetta, Tiguan, Atlas, ID.4.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Volkswagen Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "VW Vehicle Price", defaultValue: 34000, type: "currency", min: 5000, max: 100000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 4000, type: "currency", min: 0, max: 40000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 7500, type: "currency", min: 0, max: 40000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "VW Credit APR (%)", defaultValue: 4.49, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "blue"
            },
            {
                id: "volvo-finance-calculator",
                name: "Volvo Finance Calculator",
                slug: "volvo-finance-calculator",
                description: "Volvo Car Financial Services SUV and sedan payment estimator.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Volvo Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Volvo Vehicle Price", defaultValue: 54000, type: "currency", min: 10000, max: 150000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 6000, type: "currency", min: 0, max: 60000, step: 500 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 12000, type: "currency", min: 0, max: 60000, step: 500 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Volvo FS APR (%)", defaultValue: 4.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "slate"
            },
            {
                id: "land-rover-finance-calculator",
                name: "Land Rover Finance Calculator",
                slug: "land-rover-finance-calculator",
                description: "Land Rover Financial Services luxury SUV loan & Defender/Range Rover solver.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Land Rover Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Land Rover Vehicle Price", defaultValue: 82000, type: "currency", min: 15000, max: 300000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 10000, type: "currency", min: 0, max: 100000, step: 1000 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 18000, type: "currency", min: 0, max: 100000, step: 1000 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Land Rover APR (%)", defaultValue: 5.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "emerald"
            },
            {
                id: "mccarthy-finance-calculator",
                name: "McCarthy Finance Calculator",
                slug: "mccarthy-finance-calculator",
                description: "McCarthy Auto Group dealership financing & monthly payment estimator.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly McCarthy Payment",
                categorySlug: "auto-vehicle-finance",
                categoryName: "Auto & Manufacturer Finance",
                inputs: [
                    { name: "price", label: "Vehicle Price", defaultValue: 27000, type: "currency", min: 3000, max: 100000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 5000, type: "currency", min: 0, max: 30000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Dealership APR (%)", defaultValue: 5.9, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "teal"
            }
        ]
    },
    {
        id: "specialty-recreational",
        name: "Specialty & Recreational Vehicles",
        slug: "specialty-recreational",
        description: "Financing calculators for classic cars, collector automobiles, RVs, dump trailers, jet skis, and powersports.",
        icon: Truck,
        calculators: [
            {
                id: "classic-car-financing-calculator",
                name: "Classic Car Financing Calculator",
                slug: "classic-car-financing-calculator",
                description: "Specialized loan payment solver for vintage & classic automobiles with extended terms.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Classic Car Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Classic Car Value / Price", defaultValue: 45000, type: "currency", min: 5000, max: 500000, step: 1000 },
                    { name: "downPayment", label: "Down Payment (10-20% rec.)", defaultValue: 9000, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "tradeInValue", label: "Trade-in Value", defaultValue: 0, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Classic Auto APR (%)", defaultValue: 7.25, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months - up to 120)", defaultValue: 84, type: "number", min: 24, max: 144, step: 12 }
                ],
                themeColor: "amber",
                isFeatured: true
            },
            {
                id: "collector-car-financing-calculator",
                name: "Collector Car Financing Calculator",
                slug: "collector-car-financing-calculator",
                description: "Low monthly payment calculator for high-value collector automobiles (Woodside / J.J. Best model).",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Collector Car Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Collector Car Agreed Value", defaultValue: 85000, type: "currency", min: 10000, max: 1000000, step: 2500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 17000, type: "currency", min: 0, max: 300000, step: 1000 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 0, type: "currency", min: 0, max: 300000, step: 1000 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Collector Finance APR (%)", defaultValue: 6.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months - up to 180)", defaultValue: 120, type: "number", min: 36, max: 180, step: 12 }
                ],
                themeColor: "orange"
            },
            {
                id: "golf-cart-financing-calculator",
                name: "Golf Cart Financing Calculator",
                slug: "golf-cart-financing-calculator",
                description: "Golf cart loan payment calculator for Club Car, EZ-GO, and Yamaha golf cars.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Golf Cart Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Golf Cart Price", defaultValue: 11500, type: "currency", min: 1000, max: 40000, step: 250 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 1500, type: "currency", min: 0, max: 15000, step: 100 },
                    { name: "tradeInValue", label: "Trade-in Value", defaultValue: 2000, type: "currency", min: 0, max: 15000, step: 100 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Loan APR (%)", defaultValue: 8.5, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 48, type: "number", min: 12, max: 72, step: 12 }
                ],
                themeColor: "emerald"
            },
            {
                id: "horse-trailer-financing-calculator",
                name: "Horse Trailer Financing Calculator",
                slug: "horse-trailer-financing-calculator",
                description: "Horse trailer loan solver for standard and living quarters trailers.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Horse Trailer Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Horse Trailer Price", defaultValue: 38000, type: "currency", min: 3000, max: 200000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 5000, type: "currency", min: 0, max: 50000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 6000, type: "currency", min: 0, max: 50000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Trailer Loan APR (%)", defaultValue: 7.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 84, type: "number", min: 24, max: 180, step: 12 }
                ],
                themeColor: "yellow"
            },
            {
                id: "snowmobile-financing-calculator",
                name: "Snowmobile Financing Calculator",
                slug: "snowmobile-financing-calculator",
                description: "Winter powersports snowmobile loan solver for Polaris, Ski-Doo, Arctic Cat.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Snowmobile Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Snowmobile MSRP", defaultValue: 16500, type: "currency", min: 2000, max: 40000, step: 250 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 2000, type: "currency", min: 0, max: 15000, step: 100 },
                    { name: "tradeInValue", label: "Sled Trade-in Allowance", defaultValue: 3000, type: "currency", min: 0, max: 15000, step: 100 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Powersports APR (%)", defaultValue: 8.9, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "sky"
            },
            {
                id: "dump-trailer-financing-calculator",
                name: "Dump Trailer Financing Calculator",
                slug: "dump-trailer-financing-calculator",
                description: "Commercial dump trailer & equipment hauling loan monthly payment solver.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Dump Trailer Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Dump Trailer Cost", defaultValue: 14500, type: "currency", min: 2000, max: 60000, step: 250 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 2500, type: "currency", min: 0, max: 20000, step: 100 },
                    { name: "tradeInValue", label: "Trade-in Value", defaultValue: 0, type: "currency", min: 0, max: 20000, step: 100 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Commercial APR (%)", defaultValue: 8.5, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 48, type: "number", min: 12, max: 72, step: 12 }
                ],
                themeColor: "slate"
            },
            {
                id: "rv-financing-canada-calculator",
                name: "RV Financing Canada Calculator",
                slug: "rv-financing-canada-calculator",
                description: "Canadian RV loan calculator with CAD currency and provincial tax estimations.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Canadian RV Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "RV Purchase Price (CAD $)", defaultValue: 75000, type: "currency", min: 10000, max: 400000, step: 1000 },
                    { name: "downPayment", label: "Down Payment (CAD $)", defaultValue: 10000, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "tradeInValue", label: "Trade-in Allowance (CAD $)", defaultValue: 15000, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "salesTaxRate", label: "Provincial Tax (GST/PST/HST %)", defaultValue: 13, type: "percentage", min: 5, max: 15, step: 0.5 },
                    { name: "rate", label: "Canadian RV APR (%)", defaultValue: 7.99, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months - up to 240)", defaultValue: 180, type: "number", min: 36, max: 240, step: 12 }
                ],
                themeColor: "red"
            },
            {
                id: "van-finance-calculator",
                name: "Van Finance Calculator",
                slug: "van-finance-calculator",
                description: "Campervan & commercial van financing tool for Sprinter, Transit, and ProMaster.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Van Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Van Purchase / Conversion Cost", defaultValue: 62000, type: "currency", min: 5000, max: 200000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 8000, type: "currency", min: 0, max: 50000, step: 500 },
                    { name: "tradeInValue", label: "Trade-in Value", defaultValue: 10000, type: "currency", min: 0, max: 50000, step: 500 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Van Loan APR (%)", defaultValue: 6.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 72, type: "number", min: 12, max: 120, step: 12 }
                ],
                themeColor: "teal"
            },
            {
                id: "yamaha-finance-calculator",
                name: "Yamaha Finance Calculator",
                slug: "yamaha-finance-calculator",
                description: "Yamaha Financial Services payment solver for motorcycles, ATVs, and outboards.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Yamaha Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Yamaha Product MSRP", defaultValue: 14500, type: "currency", min: 1000, max: 50000, step: 250 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 2000, type: "currency", min: 0, max: 20000, step: 100 },
                    { name: "tradeInValue", label: "Trade-in Value", defaultValue: 2500, type: "currency", min: 0, max: 20000, step: 100 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Yamaha Card APR (%)", defaultValue: 7.99, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "blue"
            },
            {
                id: "exotic-car-financing-calculator",
                name: "Exotic Car Financing Calculator",
                slug: "exotic-car-financing-calculator",
                description: "Exotic supercar loan calculator featuring structured residual balloon options.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Exotic Car Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Exotic Car Price", defaultValue: 320000, type: "currency", min: 50000, max: 2000000, step: 5000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 64000, type: "currency", min: 0, max: 500000, step: 5000 },
                    { name: "tradeInValue", label: "Exotic Trade-in Allowance", defaultValue: 50000, type: "currency", min: 0, max: 500000, step: 5000 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 7.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Exotic APR (%)", defaultValue: 6.75, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 24, max: 120, step: 12 }
                ],
                themeColor: "purple"
            },
            {
                id: "jet-ski-finance-calculator",
                name: "Jet Ski Finance Calculator",
                slug: "jet-ski-finance-calculator",
                description: "Personal watercraft (PWC) loan solver for Sea-Doo, Yamaha WaveRunner, and Kawasaki.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Jet Ski Payment",
                categorySlug: "specialty-recreational",
                categoryName: "Specialty & Recreational Vehicles",
                inputs: [
                    { name: "price", label: "Jet Ski & Trailer Package", defaultValue: 17500, type: "currency", min: 2000, max: 40000, step: 250 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 2500, type: "currency", min: 0, max: 15000, step: 100 },
                    { name: "tradeInValue", label: "PWC Trade-in Value", defaultValue: 3000, type: "currency", min: 0, max: 15000, step: 100 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Marine Loan APR (%)", defaultValue: 8.25, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "cyan"
            }
        ]
    },
    {
        id: "heavy-equipment-machinery",
        name: "Heavy Machinery & Farm Equipment",
        slug: "heavy-equipment-machinery",
        description: "Commercial equipment financing solvers for John Deere, Kubota, Bobcat, excavators, and agricultural machinery.",
        icon: Wrench,
        calculators: [
            {
                id: "john-deere-financing-calculator",
                name: "John Deere Financing Calculator",
                slug: "john-deere-financing-calculator",
                description: "John Deere Financial equipment & tractor loan solver with 0% promo support.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly John Deere Payment",
                categorySlug: "heavy-equipment-machinery",
                categoryName: "Heavy Machinery & Farm Equipment",
                inputs: [
                    { name: "price", label: "John Deere Equipment Price", defaultValue: 45000, type: "currency", min: 3000, max: 500000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 5000, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "tradeInValue", label: "Equipment Trade-in", defaultValue: 10000, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "JDF APR (%)", defaultValue: 1.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "emerald",
                isFeatured: true
            },
            {
                id: "farm-equipment-finance-calculator",
                name: "Farm Equipment Finance Calculator",
                slug: "farm-equipment-finance-calculator",
                description: "Agricultural machinery loan solver designed for farm equipment financing.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Farm Equipment Payment",
                categorySlug: "heavy-equipment-machinery",
                categoryName: "Heavy Machinery & Farm Equipment",
                inputs: [
                    { name: "price", label: "Machinery Purchase Price", defaultValue: 85000, type: "currency", min: 5000, max: 1000000, step: 2500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 15000, type: "currency", min: 0, max: 200000, step: 1000 },
                    { name: "tradeInValue", label: "Trade-in Credit", defaultValue: 20000, type: "currency", min: 0, max: 200000, step: 1000 },
                    { name: "salesTaxRate", label: "Ag Tax Rate (%)", defaultValue: 4, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Ag Loan APR (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 72, type: "number", min: 12, max: 120, step: 12 }
                ],
                themeColor: "green"
            },
            {
                id: "kubota-finance-calculator",
                name: "Kubota Finance Calculator",
                slug: "kubota-finance-calculator",
                description: "Kubota Credit Corporation (KCC) tractor and construction equipment loan solver.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Kubota Payment",
                categorySlug: "heavy-equipment-machinery",
                categoryName: "Heavy Machinery & Farm Equipment",
                inputs: [
                    { name: "price", label: "Kubota Tractor / Equipment", defaultValue: 32000, type: "currency", min: 3000, max: 200000, step: 500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 4000, type: "currency", min: 0, max: 50000, step: 250 },
                    { name: "tradeInValue", label: "Trade-in Allowance", defaultValue: 8000, type: "currency", min: 0, max: 50000, step: 250 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 5, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "KCC APR (%)", defaultValue: 0, type: "percentage", min: 0, max: 20, step: 0.1, helpText: "Promo 0% APR available" },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "orange"
            },
            {
                id: "bobcat-finance-calculator",
                name: "Bobcat Finance Calculator",
                slug: "bobcat-finance-calculator",
                description: "Bobcat skid steer, loader, and mini excavator loan payment solver.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Bobcat Payment",
                categorySlug: "heavy-equipment-machinery",
                categoryName: "Heavy Machinery & Farm Equipment",
                inputs: [
                    { name: "price", label: "Bobcat Equipment Price", defaultValue: 58000, type: "currency", min: 5000, max: 250000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 8000, type: "currency", min: 0, max: 50000, step: 500 },
                    { name: "tradeInValue", label: "Trade-in Credit", defaultValue: 12000, type: "currency", min: 0, max: 50000, step: 500 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Bobcat Finance APR (%)", defaultValue: 5.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "yellow"
            },
            {
                id: "excavator-finance-calculator",
                name: "Excavator Finance Calculator",
                slug: "excavator-finance-calculator",
                description: "Heavy construction excavator loan and leasing cost monthly payment calculator.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Excavator Payment",
                categorySlug: "heavy-equipment-machinery",
                categoryName: "Heavy Machinery & Farm Equipment",
                inputs: [
                    { name: "price", label: "Excavator Cost", defaultValue: 135000, type: "currency", min: 15000, max: 1000000, step: 2500 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 20000, type: "currency", min: 0, max: 200000, step: 1000 },
                    { name: "tradeInValue", label: "Equipment Trade-in", defaultValue: 25000, type: "currency", min: 0, max: 200000, step: 1000 },
                    { name: "salesTaxRate", label: "Sales Tax (%)", defaultValue: 6, type: "percentage", min: 0, max: 15, step: 0.1 },
                    { name: "rate", label: "Equipment Loan APR (%)", defaultValue: 7.25, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "amber"
            }
        ]
    },
    {
        id: "mortgage-property-housing",
        name: "Mortgages, Real Estate & Housing",
        slug: "mortgage-property-housing",
        description: "Calculators for reverse mortgages, seller financing, development debt, bi-weekly auto, ADUs, roofing, and tiny houses.",
        icon: Building2,
        calculators: [
            {
                id: "finance-of-america-reverse-mortgage-calculator",
                name: "Finance of America Reverse Mortgage Calculator",
                slug: "finance-of-america-reverse-mortgage-calculator",
                description: "HECM reverse mortgage principal limit & monthly payout solver based on borrower age.",
                formulaKey: "calculateReverseMortgage",
                resultLabel: "Net Available Principal Limit",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "homeValue", label: "Home Value", defaultValue: 450000, type: "currency", min: 100000, max: 2000000, step: 10000 },
                    { name: "age", label: "Age of Youngest Borrower", defaultValue: 68, type: "number", min: 62, max: 95, step: 1 },
                    { name: "existingMortgage", label: "Current Mortgage Payoff", defaultValue: 45000, type: "currency", min: 0, max: 500000, step: 5000 },
                    { name: "rate", label: "Expected Interest Rate (%)", defaultValue: 6.25, type: "percentage", min: 3, max: 12, step: 0.125 }
                ],
                themeColor: "indigo",
                isFeatured: true
            },
            {
                id: "car-finance-calculator-bi-weekly",
                name: "Car Finance Calculator Bi Weekly",
                slug: "car-finance-calculator-bi-weekly",
                description: "Compare bi-weekly auto payments vs monthly payments to calculate interest saved & early payoff.",
                formulaKey: "calculateBiWeeklyAuto",
                resultLabel: "Bi-Weekly Payment Amount",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "principal", label: "Car Loan Balance", defaultValue: 32000, type: "currency", min: 2000, max: 150000, step: 500 },
                    { name: "rate", label: "Interest Rate (%)", defaultValue: 6.5, type: "percentage", min: 0.1, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Original Term (Months)", defaultValue: 60, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "blue",
                isFeatured: true
            },
            {
                id: "calculating-finance-charge-mortgage-loan",
                name: "Calculating Finance Charge Mortgage Loan",
                slug: "calculating-finance-charge-mortgage-loan",
                description: "Mortgage APR and total finance charge calculator factoring in points and closing costs.",
                formulaKey: "calculateMortgageFinanceCharge",
                resultLabel: "Total Finance Charge",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "loanAmount", label: "Mortgage Loan Amount", defaultValue: 350000, type: "currency", min: 20000, max: 2000000, step: 5000 },
                    { name: "rate", label: "Interest Rate (%)", defaultValue: 6.5, type: "percentage", min: 1, max: 15, step: 0.125 },
                    { name: "tenureYears", label: "Term (Years)", defaultValue: 30, type: "number", min: 10, max: 30, step: 5 },
                    { name: "points", label: "Discount Points (%)", defaultValue: 1, type: "percentage", min: 0, max: 5, step: 0.25 },
                    { name: "closingFees", label: "Mandatory Closing Fees", defaultValue: 4500, type: "currency", min: 0, max: 25000, step: 250 }
                ],
                themeColor: "violet"
            },
            {
                id: "development-finance-calculator",
                name: "Development Finance Calculator",
                slug: "development-finance-calculator",
                description: "Property development finance debt solver (Gross Development Value, LTV, LTC, Developer Profit).",
                formulaKey: "calculateDevelopmentFinance",
                resultLabel: "Estimated Gross Profit",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "gdv", label: "Gross Development Value (GDV)", defaultValue: 2500000, type: "currency", min: 250000, max: 20000000, step: 50000 },
                    { name: "landCost", label: "Land Acquisition Cost", defaultValue: 600000, type: "currency", min: 50000, max: 5000000, step: 25000 },
                    { name: "buildCost", label: "Construction Build Cost", defaultValue: 1000000, type: "currency", min: 100000, max: 10000000, step: 25000 },
                    { name: "seniorLTV", label: "Senior Debt Max LTV (% GDV)", defaultValue: 60, type: "percentage", min: 40, max: 75, step: 1 },
                    { name: "interestRate", label: "Facility Annual Rate (%)", defaultValue: 9.5, type: "percentage", min: 4, max: 18, step: 0.25 }
                ],
                themeColor: "emerald"
            },
            {
                id: "seller-financing-mortgage-calculator",
                name: "Seller Financing Mortgage Calculator",
                slug: "seller-financing-mortgage-calculator",
                description: "Owner-financed real estate mortgage calculator with monthly P&I and balloon note analysis.",
                formulaKey: "calculateSellerFinancing",
                resultLabel: "Monthly Mortgage Payment",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "purchasePrice", label: "Home Sale Price", defaultValue: 320000, type: "currency", min: 20000, max: 2000000, step: 5000 },
                    { name: "downPayment", label: "Buyer Down Payment", defaultValue: 64000, type: "currency", min: 0, max: 500000, step: 2500 },
                    { name: "rate", label: "Seller Note Rate (%)", defaultValue: 7.25, type: "percentage", min: 1, max: 18, step: 0.125 },
                    { name: "amortYears", label: "Amortization (Years)", defaultValue: 30, type: "number", min: 5, max: 30, step: 5 },
                    { name: "balloonYears", label: "Balloon Due Year", defaultValue: 5, type: "number", min: 1, max: 30, step: 1 }
                ],
                themeColor: "teal"
            },
            {
                id: "adu-financing-calculator",
                name: "ADU Financing Calculator",
                slug: "adu-financing-calculator",
                description: "Accessory Dwelling Unit (ADU) loan & construction ROI estimator.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly ADU Loan Payment",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "principal", label: "ADU Construction Budget", defaultValue: 140000, type: "currency", min: 25000, max: 400000, step: 2500 },
                    { name: "rate", label: "HELOC / Construction Rate (%)", defaultValue: 7.9, type: "percentage", min: 2, max: 15, step: 0.1 },
                    { name: "tenureMonths", label: "Loan Term (Months)", defaultValue: 240, type: "number", min: 60, max: 360, step: 12 }
                ],
                themeColor: "green"
            },
            {
                id: "roof-financing-calculator",
                name: "Roof Financing Calculator",
                slug: "roof-financing-calculator",
                description: "Roof replacement loan solver featuring monthly payment and home value protection.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly Roof Financing Payment",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "principal", label: "Roof Replacement Quote", defaultValue: 16500, type: "currency", min: 3000, max: 60000, step: 250 },
                    { name: "rate", label: "Home Improvement APR (%)", defaultValue: 6.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 84, type: "number", min: 12, max: 144, step: 12 }
                ],
                themeColor: "cyan"
            },
            {
                id: "hvac-financing-calculator",
                name: "HVAC Financing Calculator",
                slug: "hvac-financing-calculator",
                description: "Heating & air conditioning system loan monthly payment calculator.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly HVAC Loan Payment",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "principal", label: "HVAC System Cost", defaultValue: 11500, type: "currency", min: 2000, max: 35000, step: 250 },
                    { name: "rate", label: "Financing Rate (%)", defaultValue: 5.9, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 120, step: 12 }
                ],
                themeColor: "sky"
            },
            {
                id: "hot-tub-financing-calculator",
                name: "Hot Tub Financing Calculator",
                slug: "hot-tub-financing-calculator",
                description: "Backyard spa & hot tub installation loan payment calculator.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly Hot Tub Payment",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "principal", label: "Hot Tub & Spa Cost", defaultValue: 9500, type: "currency", min: 1500, max: 35000, step: 250 },
                    { name: "rate", label: "Personal Loan APR (%)", defaultValue: 8.5, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 48, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "metal-building-finance-calculator",
                name: "Metal Building Finance Calculator",
                slug: "metal-building-finance-calculator",
                description: "Barndominium, steel building, and pole barn financing monthly solver.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly Metal Building Payment",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "principal", label: "Metal Building Kit & Slab Cost", defaultValue: 65000, type: "currency", min: 8000, max: 400000, step: 1000 },
                    { name: "rate", label: "Construction Loan APR (%)", defaultValue: 7.5, type: "percentage", min: 2, max: 18, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 180, type: "number", min: 36, max: 360, step: 12 }
                ],
                themeColor: "slate"
            },
            {
                id: "park-model-home-financing-calculator",
                name: "Park Model Home Financing Calculator",
                slug: "park-model-home-financing-calculator",
                description: "Park model RV & resort cabin home financing loan payment calculator.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly Park Model Payment",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "principal", label: "Park Model Home Cost", defaultValue: 78000, type: "currency", min: 15000, max: 250000, step: 1000 },
                    { name: "rate", label: "Chattel / RV APR (%)", defaultValue: 8.25, type: "percentage", min: 3, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 180, type: "number", min: 36, max: 240, step: 12 }
                ],
                themeColor: "fuchsia"
            },
            {
                id: "tiny-house-financing-calculator",
                name: "Tiny House Financing Calculator",
                slug: "tiny-house-financing-calculator",
                description: "Tiny house financing tool comparing RVIA RV loan vs builder financing.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly Tiny House Payment",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "principal", label: "Tiny House Price", defaultValue: 72000, type: "currency", min: 10000, max: 200000, step: 1000 },
                    { name: "rate", label: "Loan APR (%)", defaultValue: 7.9, type: "percentage", min: 2, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 120, type: "number", min: 24, max: 240, step: 12 }
                ],
                themeColor: "emerald"
            },
            {
                id: "timeshare-financing-calculator",
                name: "Timeshare Financing Calculator",
                slug: "timeshare-financing-calculator",
                description: "Timeshare loan payoff & annual maintenance fee lifetime interest solver.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly Timeshare Debt Payment",
                categorySlug: "mortgage-property-housing",
                categoryName: "Mortgages, Real Estate & Housing",
                inputs: [
                    { name: "principal", label: "Timeshare Loan Balance", defaultValue: 24000, type: "currency", min: 2000, max: 100000, step: 500 },
                    { name: "rate", label: "Timeshare Interest Rate (%)", defaultValue: 14.5, type: "percentage", min: 5, max: 28, step: 0.25 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 120, type: "number", min: 12, max: 180, step: 12 }
                ],
                themeColor: "rose"
            }
        ]
    },
    {
        id: "commercial-business-finance",
        name: "Commercial & Business Finance",
        slug: "commercial-business-finance",
        description: "B2B financial calculators for invoice factoring, supply chain financing, merchant loans, and PwC corporate valuation.",
        icon: Briefcase,
        calculators: [
            {
                id: "invoice-finance-calculator",
                name: "Invoice Finance Calculator",
                slug: "invoice-finance-calculator",
                description: "Calculate invoice factoring advance rates, discounting fees, and net payouts.",
                formulaKey: "calculateInvoiceFinance",
                resultLabel: "Upfront Cash Advance",
                categorySlug: "commercial-business-finance",
                categoryName: "Commercial & Business Finance",
                inputs: [
                    { name: "invoiceValue", label: "Total Invoice Value", defaultValue: 100000, type: "currency", min: 5000, max: 2000000, step: 5000 },
                    { name: "advanceRate", label: "Advance Rate (%)", defaultValue: 85, type: "percentage", min: 50, max: 95, step: 1 },
                    { name: "factoringFeeRate", label: "Factoring Fee Rate (%)", defaultValue: 2.5, type: "percentage", min: 0.5, max: 10, step: 0.1 },
                    { name: "periodDays", label: "Invoice Term (Days)", defaultValue: 30, type: "number", min: 7, max: 120, step: 1 }
                ],
                themeColor: "indigo",
                isFeatured: true
            },
            {
                id: "asset-finance-calculator",
                name: "Asset Finance Calculator",
                slug: "asset-finance-calculator",
                description: "Equipment hire purchase and commercial asset loan repayment calculator.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Asset Payment",
                categorySlug: "commercial-business-finance",
                categoryName: "Commercial & Business Finance",
                inputs: [
                    { name: "price", label: "Asset Cost", defaultValue: 85000, type: "currency", min: 5000, max: 1000000, step: 2500 },
                    { name: "downPayment", label: "Initial Deposit", defaultValue: 12000, type: "currency", min: 0, max: 200000, step: 1000 },
                    { name: "tradeInValue", label: "Part Exchange Credit", defaultValue: 0, type: "currency", min: 0, max: 200000, step: 1000 },
                    { name: "salesTaxRate", label: "VAT / Sales Tax (%)", defaultValue: 0, type: "percentage", min: 0, max: 20, step: 1 },
                    { name: "rate", label: "Interest Rate (%)", defaultValue: 6.9, type: "percentage", min: 1, max: 20, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 48, type: "number", min: 12, max: 84, step: 12 }
                ],
                themeColor: "blue"
            },
            {
                id: "supply-chain-finance-calculator",
                name: "Supply Chain Finance Calculator",
                slug: "supply-chain-finance-calculator",
                description: "Working capital optimization & reverse factoring early payment discount solver.",
                formulaKey: "calculateInvoiceFinance",
                resultLabel: "Supplier Early Payout Amount",
                categorySlug: "commercial-business-finance",
                categoryName: "Commercial & Business Finance",
                inputs: [
                    { name: "invoiceValue", label: "Supplier Invoice Amount", defaultValue: 250000, type: "currency", min: 10000, max: 5000000, step: 10000 },
                    { name: "advanceRate", label: "Funding Advance (%)", defaultValue: 100, type: "percentage", min: 80, max: 100, step: 1 },
                    { name: "factoringFeeRate", label: "Early Payment Discount (%)", defaultValue: 1.8, type: "percentage", min: 0.1, max: 10, step: 0.1 },
                    { name: "periodDays", label: "Days Paid Early", defaultValue: 45, type: "number", min: 5, max: 120, step: 5 }
                ],
                themeColor: "emerald"
            },
            {
                id: "service-finance-calculator",
                name: "Service Finance Calculator",
                slug: "service-finance-calculator",
                description: "Service Finance Company contractor & merchant home improvement loan solver.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly Merchant Financing Payment",
                categorySlug: "commercial-business-finance",
                categoryName: "Commercial & Business Finance",
                inputs: [
                    { name: "principal", label: "Service Project Total Cost", defaultValue: 18000, type: "currency", min: 1000, max: 100000, step: 500 },
                    { name: "rate", label: "Service Finance APR (%)", defaultValue: 7.9, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 84, type: "number", min: 12, max: 180, step: 12 }
                ],
                themeColor: "cyan"
            },
            {
                id: "pwc-finance-calculator",
                name: "PwC Finance Calculator",
                slug: "pwc-finance-calculator",
                description: "Enterprise valuation & corporate advisory multiple financial estimator (inspired by PwC model).",
                formulaKey: "calculateDevelopmentFinance",
                resultLabel: "Estimated Enterprise EBITDA Profit",
                categorySlug: "commercial-business-finance",
                categoryName: "Commercial & Business Finance",
                inputs: [
                    { name: "gdv", label: "Annual Corporate Revenue", defaultValue: 15000000, type: "currency", min: 500000, max: 500000000, step: 500000 },
                    { name: "landCost", label: "Operating Expenses (OpEx)", defaultValue: 9000000, type: "currency", min: 100000, max: 300000000, step: 250000 },
                    { name: "buildCost", label: "Cost of Goods Sold (COGS)", defaultValue: 3000000, type: "currency", min: 100000, max: 200000000, step: 250000 },
                    { name: "seniorLTV", label: "Target EBITDA Margin (%)", defaultValue: 20, type: "percentage", min: 1, max: 60, step: 1 },
                    { name: "interestRate", label: "Discount Rate WACC (%)", defaultValue: 8.5, type: "percentage", min: 2, max: 25, step: 0.25 }
                ],
                themeColor: "violet"
            }
        ]
    },
    {
        id: "specialized-solvers-ai",
        name: "Specialized Solvers, Educational & AI Tools",
        slug: "specialized-solvers-ai",
        description: "Interactive tools including TI-84 TVM solver, AI Calculator, Zoya Zakat Halal solver, Personal Finance Club, and PMT math visualizer.",
        icon: Sparkles,
        calculators: [
            {
                id: "personal-finance-club-calculator",
                name: "Personal Finance Club Calculator",
                slug: "personal-finance-club-calculator",
                description: "Index fund compound interest & FIRE wealth growth solver inspired by Personal Finance Club.",
                formulaKey: "calculatePersonalFinanceClub",
                resultLabel: "Projected Future Net Worth",
                categorySlug: "specialized-solvers-ai",
                categoryName: "Specialized Solvers, Educational & AI Tools",
                inputs: [
                    { name: "startingBalance", label: "Starting Investment Balance", defaultValue: 10000, type: "currency", min: 0, max: 500000, step: 1000 },
                    { name: "monthlyContribution", label: "Monthly Index Fund Addition", defaultValue: 500, type: "currency", min: 25, max: 20000, step: 25 },
                    { name: "returnRate", label: "Historical S&P 500 Return (%)", defaultValue: 9.5, type: "percentage", min: 1, max: 20, step: 0.1 },
                    { name: "years", label: "Investing Timeline (Years)", defaultValue: 30, type: "number", min: 1, max: 50, step: 1 }
                ],
                themeColor: "emerald",
                isFeatured: true
            },
            {
                id: "engagement-ring-financing-calculator",
                name: "Engagement Ring Financing Calculator",
                slug: "engagement-ring-financing-calculator",
                description: "Jewelry store 0% promo vs personal loan payment solver for diamond engagement rings.",
                formulaKey: "calculateEMI",
                resultLabel: "Monthly Engagement Ring Payment",
                categorySlug: "specialized-solvers-ai",
                categoryName: "Specialized Solvers, Educational & AI Tools",
                inputs: [
                    { name: "principal", label: "Ring Price", defaultValue: 5500, type: "currency", min: 500, max: 50000, step: 100 },
                    { name: "rate", label: "Interest Rate (%)", defaultValue: 0, type: "percentage", min: 0, max: 25, step: 0.1, helpText: "Many jewelers offer 0% APR promos" },
                    { name: "tenureMonths", label: "Promo Term (Months)", defaultValue: 24, type: "number", min: 6, max: 60, step: 6 }
                ],
                themeColor: "rose"
            },
            {
                id: "what-is-pmt-in-finance-calculator",
                name: "What is PMT in Finance Calculator",
                slug: "what-is-pmt-in-finance-calculator",
                description: "Interactive Time Value of Money (TVM) PMT formula breakdown and loan payment visualizer.",
                formulaKey: "calculateEMI",
                resultLabel: "Calculated Periodic Payment (PMT)",
                categorySlug: "specialized-solvers-ai",
                categoryName: "Specialized Solvers, Educational & AI Tools",
                inputs: [
                    { name: "principal", label: "Present Value (PV / Loan Amount)", defaultValue: 25000, type: "currency", min: 1000, max: 1000000, step: 500 },
                    { name: "rate", label: "Annual Rate (i %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Number of Periods (N Months)", defaultValue: 60, type: "number", min: 1, max: 360, step: 1 }
                ],
                themeColor: "blue",
                isFeatured: true
            },
            {
                id: "zoya-finance-zakat-calculator",
                name: "Zoya Finance Zakat Calculator",
                slug: "zoya-finance-zakat-calculator",
                description: "Islamic wealth and Zakat 2.5% calculator for Halal stocks, cash, crypto, and gold minus short-term debts.",
                formulaKey: "calculateZakat",
                resultLabel: "Total Zakat Due (2.5%)",
                categorySlug: "specialized-solvers-ai",
                categoryName: "Specialized Solvers, Educational & AI Tools",
                inputs: [
                    { name: "cashBank", label: "Cash & Savings Balance", defaultValue: 15000, type: "currency", min: 0, max: 1000000, step: 500 },
                    { name: "goldSilver", label: "Gold & Silver Value", defaultValue: 5000, type: "currency", min: 0, max: 500000, step: 250 },
                    { name: "halalStocks", label: "Halal Stocks & Mutual Funds", defaultValue: 25000, type: "currency", min: 0, max: 2000000, step: 1000 },
                    { name: "cryptoValue", label: "Crypto Assets", defaultValue: 4000, type: "currency", min: 0, max: 500000, step: 250 },
                    { name: "businessAssets", label: "Liquid Business Assets", defaultValue: 10000, type: "currency", min: 0, max: 1000000, step: 500 },
                    { name: "shortTermDebts", label: "Immediate Debts Due", defaultValue: 3000, type: "currency", min: 0, max: 500000, step: 250 }
                ],
                themeColor: "teal",
                isFeatured: true
            },
            {
                id: "finance-calculator-ai",
                name: "Finance Calculator AI",
                slug: "finance-calculator-ai",
                description: "AI-assisted financial prompt & custom dynamic scenario solver.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "AI Calculated Solution",
                categorySlug: "specialized-solvers-ai",
                categoryName: "Specialized Solvers, Educational & AI Tools",
                inputs: [
                    { name: "price", label: "Asset / Base Value", defaultValue: 40000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment / Equity", defaultValue: 5000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "tradeInValue", label: "Credit / Offset", defaultValue: 0, type: "currency", min: 0, max: 100000, step: 500 },
                    { name: "salesTaxRate", label: "Tax Rate (%)", defaultValue: 6.5, type: "percentage", min: 0, max: 20, step: 0.1 },
                    { name: "rate", label: "Interest Rate (%)", defaultValue: 5.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Duration (Months)", defaultValue: 60, type: "number", min: 1, max: 360, step: 1 }
                ],
                themeColor: "purple",
                isFeatured: true
            },
            {
                id: "finance-calculator-ti-84",
                name: "Finance Calculator TI 84",
                slug: "finance-calculator-ti-84",
                description: "Interactive TI-84 Plus Financial Calculator simulator for N, I/Y, PV, PMT, and FV TVM solver.",
                formulaKey: "calculateTI84TVM",
                resultLabel: "TI-84 Solved Output",
                categorySlug: "specialized-solvers-ai",
                categoryName: "Specialized Solvers, Educational & AI Tools",
                inputs: [
                    { name: "N", label: "N (Number of Periods)", defaultValue: 60, type: "number", min: 1, max: 600, step: 1 },
                    { name: "I_Y", label: "I/Y (Annual Interest Rate %)", defaultValue: 6.5, type: "percentage", min: 0, max: 50, step: 0.1 },
                    { name: "PV", label: "PV (Present Value)", defaultValue: -25000, type: "currency", min: -10000000, max: 10000000, step: 1000 },
                    { name: "FV", label: "FV (Future Value)", defaultValue: 0, type: "currency", min: -10000000, max: 10000000, step: 1000 },
                    { name: "PY", label: "P/Y (Payments per Year)", defaultValue: 12, type: "number", min: 1, max: 365, step: 1 }
                ],
                themeColor: "indigo",
                isFeatured: true
            },
            {
                id: "divorce-finance-calculator",
                name: "Divorce Finance Calculator",
                slug: "divorce-finance-calculator",
                description: "Marital asset & debt distribution calculator with equitable split breakdown.",
                formulaKey: "calculateDivorceSplit",
                resultLabel: "Spouse A Net Settlement Share",
                categorySlug: "specialized-solvers-ai",
                categoryName: "Specialized Solvers, Educational & AI Tools",
                inputs: [
                    { name: "totalAssets", label: "Total Combined Marital Assets", defaultValue: 850000, type: "currency", min: 10000, max: 10000000, step: 5000 },
                    { name: "totalDebts", label: "Total Combined Marital Debts", defaultValue: 250000, type: "currency", min: 0, max: 5000000, step: 2500 },
                    { name: "spouseAPercent", label: "Spouse A Allocation (%)", defaultValue: 50, type: "percentage", min: 0, max: 100, step: 1 }
                ],
                themeColor: "fuchsia"
            }
        ]
    }
,
    {
        id: "investment-wealth",
        name: "Investment & Wealth",
        slug: "investment-wealth",
        description: "Explore free online calculators, estimators, and financial tools for investment & wealth.",
        icon: TrendingUp,
        calculators: [
            {
                id: "simple-investment-calculator",
                name: "Simple Investment Calculator",
                slug: "simple-investment-calculator",
                description: "Calculate future investment growth, contributions, and compound earnings over time.",
                formulaKey: "calculateLumpsum",
                resultLabel: "Future Maturity Value",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "investment", label: "Initial Investment Amount", defaultValue: 10000, type: "currency", min: 500, max: 500000, step: 500 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 8.0, type: "percentage", min: 1, max: 25, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 10, type: "number", min: 1, max: 40, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "compound-interest-calculator",
                name: "Compound Interest Calculator",
                slug: "compound-interest-calculator",
                description: "Compute the exponential growth of principal with recurring additions and interest compounding.",
                formulaKey: "compoundInterest",
                resultLabel: "Total Compound Interest",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "principal", label: "Principal Deposit", defaultValue: 10000, type: "currency", min: 500, max: 500000, step: 500 },
                    { name: "rate", label: "Annual Interest Rate (%)", defaultValue: 8.0, type: "percentage", min: 0.5, max: 25, step: 0.25 },
                    { name: "time", label: "Time Horizon (Years)", defaultValue: 10, type: "number", min: 1, max: 40, step: 1 },
                    { name: "frequency", label: "Compounding Periods / Year", defaultValue: 12, type: "number", min: 1, max: 365, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "sip-calculator",
                name: "SIP Calculator",
                slug: "sip-calculator",
                description: "Estimate Systematic Investment Plan returns, capital gains, and total accumulated wealth.",
                formulaKey: "calculateSIPResult",
                resultLabel: "Total Maturity Wealth",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "monthlyInvestment", label: "Monthly Investment", defaultValue: 500, type: "currency", min: 50, max: 50000, step: 50 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 12.0, type: "percentage", min: 1, max: 30, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 15, type: "number", min: 1, max: 35, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "lumpsum-calculator",
                name: "Lumpsum Calculator",
                slug: "lumpsum-calculator",
                description: "Calculate long-term compound growth and returns on one-time lumpsum mutual fund investments.",
                formulaKey: "calculateLumpsum",
                resultLabel: "Future Maturity Value",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "investment", label: "Initial Investment Amount", defaultValue: 10000, type: "currency", min: 500, max: 500000, step: 500 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 8.0, type: "percentage", min: 1, max: 25, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 10, type: "number", min: 1, max: 40, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "mutual-fund-returns-calculator",
                name: "Mutual Fund Returns Calculator",
                slug: "mutual-fund-returns-calculator",
                description: "Forecast mutual fund portfolio maturity value, returns, and compounding performance.",
                formulaKey: "calculateSIPResult",
                resultLabel: "Total Maturity Wealth",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "monthlyInvestment", label: "Monthly Investment", defaultValue: 500, type: "currency", min: 50, max: 50000, step: 50 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 12.0, type: "percentage", min: 1, max: 30, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 15, type: "number", min: 1, max: 35, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "fd-calculator",
                name: "FD Calculator",
                slug: "fd-calculator",
                description: "Calculate Fixed Deposit maturity value, quarterly interest accruals, and guaranteed payout.",
                formulaKey: "compoundInterest",
                resultLabel: "Total Compound Interest",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "principal", label: "Principal Deposit", defaultValue: 10000, type: "currency", min: 500, max: 500000, step: 500 },
                    { name: "rate", label: "Annual Interest Rate (%)", defaultValue: 8.0, type: "percentage", min: 0.5, max: 25, step: 0.25 },
                    { name: "time", label: "Time Horizon (Years)", defaultValue: 10, type: "number", min: 1, max: 40, step: 1 },
                    { name: "frequency", label: "Compounding Periods / Year", defaultValue: 12, type: "number", min: 1, max: 365, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "rd-calculator",
                name: "RD Calculator",
                slug: "rd-calculator",
                description: "Calculate Recurring Deposit maturity proceeds, monthly deposits, and compound interest.",
                formulaKey: "calculateSIPResult",
                resultLabel: "Total Maturity Wealth",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "monthlyInvestment", label: "Monthly Investment", defaultValue: 500, type: "currency", min: 50, max: 50000, step: 50 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 12.0, type: "percentage", min: 1, max: 30, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 15, type: "number", min: 1, max: 35, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "cagr-calculator",
                name: "CAGR Calculator",
                slug: "cagr-calculator",
                description: "Determine Compound Annual Growth Rate (CAGR) for investment portfolios and assets.",
                formulaKey: "cagr",
                resultLabel: "Compound Annual Growth (CAGR %)",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "initialValue", label: "Initial Investment Value", defaultValue: 10000, type: "currency", min: 100, max: 1000000, step: 500 },
                    { name: "finalValue", label: "Ending Valuation", defaultValue: 25000, type: "currency", min: 100, max: 5000000, step: 500 },
                    { name: "years", label: "Holding Period (Years)", defaultValue: 5, type: "number", min: 1, max: 30, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "roi-calculator",
                name: "ROI Calculator",
                slug: "roi-calculator",
                description: "Calculate Return on Investment percentage, net financial gain, and annualized yield.",
                formulaKey: "cagr",
                resultLabel: "Compound Annual Growth (CAGR %)",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "initialValue", label: "Initial Investment Value", defaultValue: 10000, type: "currency", min: 100, max: 1000000, step: 500 },
                    { name: "finalValue", label: "Ending Valuation", defaultValue: 25000, type: "currency", min: 100, max: 5000000, step: 500 },
                    { name: "years", label: "Holding Period (Years)", defaultValue: 5, type: "number", min: 1, max: 30, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "stock-profit-calculator",
                name: "Stock Profit Calculator",
                slug: "stock-profit-calculator",
                description: "Evaluate realized capital gains, brokerage fees, and net return from equity share trades.",
                formulaKey: "cagr",
                resultLabel: "Compound Annual Growth (CAGR %)",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "initialValue", label: "Initial Investment Value", defaultValue: 10000, type: "currency", min: 100, max: 1000000, step: 500 },
                    { name: "finalValue", label: "Ending Valuation", defaultValue: 25000, type: "currency", min: 100, max: 5000000, step: 500 },
                    { name: "years", label: "Holding Period (Years)", defaultValue: 5, type: "number", min: 1, max: 30, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "dividend-calculator",
                name: "Dividend Calculator",
                slug: "dividend-calculator",
                description: "Estimate future passive dividend income, DRIP reinvestment growth, and portfolio valuation.",
                formulaKey: "cagr",
                resultLabel: "Annual Dividend Yield",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "initialValue", label: "Initial Portfolio Investment", defaultValue: 50000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "finalValue", label: "Final Estimated Portfolio Value", defaultValue: 185000, type: "currency", min: 5000, max: 5000000, step: 5000 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 20, type: "number", min: 1, max: 40, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "crypto-profit-calculator",
                name: "Crypto Profit Calculator",
                slug: "crypto-profit-calculator",
                description: "Calculate cryptocurrency trading profits, percentage gains, and fee deductions.",
                formulaKey: "cagr",
                resultLabel: "Compound Annual Growth (CAGR %)",
                categorySlug: "investment-wealth",
                categoryName: "Investment & Wealth",
                inputs: [
                    { name: "initialValue", label: "Initial Investment Value", defaultValue: 10000, type: "currency", min: 100, max: 1000000, step: 500 },
                    { name: "finalValue", label: "Ending Valuation", defaultValue: 25000, type: "currency", min: 100, max: 5000000, step: 500 },
                    { name: "years", label: "Holding Period (Years)", defaultValue: 5, type: "number", min: 1, max: 30, step: 1 }
                ],
                themeColor: "indigo"
            }
        ]
    },
    {
        id: "retirement-pension",
        name: "Retirement & Pension",
        slug: "retirement-pension",
        description: "Explore free online calculators, estimators, and financial tools for retirement & pension.",
        icon: Coins,
        calculators: [
            {
                id: "epf-calculator",
                name: "EPF Calculator",
                slug: "epf-calculator",
                description: "Calculate Employees Provident Fund corpus accumulation and statutory compound interest.",
                formulaKey: "calculateSIPResult",
                resultLabel: "Total Maturity Wealth",
                categorySlug: "retirement-pension",
                categoryName: "Retirement & Pension",
                inputs: [
                    { name: "monthlyInvestment", label: "Monthly Investment", defaultValue: 500, type: "currency", min: 50, max: 50000, step: 50 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 12.0, type: "percentage", min: 1, max: 30, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 15, type: "number", min: 1, max: 35, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "ppf-calculator",
                name: "PPF Calculator",
                slug: "ppf-calculator",
                description: "Plan Public Provident Fund tax-free retirement savings and 15-year guaranteed compounding.",
                formulaKey: "calculateSIPResult",
                resultLabel: "Total Maturity Wealth",
                categorySlug: "retirement-pension",
                categoryName: "Retirement & Pension",
                inputs: [
                    { name: "monthlyInvestment", label: "Monthly Investment", defaultValue: 500, type: "currency", min: 50, max: 50000, step: 50 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 12.0, type: "percentage", min: 1, max: 30, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 15, type: "number", min: 1, max: 35, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "nps-calculator",
                name: "NPS Calculator",
                slug: "nps-calculator",
                description: "Forecast National Pension System retirement corpus and monthly annuity pension payouts.",
                formulaKey: "calculateSIPResult",
                resultLabel: "Total Maturity Wealth",
                categorySlug: "retirement-pension",
                categoryName: "Retirement & Pension",
                inputs: [
                    { name: "monthlyInvestment", label: "Monthly Investment", defaultValue: 500, type: "currency", min: 50, max: 50000, step: 50 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 12.0, type: "percentage", min: 1, max: 30, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 15, type: "number", min: 1, max: 35, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "retirement-savings-calculator",
                name: "Retirement Savings Calculator",
                slug: "retirement-savings-calculator",
                description: "Assess long-term retirement preparedness, required nest egg, and savings milestones.",
                formulaKey: "calculateSIPResult",
                resultLabel: "Total 401(k) Nest Egg",
                categorySlug: "retirement-pension",
                categoryName: "Retirement & Pension",
                inputs: [
                    { name: "monthlyInvestment", label: "Monthly Contribution (Employee + Match)", defaultValue: 1050, type: "currency", min: 100, max: 50000, step: 50 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 8.0, type: "percentage", min: 1, max: 15, step: 0.25 },
                    { name: "years", label: "Years Until Retirement", defaultValue: 30, type: "number", min: 1, max: 45, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "401k-calculator",
                name: "401k Calculator",
                slug: "401k-calculator",
                description: "Calculate 401(k) retirement savings growth, employer match contributions, and tax-deferred wealth.",
                formulaKey: "calculateSIPResult",
                resultLabel: "Total 401(k) Nest Egg",
                categorySlug: "retirement-pension",
                categoryName: "Retirement & Pension",
                inputs: [
                    { name: "monthlyInvestment", label: "Monthly Contribution (Employee + Match)", defaultValue: 1050, type: "currency", min: 100, max: 50000, step: 50 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 8.0, type: "percentage", min: 1, max: 15, step: 0.25 },
                    { name: "years", label: "Years Until Retirement", defaultValue: 30, type: "number", min: 1, max: 45, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "fire-calculator",
                name: "FIRE Calculator",
                slug: "fire-calculator",
                description: "Calculate your Financial Independence Retire Early (FIRE) number, savings timeline, and safe withdrawal.",
                formulaKey: "fire",
                resultLabel: "FIRE Target Number",
                categorySlug: "retirement-pension",
                categoryName: "Retirement & Pension",
                inputs: [
                    { name: "annualExpenses", label: "Annual Living Expenses", defaultValue: 45000, type: "currency", min: 5000, max: 500000, step: 1000 },
                    { name: "withdrawalRate", label: "Safe Withdrawal Rate (%)", defaultValue: 4.0, type: "percentage", min: 2, max: 10, step: 0.1 }
                ],
                themeColor: "indigo"
            }
        ]
    },
    {
        id: "mortgages-housing",
        name: "Mortgages & Housing",
        slug: "mortgages-housing",
        description: "Explore free online calculators, estimators, and financial tools for mortgages & housing.",
        icon: Home,
        calculators: [
            {
                id: "mortgage-calculator",
                name: "Mortgage Calculator",
                slug: "mortgage-calculator",
                description: "Calculate monthly home mortgage principal, interest, taxes, and complete amortization schedule.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "mortgages-housing",
                categoryName: "Mortgages & Housing",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 400000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 80000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 360, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "home-loan-emi-calculator",
                name: "Home Loan EMI Calculator",
                slug: "home-loan-emi-calculator",
                description: "Calculate monthly home loan EMI installments, interest obligations, and repayment trajectory.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "mortgages-housing",
                categoryName: "Mortgages & Housing",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 350000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 70000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.25, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 240, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "mortgage-payoff-calculator",
                name: "Mortgage Payoff Calculator",
                slug: "mortgage-payoff-calculator",
                description: "Estimate interest savings and years shaved off home loans through accelerated mortgage payoff.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "mortgages-housing",
                categoryName: "Mortgages & Housing",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 320000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 0, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.0, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 240, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "rent-vs-buy-calculator",
                name: "Rent vs Buy Calculator",
                slug: "rent-vs-buy-calculator",
                description: "Compare long-term total financial wealth creation of renting versus purchasing residential property.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "mortgages-housing",
                categoryName: "Mortgages & Housing",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 450000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 90000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 360, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "property-appreciation-calculator",
                name: "Property Appreciation Calculator",
                slug: "property-appreciation-calculator",
                description: "Project real estate capital appreciation, inflation-adjusted equity, and property valuation.",
                formulaKey: "calculateLumpsum",
                resultLabel: "Future Maturity Value",
                categorySlug: "mortgages-housing",
                categoryName: "Mortgages & Housing",
                inputs: [
                    { name: "investment", label: "Initial Investment Amount", defaultValue: 10000, type: "currency", min: 500, max: 500000, step: 500 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 8.0, type: "percentage", min: 1, max: 25, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 10, type: "number", min: 1, max: 40, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "rental-yield-calculator",
                name: "Rental Yield Calculator",
                slug: "rental-yield-calculator",
                description: "Calculate gross and net annual rental yield percentages on residential and commercial real estate.",
                formulaKey: "cagr",
                resultLabel: "Compound Annual Growth (CAGR %)",
                categorySlug: "mortgages-housing",
                categoryName: "Mortgages & Housing",
                inputs: [
                    { name: "initialValue", label: "Initial Investment Value", defaultValue: 10000, type: "currency", min: 100, max: 1000000, step: 500 },
                    { name: "finalValue", label: "Ending Valuation", defaultValue: 25000, type: "currency", min: 100, max: 5000000, step: 500 },
                    { name: "years", label: "Holding Period (Years)", defaultValue: 5, type: "number", min: 1, max: 30, step: 1 }
                ],
                themeColor: "indigo"
            }
        ]
    },
    {
        id: "personal-loans-debt",
        name: "Personal Loans & Debt",
        slug: "personal-loans-debt",
        description: "Explore free online calculators, estimators, and financial tools for personal loans & debt.",
        icon: DollarSign,
        calculators: [
            {
                id: "personal-loan-emi-calculator",
                name: "Personal Loan EMI Calculator",
                slug: "personal-loan-emi-calculator",
                description: "Calculate personal loan EMI monthly payments, processing charges, and interest amortization.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "personal-loans-debt",
                categoryName: "Personal Loans & Debt",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 25000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 0, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 9.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 48, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "education-loan-calculator",
                name: "Education Loan Calculator",
                slug: "education-loan-calculator",
                description: "Estimate student loan repayments, moratorium period interest accruals, and monthly EMI.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "personal-loans-debt",
                categoryName: "Personal Loans & Debt",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 55000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 5000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 5.8, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 120, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "credit-card-payoff-calculator",
                name: "Credit Card Payoff Calculator",
                slug: "credit-card-payoff-calculator",
                description: "Calculate months required to eliminate credit card balances and minimize compounding interest charges.",
                formulaKey: "burnRate",
                resultLabel: "Months to Payoff",
                categorySlug: "personal-loans-debt",
                categoryName: "Personal Loans & Debt",
                inputs: [
                    { name: "startingBalance", label: "Outstanding Debt Balance", defaultValue: 8500, type: "currency", min: 500, max: 200000, step: 250 },
                    { name: "currentBalance", label: "Remaining Balance Goal", defaultValue: 0, type: "currency", min: 0, max: 10000, step: 100 },
                    { name: "months", label: "Monthly Payoff Allocation", defaultValue: 350, type: "number", min: 50, max: 5000, step: 25 }
                ],
                themeColor: "indigo"
            },
            {
                id: "debt-consolidation-calculator",
                name: "Debt Consolidation Calculator",
                slug: "debt-consolidation-calculator",
                description: "Evaluate interest savings and lower single monthly payments by consolidating multiple high-rate debts.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "personal-loans-debt",
                categoryName: "Personal Loans & Debt",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 35000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 0, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 8.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 48, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            }
        ]
    },
    {
        id: "salary-tax",
        name: "Salary & Tax",
        slug: "salary-tax",
        description: "Explore free online calculators, estimators, and financial tools for salary & tax.",
        icon: Scale,
        calculators: [
            {
                id: "salary-calculator",
                name: "Salary Calculator",
                slug: "salary-calculator",
                description: "Break down annual gross base salary into bi-weekly, weekly, and hourly pay with tax estimates.",
                formulaKey: "takeHome",
                resultLabel: "Net Monthly Take-Home Pay",
                categorySlug: "salary-tax",
                categoryName: "Salary & Tax",
                inputs: [
                    { name: "ctc", label: "Annual Gross Salary", defaultValue: 85000, type: "currency", min: 10000, max: 1000000, step: 1000 },
                    { name: "taxRate", label: "Effective Tax Rate (%)", defaultValue: 22, type: "percentage", min: 0, max: 50, step: 0.5 }
                ],
                themeColor: "indigo"
            },
            {
                id: "take-home-pay-calculator",
                name: "Take Home Pay Calculator",
                slug: "take-home-pay-calculator",
                description: "Calculate net monthly and annual paycheck take-home pay after federal, state, and benefit deductions.",
                formulaKey: "takeHome",
                resultLabel: "Net Monthly Take-Home Pay",
                categorySlug: "salary-tax",
                categoryName: "Salary & Tax",
                inputs: [
                    { name: "ctc", label: "Annual Gross Salary", defaultValue: 85000, type: "currency", min: 10000, max: 1000000, step: 1000 },
                    { name: "taxRate", label: "Effective Tax Rate (%)", defaultValue: 22, type: "percentage", min: 0, max: 50, step: 0.5 }
                ],
                themeColor: "indigo"
            },
            {
                id: "income-tax-calculator",
                name: "Income Tax Calculator",
                slug: "income-tax-calculator",
                description: "Estimate personal income tax liability, marginal brackets, standard deductions, and net liability.",
                formulaKey: "takeHome",
                resultLabel: "Net Monthly Take-Home Pay",
                categorySlug: "salary-tax",
                categoryName: "Salary & Tax",
                inputs: [
                    { name: "ctc", label: "Annual Gross Salary", defaultValue: 85000, type: "currency", min: 10000, max: 1000000, step: 1000 },
                    { name: "taxRate", label: "Effective Tax Rate (%)", defaultValue: 22, type: "percentage", min: 0, max: 50, step: 0.5 }
                ],
                themeColor: "indigo"
            },
            {
                id: "gst-calculator",
                name: "GST Calculator",
                slug: "gst-calculator",
                description: "Calculate inclusive and exclusive Goods and Services Tax (GST) amounts across standard tax slabs.",
                formulaKey: "takeHome",
                resultLabel: "Net Monthly Take-Home Pay",
                categorySlug: "salary-tax",
                categoryName: "Salary & Tax",
                inputs: [
                    { name: "ctc", label: "Annual Gross Salary", defaultValue: 85000, type: "currency", min: 10000, max: 1000000, step: 1000 },
                    { name: "taxRate", label: "Effective Tax Rate (%)", defaultValue: 22, type: "percentage", min: 0, max: 50, step: 0.5 }
                ],
                themeColor: "indigo"
            },
            {
                id: "vat-calculator",
                name: "VAT Calculator",
                slug: "vat-calculator",
                description: "Calculate Value Added Tax (VAT) amounts and net commercial product invoice totals.",
                formulaKey: "takeHome",
                resultLabel: "Net Monthly Take-Home Pay",
                categorySlug: "salary-tax",
                categoryName: "Salary & Tax",
                inputs: [
                    { name: "ctc", label: "Annual Gross Salary", defaultValue: 85000, type: "currency", min: 10000, max: 1000000, step: 1000 },
                    { name: "taxRate", label: "Effective Tax Rate (%)", defaultValue: 22, type: "percentage", min: 0, max: 50, step: 0.5 }
                ],
                themeColor: "indigo"
            }
        ]
    },
    {
        id: "financial-planning",
        name: "Financial Planning",
        slug: "financial-planning",
        description: "Explore free online calculators, estimators, and financial tools for financial planning.",
        icon: Compass,
        calculators: [
            {
                id: "inflation-calculator",
                name: "Inflation Calculator",
                slug: "inflation-calculator",
                description: "Determine future purchasing power erosion and historical inflation-adjusted dollar values.",
                formulaKey: "calculateLumpsum",
                resultLabel: "Future Maturity Value",
                categorySlug: "financial-planning",
                categoryName: "Financial Planning",
                inputs: [
                    { name: "investment", label: "Initial Investment Amount", defaultValue: 10000, type: "currency", min: 500, max: 500000, step: 500 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 8.0, type: "percentage", min: 1, max: 25, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 10, type: "number", min: 1, max: 40, step: 1 }
                ],
                themeColor: "indigo"
            },
            {
                id: "emergency-fund-calculator",
                name: "Emergency Fund Calculator",
                slug: "emergency-fund-calculator",
                description: "Calculate ideal 3-6 month liquid emergency fund target reserves and savings timeline.",
                formulaKey: "burnRate",
                resultLabel: "Months to Payoff",
                categorySlug: "financial-planning",
                categoryName: "Financial Planning",
                inputs: [
                    { name: "startingBalance", label: "Outstanding Debt Balance", defaultValue: 8500, type: "currency", min: 500, max: 200000, step: 250 },
                    { name: "currentBalance", label: "Remaining Balance Goal", defaultValue: 0, type: "currency", min: 0, max: 10000, step: 100 },
                    { name: "months", label: "Monthly Payoff Allocation", defaultValue: 350, type: "number", min: 50, max: 5000, step: 25 }
                ],
                themeColor: "indigo"
            },
            {
                id: "savings-goal-calculator",
                name: "Savings Goal Calculator",
                slug: "savings-goal-calculator",
                description: "Determine monthly savings contributions required to achieve target future financial milestones.",
                formulaKey: "calculateSIPResult",
                resultLabel: "Total Maturity Wealth",
                categorySlug: "financial-planning",
                categoryName: "Financial Planning",
                inputs: [
                    { name: "monthlyInvestment", label: "Monthly Investment", defaultValue: 500, type: "currency", min: 50, max: 50000, step: 50 },
                    { name: "rate", label: "Expected Annual Return (%)", defaultValue: 12.0, type: "percentage", min: 1, max: 30, step: 0.5 },
                    { name: "years", label: "Investment Horizon (Years)", defaultValue: 15, type: "number", min: 1, max: 35, step: 1 }
                ],
                themeColor: "indigo"
            }
        ]
    },
    {
        id: "business-finance",
        name: "Business Finance",
        slug: "business-finance",
        description: "Explore free online calculators, estimators, and financial tools for business finance.",
        icon: Briefcase,
        calculators: [
            {
                id: "factory-loan-calculator",
                name: "Factory Loan Calculator",
                slug: "factory-loan-calculator",
                description: "Calculate loan payments, interest costs, and amortization schedules for factory purchases and industrial facilities.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "business-finance",
                categoryName: "Business Finance",
                inputs: [
                    { name: "price", label: "Facility Purchase Price", defaultValue: 500000, type: "currency", min: 10000, max: 10000000, step: 10000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 100000, type: "currency", min: 0, max: 5000000, step: 5000 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 25, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 120, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "business-loan-calculator",
                name: "Business Loan Calculator",
                slug: "business-loan-calculator",
                description: "Calculate commercial business loan amortization, interest charges, and monthly debt service.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "business-finance",
                categoryName: "Business Finance",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 150000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 20000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 7.8, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 84, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "startup-burn-rate-calculator",
                name: "Startup Burn Rate Calculator",
                slug: "startup-burn-rate-calculator",
                description: "Calculate gross and net monthly cash burn rate and remaining runway months for venture startups.",
                formulaKey: "burnRate",
                resultLabel: "Months to Payoff",
                categorySlug: "business-finance",
                categoryName: "Business Finance",
                inputs: [
                    { name: "startingBalance", label: "Outstanding Debt Balance", defaultValue: 8500, type: "currency", min: 500, max: 200000, step: 250 },
                    { name: "currentBalance", label: "Remaining Balance Goal", defaultValue: 0, type: "currency", min: 0, max: 10000, step: 100 },
                    { name: "months", label: "Monthly Payoff Allocation", defaultValue: 350, type: "number", min: 50, max: 5000, step: 25 }
                ],
                themeColor: "indigo"
            },
            {
                id: "break-even-calculator",
                name: "Break Even Calculator",
                slug: "break-even-calculator",
                description: "Calculate break-even production units and sales revenue based on fixed and variable cost structures.",
                formulaKey: "burnRate",
                resultLabel: "Months to Payoff",
                categorySlug: "business-finance",
                categoryName: "Business Finance",
                inputs: [
                    { name: "startingBalance", label: "Outstanding Debt Balance", defaultValue: 8500, type: "currency", min: 500, max: 200000, step: 250 },
                    { name: "currentBalance", label: "Remaining Balance Goal", defaultValue: 0, type: "currency", min: 0, max: 10000, step: 100 },
                    { name: "months", label: "Monthly Payoff Allocation", defaultValue: 350, type: "number", min: 50, max: 5000, step: 25 }
                ],
                themeColor: "indigo"
            },
            {
                id: "profit-margin-calculator",
                name: "Profit Margin Calculator",
                slug: "profit-margin-calculator",
                description: "Calculate gross profit margin, operating margin, and net profit percentages from commercial sales.",
                formulaKey: "cagr",
                resultLabel: "Compound Annual Growth (CAGR %)",
                categorySlug: "business-finance",
                categoryName: "Business Finance",
                inputs: [
                    { name: "initialValue", label: "Initial Investment Value", defaultValue: 10000, type: "currency", min: 100, max: 1000000, step: 500 },
                    { name: "finalValue", label: "Ending Valuation", defaultValue: 25000, type: "currency", min: 100, max: 5000000, step: 500 },
                    { name: "years", label: "Holding Period (Years)", defaultValue: 5, type: "number", min: 1, max: 30, step: 1 }
                ],
                themeColor: "indigo"
            }
        ]
    },
    {
        id: "generators-tools",
        name: "Generators & Tools",
        slug: "generators-tools",
        description: "Explore free online calculators, estimators, and financial tools for generators & tools.",
        icon: Sparkles,
        calculators: [
            {
                id: "financial-name-generator",
                name: "Financial Name Generator",
                slug: "financial-name-generator",
                description: "Generate brandable, premium names for finance firms, investment consultancies, and funds.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "generators-tools",
                categoryName: "Generators & Tools",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "bank-name-generator",
                name: "Bank Name Generator",
                slug: "bank-name-generator",
                description: "Generate authoritative, trustworthy names for commercial banks, credit unions, and lending institutions.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "generators-tools",
                categoryName: "Generators & Tools",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "crypto-coin-name-generator",
                name: "Crypto Coin Name Generator",
                slug: "crypto-coin-name-generator",
                description: "Generate creative, memorable names for blockchain projects, crypto tokens, and Web3 protocols.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "generators-tools",
                categoryName: "Generators & Tools",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "fintech-startup-name-generator",
                name: "Fintech Startup Name Generator",
                slug: "fintech-startup-name-generator",
                description: "Generate modern, venture-ready brand names for financial technology applications and neobanks.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "generators-tools",
                categoryName: "Generators & Tools",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            }
        ]
    },
    {
        id: "document-generators",
        name: "Document Generators",
        slug: "document-generators",
        description: "Explore free online calculators, estimators, and financial tools for document generators.",
        icon: Layers,
        calculators: [
            {
                id: "invoice",
                name: "Invoice Generator Tool",
                slug: "invoice",
                description: "Create, edit, and download professional client-ready commercial PDF invoices online.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "document-generators",
                categoryName: "Document Generators",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "quotation",
                name: "Quotation Generator Tool",
                slug: "quotation",
                description: "Draft itemized sales quotations, estimates, and formal client cost proposals in PDF format.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "document-generators",
                categoryName: "Document Generators",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "receipt",
                name: "Receipt Generator Tool",
                slug: "receipt",
                description: "Generate itemized payment receipts, proof of transaction records, and printable statements.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "document-generators",
                categoryName: "Document Generators",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "rent-receipt",
                name: "Rent Receipt Generator Tool",
                slug: "rent-receipt",
                description: "Create official monthly rental payment receipts for tenant records and HRA tax exemptions.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "document-generators",
                categoryName: "Document Generators",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "salary-slip",
                name: "Salary Slip Generator Tool",
                slug: "salary-slip",
                description: "Generate itemized employee salary slips, earnings summaries, and deductions vouchers.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "document-generators",
                categoryName: "Document Generators",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "purchase-order",
                name: "Purchase Order Generator Tool",
                slug: "purchase-order",
                description: "Create formal B2B purchase orders, supplier agreements, and vendor item delivery forms.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "document-generators",
                categoryName: "Document Generators",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "amortization-statement",
                name: "Amortization Statement Generator Tool",
                slug: "amortization-statement",
                description: "Generate exportable loan amortization schedules, interest breakdowns, and balance statements.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "document-generators",
                categoryName: "Document Generators",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "zakat-summary",
                name: "Zakat Summary Statement Tool",
                slug: "zakat-summary",
                description: "Generate comprehensive Nisab-compliant Zakat contribution audit records and summary reports.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "document-generators",
                categoryName: "Document Generators",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            }
        ]
    },
    {
        id: "educational-guides",
        name: "Educational Guides",
        slug: "educational-guides",
        description: "Explore free online calculators, estimators, and financial tools for educational guides.",
        icon: Calculator,
        calculators: [
            {
                id: "apr-vs-interest-rate",
                name: "APR vs Interest Rate Guide & Calculator",
                slug: "apr-vs-interest-rate",
                description: "Master the essential differences between nominal interest rates and true Annual Percentage Rate (APR).",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "educational-guides",
                categoryName: "Educational Guides",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 300000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 60000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 360, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "seller-financing-balloons",
                name: "Seller Financing Balloon Payment Guide",
                slug: "seller-financing-balloons",
                description: "Deep-dive analysis into structuring seller-financed real estate promissory notes and balloon terms.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "educational-guides",
                categoryName: "Educational Guides",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 350000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 70000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "zakat-calculation-guide-2026",
                name: "Zakat Calculation Guide 2026",
                slug: "zakat-calculation-guide-2026",
                description: "Complete guide to calculating Nisab thresholds, eligible asset classes, and annual Zakat obligations.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "educational-guides",
                categoryName: "Educational Guides",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            },
            {
                id: "invoice-factoring-rates",
                name: "Invoice Factoring Rates Guide",
                slug: "invoice-factoring-rates",
                description: "Learn how accounts receivable factoring discount fees, advance rates, and effective APRs are calculated.",
                formulaKey: "calculateAutoLoanWithTradeIn",
                resultLabel: "Monthly Payment",
                categorySlug: "educational-guides",
                categoryName: "Educational Guides",
                inputs: [
                    { name: "price", label: "Total Amount / Price", defaultValue: 30000, type: "currency", min: 1000, max: 1000000, step: 1000 },
                    { name: "downPayment", label: "Down Payment", defaultValue: 3000, type: "currency", min: 0, max: 200000, step: 500 },
                    { name: "rate", label: "Interest Rate (APR %)", defaultValue: 6.5, type: "percentage", min: 0, max: 30, step: 0.1 },
                    { name: "tenureMonths", label: "Term (Months)", defaultValue: 60, type: "number", min: 12, max: 360, step: 12 }
                ],
                themeColor: "indigo"
            }
        ]
    }
];

export const getAllCalculators = (): CalculatorDefinition[] => {
    return calculatorCategories.flatMap(cat => cat.calculators);
};

export const getCalculatorBySlug = (slug: string): CalculatorDefinition | undefined => {
    return getAllCalculators().find(calc => calc.slug === slug);
};

export const getCategoryBySlug = (slug: string): CategoryDefinition | undefined => {
    return calculatorCategories.find(cat => cat.slug === slug);
};
