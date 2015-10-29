define(['angular'], function(angular) {

	var ngDependencies = ['$rootScope', 'aia.map.service'];

	var mapController = function($rootScope, mapService) {

		var vm = this;

		vm.center = mapService.getCenter();

		$rootScope.$on('aia-map-set-lat-lon', function(event, lat, lon) {
			vm.center.lat = lat;
			vm.center.lon = lon;
		});

	};

	return ngDependencies.concat([mapController]);
});