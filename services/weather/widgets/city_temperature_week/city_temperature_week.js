/*
** EPITECH PROJECT, 2018
** Project Name
** File description:
** class
*/

let Widget = require('../../../../utils/widget');

class CityTemperatureWeekWidget extends Widget
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
		super("city_temperature_week", "Display the temperature of a city for the week", "weather", params, user);
	}
}

module.exports = CityTemperatureWeekWidget;
