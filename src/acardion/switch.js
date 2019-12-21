import { oneItemApp } from './oneItemApp';
export function shitchOnOff(item, element) {
    oneItemApp()
    item.classList.add('section__active');
    element.classList.add('content__active');
}
