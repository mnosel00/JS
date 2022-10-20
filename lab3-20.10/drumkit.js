// document.body
document.addEventListener("keypress", onKeyPress);

function onKeyPress(event) {
  const key = event.key;
  // ktory dzwiek w zaleznosci od klawisza

  switch (key) {
    case "b":
      playSound("boom");
      break;
    case "c":
      playSound("clap");
      break;
    case "h":
      playSound("hihat");
      break;
    case "k":
      playSound("kick");
      break;
    case "o":
      playSound("openhat");
      break;
    case "r":
      playSound("ride");
      break;
    case "s":
      playSound("snare");
      break;
    case "t":
      playSound("tink");
      break;
    case "q":
      playSound("tom");
      break;
  }
}

function playSound(sound) {
  const audioTag = document.querySelector("#" + sound);
  audioTag.currentTime = 0;
  audioTag.play();
}

// Date.now()
