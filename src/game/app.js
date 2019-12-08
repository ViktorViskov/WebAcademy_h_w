let userName = prompt("Введіть ваше імя");
const words = ["будинок", "автомобіль", "людина", "хижина", "кішка", "стіл", "кімната", "підлога", "стіна", "двері"];
let word = words[Math.floor(Math.random() * words.length)];
remainingLetters = word.length;
let life = 6;
while (!Boolean(userName)) {
    userName = prompt("Введіть ваше імя");
}
alert("Привіт " + userName + "!")
let answerWord = [];
for (let i = 0; i < word.length; i++) {
    answerWord[i] = '_';
}
while (remainingLetters > 0 && life > 0) {
    alert(answerWord.join(" "));
    let letter = prompt("Введіть букву або натисніть скасувати. У вас " + life + " життів!");
    if (letter === null) {
        break;
    }
    else if (letter.length !== 1) {
        alert("Введіть лише 1 букву!");
    }
    else {
        for (let j = 0; j < word.length; j++) {
            if (letter.toLowerCase() === answerWord[j]) {
                alert("Ця буква вже вгадана!");
                continue;
            }
            else if (word[j] === letter.toLowerCase()) {
                answerWord[j] = letter.toLowerCase();
                remainingLetters--;
                life++;
            }
        }
        life--;
    }
}
alert(answerWord.join(" "));
alert("Ви виграли! Слово було '" + word + "'");

