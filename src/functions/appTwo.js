export function appTwo() {
    const obj = {};
    console.log(obj);
    obj.name = 'Вася';
    console.log(obj);
    obj.surname = 'Петров';
    console.log(obj);
    obj.name = 'Сергей';
    console.log(obj);
    delete obj.name;
    console.log(obj);
}