const button = document.querySelector("button");

function handleClick(event) {
  console.log("clicked");
}

function init() {
  button.addEventListener("click", handleClick);
}

init();
