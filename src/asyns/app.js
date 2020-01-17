import { renderPage } from './renderPage';
export class request {
    constructor(mp = document.querySelector("body"), link) {
        this.mp = mp;
        this.link = link;
        this.type = "GET";
    }
    requstXhr() {
        this.xhr = new XMLHttpRequest();
        this.xhr.open(this.type, this.link);
        this.xhr.send();
        this.xhr.onload = () => {
            this.resp = JSON.parse(this.xhr.response);
            this.resp.forEach(element => {
                this.render = new renderPage(element);
                this.render.render();
            })

        }
    }
}