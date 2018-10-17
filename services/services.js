let WeatherService = require('../services/weather/weather');

module.exports.withUser = function(user) {
	return ([
		new WeatherService(user)
	])
}

module.exports.withoutUser = [
	new WeatherService()
]
