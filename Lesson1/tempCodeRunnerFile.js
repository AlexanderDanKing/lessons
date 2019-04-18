let appData = {
    total: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: false
};
let required = prompt("Введите обязательную статью расходов в этом месяце");
let value = prompt("Во сколько обойдется");
appData.expenses[required] = value;
console.log(appData);