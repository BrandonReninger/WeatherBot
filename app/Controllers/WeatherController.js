import WeatherService from "../Services/WeatherService.js";
import store from "../store.js";

//Private
function _draw() {
  let weather = store.State.weatherSites;
  console.log(weather);
}

//Public
export default class WeatherController {
  constructor() {
    store.subscribe("weatherSites", _draw);
  }
}