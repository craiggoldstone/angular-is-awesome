define(['../module'], function(menuModule) {
	var ngDependencies = [];

    var menuDirective = function() {
        return {
            templateUrl: 'components/menu/templates/menu.html',
            restrict: 'E',
            scope: {},
            controller: 'aia.menu.controller',
            controllerAs: 'vm',
            link: function() {
                // do DOM interaction here
            }
        };
    };

    return ngDependencies.concat([menuDirective]);
});