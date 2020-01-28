//loginService.js
//var app = 
// app.
angular.module('myApp').
factory('LoginService', function() {
var admin = 'myanatomy';
var pass = 'myanatomy';
var isAuthenticated = false;
return {
login : function(username, password) {
isAuthenticated = username === admin && password === pass;
return isAuthenticated;
},
isAuthenticated : function() {
return isAuthenticated;
}
};
});