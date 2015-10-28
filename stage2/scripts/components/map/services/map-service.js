angular.module('aia.map').service('aia.map.service', [function() {
	
	var center = [];

	return {
		getCenter: function() {
			return center;
		},

		setCenter: function(newCenter) {
			center = newCenter;
			console.log('set new center', center);
		}

	};
}]);