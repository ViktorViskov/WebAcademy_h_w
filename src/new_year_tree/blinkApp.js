import { randomNumber } from './snowApp';
let status = false;
function blinkApp() {
    if (!status) {
        let lamps = document.querySelectorAll(".line__lamp");
        for (let lamp of lamps) {
            lamp.style.backgroundColor = randomColor();
        }
    }
    status = !status;
}
function randomColor() {
    return "rgb(" + randomNumber(255) + "," + randomNumber(255) + "," + randomNumber(255) + ")";
}
let timer;
export function startLight() {
    if (!timer) {
        timer = setInterval(blinkApp, 200);
    }
    else {
        timer = clearInterval(timer);
        let lamps = document.querySelectorAll(".line__lamp");
        for (let lamp of lamps) {
            lamp.style.backgroundColor = "";
        }
    }

}