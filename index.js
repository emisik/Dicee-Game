let randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice = "dice" + randomNumber1 + ".png";

var replaceRandomDice = "images/" + randomDice;

document.querySelectorAll("img")[0].setAttribute("src", replaceRandomDice);

let newRandomNumber = Math.floor(Math.random() * 6) + 1;
let randomized = "dice" + newRandomNumber + ".png";
let randomized2 = "images/" + randomized;
document.querySelectorAll("img")[1].setAttribute("src", randomized2);

if (randomNumber1 > newRandomNumber) {
  document.querySelector("h1").innerHTML = "🎈Congratulations Player 1";
} else if (newRandomNumber > randomNumber1) {
  document.querySelector("h1").innerHTML = "🎈Congratulations Player 2";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
