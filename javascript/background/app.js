const body = document.querySelector("#gradient");
const color1 = body.querySelector(".color1");
const color2 = body.querySelector(".color2");
const h3 = body.querySelector("h3");

function handleInput(event) {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.textContent = body.style.background;
}

function init() {
  color1.addEventListener("input", handleInput);
  color2.addEventListener("input", handleInput);
}
init();
