define(['../module'], function(menuModule) {

    var ngDependencies = ['$rootScope', 'aia.menu.service', '$mdSidenav'];
    var menuController = function($rootScope, menuService, $mdSidenav) {
        var vm = this;

        vm.title = 'Angular is Awesome';

        console.log('bound to buttons');
        vm.buttons = menuService.buttons;

        vm.zoom = function(where) {
            $rootScope.$emit('aia-map-set-lat-lon', where[0], where[1]);
        };

        vm.toggleSidenav = function() {
            $mdSidenav('left').toggle();
        };

    };

	return ngDependencies.concat([menuController]);
});