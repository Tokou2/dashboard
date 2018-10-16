class Service
{
	constructor(name, widgets = []) {
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

	setUser(user) {
		for (let i in this.widgets) {
			this.widgets[i].setUser(user);
		}
	}
}

module.exports = Service;
