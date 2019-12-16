export function startApp() {
    setInterval(snowApp, 1000);
}

function snowApp() {
    for (let i = 0; i < 2; i++) {
        addElement();
        setTimeout(dropApp, 200);
        setTimeout(removeElement, 8000);
    }
}
function addElement() {
    let place = document.querySelector(".container");
    let element = document.createElement("span");
    element.textContent = '*';
    element.classList.add("container__snow");
    element.style.right = randomNumber(96) + 2 + "%";
    element.style.transitionDuration = randomNumber(5) + 5 + "s";
    console.log("rotate" + "(" + (randomNumber(2000) - 1000 + "deg)"));
    place.appendChild(element);

}
function dropApp() {
    let elements = document.querySelectorAll(".container__snow");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].dataDrop != true) {
            elements[i].style.transform = "translateY(93vh) " + "rotate" + "(" + (randomNumber(2000) - 1000 + "deg)");
            elements[i].dataDrop = true;
        }
    }



}
function removeElement() {
    let item = document.querySelector(".container__snow");
    item.remove();
}
function randomNumber(maxNum) {
    let number = Math.floor(Math.random() * maxNum);
    return number;
}


