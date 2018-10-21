let Widget = require('../../../../utils/widget');

class CityTemperatureWidget extends Widget
{
	constructor(user = undefined) {
		let params = [{
			name: "city",
			type: "string"
		},
		{
			name: "location_key",
			type: "string"
		}];
		super("city_temperature", "Display the temperature of a city", "weather", params, user);
	}
}

module.exports = CityTemperatureWidget;
