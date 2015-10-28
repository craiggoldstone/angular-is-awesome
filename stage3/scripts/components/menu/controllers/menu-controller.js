angular.module('aia.menu').controller('aia.menu.controller', [
	'aia.menu.service',
	'$rootScope',
	function(menuService, $rootScope) {
	var vm = this;

	vm.title = 'Super menu!';

	vm.buttons = menuService.getMenuButtons();

	vm.zoom = function(where) {
		$rootScope.$emit('aia-map-set-center', where);
	};

}]);