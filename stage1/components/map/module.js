define(['angular', './controllers/map-controller', './directives/map-directive', './services/map-service'],
    function(angular, mapController, mapDirective, mapService) {
    var module = angular.module('aia.map', []);

    module.controller('aia.map.controller', mapController);
    module.directive('aiaMap', mapDirective);
    module.service('aia.map.service', mapService);

    return module;
});