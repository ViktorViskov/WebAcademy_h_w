function createElement() {
    let place = document.querySelector('.container');
    let element = document.createElement('div');
    element.classList.add("element");
    place.appendChild(element);
}
export function app() {
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', function () {
        createElement();
    })
}