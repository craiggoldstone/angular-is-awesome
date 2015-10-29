define(['../module'], function(menuModule) {

    var ngDependencies = ['$http'];

    var menuService = function($http) {

        var buttons = [];

        $http({
            method: 'GET',
            url: 'json/locations.json'
        }).then(function(response) {
            buttons.length = 0; // empty the array

            // inject new buttons into the now empty array
            buttons.splice.apply(buttons, [0,0].concat(response.data));
        });

        // return the public API
        return {
            buttons: buttons
        };
    };

	return ngDependencies.concat([menuService]);
});