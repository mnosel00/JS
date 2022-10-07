var inputIdNumber = 4;
var sum = 0;
var average = 0;
var max = 0;
var min = 0;
const p = document.createElement("p");
var numberArray = [];
var liveNumberArray = [];

const addNewInput = document.querySelector("#addNewInput");
const calculate = document.querySelector("#calculate");

const box = document.getElementById("box");

//DODAWANIE NOWYCH PÓL
addNewInput.addEventListener("click", () => {
  inputIdNumber = inputIdNumber + 1;

  // DODAWANIE INPUTA I BUTTONA
  const newInput = document.createElement("input");
  box.appendChild(newInput);
  newInput.setAttribute("id", "input" + inputIdNumber);
  newInput.setAttribute("class", "deleteInput" + inputIdNumber);

  const newDeleteButton = document.createElement("button");
  box.appendChild(newDeleteButton);
  newDeleteButton.setAttribute("id", "deleteInput" + inputIdNumber);
  newDeleteButton.textContent = "Delete";
});

// WYKONANIE DZIAŁAŃ PO NACISNIĘCIU BUTTONA
// calculate.addEventListener("click", () => {
//   p.remove();
//   const values = document.getElementsByTagName("input");

//   for (let inp of values) {
//     if (inp.value == "") {
//       inp.value = 0;
//     }
//     numberArray.push(inp.value);
//     sum = sum + parseInt(inp.value);
//   }

//   average = sum / values.length;
//   max = numberArray.reduce((a, b) => {
//     return Math.max(a, b);
//   });
//   min = numberArray.reduce((a, b) => {
//     return Math.min(a, b);
//   });

//   const divResult = document.createElement("div");
//   document.body.appendChild(divResult);

//   divResult.appendChild(p);

//   p.innerHTML =
//     "Sum = " +
//     sum +
//     ", " +
//     " Average = " +
//     average +
//     ", " +
//     "Max Value = " +
//     max +
//     ", " +
//     " Min Value = " +
//     min;

//   sum = 0;
//   average = 0;
//   max = 0;
//   min = 0;
// });

// WYKONYWANIE ZADAŃ LIVE
const liveValues = document.getElementsByTagName("input");
for (let liveValue of liveValues) {
  liveValue.addEventListener("change", () => {
    p.remove();
    const values = document.getElementsByTagName("input");

    for (let inp of values) {
      if (inp.value == "") {
        inp.value = 0;
      }
      numberArray.push(inp.value);
      sum = sum + parseInt(inp.value);
    }

    average = sum / values.length;
    max = numberArray.reduce((a, b) => {
      return Math.max(a, b);
    });
    min = numberArray.reduce((a, b) => {
      return Math.min(a, b);
    });

    const divResult = document.createElement("div");
    document.body.appendChild(divResult);

    divResult.appendChild(p);

    p.innerHTML =
      "Sum = " +
      sum +
      ", " +
      " Average = " +
      average +
      ", " +
      "Max Value = " +
      max +
      ", " +
      " Min Value = " +
      min;

    sum = 0;
    average = 0;
    max = 0;
    min = 0;
  });
}

// USUWANIE INPUTA I BUTTONA
const buttonsId = document.getElementsByTagName("button");
var buttonId = 0;

const buttonPressed = (id) => {
  buttonId = id.target.id;
  const buttonToDelete = document.getElementById(buttonId);
  const inpustToDelete = document.getElementsByClassName(buttonId);
  var requierdElement = inpustToDelete[0];

  if (buttonToDelete?.id != "addNewInput") {
    requierdElement?.remove();
    buttonToDelete?.remove();
  }
};

for (let btn of buttonsId) {
  btn.addEventListener("click", buttonPressed);
}
