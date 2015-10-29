define(['../module'], function(menuModule) {

    var ngDependencies = ['$http'];

    var menuService = function($http) {

        var buttons = [
            {
                "name": "London",
                "latLon": [51.5073509, -0.12775829999998223]
            },
            {
                "name": "Southampton",
                "latLon": [50.90970040000001, -1.404350900000054]
            },
            {
                "name": "OSHQ",
                "latLon": [50.93788, -1.470625000000041]
            }
        ];

        // return the public API
        return {
            buttons: buttons
        };
    };

    return ngDependencies.concat([menuService]);
});