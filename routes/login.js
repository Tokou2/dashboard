let passport = require('passport');

module.exports = (app) => {
	app.get('/login', (req, res) => {
		res.render('pages/login', {error: req.flash('error')});
	});

	app.post('/login', (req, res, next) => {
		passport.authenticate('login', function(err, user, info) {
			if (err) {
				console.log(err);
				return next(err);
			}
			if (!user) {
				console.log('/login');
				return res.redirect('/login');
			}
			req.logIn(user, function(err) {
				if (err) {
					return next(err);
				}
				req.services = require('../services/services');
				for (let i in req.services) {
					req.services[i].setUser(req.user);
				}
				return res.redirect('/');
			});
		})(req, res, next);
	});

	app.post('/logout', (req, res) => {
		req.logout();
		res.redirect('/login');
	});
}
