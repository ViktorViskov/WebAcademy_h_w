import { createPage } from './pageRender';
export function request(url, weekUrl) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => {
        xhr.data = JSON.parse(xhr.response);
        console.log(xhr.data);
        createPage(xhr.data);
    };
}
