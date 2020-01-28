import './weather_app.scss';
import { city } from "./oop";
let arr = ["Kiev", "Copenhagen", "kair", "Thisted", "Berlin", "brasilia", "Mexiko", "Tokio", "Pekin", "honolulu"];
for (let element of arr) {
    element = new city(element);

    console.log(element);
}
let varde = new city("varde");
varde.createButton();



