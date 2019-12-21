import { addEvent } from './event';
export function app(mountPoint, array) {
    let container = document.createElement('div');
    container.classList.add('container');
    array.forEach(function (element) {
        container.appendChild(createSection(element.title, element.content));
    });
    mountPoint.appendChild(container);
    addEvent();
}





function createSection(title, content) {
    const section = document.createElement('section');
    section.classList.add('section');
    const titleElement = document.createElement('h3');
    titleElement.classList.add('title');
    const contentElement = document.createElement('p');
    contentElement.classList.add('content')
    titleElement.textContent = title;
    contentElement.textContent = content;
    section.appendChild(titleElement);
    section.appendChild(contentElement);
    return section;
}