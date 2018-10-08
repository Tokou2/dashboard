let superagent = require('superagent');
let MeteoWidget = require('./widgets/meteo');

class WeatherService {
	constructor() {
		this.apiKey = '77Ti1sS5wZ2bv1IBmYz052Gxl251cAGi';
		this.baseUrl = `http://dataservice.accuweather.com`;
		this.widgets = [ new MeteoWidget() ];
	}

	about() {
		let widgets = [];
		for (let i in this.widgets) {
			widgets.push(this.widgets[i].about());
		}
		return {
			name: "weather",
			widgets: widgets
		};
	}

	searchCity(city) {
		return new Promise((resolve, reject) => {
			superagent.get(`${this.baseUrl}/locations/v1/cities/search`).query({
				apikey: this.apiKey,
				q: city
			}).end((err, res) => {
				if (err)
					reject(err);
				resolve(res.body);
			});
		});
	}

	setCity(city) {

	}
}

let weatherService = new WeatherService();

module.exports = weatherService;
