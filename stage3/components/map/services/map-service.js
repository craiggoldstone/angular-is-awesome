define(['angular'], function(angular) {

    var ngDependencies = [];

    var mapService = function() {

        var center = {
            lat: 0,
            lon: 0,
            zoom: 6,
            projection: "EPSG:4326"
        };

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