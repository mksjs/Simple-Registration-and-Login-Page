// homeController.js
var app = angular.module('myApp');
app.controller('HomeController', 
function($scope, $rootScope) {
$scope.user = $rootScope.userName;
});