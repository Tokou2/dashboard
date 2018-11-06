let Service = require('../../utils/service.js');
let CityTemperatureWidget = require('./widgets/city_temperature/city_temperature');
let CityTemperatureWeekWidget = require('./widgets/city_temperature_week/city_temperature_week')

class WeatherService extends Service
{
	constructor(user = undefined) {
		let widgets = [new CityTemperatureWidget(user), new CityTemperatureWeekWidget(user)];
		for (let i in widgets) {
			widgets[i].params.push({name: 'api_key', type: "string"});
			widgets[i].set('api_key', '77Ti1sS5wZ2bv1IBmYz052Gxl251cAGi');
			widgets[i].params.push({name: 'base_url', type: "string"});
			widgets[i].set('base_url', 'http://dataservice.accuweather.com');
		}
		super('weather', widgets);
	}
}

module.exports = WeatherService;
