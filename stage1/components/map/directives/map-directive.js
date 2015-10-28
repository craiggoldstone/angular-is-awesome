define(['angular'], function(angular) {
	var ngDependencies = [];

    var mapDirective = function() {
        return {
            templateUrl: 'components/map/templates/map.html',
            restrict: 'E',
            scope: {},
            controller: 'aia.map.controller',
            controllerAs: 'vm',
            link: function(scope, element, attrs, transclude) {
                // do DOM stuff here
            }
        };
    };

    return ngDependencies.concat([mapDirective]);
});