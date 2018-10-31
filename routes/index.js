let WidgetOptions = require('../models/widget_options');

module.exports = (app) => {
	app.get('/', (req, res) => {
		if (!req.isAuthenticated()) {
		 	res.redirect('/login');
		}
		else {
			let services = require('../services/services').withUser(req.user);
			setTimeout(() => {
				let serviceSelected = req.flash('serviceSelected')[0];
				res.render('pages/index', {
					error: req.flash('error'),
					isConnected: true,
					services: services,
					serviceSelected: serviceSelected
				});
			}, 1000);
		}
	});

	app.post('/', (req, res) => {
		if (!req.isAuthenticated()) {
			res.redirect('/login');
		}
		else {
			console.log("update widget");
			let services = require('../services/services').withUser(req.user);
			let serviceName = req.body.service;
			delete req.body.service;
			let widgetName = req.body.widget;
			delete req.body.widget;
			if (!serviceName || !widgetName) {
				req.flash('error', (!serviceName ? 'Service' : 'Widget') + ' name is undefined.')
			}
			else {
				for (let i in services) {
					if (services[i].name === serviceName) {
						for (let j in services[i].widgets) {
							if (services[i].widgets[j].name === widgetName) {
								for (let k in req.body) {
									services[i].widgets[j].set(k, req.body[k]);
								}
								req.flash('serviceSelected', serviceName);
								return res.redirect('/');
							}
						}
					}
				}
			}
			res.redirect('/');
		}
	});
}
