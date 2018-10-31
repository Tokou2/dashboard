let WeatherService = require('../services/weather/weather');
let YoutubeService = require('../services/youtube/youtube');

module.exports.withUser = function(user) {
	return ([
		new WeatherService(user)
		// new YoutubeService(user)
	])
}

module.exports.withoutUser = [
	new WeatherService()
	// new YoutubeService()
]
