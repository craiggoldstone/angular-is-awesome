var app = angular.module('aia', ['aia.menu', 'aia.map']);

app.controller('aia.controller', function () {

    var vm = this; // controller is the view-model

    vm.message = 'Hello World!';
});