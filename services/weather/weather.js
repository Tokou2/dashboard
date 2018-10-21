let superagent = require('superagent');
let Service = require('../../utils/service.js');
let CityTemperatureWidget = require('./widgets/city_temperature/city_temperature');

class WeatherService extends Service
{
	constructor(user = undefined) {
		let widgets = [ new CityTemperatureWidget(user) ];
		for (let i in widgets) {
			widgets[i].params.push({name: 'api_key', type: "string"});
			widgets[i].set('api_key', '77Ti1sS5wZ2bv1IBmYz052Gxl251cAGi');
			widgets[i].params.push({name: 'base_url', type: "string"});
			widgets[i].set('base_url', 'http://dataservice.accuweather.com');
		}
		super('weather', widgets);
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
