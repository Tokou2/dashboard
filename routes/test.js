let weatherService = require('../services/weather/weather');

module.exports = (app) => {
	app.get('/test', (req, res) => {
		console.log('weatherService', weatherService);
		weatherService.searchCity('Lyon').then(
			(result) => { response.send(result); },
			(error) => { response.send(error); }
		);
	});
}
