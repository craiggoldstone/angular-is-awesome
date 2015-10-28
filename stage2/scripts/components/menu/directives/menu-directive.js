angular.module('aia.menu').directive('aiaMenu', function() {
	return {
		templateUrl: 'scripts/components/menu/templates/menu.html',
		restrict: 'E',
		scope: {},
		controller: 'aia.menu.controller',
		controllerAs: 'vm'
	};
});