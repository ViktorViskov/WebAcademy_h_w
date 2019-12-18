import { isNumber } from "util";

export function calcSalary(obj) {
    var totalSalary = 0;

    for (var item in obj) {
        if (isNumber(obj[item])) {
            totalSalary += Number(obj[item])
        }
        else {
            continue
        }

    }
    console.log(obj);
    console.log(totalSalary);
}

