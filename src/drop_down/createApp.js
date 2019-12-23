import { toggleApp } from './toggleApp';
export function createApp(mount, array) {
    createContainer(mount, "container", array);
}


function createContainer(mount, style, array) {
    const container = document.createElement('div');
    container.classList.add(style);
    createSelect(container, array[0], array.slice(1))
    mount.appendChild(container);
}

function createSelect(mount, title, optionArray) {

    let containerForList = document.createElement('ul');
    containerForList.classList.add('container__list')
    let titleItem = document.createElement("div");
    titleItem.textContent = title;
    titleItem.classList.add("container__title");

    optionArray.forEach(function (element) {
        let listItem = document.createElement('li');
        listItem.classList.add('container__item')
        listItem.textContent = element;
        listItem.addEventListener('click', function () {
            titleItem.textContent = element;
            containerForList.classList.remove('container__list_active');
        })
        containerForList.appendChild(listItem);
    })

    toggleApp(titleItem, mount);
    mount.appendChild(titleItem);
    mount.appendChild(containerForList);

}