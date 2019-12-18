export function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            console.log(i);
            return i;

        }


    }
    console.log('-1');
    return -1;

}