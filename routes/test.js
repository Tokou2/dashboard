let weatherService = require('../services/weather/weather');

module.exports = (app) => {
	app.get('/test', (request, response) => {
		console.log('weatherService', weatherService);
		weatherService.searchCity('Lyon').then(
			(res) => { response.send(res); },
			(err) => { response.send(err); }
		);
	});
}
