import { garland } from "./lamp";
let mp = document.querySelector(".container");

let items = new garland(mp, 50);
items.createLamps();
setInterval(function () {
    items.switcher();

}, 30)