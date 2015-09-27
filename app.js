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
    when('/forum', {
        templateURL: 'partials/forum.html',
        controller: 'migrantsCtrl',
    }).
    otherwise({
        redirectTo: '/',
    });

                }]);

var migrantsRef = new Firebase('https://syrian-migrants.firebaseio.com/');

app.controller('migrantsCtrl', function ($scope) {
    $('#submit').click(function () {
        if ($('#name').val() && $('#group').val() && $('#comment').val()) {
            var name = $('#name').val();
            var group = $('#group').val();
            var comment = $('#comment').val();
            migrantsRef.push({
                name: name,
                group: group, // Doesn't quite work right now, but we'll work on it.
                comment: comment
            });
            $('#comment').val('');
        } else {
            $('#name').val() = "";
            $('#group').val() = "";
            $('#comment').val() = "";
            alert('You need to input all information to continue.');
        }
    });

    migrantsRef.on('child_added', function (snapshot) {
        var comment = snapshot.val();
        addNewComment(comment.name, comment.group, comment.comment);
    });

    function addNewComment(name, cont) {
        $('<div/>').text(comment).prepend('<br/>').prepend($('<em/>').text(name + ' (' + group + '): ')).appendTo($('#comments'));
        $('<br/>').appendTo($('#comments'));
    };
});