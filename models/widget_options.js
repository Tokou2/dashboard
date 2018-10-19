let mongoose = require('mongoose');

let WidgetOptionsSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		unique: true,
		require: true
	},
	widgetName: {
		type: String,
		require: true
	},
	selected: {
		type: Boolean,
		require: true
	},
	options: {
		type: Map,
		of: String
	}
});

module.exports = mongoose.model('WidgetOptions', WidgetOptionsSchema);
