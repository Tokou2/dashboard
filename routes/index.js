module.exports = (app) => {
	app.get('/', (req, res) => {
		if (!req.isAuthenticated())
			res.redirect('/login');
		res.render('pages/index', {
			error: req.flash('error'),
			isConnected: true
		});
	});
}
