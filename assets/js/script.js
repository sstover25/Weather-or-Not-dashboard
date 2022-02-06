var searchLongitude = "";
var searchLatitude = "";
var searchCityName = "";
var userInputEl = "";
var searchBtnEl = document.querySelector("#city-search-btn");

var formatCityName = function () {
  userInputEl = document.getElementById("city-name").style.textTransform =
    "lowercase";
  userInputEl = document.getElementById("city-name").style.textTransform =
    "capitalize";
};

var findLongAndLat = function (userInputEl) {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      userInputEl +
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
  formatCityName;
  findLongAndLat;
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      searchLatitude +
      "&lon=" +
      searchLongitude +
      "&exclude=minutely,hourly,alerts&appid=0cb5520cddddc7d5e9cddfc2276e4c8f"
  );
};

searchBtnEl.addEventListener("click", searchForCityWeather);
