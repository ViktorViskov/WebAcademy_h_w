export function switchApp(elemets, item) {
    let statusItem = document.querySelector('.container__element_active');
    if (checkStatusBtn() && statusItem != item) {
        statusItemApp(item, statusItem);
    }
    else {
        item.classList.remove('container__element_active');
    }

}
export function buttonFunc(button) {
    let statusBtn = document.querySelector('.container__toggle_active');
    let statusItem = document.querySelector('.container__element_active');
    if (statusBtn === null) {
        button.classList.add('container__toggle_active');
    }
    else {
        button.classList.remove('container__toggle_active');
        if (statusItem != null) {
            statusItem.classList.remove('container__element_active');
        }
    }
}
function checkStatusBtn() {
    let statusBtn = document.querySelector('.container__toggle_active');
    if (statusBtn === null) {
        return false
    }
    else {
        return true
    }
}
function statusItemApp(item, statusItem) {
    if (statusItem === null) {
        item.classList.add('container__element_active');
    }
    else {
        statusItem.classList.remove('container__element_active');
        item.classList.add('container__element_active');
    }
}