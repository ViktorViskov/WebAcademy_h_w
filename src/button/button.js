import './button.scss';
import { createBtn } from '../common/scripts/button';
import { createComment } from './comment';
createBtn(document.querySelector('.nav-menu'), "Додати коментар", "btn", comment);
function comment() {
    createComment(document.querySelector(".container"));
}