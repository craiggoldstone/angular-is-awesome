define(['angular'], function(angular) {

	var ngDependencies = ['$rootScope', 'aia.map.service'];

	var mapController = function($rootScope, mapService) {

		var vm = this;

		vm.center = mapService.getCenter();

		$rootScope.$on('aia-map-set-center', function(event, newCenter) {
			mapService.setCenter(newCenter);
			vm.center = newCenter;
		});

	};

	return ngDependencies.concat([mapController]);
});