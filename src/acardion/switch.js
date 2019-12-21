
export function shitchOnOff(element) {
    if (Boolean(!element.dataM)) {
        element.classList.add('content__active');
        console.log(element);
        element.dataM = true;
    }
    else {
        element.classList.remove('content__active');
        element.dataM = false;
    }
}
