class Note {
  constructor(title, content, noteColor, PIN, date) {
    this.title = title;
    this.content = content;
    this.noteColor = noteColor;
    this.PIN = PIN;
    this.date = date;
  }
}

function display() {
  const table = document.querySelector("tbody");
  const tr = document.createElement("tr");
  table.appendChild(tr);
}

const button = document.querySelector("#pass");
button.addEventListener("click", () => {
  const title = document.querySelector("#title");
  const content = document.querySelector("#content");
  const noteColor = document.querySelector("#noteColor");
  const PIN = document.querySelector("#pin");
  const date = document.querySelector("#date");

  let note = new Note(
    title.value,
    content.value,
    noteColor.value,
    PIN.value,
    date.value
  );

  localStorage.setItem(Date.now(), JSON.stringify(note));
  display();
});
