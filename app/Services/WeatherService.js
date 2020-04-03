import store from "../store.js";


// @ts-ignore
let _weatherApi = axios.create({
    baseURL: ' http://api.weatherbit.io/v2.0/current',
    timeout: 10000
})


class WeatherService {

    constructor() {
        this.getMyWeather()
    }

    getMyWeather() {
        _weatherApi.get('?city=Boise,ID&key=090bc7417a164650bb928a695962702a')
            .then(res => {
                console.log(res.data)
            })
    }
}

const service = new WeatherService();
export default service;