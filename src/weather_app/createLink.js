export function createLink(obj, isForWeek) {
    if (!isForWeek) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${obj.city}&appid=${obj.key}&lang=${obj.lang}&units=${obj.type}`;
    }
    else {
        return `https://api.openweathermap.org/data/2.5/forecast?q=${obj.city}&appid=${obj.key}&lang=${obj.lang}&units=${obj.type}`;
    }
}