export function createComment() {
    let comment = document.createElement('section');
    comment.classList.add("comments");
    let text = document.createElement("p");
    text.classList.add('comments__text');
    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus sapiente maxime    necessitatibus. Corporis dolore pariatur tempore accusamus voluptas, eum, beatae ipsum earum quidem molestiae quibusdam porro laboriosam officia necessitatibus?";
    comment.appendChild(text);
    document.querySelector('.container').appendChild(comment);
}