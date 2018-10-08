let passport = require('passport');

module.exports = (app) => {
	app.get('/login', (req, res) => {
		res.render('pages/login', {error: req.flash('error')});
	});

	app.post('/login', passport.authenticate('login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	}));

	app.post('/logout', (req, res) => {
		req.logout();
		res.redirect('/login');
	});
}
