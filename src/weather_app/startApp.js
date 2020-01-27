import { dataWeather } from "./data";
import { request } from './request';
import { createLink } from './createLink';
export function startApp() {
    for (let elemt in dataWeather) {
        let item = dataWeather[elemt];
        item.link = createLink(dataWeather[elemt]);
        item.weekWeatherLink = createLink(dataWeather[elemt])
        request(item.link);
    }
}
