export function oneItemApp() {
    let items = document.querySelectorAll('.content__active');
    items.forEach(element => {
        element.classList.remove('content__active');
    });
}