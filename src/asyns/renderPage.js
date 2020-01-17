export class renderPage {
    constructor(data) {
        this.data = data;
        this.classes = {
            container: "container",
            title: "container__title",
            image: "container__image",
            link: "container__link",
            description: "container__description"
        }
    }
    createElements() {
        this.container = this.createElement("section", this.classes.container);


        this.link = this.createElement("a", this.classes.link);
        this.setAttribut(this.link, "link", this.data.productUrl);
        this.setAttribut(this.link, "title", this.data.note);

        this.title = this.createElement("h2", this.classes.title);
        this.insertContent(this.title, this.data.title);

        this.image = this.createElement("img", this.classes.image);
        this.setAttribut(this.image, "img", this.data.img);

        this.description = this.createElement("p", this.classes.description);
        this.insertContent(this.description, this.data.description);


    }
    createElement(tagName, className) {
        let item = document.createElement(tagName);
        item.classList.add(className);
        return item
    }

    insertContent(item, content) {
        return item.textContent = content;
    }

    setAttribut(item, itemType, att) {
        if (itemType === "link") {
            item.href = att;
        }
        if (itemType === "img") {
            item.src = att;
        }
        if (itemType === "note") {
            item.title = att;
        }
        return item;
    }
    render(mp = document.querySelector("body")) {
        this.createElements();
        this.link.appendChild(this.image)
        this.link.appendChild(this.title)
        this.link.appendChild(this.description)
        this.container.appendChild(this.link);
        mp.appendChild(this.container);
    }
}