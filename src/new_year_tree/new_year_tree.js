import './new_year_tree.scss';
import { startApp } from './snowApp';
import { lightApp } from './lights';
import { startLight } from './blinkApp';
btn.addEventListener('click', function () {
    if (btn.workStatus != true) {
        btn.classList.add("control-elements__button_active");
        btn.workStatus = true;
    }
    else {
        btn.classList.remove("control-elements__button_active");
        btn.workStatus = false;
    }
    startApp();
    lightApp();
    startLight()
})