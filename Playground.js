const factor_ = 10;
const e = {revenue: 10000, bonus: null};
const bonusCalculation = Function('x', `return x.bonus = x.revenue * ${factor_}`);


bonusCalculation(e);


//Test

bonusCalculation(e);
document.writeln (e.bonus === e.revenue * factor_);