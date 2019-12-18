import { isNumber } from "util";

export function appFive(obj) {
    let salary = 0;
    let name;
    for (let item in obj) {
        if (salary < obj[item] && isNumber(obj[item])) {
            salary = obj[item];
            name = item;
        }
    }
    console.log(name);
}