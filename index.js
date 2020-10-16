'use strict'

let money = prompt("Ваш бюджет на месяц")
let time = prompt("Введите дату в формате YYYY-MM-DD")

let appData = {
    money: money,
    timeData: time,
    expenses: {
        answer1: prompt("Введите обязательную статью расходов в этом месяце"),
        answer1: prompt("Во сколько обойдется?"),
    },
    optionalExpenses,
    income,
    savings: false
}

alert(money/30)


