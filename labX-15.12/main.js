const sumbitButton = document.querySelector("#pass");
const pogodaCard = document.querySelector(".pogodaCard");

const locationInput = document.querySelector("#location");

const apiKey = "df2bf00f87e627058a8be4b13110d8b8";

sumbitButton.addEventListener("click", () => {
  const locationValue = locationInput.value;
  locationInput.value = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed");
    })
    .then((data) => {
      let pogodaCard = document.createElement("div");
      pogodaCard.className = "pogodaCard";

      let icon = data.weather[0].icon;
      let imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      let img = document.createElement("img");
      img.src = imgUrl;
      img.alt = "123";

      let h1 = document.createElement("h1");
      h1.id = "pogodaCardLocation";
      h1.innerHTML = `Location: ${locationValue}`;

      let tempInFarenchait = data.main.temp;
      let tempInCelcius = Math.round((tempInFarenchait - 32) * (5 / 9));

      let pTemp = document.createElement("p");
      pTemp.id = "temp";
      pTemp.innerHTML = `Temperature: ${tempInCelcius}`;

      let humidity = data.main.humidity;

      let pHumidity = document.createElement("p");
      pHumidity.id = "humidity";
      pHumidity.innerHTML = `The humidity is ${humidity}%`;

      pogodaCard.appendChild(img);
      pogodaCard.appendChild(h1);
      pogodaCard.appendChild(pTemp);
      pogodaCard.appendChild(pHumidity);

      document.body.appendChild(pogodaCard);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(locationValue);
});
