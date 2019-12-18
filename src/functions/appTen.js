export function filterRange(arr, a, b) {
    const newArr = [];
    for (let item of arr) {
        if (a <= item && item <= b) {
            newArr.push(item);
        }
    }
    console.log(newArr);
    return newArr;
}