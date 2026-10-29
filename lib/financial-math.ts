export interface FinancialMathResult {
    result: number;
    formattedResult?: string;
    details?: Record<string, any>;
    amortizationSchedule?: Array<{
        period: number;
        payment: number;
        principal: number;
        interest: number;
        remainingBalance: number;
    }>;
}

export const FinancialMath = {
    // --- Core & Legacy Formulas ---
    calculateEMI: (values: Record<string, number>): number => {
        const { principal = 0, rate = 0, tenureMonths = 12 } = values;
        if (principal <= 0 || tenureMonths <= 0) return 0;
        if (rate <= 0) return principal / tenureMonths;
        const monthlyRate = rate / (12 * 100);
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
        return isNaN(emi) ? 0 : Math.round(emi * 100) / 100;
    },

    calculateSIP: (monthlyInvestment: number, rate: number, years: number): { invested: number, returns: number, total: number } => {
        const months = years * 12;
        const investedAmount = monthlyInvestment * months;
        if (rate === 0) {
            return { invested: Math.round(investedAmount), returns: 0, total: Math.round(investedAmount) };
        }
        const monthlyRate = rate / (12 * 100);
        const totalValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        return { invested: Math.round(investedAmount), returns: Math.round(totalValue - investedAmount), total: Math.round(totalValue) };
    },

    calculateSIPResult: (values: Record<string, number>): number => {
        const { monthlyInvestment = 0, rate = 0, years = 0 } = values;
        const months = years * 12;
        if (rate === 0) return Math.round(monthlyInvestment * months);
        const monthlyRate = rate / (12 * 100);
        const totalValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        return Math.round(totalValue);
    },

    calculateLumpsum: (investment: number, rate: number, years: number): { invested: number, returns: number, total: number } => {
        const totalValue = investment * Math.pow(1 + rate / 100, years);
        return { invested: Math.round(investment), returns: Math.round(totalValue - investment), total: Math.round(totalValue) };
    },

    simpleInterest: (values: Record<string, number>): number => {
        const { principal = 0, rate = 0, time = 0 } = values;
        return Math.round((principal * rate * time) / 100);
    },

    compoundInterest: (values: Record<string, number>): number => {
        const { principal = 0, rate = 0, time = 0, frequency = 1 } = values;
        const n = frequency || 1;
        const amount = principal * Math.pow(1 + (rate / 100) / n, n * time);
        return Math.round(amount - principal);
    },

    loanEligibility: (values: Record<string, number>): number => {
        const { income = 0, foir = 40, rate = 7, tenure = 30 } = values;
        const maxEmi = income * (foir / 100);
        const monthlyRate = rate / (12 * 100);
        const months = tenure * 12;
        const loanAmount = (maxEmi * (Math.pow(1 + monthlyRate, months) - 1)) / (monthlyRate * Math.pow(1 + monthlyRate, months));
        return Math.round(loanAmount);
    },

    savingsGoal: (values: Record<string, number>): number => {
        const { goalAmount = 0, initialSavings = 0, monthlyContribution = 0, returnRate = 0 } = values;
        if (monthlyContribution <= 0) return 999;
        const monthlyRate = returnRate / (12 * 100);
        let months = 0;
        let currentAmount = initialSavings;
        while (currentAmount < goalAmount && months < 600) {
            currentAmount = currentAmount * (1 + monthlyRate) + monthlyContribution;
            months++;
        }
        return months;
    },

    monthlyBudget: (values: Record<string, number>): number => {
        const { income = 0, expenses = 0 } = values;
        return income - expenses;
    },

    costOfLiving: (values: Record<string, number>): number => {
        const { currentSalary = 0, costDifference = 0 } = values;
        return Math.round(currentSalary * (1 + costDifference / 100));
    },

    debtToIncome: (values: Record<string, number>): number => {
        const { monthlyDebt = 0, monthlyIncome = 1 } = values;
        return Number(((monthlyDebt / monthlyIncome) * 100).toFixed(2));
    },

    netWorth: (values: Record<string, number>): number => {
        const { assets = 0, liabilities = 0 } = values;
        return assets - liabilities;
    },

    emergencyFund: (values: Record<string, number>): number => {
        const { monthlyExpenses = 0, months = 6 } = values;
        return monthlyExpenses * months;
    },

    lumpsum: (values: Record<string, number>): number => {
        const { investment = 0, rate = 0, time = 0 } = values;
        return Math.round(investment * Math.pow(1 + rate / 100, time));
    },

    cagr: (values: Record<string, number>): number => {
        const { initialValue = 1, finalValue = 1, years = 1 } = values;
        if (initialValue <= 0 || years <= 0) return 0;
        const cagr = (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;
        return Number(cagr.toFixed(2));
    },

    roi: (values: Record<string, number>): number => {
        const { investment = 1, returns = 0 } = values;
        if (investment <= 0) return 0;
        const roi = ((returns - investment) / investment) * 100;
        return Number(roi.toFixed(2));
    },

    doublingTime: (values: Record<string, number>): number => {
        const { rate = 1 } = values;
        return Number((72 / rate).toFixed(1));
    },

    stockReturn: (values: Record<string, number>): number => {
        const { buyPrice = 0, sellPrice = 0, quantity = 0 } = values;
        return Math.round((sellPrice - buyPrice) * quantity);
    },

    assetAllocation: (values: Record<string, number>): number => {
        const { age = 30 } = values;
        return Math.max(0, 100 - age);
    },

    riskRewardRatio: (values: Record<string, number>): number => {
        const { entryPrice = 100, targetPrice = 120, stopLoss = 95 } = values;
        const reward = targetPrice - entryPrice;
        const risk = entryPrice - stopLoss;
        if (risk <= 0) return 0;
        return Number((reward / risk).toFixed(1));
    },

    dca: (values: Record<string, number>): number => {
        const { price1 = 0, qty1 = 0, price2 = 0, qty2 = 0 } = values;
        const totalCost = (price1 * qty1) + (price2 * qty2);
        const totalQty = qty1 + qty2;
        if (totalQty === 0) return 0;
        return Number((totalCost / totalQty).toFixed(2));
    },

    dividendYield: (values: Record<string, number>): number => {
        const { dividendPerShare = 0, sharePrice = 1 } = values;
        return Number(((dividendPerShare / sharePrice) * 100).toFixed(2));
    },

    nps: (values: Record<string, number>): number => {
        const { investment = 0, rate = 0, years = 0 } = values;
        if (rate === 0) return Math.round(investment * 12 * years);
        return Math.round(investment * 12 * ((Math.pow(1 + rate / 100, years) - 1) / (rate / 100)) * (1 + rate / 100));
    },

    epf: (values: Record<string, number>): number => {
        const { basicSalary = 0, da = 0, age = 30, retirementAge = 60 } = values;
        const monthlyContribution = (basicSalary + da) * 0.24;
        const years = retirementAge - age;
        const rate = 8.15;
        const monthlyRate = rate / (12 * 100);
        const months = years * 12;
        return Math.round(monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));
    },

    ppf: (values: Record<string, number>): number => {
        const { yearlyInvestment = 0, rate = 7.1, years = 15 } = values;
        const r = rate / 100;
        return Math.round(yearlyInvestment * ((Math.pow(1 + r, years) - 1) / r));
    },

    gratuity: (values: Record<string, number>): number => {
        const { basicSalary = 0, yearsOfService = 5 } = values;
        return Math.round((15 * basicSalary * yearsOfService) / 26);
    },

    monthlyPension: (values: Record<string, number>): number => {
        const { corpus = 0, rate = 4 } = values;
        return Math.round((corpus * rate) / (12 * 100));
    },

    simpleMultiplication: (values: Record<string, number>): number => {
        const { basicSalary = 0, rate = 0, years = 0 } = values;
        return Math.round(basicSalary * (rate / 100) * 12 * years);
    },

    retirementCorpus: (values: Record<string, number>): number => {
        const { currentExpenses = 0, inflation = 3, yearsToRetire = 25, lifeExpectancyRetirement = 20 } = values;
        const monthlyExpensesAtRetirement = currentExpenses * Math.pow(1 + inflation / 100, yearsToRetire);
        const yearlyExpenses = monthlyExpensesAtRetirement * 12;
        return Math.round(yearlyExpenses * lifeExpectancyRetirement);
    },

    gst: (values: Record<string, number>): number => Math.round((values.amount * values.rate) / 100),
    vat: (values: Record<string, number>): number => Math.round((values.amount * values.rate) / 100),

    capitalGains: (values: Record<string, number>): number => {
        const { buyPrice = 0, sellPrice = 0, rate = 0 } = values;
        const profit = sellPrice - buyPrice;
        if (profit <= 0) return 0;
        return Math.round(profit * (rate / 100));
    },

    simpleTax: (values: Record<string, number>): number => {
        const { amount = 0, rate = 0 } = values;
        return Math.round(amount * (rate / 100));
    },

    incomeTaxOldRegime: (values: Record<string, number>): number => {
        const { income = 0 } = values;
        if (income <= 250000) return 0;
        if (income <= 500000) return (income - 250000) * 0.05;
        if (income <= 1000000) return (250000 * 0.05) + (income - 500000) * 0.20;
        return (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30;
    },

    rentalYield: (values: Record<string, number>): number => {
        const { monthlyRent = 0, propertyCost = 1 } = values;
        const annualRent = monthlyRent * 12;
        return Number(((annualRent / propertyCost) * 100).toFixed(2));
    },

    homeAffordability: (values: Record<string, number>): number => {
        const { income = 0, downPayment = 0 } = values;
        return (income * 12 * 5) + downPayment;
    },

    stampDuty: (values: Record<string, number>): number => {
        const { propertyValue = 0, stateRate = 5 } = values;
        return Math.round((propertyValue * stateRate) / 100);
    },

    mortgageRefinance: (values: Record<string, number>): number => {
        const { currentEMI = 0, newPrincipal = 0, newRate = 0, newTenure = 12 } = values;
        let newEMI;
        if (newRate === 0) {
            newEMI = newPrincipal / newTenure;
        } else {
            const monthlyRate = newRate / (12 * 100);
            newEMI = (newPrincipal * monthlyRate * Math.pow(1 + monthlyRate, newTenure)) / (Math.pow(1 + monthlyRate, newTenure) - 1);
        }
        const savings = currentEMI - newEMI;
        return Math.round(savings > 0 ? savings : 0);
    },

    breakEven: (values: Record<string, number>): number => {
        const { fixedCosts = 0, pricePerUnit = 0, variableCostPerUnit = 0 } = values;
        if (pricePerUnit <= variableCostPerUnit) return 0;
        return Math.round(fixedCosts / (pricePerUnit - variableCostPerUnit));
    },

    profitMargin: (values: Record<string, number>): number => {
        const { revenue = 1, cost = 0 } = values;
        if (revenue <= 0) return 0;
        return Number((((revenue - cost) / revenue) * 100).toFixed(2));
    },

    burnRate: (values: Record<string, number>): number => {
        const { startingBalance = 0, currentBalance = 0, months = 1 } = values;
        if (months <= 0) return 0;
        return Math.round((startingBalance - currentBalance) / months);
    },

    depreciation: (values: Record<string, number>): number => {
        const { cost = 0, salvage = 0, life = 1 } = values;
        if (life <= 0) return 0;
        return Math.round((cost - salvage) / life);
    },

    inventoryTurnover: (values: Record<string, number>): number => {
        const { cogs = 0, avgInventory = 1 } = values;
        if (avgInventory <= 0) return 0;
        return Number((cogs / avgInventory).toFixed(2));
    },

    fdCalculator: (values: Record<string, number>): number => {
        const { principal = 0, rate = 0, tenure = 1 } = values;
        return Math.round(principal * Math.pow(1 + (rate / 100), tenure));
    },

    rdCalculator: (values: Record<string, number>): number => {
        const { monthlyDeposit = 0, rate = 0, months = 1 } = values;
        const r = rate / 100;
        const interest = monthlyDeposit * (months * (months + 1) / 2) * (r / 12);
        return Math.round((monthlyDeposit * months) + interest);
    },

    loanInterest: (values: Record<string, number>): number => {
        const { principal = 0, rate = 0, tenureMonths = 12 } = values;
        const monthlyRate = rate / (12 * 100);
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
        const totalAmount = emi * tenureMonths;
        return Math.round(totalAmount - principal);
    },

    overdraftInterest: (values: Record<string, number>): number => {
        const { principal = 0, rate = 0, days = 1 } = values;
        return Math.round((principal * (rate / 100) * days) / 365);
    },

    salary: (values: Record<string, number>): number => {
        const { ctc = 0 } = values;
        return Math.round(ctc / 12);
    },

    takeHome: (values: Record<string, number>): number => {
        const { ctc = 0, taxRate = 0 } = values;
        const tax = (ctc * taxRate) / 100;
        return Math.round((ctc - tax) / 12);
    },

    bonus: (values: Record<string, number>): number => {
        const { basicSalary = 0, percentage = 0 } = values;
        return Math.round((basicSalary * percentage) / 100);
    },

    overtime: (values: Record<string, number>): number => {
        const { hourlyRate = 0, hours = 0, multiplier = 1.5 } = values;
        return Math.round(hourlyRate * hours * multiplier);
    },

    currencyConverter: (values: Record<string, number>): number => {
        const { amount = 0, rate = 1 } = values;
        return Number((amount * rate).toFixed(2));
    },

    healthPremium: (values: Record<string, number>): number => {
        const { age = 30, members = 1, coverage = 500000 } = values;
        const basePremium = coverage * 0.02;
        const ageFactor = 1 + (age - 25) * 0.02;
        return Math.round(basePremium * ageFactor * members);
    },

    motorPremium: (values: Record<string, number>): number => {
        const { idv = 0, rate = 2 } = values;
        return Math.round(idv * (rate / 100));
    },

    lifeInsurance: (values: Record<string, number>): number => {
        const { age = 30, coverage = 10000000, term = 20 } = values;
        const baseRate = 2;
        const ageFactor = 1 + (age - 20) * 0.05;
        const termFactor = 1 + (term - 10) * 0.02;
        return Math.round((coverage / 1000) * baseRate * ageFactor * termFactor);
    },

    insuranceCoverage: (values: Record<string, number>): number => {
        const { annualIncome = 0, liabilities = 0, currentSavings = 0 } = values;
        return Math.round((annualIncome * 15) + liabilities - currentSavings);
    },

    miningProfit: (values: Record<string, number>): number => {
        const { power = 0, cost = 0, reward = 0 } = values;
        const dailyCost = (power / 1000) * 24 * cost;
        const dailyProfit = reward - dailyCost;
        return Number(dailyProfit.toFixed(2));
    },

    cryptoProfit: (values: Record<string, number>): number => {
        const { investment = 0, purchasePrice = 1, sellingPrice = 1 } = values;
        const units = investment / purchasePrice;
        const currentValue = units * sellingPrice;
        return Math.round(currentValue - investment);
    },

    cryptoStaking: (values: Record<string, number>): number => {
        const { amount = 0, apy = 0, durationMonths = 12 } = values;
        const r = apy / 100;
        const time = durationMonths / 12;
        return Math.round(amount * r * time);
    },

    futureValue: (values: Record<string, number>): number => {
        const { presentValue = 0, rate = 0, periods = 1 } = values;
        return Math.round(presentValue * Math.pow(1 + rate / 100, periods));
    },

    presentValue: (values: Record<string, number>): number => {
        const { futureValue = 0, rate = 0, periods = 1 } = values;
        return Math.round(futureValue / Math.pow(1 + rate / 100, periods));
    },

    ruleOf72: (values: Record<string, number>): number => {
        const { rate = 1 } = values;
        return Number((72 / rate).toFixed(1));
    },

    homeRenovation: (values: Record<string, number>): number => {
        const { area = 0, costPerSqFt = 0, buffer = 0 } = values;
        const baseCost = area * costPerSqFt;
        return Math.round(baseCost * (1 + buffer / 100));
    },

    carAffordability: (values: Record<string, number>): number => {
        const { monthlyIncome = 0, downPayment = 0 } = values;
        const maxEMI = 0.1 * monthlyIncome;
        const rate = 8 / (12 * 100);
        const periods = 48;
        const maxLoan = maxEMI * ((Math.pow(1 + rate, periods) - 1) / (rate * Math.pow(1 + rate, periods)));
        return Math.round(maxLoan + downPayment);
    },

    freelanceRate: (values: Record<string, number>): number => {
        const { targetMonthlyIncome = 0, billableHours = 1 } = values;
        if (billableHours === 0) return 0;
        return Math.round(targetMonthlyIncome / billableHours);
    },

    hra: (values: Record<string, number>): number => {
        const { basicSalary = 0, rentPaid = 0, cityType = 1 } = values;
        const pct = cityType === 1 ? 0.5 : 0.4;
        const a = basicSalary * pct;
        const b = rentPaid - (0.1 * basicSalary);
        return Math.round(Math.max(0, Math.min(a, b)));
    },

    npsCorpus: (values: Record<string, number>): number => {
        const { monthlyContribution = 0, age = 30, retirementAge = 60, roi = 10 } = values;
        const years = retirementAge - age;
        const rate = roi / (12 * 100);
        const months = years * 12;
        if (rate === 0) return monthlyContribution * months;
        const corpus = monthlyContribution * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
        return Math.round(corpus);
    },

    epfCorpus: (values: Record<string, number>): number => {
        const { basicSalary = 0, currentAge = 30, retirementAge = 60, currentBalance = 0, annualIncrease = 5 } = values;
        let balance = currentBalance;
        let salary = basicSalary;
        const months = (retirementAge - currentAge) * 12;
        const rate = 8.15 / 100 / 12;

        for (let i = 0; i < months; i++) {
            if (i > 0 && i % 12 === 0) {
                salary = salary * (1 + annualIncrease / 100);
            }
            const contribution = salary * 0.24;
            balance = (balance + contribution) * (1 + rate);
        }
        return Math.round(balance);
    },

    lta: (values: Record<string, number>): number => {
        const { actualTravelCost = 0, ltaProvided = 0 } = values;
        return Math.min(actualTravelCost, ltaProvided);
    },

    youtubeEarnings: (values: Record<string, number>): number => {
        const { dailyViews = 0, rpm = 2 } = values;
        return Math.round((dailyViews / 1000) * rpm * 30);
    },

    adsense: (values: Record<string, number>): number => {
        const { dailyVisitors = 0, ctr = 2, cpc = 0.5 } = values;
        return Math.round(dailyVisitors * (ctr / 100) * cpc * 30);
    },

    saasMrr: (values: Record<string, number>): number => {
        const { customers = 0, arpu = 0 } = values;
        return customers * arpu;
    },

    churnRate: (values: Record<string, number>): number => {
        const { customersStart = 1, customersLost = 0 } = values;
        if (customersStart === 0) return 0;
        return Number(((customersLost / customersStart) * 100).toFixed(2));
    },

    influencerRate: (values: Record<string, number>): number => {
        const { followers = 0, engagementRate = 3 } = values;
        const base = (followers / 1000) * 10;
        const multiplier = 1 + (engagementRate / 100);
        return Math.round(base * multiplier);
    },

    fuelCost: (values: Record<string, number>): number => {
        const { distance = 0, mileage = 1, fuelPrice = 0 } = values;
        if (mileage === 0) return 0;
        return Number(((distance / mileage) * fuelPrice).toFixed(2));
    },

    electricity: (values: Record<string, number>): number => {
        const { watts = 0, hoursPerDay = 0, ratePerUnit = 0 } = values;
        const unitsPerMonth = ((watts * hoursPerDay) / 1000) * 30;
        return Number((unitsPerMonth * ratePerUnit).toFixed(2));
    },

    timeValue: (values: Record<string, number>): number => {
        const { hoursSaved = 0, hourlyRate = 0 } = values;
        return hoursSaved * hourlyRate;
    },

    inflation: (values: Record<string, number>): number => {
        const { amount = 0, inflationRate = 0, years = 1 } = values;
        return Math.round(amount * Math.pow(1 + inflationRate / 100, years));
    },

    fire: (values: Record<string, number>): number => {
        const { annualExpenses = 0, withdrawalRate = 4 } = values;
        if (withdrawalRate === 0) return 0;
        return Math.round(annualExpenses / (withdrawalRate / 100));
    },

    // --- 60 Specialized FinancerSlot Calculators Math Engines ---
    calculateAutoLoanWithTradeIn: (values: Record<string, number>): FinancialMathResult => {
        const {
            price = 35000,
            downPayment = 5000,
            tradeInValue = 0,
            salesTaxRate = 7,
            rate = 5.9,
            tenureMonths = 60,
            addons = 0
        } = values;

        const taxableAmount = Math.max(0, price - tradeInValue);
        const salesTax = taxableAmount * (salesTaxRate / 100);
        const totalVehicleCost = price + salesTax + addons;
        const netLoanAmount = Math.max(0, totalVehicleCost - downPayment - tradeInValue);

        let monthlyPayment = 0;
        if (netLoanAmount > 0 && tenureMonths > 0) {
            if (rate <= 0) {
                monthlyPayment = netLoanAmount / tenureMonths;
            } else {
                const monthlyRate = rate / (12 * 100);
                monthlyPayment = (netLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
            }
        }

        const totalPayments = monthlyPayment * tenureMonths;
        const totalInterest = Math.max(0, totalPayments - netLoanAmount);

        const schedule = [];
        let balance = netLoanAmount;
        const monthlyRate = rate / (12 * 100);
        for (let i = 1; i <= tenureMonths; i++) {
            const interest = rate > 0 ? balance * monthlyRate : 0;
            const principal = monthlyPayment - interest;
            balance = Math.max(0, balance - principal);
            schedule.push({
                period: i,
                payment: Math.round(monthlyPayment),
                principal: Math.round(principal),
                interest: Math.round(interest),
                remainingBalance: Math.round(balance)
            });
        }

        return {
            result: Math.round(monthlyPayment),
            details: {
                netLoanAmount: Math.round(netLoanAmount),
                salesTax: Math.round(salesTax),
                totalInterest: Math.round(totalInterest),
                totalCost: Math.round(totalPayments + downPayment + tradeInValue)
            },
            amortizationSchedule: schedule
        };
    },

    calculateBiWeeklyAuto: (values: Record<string, number>): FinancialMathResult => {
        const { principal = 30000, rate = 6.5, tenureMonths = 60 } = values;

        const monthlyRate = rate / (12 * 100);
        const monthlyEMI = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
        const biWeeklyPayment = monthlyEMI / 2;

        let balance = principal;
        const biWeeklyRate = rate / (26 * 100);
        let biWeeklyPeriods = 0;
        let totalBiWeeklyInterest = 0;

        while (balance > 0 && biWeeklyPeriods < 1000) {
            biWeeklyPeriods++;
            const interest = balance * biWeeklyRate;
            const principalPaid = Math.min(balance, biWeeklyPayment - interest);
            totalBiWeeklyInterest += interest;
            balance -= principalPaid;
        }

        const totalMonthlyInterest = (monthlyEMI * tenureMonths) - principal;
        const monthsSaved = Math.max(0, Math.round(tenureMonths - (biWeeklyPeriods / 2.166)));
        const interestSaved = Math.max(0, totalMonthlyInterest - totalBiWeeklyInterest);

        return {
            result: Math.round(biWeeklyPayment),
            details: {
                monthlyPayment: Math.round(monthlyEMI),
                biWeeklyPayment: Math.round(biWeeklyPayment),
                monthsSaved: monthsSaved,
                interestSaved: Math.round(interestSaved),
                totalInterestBiWeekly: Math.round(totalBiWeeklyInterest),
                totalInterestMonthly: Math.round(totalMonthlyInterest)
            }
        };
    },

    calculateReverseMortgage: (values: Record<string, number>): FinancialMathResult => {
        const { homeValue = 450000, age = 68, existingMortgage = 50000, rate = 6.25 } = values;
        const baseFactor = Math.min(0.70, Math.max(0.35, 0.35 + (age - 62) * 0.012));
        const grossPrincipalLimit = homeValue * baseFactor;
        const netPrincipalLimit = Math.max(0, grossPrincipalLimit - existingMortgage);
        const estimatedMonthlyPayout = (netPrincipalLimit * (rate / 100)) / 12;

        return {
            result: Math.round(netPrincipalLimit),
            details: {
                grossPrincipalLimit: Math.round(grossPrincipalLimit),
                existingMortgagePaid: Math.round(existingMortgage),
                plfPercentage: Number((baseFactor * 100).toFixed(1)),
                estimatedMonthlyPayout: Math.round(estimatedMonthlyPayout)
            }
        };
    },

    calculateMortgageFinanceCharge: (values: Record<string, number>): FinancialMathResult => {
        const { loanAmount = 350000, rate = 6.5, tenureYears = 30, points = 1, closingFees = 4500 } = values;
        const tenureMonths = tenureYears * 12;
        const monthlyRate = rate / (12 * 100);
        const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
        const totalPayments = monthlyPayment * tenureMonths;
        const totalInterest = totalPayments - loanAmount;
        const pointsCost = loanAmount * (points / 100);
        const totalFinanceCharge = totalInterest + pointsCost + closingFees;
        const approxAPR = rate + ((pointsCost + closingFees) / loanAmount / tenureYears) * 100;

        return {
            result: Math.round(totalFinanceCharge),
            details: {
                monthlyPayment: Math.round(monthlyPayment),
                totalInterest: Math.round(totalInterest),
                upfrontPointsCost: Math.round(pointsCost),
                closingFees: Math.round(closingFees),
                trueAPR: Number(approxAPR.toFixed(3))
            }
        };
    },

    calculateDevelopmentFinance: (values: Record<string, number>): FinancialMathResult => {
        const { gdv = 2500000, landCost = 600000, buildCost = 1000000, seniorLTV = 60, interestRate = 9.5 } = values;
        const totalProjectCost = landCost + buildCost;
        const maxSeniorLoan = gdv * (seniorLTV / 100);
        const loanAmount = Math.min(maxSeniorLoan, totalProjectCost * 0.85);
        const equityRequired = Math.max(0, totalProjectCost - loanAmount);
        const annualInterest = loanAmount * (interestRate / 100);
        const grossProfit = gdv - totalProjectCost - annualInterest;
        const developerROI = equityRequired > 0 ? (grossProfit / equityRequired) * 100 : 0;

        return {
            result: Math.round(grossProfit),
            details: {
                totalProjectCost: Math.round(totalProjectCost),
                seniorLoanAmount: Math.round(loanAmount),
                equityRequired: Math.round(equityRequired),
                annualInterestCost: Math.round(annualInterest),
                developerROI: Number(developerROI.toFixed(1))
            }
        };
    },

    calculateSellerFinancing: (values: Record<string, number>): FinancialMathResult => {
        const { purchasePrice = 300000, downPayment = 60000, rate = 7.5, amortYears = 30, balloonYears = 5 } = values;
        const loanAmount = Math.max(0, purchasePrice - downPayment);
        const tenureMonths = amortYears * 12;
        const balloonMonths = balloonYears * 12;
        const monthlyRate = rate / (12 * 100);
        const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);

        let balance = loanAmount;
        for (let i = 0; i < balloonMonths; i++) {
            const interest = balance * monthlyRate;
            const principal = monthlyPayment - interest;
            balance -= principal;
        }

        return {
            result: Math.round(monthlyPayment),
            details: {
                loanAmount: Math.round(loanAmount),
                balloonPayment: Math.round(Math.max(0, balance)),
                balloonYear: balloonYears,
                monthlyPayment: Math.round(monthlyPayment)
            }
        };
    },

    calculateInvoiceFinance: (values: Record<string, number>): FinancialMathResult => {
        const { invoiceValue = 100000, advanceRate = 85, factoringFeeRate = 2.5, periodDays = 30 } = values;
        const advanceAmount = invoiceValue * (advanceRate / 100);
        const feeAmount = invoiceValue * (factoringFeeRate / 100);
        const netRemaining = invoiceValue - advanceAmount - feeAmount;

        return {
            result: Math.round(advanceAmount),
            details: {
                advanceAmount: Math.round(advanceAmount),
                factoringFee: Math.round(feeAmount),
                netRemainingPayout: Math.round(netRemaining),
                effectiveCost: Number((factoringFeeRate * (365 / periodDays)).toFixed(1))
            }
        };
    },

    calculateZakat: (values: Record<string, number>): FinancialMathResult => {
        const { cashBank = 15000, goldSilver = 5000, halalStocks = 25000, cryptoValue = 4000, businessAssets = 10000, shortTermDebts = 3000 } = values;
        const grossAssets = cashBank + goldSilver + halalStocks + cryptoValue + businessAssets;
        const netZakatableWealth = Math.max(0, grossAssets - shortTermDebts);
        const zakatDue = netZakatableWealth * 0.025;

        return {
            result: Math.round(zakatDue),
            details: {
                grossAssets: Math.round(grossAssets),
                deductibleDebts: Math.round(shortTermDebts),
                netZakatableWealth: Math.round(netZakatableWealth),
                zakatRate: "2.5%"
            }
        };
    },

    calculateTI84TVM: (values: Record<string, number>, solveFor: string = 'PMT'): FinancialMathResult => {
        const N = values.N || 60;
        const I_Y = values.I_Y || 6;
        const PV = values.PV || -25000;
        const PMT = values.PMT || 0;
        const FV = values.FV || 0;
        const PY = values.PY || 12;

        const i = (I_Y / 100) / PY;

        if (solveFor === 'PMT') {
            if (i === 0) return { result: Math.round((-(PV + FV) / N) * 100) / 100 };
            const pmt = - (PV * Math.pow(1 + i, N) + FV) * i / (Math.pow(1 + i, N) - 1);
            return { result: Math.round(pmt * 100) / 100 };
        } else if (solveFor === 'PV') {
            if (i === 0) return { result: Math.round((-(PMT * N + FV)) * 100) / 100 };
            const pv = - (PMT * (1 - Math.pow(1 + i, -N)) / i + FV * Math.pow(1 + i, -N));
            return { result: Math.round(pv * 100) / 100 };
        } else if (solveFor === 'FV') {
            if (i === 0) return { result: Math.round((-(PV + PMT * N)) * 100) / 100 };
            const fv = - (PV * Math.pow(1 + i, N) + PMT * (Math.pow(1 + i, N) - 1) / i);
            return { result: Math.round(fv * 100) / 100 };
        }

        return { result: Math.round(PMT) };
    },

    calculateDivorceSplit: (values: Record<string, number>): FinancialMathResult => {
        const { totalAssets = 800000, totalDebts = 200000, spouseAPercent = 50 } = values;
        const netMaritalEstate = Math.max(0, totalAssets - totalDebts);
        const spouseAShare = netMaritalEstate * (spouseAPercent / 100);
        const spouseBShare = netMaritalEstate * ((100 - spouseAPercent) / 100);

        return {
            result: Math.round(spouseAShare),
            details: {
                netEstate: Math.round(netMaritalEstate),
                spouseAAmount: Math.round(spouseAShare),
                spouseBAmount: Math.round(spouseBShare),
                difference: Math.round(Math.abs(spouseAShare - spouseBShare))
            }
        };
    },

    calculatePersonalFinanceClub: (values: Record<string, number>): FinancialMathResult => {
        const { startingBalance = 10000, monthlyContribution = 500, returnRate = 9.5, years = 30 } = values;
        const months = years * 12;
        const r = returnRate / (12 * 100);
        let balance = startingBalance;
        let totalInvested = startingBalance;

        for (let i = 0; i < months; i++) {
            balance = (balance + monthlyContribution) * (1 + r);
            totalInvested += monthlyContribution;
        }

        return {
            result: Math.round(balance),
            details: {
                totalInvested: Math.round(totalInvested),
                compoundGrowth: Math.round(Math.max(0, balance - totalInvested)),
                futureNetWorth: Math.round(balance),
                multiplier: Number((balance / totalInvested).toFixed(2))
            }
        };
    },

    formatCurrency: (amount: number, currency: string = 'USD'): string => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumFractionDigits: 0 }).format(amount);
    }
};
