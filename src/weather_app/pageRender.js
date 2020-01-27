export function createPage(data, mp = document.querySelector(".container")) {

    let containerItem = createTag("li", "container__item");
    containerItem.style.backgroundImage = `url('https://source.unsplash.com/random?${data.name},landscape')`;
    containerItem.title = data.weather[0].description;
    containerItem.addEventListener('click', () => {
        let dadat = new Date(data.sys.sunrise * 1000);
        console.log(dadat);
    });




    let containerTitle = createTag("h1", "container__title");
    containerTitle.textContent = data.name;
    containerItem.appendChild(containerTitle);


    let containerTemp = createTag("h2", "container__temp");
    containerTemp.textContent = Math.round(data.main.temp);
    containerItem.appendChild(containerTemp);


    let containerIcon = createTag("img", "container__icon");
    containerIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    containerItem.appendChild(containerIcon);


    mp.appendChild(containerItem);

}


function createTag(name, className) {
    let element = document.createElement(name);
    element.classList.add(className);
    return element;
}