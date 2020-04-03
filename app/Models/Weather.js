export default class Weather {
    constructor(data) {
        this.cityName = data.city_name
        this.icon = data.weather.icon
        this.temperature = data.app_temp
        this.humidity = data.rh
        this.wind = data.wind_spd
        this.precipitation = data.precip
        this.pressure = data.pres
        this.airQuality = data.aqi
    }

    get Template() {
        return /*html*/ `
        <div class="card" style="width: 18rem;">
  <div class="card-header">
    <h3>${this.cityName}</h3><p>${this.icon}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temp(C): ${this.temperature}</li>
    <li class="list-group-item">Humidity: ${this.humidity}%</li>
    <li class="list-group-item">Wind: ${this.wind}</li>
    <li class="list-group-item">Precip: ${this.precipitation}</li>
    <li class="list-group-item">Pressure: ${this.pressure} mb</li>
    <li class="list-group-item">Air Index: ${this.airQuality}</li>
  </ul>
</div>
`

    }
}