class CityTemperatureWidget {
	constructor() {
		this.params = [
			{
				name: "city",
				type: "string"
			}
		];
	}

	about() {
		return {
			name: "city_temperature",
			description: "Display the temperature of a city",
			params: this.params
		};
	}
}

module.exports = CityTemperatureWidget;
