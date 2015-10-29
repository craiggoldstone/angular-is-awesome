define(['angular', './controllers/menu-controller', './directives/menu-directive', './services/menu-service'],
    function(angular, menuController, menuDirective, menuService) {
	var module = angular.module('aia.menu', []);

    module.controller('aia.menu.controller', menuController);
    module.directive('aiaMenu', menuDirective);
    module.service('aia.menu.service', menuService);

    return module;
});