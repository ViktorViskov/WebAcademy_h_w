export class apiLink {
    constructor(obj) {
        this.obj = obj;
    }
    createLink() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.obj.city}&appid=${this.obj.key}&lang=${this.obj.lang}&units=${this.obj.type}`;
        return url;
    }
}