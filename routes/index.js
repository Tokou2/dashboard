module.exports = (app) => {
	app.get('/', (req, res) => {
		// if (!req.isAuthenticated()) {
		// 	res.redirect('/login');
		// }
		// else {
			res.render('pages/index', {
				error: req.flash('error'),
				isConnected: true,
				tabSelected: 'home',
				widgets : {
					"meteo": {
						"name": "zizi"
					}
					"bourse": {
						"name": "Bourse"
					}
					"cinema": {
						"name": "Cinema"
					}
				}
			});
		// }
	});
}
