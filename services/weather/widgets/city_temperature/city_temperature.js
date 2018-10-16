let Widget = require('../../../../utils/widget');

class CityTemperatureWidget extends Widget
{
	constructor() {
		let params = [{
			name: "city",
			type: "string"
		}];
		super("city_temperature", "Display the temperature of a city", params);
	}
}

module.exports = CityTemperatureWidget;
