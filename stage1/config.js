requirejs.config({
	paths: {
		angular: 'bower_components/angular/angular'
	},
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'app'], function(angular, app) {
	
	angular.element().ready(function() {
		angular.bootstrap(document.body, [app.name]);
	});

});