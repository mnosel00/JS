const main = document.querySelector("main");
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
let startPoint = 0;
const time = 3000;
const img = document.createElement("img");

const photoArray = new Array();
photoArray[0] = "./img/img1.jpg";
photoArray[1] = "./img/img2.jpg";
photoArray[2] = "./img/img3.jpg";

function start() {
  img.src = photoArray[startPoint];
  slides.appendChild(img);

  if (startPoint < photoArray.length - 1) {
    startPoint++;
  } else {
    startPoint = 0;
  }

  setTimeout("start()", time);
}

window.addEventListener("load", () => {
  start();
});
