let passport = require('passport');

module.exports = (app) => {
	app.get('/login', (request, response) => {
		response.render('pages/login');
	});

	app.post('/login', passport.authenticate('login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	}));
}
