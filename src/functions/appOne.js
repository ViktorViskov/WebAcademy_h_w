function validation(text) {
    let inValue = prompt("Введіть " + text + " число");
    while (inValue === null || inValue === '' || isNaN(inValue)) {
        inValue = prompt("Помилка! Введіть число");
    }
    return Number(inValue);
}

export function randomInteger(min, max) {
    alert('Програма для генерації випадкового числа. Введіть min мінімальне число включно від якого почнеться генерація і max максимальне число до якого відбудеться генерація');
    min = validation('мінімальне');
    max = validation('максимальне');
    if (min > max) {
        alert('Помилка. Мінімальне число не може бути більше максимального!');
    }
    else {
        alert(Math.round((Math.random() * (max - min)) + min));
    }

}