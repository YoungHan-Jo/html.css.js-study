const btns = document.querySelectorAll(".drum");

function animationDrum(key) {
  const drum = document.querySelector(`.${key}`);
  drum.classList.add("pressed");
  setTimeout(function () {
    drum.classList.remove("pressed");
  }, 100);
}

function drumSelector(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      break;
    default:
      return;
  }
  audio.play();
  animationDrum(key);
}

function handleKeydown(event) {
  drumSelector(event.key);
}

function handleClick(event) {
  drumSelector(this.textContent);
}

function init() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleClick);
  }
  document.addEventListener("keydown", handleKeydown);
}

init();
