/*
** EPITECH PROJECT, 2018
** Project Name
** File description:
** youtube
*/

let Widget = require('../../../../utils/widget');

class	StatistiqueVideoWidget extends Widget
{
	constructor(user = undefined) {
		let params = [{
			name : "url",
			type : "string"
		}];
		super("video", "check rating video by url", "youtube", params, user);
	}

}

module.exports = StatistiqueVideoWidget;

