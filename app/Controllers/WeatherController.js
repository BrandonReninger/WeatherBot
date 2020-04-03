import WeatherService from "../Services/WeatherService.js";
import store from "../store.js";
import service from "../Services/WeatherService.js";

//Private
function _draw() {
  let weather = store.State.weatherSites;
  let template = ""

  weather.forEach(weather => template += weather.Template)
  document.getElementById("your-weather").innerHTML = template

  console.log(weather);
}

//Public
export default class WeatherController {
  constructor() {
    store.subscribe("weatherSites", _draw);
  }

  getWeatherDetails() {
    service.getWeatherDetails()
  }

}