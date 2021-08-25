let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let input = prompt(`Введите количество дроидов, которые хотите купить`);

if (input === null) {
    alert(`Отменено пользователем!`);
}
else  {
    let numberDroid = Number(input);
    totalPrice = numberDroid * pricePerDroid;

    if (totalPrice > credits) {
        alert(`Недостаточно средств на счету!`);
    }
    else {
        let creditsEnd = credits - totalPrice;
        alert(`Вы купили ${numberDroid} дроидов, на счету осталось ${creditsEnd} кредитов.`);
}}
