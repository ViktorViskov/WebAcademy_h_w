import './drop_down.scss';
import { createBtn } from '../common/scripts/button';
import { createApp } from './createApp';

const array = [
    "Linux дистрибютиви",
    "Ubuntu",
    "Mint",
    "Debian",
    "Manjaro",
    "RedHat",
    "Fedora",
    "Slackware",
    "Arch",
    "Gentoo",
    "Minix",
    "OpenSuse"
]



let mount = document.querySelector('body');
createBtn(mount, "Створити Drop-down", 'btn', function () {
    createApp(mount, array);
});