export class garland {
    constructor(mp, account) {
        this.mp = mp;
        this.account = account;
    }
    createLamps() {
        this.lamps = [];
        for (let i = 0; i < this.account; i++) {
            this.lamp = document.createElement("div");
            this.lamp.classList.add("lamp");
            this.lamp.style.backgroundColor = this.randomColor();
            this.mp.appendChild(this.lamp);
            this.lamps.push(this.lamp);
        }

    }

    randomColor() {
        return "rgb(" + this.randomNum(255) + "," + this.randomNum(255) + "," + this.randomNum(255) + ")";

    }

    randomNum(num) {
        return Math.floor(Math.random() * num);
    }
    switcher() {
        this.lamps[this.randomNum(this.account)].style.backgroundColor = this.randomColor();
    }

}
