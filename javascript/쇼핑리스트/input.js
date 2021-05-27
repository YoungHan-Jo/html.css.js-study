const enter = document.querySelector("#enter");
const userInput = document.querySelector("#userInput");
const ul = document.querySelector("ul");

function init() {
  enter.addEventListener("click", function (event) {
    const newList = document.createElement("li");
    newList.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(newList);
  });
}

init();
