// document.body
document.addEventListener("keypress", onKeyPress);
let rad = document.querySelectorAll("#starRecording");
const rad1 = rad[0];
const rad2 = rad[1];
const rad3 = rad[2];
const rad4 = rad[3];

let radToPlay = document.querySelectorAll("#checkToPlay");
const radToPlay1 = radToPlay[0];
const radToPlay2 = radToPlay[0];
const radToPlay3 = radToPlay[0];
const radToPlay4 = radToPlay[0];

let allSounds = [];
let soundArray1 = [];
let soundArray2 = [];
let soundArray3 = [];
let soundArray4 = [];

let customSoundArray = [];

let buttons = document.querySelectorAll(".sciezka");
const muzyka = document.querySelector("#muzyka");
const muzykaZWybranychKanalow = document.querySelector(
  "#muzykaZWybranychKanalow"
);

const btn1 = buttons[0];
const btn2 = buttons[1];
const btn3 = buttons[2];
const btn4 = buttons[3];

muzyka.addEventListener("click", () => {
  allSounds.forEach((element, i) => {
    setTimeout(() => {
      playSound(element);
    }, i * 500);
  });
});

function saveCustomSound() {
  if (radToPlay1.checked) {
    customSoundArray = [...soundArray1, ...customSoundArray];
  }
  if (radToPlay2.checked) {
    customSoundArray = [...soundArray2, ...customSoundArray];
  }
  if (radToPlay3.checked) {
    customSoundArray = [...soundArray3, ...customSoundArray];
  }
  if (radToPlay4.checked) {
    customSoundArray = [...soundArray4, ...customSoundArray];
  }
}

muzykaZWybranychKanalow.addEventListener("click", () => {
  saveCustomSound();

  customSoundArray.forEach((element, i) => {
    setTimeout(() => {
      playSound(element);
    }, i * 500);
  });
});

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.className === "sciezka1") {
      soundArray1.forEach((element, i) => {
        setTimeout(() => {
          playSound(element);
        }, i * 500);
      });
    } else if (element.className === "sciezka1") {
      soundArray2.forEach((element, i) => {
        setTimeout(() => {
          playSound(element);
        }, i * 500);
      });
    } else if (element.className === "sciezka1") {
      soundArray3.forEach((element, i) => {
        setTimeout(() => {
          playSound(element);
        }, i * 500);
      });
    } else if (element.className === "sciezka1") {
      soundArray4.forEach((element, i) => {
        setTimeout(() => {
          playSound(element);
        }, i * 500);
      });
    }
  });
});

function saveSound(key) {
  allSounds.push(key);
  if (rad1.checked) {
    soundArray1.push(key);
  } else if (rad2.checked) {
    soundArray2.push(key);
  } else if (rad3.checked) {
    soundArray3.push(key);
  } else {
    soundArray4.push(key);
  }
}

function onKeyPress(event) {
  const key = event.key;

  switch (key) {
    case "b":
      playSound("boom");
      saveSound("boom");
      break;
    case "c":
      playSound("clap");
      saveSound("clap");
      break;
    case "h":
      playSound("hihat");
      saveSound("hihat");
      break;
    case "k":
      playSound("kick");
      saveSound("kick");
      break;
    case "o":
      playSound("openhat");
      saveSound("openhat");
      break;
    case "r":
      playSound("ride");
      saveSound("ride");
      break;
    case "s":
      playSound("snare");
      saveSound("snare");
      break;
    case "t":
      playSound("tink");
      saveSound("tink");
      break;
    case "q":
      playSound("tom");
      saveSound("tom");
      break;
  }
}

function playSound(sound) {
  const audioTag = document.querySelector("#" + sound);
  audioTag.currentTime = 0;
  audioTag.play();
}

// Date.now()
