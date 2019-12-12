export function ifEmpty(obj) {
    if (obj === undefined) {
        alert("Передайте функції обєкт!")
        return true
    }
    else if (obj === {}) {
        console.log(true);
        return true
    }
    else {
        console.log(false);
        return false
    }
}