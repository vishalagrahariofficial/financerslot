const MathLogic = {
    calculateSIPResult: (values) => {
        const { monthlyInvestment, rate, years } = values;
        const months = years * 12;
        if (rate === 0) return Math.round(monthlyInvestment * months);
        const monthlyRate = rate / (12 * 100);
        const totalValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        return Math.round(totalValue);
    },
    nps: (values) => {
        const { investment, rate, years } = values;
        if (rate === 0) return Math.round(investment * 12 * years);
        return Math.round(investment * 12 * ((Math.pow(1 + rate / 100, years) - 1) / (rate / 100)) * (1 + rate / 100));
    },
    epf: (values) => {
        const { basicSalary, da, age, retirementAge } = values;
        const monthlyContribution = (basicSalary + da) * 0.24;
        const years = retirementAge - age;
        const rate = 8.15;
        const monthlyRate = rate / (12 * 100);
        const months = years * 12;
        return Math.round(monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));
    },
    ppf: (values) => {
        const { yearlyInvestment, rate, years } = values;
        const r = rate / 100;
        return Math.round(yearlyInvestment * ((Math.pow(1 + r, years) - 1) / r));
    },
    gratuity: (values) => {
        const { basicSalary, yearsOfService } = values;
        return Math.round((15 * basicSalary * yearsOfService) / 26);
    },
    monthlyPension: (values) => {
        const { corpus, rate } = values;
        return Math.round((corpus * rate) / (12 * 100));
    },
    simpleMultiplication: (values) => {
        const { basicSalary, rate, years } = values;
        return Math.round(basicSalary * (rate / 100) * 12 * years);
    },
    retirementCorpus: (values) => {
        const { currentExpenses, inflation, yearsToRetire, lifeExpectancyRetirement } = values;
        const monthlyExpensesAtRetirement = currentExpenses * Math.pow(1 + inflation / 100, yearsToRetire);
        const yearlyExpenses = monthlyExpensesAtRetirement * 12;
        const yearsInRetirement = lifeExpectancyRetirement;
        return Math.round(yearlyExpenses * yearsInRetirement);
    }
};

const formulasToTest = [
    { key: "retirementCorpus", params: { currentExpenses: 4000, inflation: 3, yearsToRetire: 25, lifeExpectancyRetirement: 20 } },
    { key: "monthlyPension", params: { corpus: 1000000, rate: 4 } },
    { key: "calculateSIPResult", params: { monthlyInvestment: 1000, rate: 7, years: 30 } },
    { key: "nps", params: { investment: 5000, rate: 10, years: 30 } },
    { key: "epf", params: { basicSalary: 60000, age: 30, retirementAge: 65 } }, // this should fail due to missing da
    { key: "ppf", params: { yearlyInvestment: 150000, rate: 7.1, years: 15 } },
    { key: "gratuity", params: { basicSalary: 40000, yearsOfService: 5 } },
    { key: "simpleMultiplication", params: { basicSalary: 50000, rate: 15, years: 10 } }
];

formulasToTest.forEach(test => {
    try {
        const result = MathLogic[test.key](test.params);
        console.log(`${test.key}: ${result} (NaN? ${isNaN(result)})`);
    } catch (e) {
        console.log(`${test.key}: Error - ${e.message}`);
    }
});
