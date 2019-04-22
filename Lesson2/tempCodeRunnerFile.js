let i = 0;
while ( i < 2 ) {
    var a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = prompt("Во сколько обойдется");
    appData.expenses[a] = b;
    i++;
};
console.log("done");