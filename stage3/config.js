requirejs.config({
	paths: {
		angular: 'bower_components/angular/angular',
		'angular-animate': 'bower_components/angular-animate/angular-animate',
		'angular-aria': 'bower_components/angular-aria/angular-aria',
		'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
		'angular-material': 'bower_components/angular-material/angular-material',
		'ol': 'ol',
        'openlayers-directive': 'bower_components/angular-openlayers-directive/dist/angular-openlayers-directive'
	},
    shim: {
        angular: {
            exports: 'angular' // pick up the global
        },
		'angular-animate': ['angular'],
		'angular-aria': ['angular'],
		'angular-sanitize': ['angular'],
		'angular-material': ['angular', 'angular-animate', 'angular-aria'],
        'ol': {
            exports: 'ol'
        },
        'openlayers-directive': ['angular', 'ol', 'angular-sanitize']
    }
});

require(['angular', 'app', 'ol'], function(angular, app, ol) {

    window.ol = ol; // because some libraries don't support AMD :(

	angular.element().ready(function() {
		angular.bootstrap(document.body, [app.name]);
	});

});