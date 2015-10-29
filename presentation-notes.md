# Intro

## What will I cover?
- Controllers, Services, Directives, Filters
- 

## stage1 -
make it dynamic.  add $http to json/locations.json

$http({
    method: 'GET',
    url: 'json/locations.json'
}).then(function(response) {
    buttons.length = 0; // empty the array

    // inject new buttons into the now empty array
    buttons.splice.apply(buttons, [0,0].concat(response.data));
});


## stage2
1. copy stage 1
2. go to material.angularjs.org
3. bower install angular-material --save-dev
4. configure requirejs
'angular-animate': 'bower_components/angular-animate/angular-animate',
'angular-aria': 'bower_components/angular-aria/angular-aria',
'angular-material': 'bower_components/angular-material/angular-material'

'angular-animate': ['angular'],
'angular-aria': ['angular'],
'angular-material': ['angular', 'angular-animate', 'angular-aria']
5. add dependencies to app.js (require and angular)