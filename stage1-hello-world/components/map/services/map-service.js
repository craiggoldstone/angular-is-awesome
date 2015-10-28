define(['angular'], function(angular) {

    var ngDependencies = [];

    var mapService = function() {

        var center = [];

        return {
            getCenter: function() {
                return center;
            },

            setCenter: function(newCenter) {
                center = newCenter;
                console.log('set new center', center);
            }

        };
    };

	return ngDependencies.concat([mapService]);
});