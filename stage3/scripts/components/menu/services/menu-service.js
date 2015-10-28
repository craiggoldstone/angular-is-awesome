define(['angular'], function(angular) {
	angular.module('aia.menu').service('aia.menu.service', [function() {
		
		var buttons = [
			{ text: 'Zoom to London', centre: [0, 0]},
			{ text: 'Zoom to Southampton', centre: [1, 1]},
			{ text: 'Zoom to OSHQ', centre: [2, 2]}
		];

		return {
			getMenuButtons: function() {
				return buttons;
			}
		};
	}]);
});