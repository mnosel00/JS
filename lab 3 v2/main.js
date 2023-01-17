document.addEventListener("keypress", onKeyPress);

let soundArray1 = [];
let soundArray2 = [];
let soundArray3 = [];
let soundArray4 = [];
let allSounds = [];

let checkedboxPlayMusicFromChanel = [];

const checkboxStartRecording1 = document.querySelector("#starRecording1");
const checkboxStartRecording2 = document.querySelector("#starRecording2");
const checkboxStartRecording3 = document.querySelector("#starRecording3");
const checkboxStartRecording4 = document.querySelector("#starRecording4");

const checkboxPlayMusicFromChanel1 = document.querySelector("#checkToPlay1");
const checkboxPlayMusicFromChanel2 = document.querySelector("#checkToPlay2");
const checkboxPlayMusicFromChanel3 = document.querySelector("#checkToPlay3");
const checkboxPlayMusicFromChanel4 = document.querySelector("#checkToPlay4");

const path1 = document.querySelector("#sciezka1");
const path2 = document.querySelector("#sciezka2");
const path3 = document.querySelector("#sciezka3");
const path4 = document.querySelector("#sciezka4");

const buttonsPath = document.querySelectorAll(".sciezka");

const buttonPlayAllPaths = document.querySelector("#muzyka");

let currentIndex = 0;

const buttonPlayCheckedPaths = document.querySelector(
  "#muzykaZWybranychKanalow"
);

buttonPlayCheckedPaths.addEventListener("click", () => {
  console.log("aaa");
  if (checkboxPlayMusicFromChanel1.checked) {
    console.log("aa");
    soundArray1.forEach((element) => {
      checkedboxPlayMusicFromChanel.push(element);
    });
  }
  if (checkboxPlayMusicFromChanel2.checked) {
    console.log("aa");
    soundArray2.forEach((element) => {
      checkedboxPlayMusicFromChanel.push(element);
    });
  }
  if (checkboxPlayMusicFromChanel3.checked) {
    console.log("aa");
    soundArray3.forEach((element) => {
      checkedboxPlayMusicFromChanel.push(element);
    });
  }
  if (checkboxPlayMusicFromChanel4.checked) {
    console.log("aa");
    soundArray4.forEach((element) => {
      checkedboxPlayMusicFromChanel.push(element);
    });
  }

  checkedboxPlayMusicFromChanel.forEach((element, i) => {
    setTimeout(() => {
      playSound(element);
    }, i * 500);
  });
});

buttonPlayAllPaths.addEventListener("click", () => {
  allSounds.forEach((element, i) => {
    setTimeout(() => {
      playSound(element);
    }, i * 500);
  });
});

buttonsPath.forEach((button) => {
  button.addEventListener("click", function (event) {
    // Determine which button was clicked
    const buttonId = event.target.id;
    switch (buttonId) {
      case "sciezka1":
        soundArray1.forEach((element, i) => {
          setTimeout(() => {
            playSound(element);
          }, i * 500);
        });
        break;
      case "sciezka2":
        soundArray2.forEach((element, i) => {
          setTimeout(() => {
            playSound(element);
          }, i * 500);
        });
      case "sciezka3":
        soundArray3.forEach((element, i) => {
          setTimeout(() => {
            playSound(element);
          }, i * 500);
        });
        break;
      case "sciezka4":
        soundArray4.forEach((element, i) => {
          setTimeout(() => {
            playSound(element);
          }, i * 500);
        });
        break;
    }
  });
});

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

function saveSound(key) {
  allSounds.push(key);
  if (checkboxStartRecording1.checked) {
    soundArray1.push(key);
  } else if (checkboxStartRecording2.checked) {
    soundArray2.push(key);
  } else if (checkboxStartRecording3.checked) {
    soundArray3.push(key);
  } else if (checkboxStartRecording4.checked) {
    soundArray4.push(key);
  }
}

function playSound(sound) {
  const audioTag = document.querySelector("#" + sound);
  audioTag.currentTime = 0;
  audioTag.play();
}
