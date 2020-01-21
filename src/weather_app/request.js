export class request {
    constructor(url = "https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=005de91e5c99d24051d0ce13216877cb&lang=ua,uk") {
        this.url = url;
    }
    makeRequest() {
        this.xml = new XMLHttpRequest();
        this.xml.open("GET", this.url);
        this.xml.send();
        this.xml.onload = () => {
            this.response = JSON.parse(this.xml.response);
            console.log(this.response);
        };
    }
}