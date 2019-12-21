export function oneItemApp() {
    let section = document.querySelectorAll('.section');
    let items = document.querySelectorAll('.content__active');
    items.forEach(element => {
        element.classList.remove('content__active');
    },
        section.forEach(itemm => {
            itemm.classList.remove('section__active');
        })
    );
}