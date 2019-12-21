import './acardion.scss';
import '../common/styles/button.scss';
import { app } from './app';
import { createBtn } from '../common/scripts/button';
const mount = document.querySelector("body");
const array = [{
    title: 'Lorem ipsum dolor sit amet.',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque debitis nesciunt accusantium! Iusto officia saepe doloribus consequuntur architecto aspernatur quam magnam minima, odit repudiandae rerum commodi voluptates molestiae assumenda ipsa vel nam nemo? Nisi, cumque minus aliquam explicabo repellat ab.'
},
{
    title: 'Lorem ipsum dolor sit amet.',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque debitis nesciunt accusantium! Iusto officia saepe doloribus consequuntur architecto aspernatur quam magnam minima, odit repudiandae rerum commodi voluptates molestiae assumenda ipsa vel nam nemo? Nisi, cumque minus aliquam explicabo repellat ab.'

},
{
    title: 'Lorem ipsum dolor sit amet.',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque debitis nesciunt accusantium! Iusto officia saepe doloribus consequuntur architecto aspernatur quam magnam minima, odit repudiandae rerum commodi voluptates molestiae assumenda ipsa vel nam nemo? Nisi, cumque minus aliquam explicabo repellat ab.'

}]
createBtn(mount, 'Створити слайдер', 'btn', function () {
    app(mount, array);
});