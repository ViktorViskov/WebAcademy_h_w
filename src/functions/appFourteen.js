export function getLocaleDay(date) {
    const weekDays = [
        "нд",
        "пн",
        "вт",
        "ср",
        "чт",
        "пт",
        "сб"
    ];
    console.log(weekDays[date.getDay()]);
    if (date.getDay() === 0) {
        console.log(date.getDay() + 7);
        return weekDays[date.getDay() + 7];
    }
    else {
        console.log(date.getDay());
        return weekDays[date.getDay()];
    }

}
