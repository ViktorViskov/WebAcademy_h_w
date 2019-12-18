import { randomInteger } from './appOne';
import { appTwo } from './appTwo';
import { ifEmpty } from './appThree';
import { calcSalary } from './appFour';
import { appFive } from './appFive';
import { appSix } from './appSix';
import { appSeven } from './appSeven';
import { appEight } from './appEight';
import { find } from './appNine';
import { filterRange } from './appTen';
import { pow } from './appEleven';
import { appTwelve } from './appTwelve';

const obj = {
    John: 400,
    Jack: 20000,
    test: "agfgsd",
}
const array = [1, 3, 345, 532465, 634567, 37674, 4674, 467467, 464213451, 1342];

const programs = [randomInteger, appTwo, ifEmpty, calcSalary, appFive, appSix, appSeven, appEight, find, filterRange, pow, appTwelve];

let elements = document.querySelectorAll('.main__element');
function eventApp() {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.addEventListener('click', function () {
            startApp(element);
        })
    }
}


function startApp(element) {
    let contentElement = element.textContent;
    let elementNumber = '';
    for (let i = 0; i < contentElement.length; i++) {
        if (contentElement[i] === ' ') {
            elementNumber += contentElement[i + 1];
            if (contentElement[i + 2] != undefined) {
                elementNumber += contentElement[i + 2];
            }
        }
    }
    if (Number(elementNumber) === 3) {
        programs[Number(elementNumber) - 1]({});
    }
    else if (Number(elementNumber) === 4) {
        programs[Number(elementNumber) - 1](obj);
    }
    else if (Number(elementNumber) === 5) {
        programs[Number(elementNumber) - 1](obj);
    }
    else if (Number(elementNumber) === 6) {
        programs[Number(elementNumber) - 1](obj);
    }
    else if (Number(elementNumber) === 7) {
        programs[Number(elementNumber) - 1](array);
    }
    else if (Number(elementNumber) === 9) {
        programs[Number(elementNumber) - 1](array, 37674);
    }
    else if (Number(elementNumber) === 10) {
        programs[Number(elementNumber) - 1](array, 1, 10000);
    }
    else if (Number(elementNumber) === 11) {
        programs[Number(elementNumber) - 1](2, 3);
    }
    else {
        programs[Number(elementNumber) - 1]();
    }
}


eventApp();