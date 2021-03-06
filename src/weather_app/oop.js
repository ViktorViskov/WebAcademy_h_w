import { createTag, removeItem } from "./lab";
import { weekWeather } from "./weekWeather";
export class city {
    constructor(cityName) {
        this.cityName = cityName;
        this.apiCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=005de91e5c99d24051d0ce13216877cb&lang=ua&units=metric`;
        this.apiWeekWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&appid=005de91e5c99d24051d0ce13216877cb&lang=ua&units=metric`;
        this.request(this.apiCurrentWeather);

    }


    request(url) {
        this.xhr = new XMLHttpRequest();
        this.xhr.open("GET", url);
        this.xhr.send();
        this.xhr.onload = () => {
            if (this.xhr.status >= 200 && this.xhr.status < 400) {
                this.xhr.data = JSON.parse(this.xhr.response);
                this.createPage(this.xhr.data);
            }
            else {
                alert(`Помилка! Місто ${this.cityName} не знайдено! Спробуйте ввести місто на іншій мові або введіть інше місто`);
                removeItem(this.cityName);

            }

        };
    }

    requestForWeek(url) {
        this.xhrWeek = new XMLHttpRequest();
        this.xhrWeek.open("GET", url);
        this.xhrWeek.send();
        this.xhrWeek.onload = () => {
            if (this.xhrWeek.status >= 200 && this.xhrWeek.status < 400) {
                this.xhrWeek.data = JSON.parse(this.xhrWeek.response);
                new weekWeather(this.xhrWeek.data);
            }
            else {
                alert(`Помилка! Місто ${this.cityName} не знайдено! Спробуйте ввести місто на іншій мові або введіть інше місто`);
                removeItem(this.cityName);

            }

        };
    }







    createPage(data, mp = document.querySelector(".container")) {

        let containerItem = createTag("li", "container__item");
        containerItem.style.backgroundImage = `url('https://source.unsplash.com/random?${data.name},landscape')`;
        containerItem.title = data.weather[0].description;



        let containerBox = createTag("div", "container__box");
        containerBox.addEventListener('click', () => {
            /* containerItem.classList.add("container__item_active"); */
            this.requestForWeek(this.apiWeekWeather);

        })


        let containerTitle = createTag("h1", "container__title");
        containerTitle.textContent = data.name;
        containerBox.appendChild(containerTitle);


        let containerTemp = createTag("h2", "container__temp");
        containerTemp.textContent = Math.round(data.main.temp);
        containerBox.appendChild(containerTemp);


        let containerIcon = createTag("img", "container__icon");
        containerIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        containerBox.appendChild(containerIcon);
        containerItem.appendChild(containerBox);


        let containerBtn = createTag("div", "container__btn");
        let containerFirstLine = createTag("div", "container__line");
        let containerSecondLine = createTag("div", "container__line");
        containerBtn.appendChild(containerFirstLine);
        containerBtn.appendChild(containerSecondLine);
        containerBtn.addEventListener('click', () => {
            removeItem(this.cityName);
            containerItem.remove();
        });
        containerBtn.title = "Видалити";

        containerItem.appendChild(containerBtn);



        mp.prepend(containerItem);

    }
}