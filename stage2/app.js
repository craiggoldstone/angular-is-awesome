define(['angular', 'angular-material', 'components/menu/module', 'components/map/module'], function(angular) {

	var app = angular.module('aia', ['ngMaterial', 'aia.menu', 'aia.map']);

	var ngDependencies = ['aia.menu.service', '$rootScope'];
	app.controller('aia.controller', ngDependencies.concat([
		function (menuService, $rootScope) {
			var vm = this; // controller is the view-model
			vm.message = 'Hello World!';

			vm.buttons = menuService.buttons;

			vm.zoom = function(where) {
				$rootScope.$emit('aia-map-set-lat-lon', where[0], where[1]);
			};

		}
	]));

	return app;

});