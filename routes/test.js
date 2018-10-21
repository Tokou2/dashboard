let User = require('../models/user');
let WidgetOptions = require('../models/widget_options');
let CityTemperatureWidget = require('../services/weather/widgets/city_temperature/city_temperature');
let superagent = require('superagent');

module.exports = (app) => {
	/*app.get('/test', (req, res) => {
		console.log('weatherService', weatherService);
		weatherService.searchCity('Lyon').then((result) => {
			res.send(result);
		}).catch((error) => {
			res.send(error);
		});
	});

	app.get('/users', (req, res) => {
		User.find().then((users) => {
			console.log(users);
			res.json(users);
		});
	});*/

	app.get('/widgets', (req, res) => {
		WidgetOptions.find().then((options) => {
			console.log(options);
			res.json(options);
		});
	});

	app.get('/test', (req, res) => {
		if (!req.isAuthenticated()) {
			res.status(404);
			res.send('Authentification required.');
		}
		else {
			superagent.agent().get(`http://127.0.0.1:8080/weather/city_temperature/getViewOptions`)
			.end((err, data) => {
				if (err)
					console.log(err);
				res.send(data);
			});
		}
	});
}
