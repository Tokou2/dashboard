class Service
{
	constructor(name, widgets = [], user = undefined) {
		this.name = name;
		this.widgets = widgets;
	}

	about() {
		let widgets = [];
		for (let i in this.widgets) {
			widgets.push(this.widgets[i].about());
		}
		return {
			name: this.name,
			widgets: widgets
		};
	}
}

module.exports = Service;
