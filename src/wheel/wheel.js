import './wheel.scss';
function move() {
    let wheel = document.querySelector('.container__wheel');
    let image = document.querySelector('.container__img');
    wheel.addEventListener('click', function () {
        let status = document.querySelector('.container__wheel_mooved');
        if (status === null) {
            wheel.classList.add('container__wheel_mooved');
        }
        else {
            wheel.classList.remove('container__wheel_mooved');
        }
    })
    image.addEventListener('click', function () {
        let statusImg = document.querySelector('.container__img_mooved');
        if (statusImg === null) {
            image.classList.add('container__img_mooved');
        }
        else {
            image.classList.remove('container__img_mooved');
        }
    })
}
move();