var app =angular.module("myApp",['ngRoute']);
app.config(function($routeProvider)){
    $routeProvider
    .when('/',{
        templateUrl: 'login.html'
    })
    .when('/dashboard',{
        templateUrl: 'dashboard.html'
    })
    .otherwise({
        redirectTo:'/'
    })
}