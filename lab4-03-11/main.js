class Note {
  constructor(title, content, noteColor, PIN, fav, date, tags) {
    this.title = title;
    this.content = content;
    this.noteColor = noteColor;
    this.PIN = PIN;
    this.fav = fav;
    this.date = date;
    this.tags = tags;
  }
}
const tbody = document.querySelector("tbody");
window.addEventListener("load", displayLocalStorage);

const title = document.querySelector("#title");
const content = document.querySelector("#content");
const noteColor = document.querySelector("#noteColor");
const PIN = document.querySelector("#pin");
const fav = document.querySelector("#fav");
const date = document.querySelector("#date");
const tags = document.querySelector("#tag");
const input = document.querySelector("#filtr");

input.addEventListener("keyup", filtrLocalStorage);

let newArray = [];
let tagsArray = [];

function filtrLocalStorage() {
  newArray.forEach((element) => {
    console.log(element);
  });
}

function sort() {
  const allLocalStorageKeys = Object.keys(localStorage);

  allLocalStorageKeys.forEach((key, i) => {
    const noteObject = JSON.parse(localStorage.getItem(key));

    newArray[i] = noteObject;
  });
  newArray.sort((a, b) => Number(b.fav) - Number(a.fav));
}

function displayLocalStorage() {
  sort();
  const allLocalStorageKeys = Object.keys(localStorage);

  allLocalStorageKeys.forEach((key, id) => {
    id++;

    let noteObject = [];
    noteObject = newArray[id - 1];

    const tr = document.createElement("tr");
    tr.setAttribute("id", `${id}`);
    tbody.appendChild(tr);

    Object.values(noteObject).forEach((val) => {
      const th = document.createElement("th");
      th.innerHTML = val;
      tr.appendChild(th);
    });

    const th = document.createElement("th");

    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", `removeButton ${id} ${key}`);
    removeButton.innerHTML = "Remove";
    th.appendChild(removeButton);

    const editButton = document.createElement("button");
    editButton.setAttribute("class", `editButton ${id} ${key}`);
    editButton.innerHTML = "Edit";
    th.appendChild(editButton);

    tr.appendChild(th);
  });

  deleteAfterButtonClick();
  editAfterButtonClick();
}

function displayFreshlyCreated(key) {
  const noteObject = JSON.parse(localStorage.getItem(key));

  const tr = document.createElement("tr");
  tr.setAttribute("id", `${localStorage.length}`);
  tbody.appendChild(tr);

  Object.values(noteObject).forEach((element) => {
    const th = document.createElement("th");
    th.innerHTML = element;
    tr.appendChild(th);
  });

  const th = document.createElement("th");

  const removeButton = document.createElement("button");
  removeButton.setAttribute(
    "class",
    `removeButton ${localStorage.length} ${key}`
  );
  removeButton.innerHTML = "Remove";
  th.appendChild(removeButton);

  const editButton = document.createElement("button");
  editButton.setAttribute("class", `editButton ${localStorage.length} ${key}`);
  editButton.innerHTML = "Edit";
  th.appendChild(editButton);

  tr.appendChild(th);

  deleteAfterButtonClick();
  editAfterButtonClick();
}

function createNoteObject() {
  //console.log(fav.checked);
  tagsArray = tags.value.split(" ");

  let note = new Note(
    title.value,
    content.value,
    noteColor.value,
    PIN.value,
    fav.checked,
    date.value,
    tagsArray
  );

  const key = Date.now();
  localStorage.setItem(key, JSON.stringify(note));
  window.location.reload();
  displayFreshlyCreated(key);
}

function removeNoteFromLocalStorage(key, id) {
  localStorage.removeItem(key);
  document.getElementById(`${id}`).remove();
}

function editNote(key, id) {
  const button = document.querySelector("#edit");
  const button2 = document.querySelector("#pass");
  button2.disabled = true;
  button.disabled = false;
  const noteObject = JSON.parse(localStorage.getItem(key));

  title.value = noteObject.title;
  content.value = noteObject.content;
  noteColor.value = noteObject.noteColor;
  PIN.value = noteObject.PIN;
  fav.checked = noteObject.fav;
  date.value = noteObject.date;
  tags.value = noteObject.tags;

  button.addEventListener("click", () => {
    tagsArray = tags.value.split(" ");

    let note = new Note(
      title.value,
      content.value,
      noteColor.value,
      PIN.value,
      fav.checked,
      date.value,
      tagsArray
    );

    localStorage.setItem(key, JSON.stringify(note));
    button.disabled = true;
    button2.disabled = false;
    window.location.reload();
  });
}

const button = document.querySelector("#pass");
button.addEventListener("click", createNoteObject);

function editAfterButtonClick() {
  let editButtonClass = document.getElementsByClassName("editButton");

  editButtonClass = [...editButtonClass];
  for (let i = 0; i < editButtonClass.length; i++) {
    editButtonClass[i].addEventListener("click", () => {
      editNote(
        editButtonClass[i].classList[2],
        editButtonClass[i].classList[1]
      );
    });
  }
}

function deleteAfterButtonClick() {
  let removeButtonsClass = document.getElementsByClassName("removeButton");
  removeButtonsClass = [...removeButtonsClass];
  for (let i = 0; i < removeButtonsClass.length; i++) {
    removeButtonsClass[i].addEventListener("click", () => {
      removeNoteFromLocalStorage(
        removeButtonsClass[i].classList[2],
        removeButtonsClass[i].classList[1]
      );
    });
  }
}
