define(['angular'], function(angular) {

    var ngDependencies = ['$window'];

    var mapDirective = function($window) {
        return {
            templateUrl: 'components/map/templates/map.html',
            restrict: 'E',
            scope: {},
            controller: 'aia.map.controller',
            controllerAs: 'map',
            link: function(scope, element, attrs, vm) {

            }
        };
    };

    return ngDependencies.concat([mapDirective]);
});