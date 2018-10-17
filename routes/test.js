//let weatherService = require('../services/weather/weather');
//let User = require('../models/user');
//let WidgetOptions = require('../models/widget_options');
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
	});

	app.get('/widgetOptions', (req, res) => {
		WidgetOptions.find().then((options) => {
			console.log(options);
			res.json(options);
		});
	});*/

	app.get('/widget', (req, res) => {
		let widget = new CityTemperatureWidget(req.user);
		res.json(widget.getView());
	});
}
