let createStatus = false;
export function lightApp() {
    if (!createStatus) {
        if (25 > lampAcount.value > 0) {
            for (let i = 0; i < lampAcount.value; i++) {
                addLamp();
            }
        }
        createStatus = !createStatus;

    }

}
function addLamp() {
    let place = document.querySelector(".line");
    createElement(place);
}
function createElement(place) {
    let item = document.createElement("span");
    item.classList.add("line__lamp");
    console.log(item);
    place.appendChild(item);
}
