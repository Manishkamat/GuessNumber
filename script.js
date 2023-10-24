'use strict';


// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "😉 Hi smily!";

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 12;
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.guess').value = 15;


// document.querySelector('.check').addEventListener('click', function () {
//     console.log(document.querySelector('.guess').value);
// }) 
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector(".again").addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    document.querySelector('.guess').value = '';


    displayMessage("start guessing...");

    document.querySelector('body').style.backgroundColor = "black";

    document.querySelector('.number').style.width = "100px";

    document.querySelector('.number').textContent = "?";

    score = 20;
    document.querySelector('.score').textContent = score;

})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // when there is no input
    if (!guess) {
        displayMessage("⛔ no number");

        // when player wins
    } else if (secretNumber === guess) {
        displayMessage("🚩 you guessed right!");

        document.querySelector('body').style.backgroundColor = "green";

        document.querySelector('.number').style.width = "300px";

        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        // when guess is wrong
    } else if (guess !== secretNumber && score > 0) {

        displayMessage(guess > secretNumber ? "too high" : "too low");

        score--;
        document.querySelector('.score').textContent = score;

    } else {
        displayMessage("you lose the game");
    }
}) 