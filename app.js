let express = require('express');
let app = express();

// set view engine
app.set('view engine', 'ejs');

// set routes
require('./routes/index')(app);

app.listen(8080);
