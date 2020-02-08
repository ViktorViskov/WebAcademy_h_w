export function removeItem(item, arr = getFromLocal()) {
    let exArr = [];
    for (let element of arr) {
        if (element == item) {
            continue
        }
        else {
            exArr.push(element);
        }
    }
    setToLocal(exArr);
}

export function addItem(item, arr = getFromLocal()) {
    arr.push(item);
    setToLocal(arr);
    return arr
}

export function createTag(name, className) {
    let element = document.createElement(name);
    element.classList.add(className);
    return element;
}

export function getFromLocal() {
    return JSON.parse(localStorage.getItem("cities"));
}
export function setToLocal(arr) {
    localStorage.setItem("cities", JSON.stringify(arr))
}


export function checkData() {
    let data = getFromLocal();
    if (data === null) {
        setToLocal(["Київ"]);
        return getFromLocal();
    }
    else {
        return data;
    }
}
export function takeDate(timeInSec) {
    return new Date(timeInSec * 1000);
}

export function dayFromDate(timeInSec) {
    let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
    let day = takeDate(timeInSec);
    return days[day.getDay()]
}
export function transformDate(timeInSec) {
    let mounth = ["Січеня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпн", "Вересня", "Жовтня", "Листопада", "Грудня"];
    let date = takeDate(timeInSec);
    let day = date.getDate();
    return ` ${day} ${mounth[date.getMonth()]}`;
}
export function timeFromDate(timeInSec) {
    let hours = takeDate(timeInSec);
    let minuts = takeDate(timeInSec);
    return `${hours.getHours()}:${minuts.getMinutes()}0`;
}