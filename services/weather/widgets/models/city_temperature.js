let mongoose = require('mongoose');

let CityTemperatureSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	},
	city: {
		type: String
	}
});

module.exports = mongoose.model('CityTemperature', CityTemperatureSchema);
