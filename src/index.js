// changing H1
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}
//Updating date and time
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

//Current Temperature
// function will get the current temperature and will replace the the text by the current information
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let description = response.data.condition.description;
  let icon = response.data.condition.icon_url;
  let humidity = Math.round(response.data.temperature.humidity);
  let wind = Math.round(response.data.wind.speed);
  let city = response.data.city;

  let valueElement = document.querySelector(".current-temperature-value");
  valueElement.innerHTML = `${temperature}`;

  let descriptionElement = document.querySelector(".description");
  descriptionElement.innerHTML = `${description}`;

  let humidityElement = document.querySelector(".humidity");
  humidityElement.innerHTML = `${humidity}%`;

  let windElement = document.querySelector(".wind");
  windElement.innerHTML = `${wind}km/h`;
}

//function will be called when the form is submitted, and will get the city entered by the user
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value.trim();

  let apiKey = "co1932ee5cba3475f06de51eb085140t";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", searchCity);

// update the icon and the CSS of humidity and wind

let colorHum = document.querySelector(".humidity");
let colorWind = document.querySelector(".wind");

function changeColor() {
  colorHum.style.color = "#f65282";
  colorHum.style.fontWeight = "bold";

  colorWind.style.color = "#f65282";
  colorWind.style.fontWeight = "bold";
}

changeColor();

cityForm.addEventListener("submit", searchCity);

// Missing updte the icon
