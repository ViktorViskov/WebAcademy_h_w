import { shitchOnOff } from './switch';


export function addEvent() {
    const obj = document.querySelectorAll('section');
    for (let item of obj) {
        item.classList.add('section');
        const elem = item.querySelector('.content');
        item.addEventListener('click', function () {
            shitchOnOff(item, elem);
        })
    }
}