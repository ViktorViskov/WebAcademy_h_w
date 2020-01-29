import './weather_app.scss';
import { city } from "./oop";
import { createButton } from "./createButton";
import { checkData } from "./lab";
export let arr = checkData();
console.log(arr);


for (let element of arr) {
    new city(element);
}
createButton()


