/*
** EPITECH PROJECT, 2018
** Project Name
** File description:
** youtube
*/
let Service = require('../../utils/service.js');
let RatingVideo = require('./widgets/video/video');

class	YoutubeService	extends Service
{
	constructor(user = undefined) {
		let widgets = [new RatingVideo(user)];
		for (let i in widgets) {
			widgets[i].params.push({name: 'api_key', type: "string"});
			widgets[i].set('api_key', 'AIzaSyDwWCnIf8ldsPbecapVeJOUPSs1xZAGQzs');
			widgets[i].params.push({name: 'base_url', type: "string"});
			widgets[i].set('base_url', 'https://www.googleapis.com');
		}
		super('youtube', widgets);
	}
}

module.exports = YoutubeService;
