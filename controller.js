var app =angular.module("myApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'login.html'
    })
    .when('/dashboard',{
        templateUrl: 'dashboard.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});

app.controller('loginCtrl',function($scope,$location){
    $scope.submit = function(){
        var uname = $scope.username;
        var password =$scope.password;
        console.log(uname);
        if($scope.username =="Admin" && $scope.password =="Admin"){
            $location.path('/dashboard');
        }
    };
});