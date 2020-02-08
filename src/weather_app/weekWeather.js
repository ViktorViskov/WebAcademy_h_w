import { createTag, dayFromDate, transformDate, timeFromDate } from "./lab";
export class weekWeather {
    constructor(weekArr) {
        this.weekArr = weekArr;
        this.containerContent = createTag("li", "container__content");
        for (let item in weekArr.list) {
            this.renderPage(document.querySelector(".container"), weekArr.list[item]);
        }
        let containerBtn = createTag("div", "container__btn");
        let containerFirstLine = createTag("div", "container__line");
        let containerSecondLine = createTag("div", "container__line");
        containerBtn.appendChild(containerFirstLine);
        containerBtn.appendChild(containerSecondLine);
        containerBtn.addEventListener('click', () => {

            this.containerContent.remove();
        });
        containerBtn.title = "Видалити";

        this.containerContent.appendChild(containerBtn);



    }

    renderPage(mp = document.querySelector(".container"), arr) {

        let containerBlock = createTag("div", "container__block");
        console.log(arr);
        containerBlock.title = arr.weather[0].description;


        let containerIcon = createTag("img", "container__icon");
        containerIcon.src = `http://openweathermap.org/img/wn/${arr.weather[0].icon}@2x.png`;
        containerBlock.appendChild(containerIcon);


        this.renderDate(containerBlock, arr.dt);

        let containerTime = createTag("div", "container__time");
        containerTime.textContent = timeFromDate(arr.dt);
        containerBlock.appendChild(containerTime);




        this.renderContainerElement(containerBlock, "Температура", arr.main.temp);
        this.renderContainerElement(containerBlock, "Відчуваєтсья", arr.main.feels_like);
        this.renderContainerElement(containerBlock, "Атмосферний тиск", arr.main.pressure);
        this.renderContainerElement(containerBlock, "Вологість", arr.main.humidity);
        this.renderContainerElement(containerBlock, "Швидкість вітру", arr.wind.speed);
        this.renderContainerElement(containerBlock, "Напрям", arr.wind.deg);





        this.containerContent.appendChild(containerBlock);
        mp.appendChild(this.containerContent);
    }


    renderDate(mp, date) {
        let containerDate = createTag("div", "container__date");
        let containerDay = createTag("span", "conteiner__day");
        containerDay.textContent = dayFromDate(date);

        let containerMonth = createTag("span", "conteiner__Month");
        containerMonth.textContent = /* this.weekArr.dt_txt; */ transformDate(date);

        containerDate.appendChild(containerDay);
        containerDate.appendChild(containerMonth);
        mp.appendChild(containerDate);
    }
    renderContainerElement(mp, name, value) {
        let containerElement = createTag("div", "container__element");


        let containerName = createTag("span", "container__text");
        containerName.textContent = name;
        let containerValue = createTag("span", "container__text");
        containerValue.textContent = value;


        containerElement.appendChild(containerName);
        containerElement.appendChild(containerValue);
        mp.appendChild(containerElement);
    }
}