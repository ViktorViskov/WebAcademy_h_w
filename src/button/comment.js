import { createBtn } from '../common/scripts/button.js';
export function createComment(place) {
    let comment = mkEl("section", "comment");
    let text = mkEl("p", "comment__text");
    text.innerText = prompt("Уведіть текст коментара");
    comment.appendChild(text);
    let footer = mkEl("footer", "comment__footer");
    comment.appendChild(footer);
    let btn = createBtn(footer, "Видалити", "btn", removeComment);
    let user = mkEl("section", "comment__user-name");
    user.innerText = prompt("Уведіть ваше імя");
    footer.appendChild(user);
    commentValidation(text.innerText, user.innerText)




    function removeComment() {
        comment.remove();
    }
    function commentValidation(firstValue, secondValue) {
        if (firstValue != "" && secondValue != "" && firstValue.length > 2 && secondValue.length > 2) {
            place.appendChild(comment);
        }
        else {
            removeComment()
        }
    }
}
function mkEl(tagName, className) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}
