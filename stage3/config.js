requirejs.config({
	'angular': 'bower_components/angular/angular'
});

require(['angular', 'scripts/app'], function(angular, app) {
	
	angular.element().ready(function() {
		angular.bootstrap(document.body, [app.name]);
	});

})