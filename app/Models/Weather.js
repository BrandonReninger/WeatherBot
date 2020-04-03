export default class Weather {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}