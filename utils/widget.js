let fs = require('fs');
let WidgetOptions = require('../models/widget_options');

class Widget
{
	constructor(name, description, serviceName, params = [], user = undefined) {
		this.selected = true;
		this.name = name;
		this.description = description;
		this.serviceName = serviceName;
		this.params = params;
		this.options = {};
		if (user) {
			this.user = user;
			this.getOptions();
		}
	}

	about() {
		return {
			name: this.name,
			description: this.description,
			params: this.params
		};
	}

	getView() {
		console.log('get view');
		let view = fs.readFileSync(`${__dirname}/../services/${this.serviceName}/widgets/${this.name}/views/view.ejs`);
		return `<div class="${this.name}_container">${view}</div>`;
	}

	getOptionsView() {
		let view = fs.readFileSync(`${__dirname}/../services/${this.serviceName}/widgets/${this.name}/views/view.ejs`);
		return `<div class="${this.name}_options_container">${view}</div>`;
	}

	set(key, value) {
		let save = false;
		for (let i in this.params) {
			if (this.params[i].name === key) {
				this.options[key] = value;
				save = true;
			}
		}
		if (save) {
			this.saveOptions();
		}
	}

	select() {
		this.selected = true;
	}

	unselect() {
		this.selected = false;
	}

	getOptions() {
		if (this.user) {
			WidgetOptions.findOne({ userId: this.user._id, widgetName: this.name }, (err, options) => {
				if (err)
					console.log(err);
				if (options) {
					this.selected = options.selected;
					this.options = options.options;
				}
				else {
					this.saveOptions();
				}
			});
		}
	}

	saveOptions() {
		if (this.user) {
			WidgetOptions.findOne({ userId: this.user._id, widgetName: this.name }, (err, options) => {
				if (err)
					console.log(err);
				let	data = {
					userId: this.user._id,
					widgetName: this.name,
					selected: this.selected,
					options: this.options
				}
				options = options ? options.set(data) : new WidgetOptions(data);
				options.save().then(
					(res) => { console.log(res); }
				).catch(
					(err) => { console.log(err); }
				);
			});
		}
	}
}

module.exports = Widget;
