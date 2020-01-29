import { addItem, createTag, checkData } from "./lab";
import { city } from "./oop";

export function createButton(mp = document.querySelector(".container")) {
    let button = createTag("li", "container__item");
    button.classList.add("container__item_button");



    let buttonInput = createTag("input", "container__input");
    buttonInput.placeholder = "Введіть назву міста";
    buttonInput.id = "inputArea";
    buttonInput.type = "text";
    button.appendChild(buttonInput);



    let buttonItem = createTag("h1", "container__title");
    buttonItem.textContent = "Додати місто";
    button.appendChild(buttonItem);
    buttonItem.addEventListener('click', () => {
        checkData();
        if (inputArea.value !== "") {
            addItem(inputArea.value);
            new city(inputArea.value);
        }
        else {
            alert("Введіть місто!")
        }



    });
    mp.appendChild(button);

}