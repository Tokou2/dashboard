let express = require('express');
let mongoose = require('mongoose');
let databaseConfig = require('./config/database');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser')
let passport = require('passport');
let app = express();

// init database
mongoose.connect(databaseConfig.db, { useNewUrlParser: true }).catch((err) => {
	console.log(err);
});

// set app
require('./config/passport')(passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret:'secret123', saveUninitialized: true, resave:true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine', 'ejs');

app.use(express.static('public'));

// set routes
require('./routes/about')(app);
require('./routes/index')(app);
require('./routes/login')(app);
require('./routes/register')(app);

require('./routes/test')(app);

app.listen(8080);
