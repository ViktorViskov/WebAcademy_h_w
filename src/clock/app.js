export class clock {
    createDate() {
        this.time = new Date;
        this.hours = this.time.getHours();
        this.minutes = this.time.getMinutes();
        this.seconds = this.time.getSeconds();
        this.shortTime = `${this.hours}:${this.minutes}:${this.seconds}`
    }
    changeTime() {
        this.createDate();
        this.container.textContent = this.shortTime;
    }
    render(mp = document.querySelector("body")) {
        mp.style.backgroundColor = this.randomColor();
        this.container = document.createElement("span");
        this.container.textContent = this.shortTime;
        this.container.classList.add("time");
        mp.appendChild(this.container);
    }
    randomNumber(num) {
        return Math.floor(Math.random() * (num + 1));
    }
    randomColor() {
        return `rgb(${this.randomNumber(255)},${this.randomNumber(255)},${this.randomNumber(255)})`
    }
    startClock() {
        this.createDate();
        this.render();
        this.timeId = setInterval(() => {
            this.changeTime();
        }, 1000)
    }
    stopClock() {
        clearInterval(this.timeId);
    }
}