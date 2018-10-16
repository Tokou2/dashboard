let services = require('../services/services');

module.exports = (app) => {
	app.get('/about.json', (req, res) => {
		let servicesAbouts = [];
		for (let i in services) {
			servicesAbouts.push(services[i].about());
		}
		response = {
			client: {
				host: req.hostname
			},
			server: {
				current_time: Math.floor(Date.now() / 1000),
				services: servicesAbouts
			}
		}
		res.json(response);
	});
}
