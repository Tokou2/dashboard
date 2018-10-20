let User = require('../models/user');
let WidgetOptions = require('../models/widget_options');
let CityTemperatureWidget = require('../services/weather/widgets/city_temperature/city_temperature');

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

	app.get('/widget', (req, res) => {
		let widget = new CityTemperatureWidget(req.user);
		res.send(widget.getView());
	});

	app.get('/widgetOptions', (req, res) => {
		let widget = new CityTemperatureWidget(req.user);
		res.send(widget.getViewOptions());
	});

	app.get('/widget.json', (req, res) => {
		if (!req.isAuthenticated()) {
			res.redirect('/login');
		}
		else {
			let services = require('../services/services').withUser(req.user);
			console.log(services);
			res.json(services);
		}
	});
}
