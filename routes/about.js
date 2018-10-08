let services = require('../services/services');

module.exports = (app) => {
	app.get('/about.json', (req, res) => {
		response = {
			client: {
				host: request.hostname
			},
			server: {
				current_time: Math.floor(Date.now() / 1000),
				services
			}
		}
		res.json(response);
	});
}
