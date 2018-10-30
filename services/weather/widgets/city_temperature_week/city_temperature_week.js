/*
** EPITECH PROJECT, 2018
** Project Name
** File description:
** dahsboard
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
		super("city_temperature", "Display the temperature of a city for week", "weather", params, user);
	}
}

module.exports = CityTemperatureWeekWidget;
