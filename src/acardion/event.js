import { shitchOnOff } from './switch';


export function addEvent() {
    const obj = document.querySelectorAll('section');
    for (let item of obj) {
        const elem = item.querySelector('.content');
        item.addEventListener('click', function () {
            shitchOnOff(elem);
        })
    }
}