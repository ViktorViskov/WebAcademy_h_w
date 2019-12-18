import { isNumber } from "util";
export function appSeven(array) {
    console.log(array);
    alert(array[randomNumber(array.length)]);
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}