import { isNumber } from "util";
export function appSix(obj) {
    for (let item in obj) {
        if (isNumber(obj[item])) {
            obj[item] *= 2;
        }
    }
    console.log(obj);
}