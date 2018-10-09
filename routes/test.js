let weatherService = require('../services/weather/weather');

module.exports = (app) => {
	app.get('/test', (req, res) => {
		console.log('weatherService', weatherService);
		weatherService.searchCity('Lyon').then((result) => {
			res.send(result);
		}).catch((error) => {
			res.send(error);
		});
	});
}
