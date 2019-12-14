import { switchApp, buttonFunc } from './switchApp';


export function app() {
    let elements = document.querySelectorAll(".container__element");
    for (let i = 0; i < elements.length; i++) {
        let item = elements[i];
        item.addEventListener('click', function () {
            switchApp(elements, item);
        });
    }
}
export function toggle() {
    let button = document.querySelector(".container__toggle");
    button.addEventListener('click', function () {
        buttonFunc(button);
    })
}