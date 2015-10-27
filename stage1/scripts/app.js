var app = angular.module('myApp', []);

app.controller('myCtrl', function () {

    var vm = this; // functions as objects; controller IS the view-model

    vm.message = 'Hello World!';
});