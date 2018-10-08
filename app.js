// set express
let express = require('express');
let app = express();

// set database
let mongoose = require('mongoose');
let databaseConfig = require('./config/database');
mongoose.connect(databaseConfig.db, { useNewUrlParser: true }).catch((err) => {
	console.log(err);
});

// set session
var session = require('express-session');
app.use(session({
	secret:'secret123',
	saveUninitialized: true,
	resave:true
}));

// set passport
let passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// set flash
var flash = require('connect-flash');
app.use(flash());

// set view engine
app.set('view engine', 'ejs');

// set routes
require('./routes/about')(app);
require('./routes/index')(app);
require('./routes/login')(app);
require('./routes/register')(app);

require('./routes/test')(app);

app.listen(8080);
