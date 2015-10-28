define(['../module'], function(menuModule) {

    var ngDependencies = ['$rootScope', 'aia.menu.service'];
    var menuController = function($rootScope, menuService) {
        var vm = this;

        vm.title = 'Angular is Awesome';

        console.log('bound to buttons');
        vm.buttons = menuService.buttons;

        vm.zoom = function(where) {
            $rootScope.$emit('aia-map-set-center', where);
        };

    };

	return ngDependencies.concat([menuController]);
});