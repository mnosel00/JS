// // notatnik z zajęć
// const main = document.querySelector("main");

// const timeoutRef = setTimeout(() => {
//   main.innerHTML = "From setTimeout";
// }, 2000);

// let licznik = 0;

// const intervalRef = setInterval(() => {
//   main.innerHTML = "From interval" + licznik++;
// }, 4000);

// // kasujemy setInterval
// clearInterval(intervalRef);

// // kasujemy setTimeout
// clearTimeout(intervalRef);

// // window.requestAnimationFrame

const main = document.querySelector("main");
const slides = document.querySelector(".slides");

const photoArray = new Array();
for (let index = 0; index < 7; index++) {
  photoArray[index] = "http://picsum.photos/seed/picsum/600/400";
}

const img = document.createElement("img");
for (let index = 0; index < photoArray.length; index++) {
  slides.appendChild(img);
}
