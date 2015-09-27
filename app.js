var app = angular.module('migrantsApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/home.html',
        controller: 'migrantsCtrl',
    }).
    when('/mission', {
        templateUrl: 'partials/mission.html',
        controller: 'migrantsCtrl',
    }).
    when('/plan', {
        templateUrl: 'partials/plan.html',
        controller: 'migrantsCtrl',
    }).
    when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'migrantsCtrl',
    }).
    otherwise({
        redirectTo: '/',
    });

}]);

app.controller('migrantsCtrl', function ($scope) {});