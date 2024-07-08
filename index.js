function calculatePAYE(taxableIncome) {
    let paye = 0;

    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 40667) {
        paye = 2400 + (taxableIncome - 24000) * 0.15;
    } else if (taxableIncome <= 57333) {
        paye = 2400 + 2499.95 + (taxableIncome - 40667) * 0.2;
    } else if (taxableIncome <= 74000) {
        paye = 2400 + 2499.95 + 3333.2 + (taxableIncome - 57333) * 0.25;
    } else {
        paye = 2400 + 2499.95 + 3333.2 + 4184.25 + (taxableIncome - 74000) * 0.3;
    }

    return paye;
}

function calculateNSSF(grossSalary) {
    let nssfRate = 0.06;
    let nssfDeduction = grossSalary * nssfRate;
    return Math.min(nssfDeduction, 1080); 
}

function calculateTaxableIncome(grossSalary, nssfDeduction) {
    return grossSalary - nssfDeduction;
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let nssfDeduction = calculateNSSF(grossSalary);
   let  taxableIncome = calculateTaxableIncome(grossSalary, nssfDeduction);
    let paye = calculatePAYE(taxableIncome);
    let nhifDeduction = calculateNHIF(grossSalary);
    let netSalary = grossSalary - (nssfDeduction + paye + nhifDeduction);

    return {
        grossSalary: grossSalary.toFixed(2),
        nssfDeduction: nssfDeduction.toFixed(2),
        taxableIncome: taxableIncome.toFixed(2),
        paye: paye.toFixed(2),
        nhifDeduction: nhifDeduction.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}


let basicSalary = 50000;
let benefits = 10000;

let result = calculateNetSalary(basicSalary, benefits);

for (let [key, value] of Object.entries(result)) {
    console.log(`${key}: ${value}`);
}
