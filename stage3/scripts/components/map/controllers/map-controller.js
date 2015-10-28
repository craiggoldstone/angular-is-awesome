angular.module('aia.map').controller('aia.map.controller', [
	'aia.map.service',
	'$rootScope',
	function(mapService, $rootScope) {
	
	var vm = this;

	vm.center = mapService.getCenter();

	$rootScope.$on('aia-map-set-center', function(event, newCenter) {
		mapService.setCenter(newCenter);
		vm.center = newCenter;
	});


}]);