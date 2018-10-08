let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/user');

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use('register', new LocalStrategy(function(req, username, password, done) {
		User.findOne({ username: username }, function(err, user) {
			if (err) {
				return done(err);
			}
			if (user) {
				return done(null, false, { message: 'Email is already taken.' });
			}
			else {
				var user = new User();
				user.email = email;
				user.password = user.generateHash(password);
				user.save(function(err) {
					if (err) {
						throw err;
					}
					return done(null,newUser);
				});
			}
		});
	}));

	passport.use('login', new LocalStrategy(function(username, password, done) {
		User.findOne({ username: username }, function (err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username.' });
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
		});
	}));
}
