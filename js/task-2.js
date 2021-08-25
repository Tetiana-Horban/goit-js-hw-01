let result;
const total = 100;
const ordered = 50;
if (ordered > total) {
    result = '"На складе недостаточно твоаров!"';}
else if (ordered <= total) {
    result = '"Заказ оформлен, с вами свяжется менеджер"';
}
    console.log(result);
