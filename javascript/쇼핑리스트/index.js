// 자바스크립트로 태그 선택
document.getElementById("first");
document.getElementsByTagName("p");
document.getElementsByClassName("second"); //복수 선택이라서 결과가 배열 형식 elements

document.querySelector(".second");
document.querySelectorAll("li")[2];

const h1 = document.querySelector("h1");
h1.textContent = "위시 리스트";

h1.classList.add("cool");
h1.classList.remove("cool");
h1.classList.toggle("cool");

const li = document.querySelector("li");
li.setAttribute("random", 1000);
