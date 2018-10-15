let mongoose = require('mongoose');

let CityTemperatureOptionsSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	},
	city: {
		type: String
	}
});

module.exports = mongoose.model('CityTemperatureOptions', CityTemperatureOptionsSchema);
