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
    let mounth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    let date = takeDate(timeInSec);
    console.log(mounth[date.getMonth()]);
}