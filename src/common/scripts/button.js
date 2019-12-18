import '../styles/button.scss';
export function createBtn(place, text, style, btnFunc) {
    let btn = document.createElement('button');
    btn.textContent = text;
    btn.classList.add(style);
    btn.onclick = btnFunc;
    place.appendChild(btn);
}