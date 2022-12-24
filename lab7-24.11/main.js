const asyncAdd = async (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Argumenty muszą mieć typ number!");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
      console.log(a + b);
    }, 100);
  });
};

let numbersToAddArrayInt = [];

const numbersToAdd = document.querySelector("#numbersToAdd");

numbersToAdd.addEventListener("focusout", () => {
  numbersToAddArrayInt = numbersToAdd.value.split(",").map(Number);
  console.log(numbersToAddArrayInt);

  let i = 0;
  while (i <= numbersToAddArrayInt.length) {
    asyncAdd(numbersToAddArrayInt[i], numbersToAddArrayInt[i++]);
    i++;
  }

  //   const sum = numbersToAddArrayInt.reduce((sum, a) => sum + a, 0);
  //   console.log(sum);
});
