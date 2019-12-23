export function toggleApp(item, mount) {
    item.addEventListener('click', function () {
        const listStatus = mount.querySelector('.container__list');
        if (mount.querySelector('.container__list_active') == undefined) {
            listStatus.classList.add('container__list_active');
        }
        else {
            listStatus.classList.remove('container__list_active');
        }

    })

}