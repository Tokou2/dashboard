let passport = require('passport');

module.exports = (app) => {
	app.get('/register', (request, response) => {
		response.render('pages/register');
	});

	app.post('/register', passport.authenticate('register', {
		successRedirect: '/login',
		failureRedirect: '/register',
		failureFlash: true
	}));
}
