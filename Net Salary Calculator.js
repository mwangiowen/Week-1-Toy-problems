
const TAX_RATES = [
    { range: [0, 24000], rate: 10 },
    { range: [24001, 32333], rate: 15 },
    { range: [32334, 40333], rate: 20 },
    { range: [40334, 48333], rate: 25 },
    { range: [48334, Infinity], rate: 30 },
];

const NHIF_RATES = [
    { range: [0, 5999], rate: 150 },
    { range: [6000, 7999], rate: 300 },
    { range: [8000, 11999], rate: 400 },
    { range: [12000, 14999], rate: 500 },
    { range: [15000, 19999], rate: 600 },
    { range: [20000, 24999], rate: 750 },
    { range: [25000, Infinity], rate: 850 },
];

const NSSF_RATE = 200;

function calculatePayee(income) {
    for (const rate of TAX_RATES) {
        const [min, max] = rate.range;
        if (income >= min && income <= max) {
            return (rate.rate / 100) * (income - min);
        }
    }
    return 0; 
}

function calculateNHIF(income) {
    for (const rate of NHIF_RATES) {
        const [min, max] = rate.range;
        if (income >= min && income <= max) {
            return rate.rate;
        }
    }
    return 0;
}

function calculateSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = NSSF_RATE;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary,
        payee,
        nhifDeductions,
        nssfDeductions,
        netSalary,
    };
}

const basicSalary = 50000; 
const benefits = 8000; 
const salaryDetails = calculateSalary(basicSalary, benefits);

console.log('Gross Salary:', salaryDetails.grossSalary);
console.log('Payee (Tax):', salaryDetails.payee);
console.log('NHIF Deductions:', salaryDetails.nhifDeductions);
console.log('NSSF Deductions:', salaryDetails.nssfDeductions);
console.log('Net Salary:', salaryDetails.netSalary);
