define(['angular', './controllers/map-controller', './directives/map-directive', './services/map-service', 'openlayers-directive'],
    function(angular, mapController, mapDirective, mapService) {
    var module = angular.module('aia.map', ['openlayers-directive']);

    module.controller('aia.map.controller', mapController);
    module.directive('aiaMap', mapDirective);
    module.service('aia.map.service', mapService);

    return module;
});