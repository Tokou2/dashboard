let passport = require('passport');

module.exports = (app) => {
	app.get('/register', (req, res) => {
		res.render('pages/register', { error: req.flash('error') });
	});

	app.post('/register', passport.authenticate('register', {
		successRedirect: '/login',
		failureRedirect: '/register',
		failureFlash: true
	}));
}
