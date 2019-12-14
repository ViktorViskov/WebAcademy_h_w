import { randomInteger } from './appOne';
import { appTwo } from './appTwo';
import { ifEmpty } from './appThree';
import { calcSalary } from './appFour';
const programs = [randomInteger, appTwo, ifEmpty, calcSalary];

let elements = document.querySelectorAll('.main__element');
console.log(elements);
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
    else {
        programs[Number(elementNumber) - 1]();
    }
}


eventApp();