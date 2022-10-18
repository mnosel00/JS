const photoArray = new Array();
photoArray[0] = "./img/img1.jpg";
photoArray[1] = "./img/img2.jpg";
photoArray[2] = "./img/img3.jpg";

let slideNumber = 0;

const slider = document.querySelector(".slider");

for (let index = 0; index < photoArray.length; index++) {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  const img = document.createElement("img");
  img.src = photoArray[index];

  slider.appendChild(slide);
  slide.appendChild(img);
}

const buttonNext = document.createElement("button");
buttonNext.classList.add("btn", "btn-next");

const buttonBack = document.createElement("button");
buttonBack.classList.add("btn", "btn-back");

slider.appendChild(buttonBack);
slider.appendChild(buttonNext);

const slides = document.querySelectorAll(".slide");

slides.forEach((element, index) => {
  element.style.transform = `translateX(${index * 100}%)`;
});

let maxSlideNumber = slides.length - 1;

buttonNext.addEventListener("click", () => {
  if (slideNumber === maxSlideNumber) {
    slideNumber = 0;
  } else {
    slideNumber++;
  }

  slides.forEach((element, index) => {
    element.style.transform = `translateX(${(index - slideNumber) * 100}%)`;
  });
});

buttonBack.addEventListener("click", () => {
  if (slideNumber === 0) {
    slideNumber = maxSlideNumber;
  } else {
    slideNumber--;
  }

  slides.forEach((element, index) => {
    element.style.transform = `translateX(${(index - slideNumber) * 100}%)`;
  });
});

slider.addEventListener("mouseleave", () => {
  setTimeout(() => {
    buttonNext.click();
  }, "100");
});
