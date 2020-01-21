import './weather_app.scss';
import { request } from "./request";
import { apiLink } from "./apiLink";
const param = {
    city: "Thisted",
    key: "005de91e5c99d24051d0ce13216877cb",
    lang: "ua",
    type: "metric"
}
/* const url = "https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=005de91e5c99d24051d0ce13216877cb&lang=ua&units=metric"; */
let url = new apiLink(param);
url = url.createLink();
console.log(url);
const obj = new request(url);
obj.makeRequest();
