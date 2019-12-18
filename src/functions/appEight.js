import { isNumber } from 'util';
export function appEight() {
    const array = [];
    let num = 0;
    while (isNumber(num) && !isNaN(num)) {
        num = parseInt(getNumber());
        array.push(num);
    }
    array.pop();
    alert(calc(array));
}
function getNumber() {
    return prompt("Уведіть число");
}
function calc(array) {
    let summ = 0;
    for (let item of array) {
        summ += item;
    }
    return summ;
}