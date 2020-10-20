let money,time;
function start(){
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money==null){
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses(){
	for (let i=0; i<2;i++){

		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if (typeof(a)==='string' && typeof(a) !=null && typeof(b) !=null
			&& a!= '' && b!='' && a.length < 50){
			console.log("done");
			appData.expenses[a] = b; 
		} else {
			i--;
		}
		
	};
}
chooseExpenses();

appData.moneyPerDay= (appData.budget / 30).toFixed();




console.log(appData.expenses[0]);

function checkSavings(){
	if (appData.savings == true){
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");
		appData.mouthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего дпозита: "+ appData.mouthIncome);
	}
}

function detectDayBudget(){
	alert("Ежедневный бюджет:" + appData.moneyPerDay)
}

function detectLevel(){
	if(appData.moneyPerDay<100){
		alert("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && 2000){
		alert("Средний уровень достатка");
	}else if(appData.moneyPerDay >2000){
		alert("Высокий уровень достатка")
	} else {
		alert("Произошла огибка")
	}
}

function chooseOptExpenses(){
	for (let i = 0; i < 3; i++) {
		appData.optionalExpenses[i]= prompt("Статья необязательных расходов?", '');
	}
}

checkSavings();