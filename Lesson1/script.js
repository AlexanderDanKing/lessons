'use strict';
let money = prompt("Ваш бюджет на месяц?"),
time = prompt("Введите дату в формате YYYY-MM-DD"),
 appData = {
    total: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
},
required = prompt("Введите обязательную статью расходов в этом месяце"),
value = prompt("Во сколько обойдется"),
required2 = prompt("Введите обязательную статью расходов в этом месяце"),
value2 = prompt("Во сколько обойдется");
appData.expenses[required] = value;
appData.expenses[required2] = value;
console.log(appData);
alert( ( money - value - value2 ) / 30);
