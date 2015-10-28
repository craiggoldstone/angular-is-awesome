angular.module('aia.map').directive('aiaMap', function() {
	return {
		templateUrl: 'scripts/components/map/templates/map.html',
		restrict: 'E',
		scope: {},
		controller: 'aia.map.controller',
		controllerAs: 'vm',
		link: function(scope, element, attrs, transclude) {
			// do DOM stuff here
		}
	};
});