let superagent = require('superagent');
let Service = require('../../utils/service.js');
let CityTemperatureWidget = require('./widgets/city_temperature/city_temperature');

class WeatherService extends Service
{
	constructor(user = undefined) {
		let widgets = [ new CityTemperatureWidget(user) ];
		super("weather", widgets);
		//this.apiKey = '77Ti1sS5wZ2bv1IBmYz052Gxl251cAGi';
		//this.baseUrl = `http://dataservice.accuweather.com`;
	}

	/*searchCity(city) {
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

	}*/
}

module.exports = WeatherService;
