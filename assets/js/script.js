var searchLongitude = "";
var searchLatitude = "";
var searchCityName = "";
var userInputEl = document.querySelector("#city-name");
var searchBtnEl = document.querySelector("#city-search-btn");
var currentTempEl = document.querySelector("#current-temp");
var currentWindEl = document.querySelector("#current-wind");
var currentHumidityEl = document.querySelector("#current-humidity");
var currentUVIndexEl = document.querySelector("#current-UVindex");

var formatCityName = function () {
  var userInput = userInputEl.value;
  userInput.style.textTransform = "lowercase";
  userInput.style.textTransform = "capitalize";
};

var findLongAndLat = function (userInput) {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      userInput +
      "&limit=1&appid=0cb5520cddddc7d5e9cddfc2276e4c8f"
  ).then(function (response) {
    response.json().then(function (data) {
      searchLongitude = data.lat;
      searchLatitude = data.lon;
      searchCityName = data.name;
      console.log(searchLongitude);
      console.log(searchLatitude);
      console.log(searchCityName);
    });
  });
};

var searchForCityWeather = function () {
  debugger;
  formatCityName();
  findLongAndLat();
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      searchLatitude +
      "&lon=" +
      searchLongitude +
      "&exclude=minutely,hourly,alerts&appid=0cb5520cddddc7d5e9cddfc2276e4c8f"
  ).then(function (response) {
    response.json().then(function (data) {
      currentTempEl = data.current.temp;
      currentWindEl = data.current.wind_speed;
      currentHumidityEl = data.current.humidity;
      currentUVIndexEl = data.current.uvi;
      console.log(currentTempEl);
      console.log(currentWindEl);
      console.log(currentHumidityEl);
      console.log(currentUVIndexEl);
    });
  });
};

searchBtnEl.addEventListener("click", searchForCityWeather);
