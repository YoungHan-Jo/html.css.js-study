const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

img1.setAttribute("src", "images/dice6.png");
img2.setAttribute("src", "images/dice6.png");

var ranNum1 = Math.floor(Math.random() * 6) + 1;
var ranNum2 = Math.floor(Math.random() * 6) + 1;

img1.setAttribute("src", "images/dice" + ranNum1 + ".png");
img2.setAttribute("src", "images/dice" + ranNum2 + ".png");

function result() {
  if (ranNum1 > ranNum2) {
    h1.textContent = "🚩Player 1 wins!";
  } else if (ranNum1 === ranNum2) {
    h1.textContent = "Draw!";
  } else {
    h1.textContent = "Player 2 wins!🚩";
  }
}

result();

setTimeout(function () {
  location.reload();
}, 2000);
