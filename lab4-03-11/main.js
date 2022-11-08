class Note {
  constructor(title, content, noteColor, PIN, date) {
    this.title = title;
    this.content = content;
    this.noteColor = noteColor;
    this.PIN = PIN;
    this.date = date;
  }
}
const tbody = document.querySelector("tbody");
window.addEventListener("load", displayLocalStorage);

let id;
let key;

function displayLocalStorage() {
  const allLocalStorageKeys = Object.keys(localStorage);

  allLocalStorageKeys.forEach((key, id) => {
    id++;
    const noteObject = JSON.parse(localStorage.getItem(key));

    const tr = document.createElement("tr");
    tr.setAttribute("id", `${id}`);
    tbody.appendChild(tr);

    Object.values(noteObject).forEach((element) => {
      const th = document.createElement("th");
      th.innerHTML = element;
      tr.appendChild(th);
    });

    const th = document.createElement("th");

    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "removeButton");
    removeButton.innerHTML = "Remove";
    th.appendChild(removeButton);

    const editButton = document.createElement("button");
    editButton.setAttribute("class", "editButton");
    editButton.innerHTML = "Edit";
    th.appendChild(editButton);

    tr.appendChild(th);
  });
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
  removeButton.setAttribute("class", "removeButton");
  removeButton.innerHTML = "Remove";
  th.appendChild(removeButton);

  const editButton = document.createElement("button");
  editButton.setAttribute("class", "editButton");
  editButton.innerHTML = "Edit";
  th.appendChild(editButton);

  tr.appendChild(th);
}

function createNoteObject() {
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

  const id = Date.now();
  localStorage.setItem(id, JSON.stringify(note));
  displayFreshlyCreated(id);
}

function removeNoteFromLocalStorage(key, id) {
  // localStorage.removeItem(key);
  // document.getElementById(`${id}`).remove();
}

function editExistingNote() {}

const button = document.querySelector("#pass");
button.addEventListener("click", createNoteObject);

const removeButton = document.querySelector(".removeButton");
removeButton.addEventListener("click", removeNoteFromLocalStorage);

const editButton = document.querySelector(".editButton");
editButton.addEventListener("click", editExistingNote);
