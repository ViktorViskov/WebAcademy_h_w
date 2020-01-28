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
            this.xhr.data = JSON.parse(this.xhr.response);
            this.createPage(this.xhr.data);
        };
    }




    createTag(name, className) {
        let element = document.createElement(name);
        element.classList.add(className);
        return element;
    }


    createPage(data, mp = document.querySelector(".container")) {

        let containerItem = this.createTag("li", "container__item");
        containerItem.style.backgroundImage = `url('https://source.unsplash.com/random?${data.name},landscape')`;
        containerItem.title = data.weather[0].description;
        containerItem.addEventListener('click', () => {
            let dadat = new Date(data.sys.sunrise * 1000);
            console.log(dadat);
        });


        let containerTitle = this.createTag("h1", "container__title");
        containerTitle.textContent = data.name;
        containerItem.appendChild(containerTitle);


        let containerTemp = this.createTag("h2", "container__temp");
        containerTemp.textContent = Math.round(data.main.temp);
        containerItem.appendChild(containerTemp);


        let containerIcon = this.createTag("img", "container__icon");
        containerIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        containerItem.appendChild(containerIcon);


        mp.prepend(containerItem);

    }

    createButton(mp = document.querySelector(".container")) {
        let button = this.createTag("li", "container__item");
        button.classList.add("container__item_button");

        let buttonInput = this.createTag("input", "container__input");
        buttonInput.placeholder = "Введіть назву міста";
        buttonInput.type = "text";
        button.appendChild(buttonInput);

        let buttonItem = this.createTag("h1", "container__title");
        buttonItem.textContent = "Додати місто";
        button.appendChild(buttonItem);
        mp.appendChild(button);

    }
}