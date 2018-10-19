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

	app.get('/:serviceName/:widgetName/getView', (req, res) => {
		if (!req.isAuthenticated()) {
			res.status(401);
			res.send('Authentification required.');
		}
		else {
			let services = require('../services/services').withUser(req.user);
			for (let i in services) {
				if (services[i].name === req.params.serviceName) {
					for (let j in services[i].widgets) {
						if (services[i].widgets[j].name === req.params.widgetName) {
							return res.send(services[i].widgets[j].getView());
						}
					}
				}
			}
			res.status(404);
			res.send('Service or widget not found.');
		}
	});

	app.get('/:serviceName/:widgetName/getViewOptions', (req, res) => {
		if (!req.isAuthenticated()) {
			res.status(401);
			res.send('Authentification required.');
		}
		else {
			let services = require('../services/services').withUser(req.user);
			for (let i in services) {
				if (services[i].name === req.params.serviceName) {
					for (let j in services[i].widgets) {
						if (services[i].widgets[j].name === req.params.widgetName) {
							return res.send(services[i].widgets[j].getViewOptions());
						}
					}
				}
			}
			res.status(404);
			res.send('Service or widget not found.');
		}
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
