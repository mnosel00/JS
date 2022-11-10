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

const title = document.querySelector("#title");
const content = document.querySelector("#content");
const noteColor = document.querySelector("#noteColor");
const PIN = document.querySelector("#pin");
const date = document.querySelector("#date");

// function sort() {
//   const allLocalStorageKeys = Object.keys(localStorage);

//   let newArray = [];
//   allLocalStorageKeys.forEach((key, i) => {
//     const noteObject = JSON.parse(localStorage.getItem(key));

//     newArray[i] = noteObject;
//   });

//   console.log(newArray);

//   newArray.sort((a, b) => a.PIN - b.PIN);
// }

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
  // sort();
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
  let note = new Note(
    title.value,
    content.value,
    noteColor.value,
    PIN.value,
    date.value
  );

  const key = Date.now();
  localStorage.setItem(key, JSON.stringify(note));
  displayFreshlyCreated(key);
}

function removeNoteFromLocalStorage(key, id) {
  localStorage.removeItem(key);
  document.getElementById(`${id}`).remove();
}

function editNote(key, id) {
  const button = document.querySelector("#edit");
  button.disabled = false;
  const noteObject = JSON.parse(localStorage.getItem(key));

  title.value = noteObject.title;
  content.value = noteObject.content;
  noteColor.value = noteObject.noteColor;
  PIN.value = noteObject.PIN;
  date.value = noteObject.date;

  button.addEventListener("click", () => {
    let note = new Note(
      title.value,
      content.value,
      noteColor.value,
      PIN.value,
      date.value
    );

    localStorage.setItem(key, JSON.stringify(note));
    button.disabled = true;
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
