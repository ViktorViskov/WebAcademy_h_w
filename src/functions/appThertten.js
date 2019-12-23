export function getWeekDay(date) {
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
    return weekDays[date.getDay()];
}