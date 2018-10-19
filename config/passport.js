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

	passport.use('register', new LocalStrategy({
		passReqToCallback : true
	}, function(req, username, password, next) {
		User.findOne({ username: username }, function(err, user) {
			if (err) {
				return next(err);
			}
			if (user) {
				return next(null, false, req.flash('error', 'Username is already taken.'));
			}
			else {
				var user = new User();
				user.username = username;
				user.password = user.generateHash(password);
				user.save(function(err) {
					if (err) {
						throw err;
					}
					return next(null, user);
				});
			}
		});
	}));

	passport.use('login', new LocalStrategy({
		passReqToCallback : true
	}, function(req, username, password, done) {
		User.findOne({ username: username }, function (err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false, req.flash('error', 'Incorrect username.'));
			}
			if (!user.validPassword(password)) {
				return done(null, false, req.flash('error', 'Incorrect password.'));
			}
			return done(null, user);
		});
	}));
}
