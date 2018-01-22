var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html",
        controller:"loginctrl"
    })
    .when("/home", {
        templateUrl : "home.html",
        controller:"homeController"
    })
    .when("/viewProd",{
        templateUrl : "viewProd.html"
    })
    .otherwise("/", {
        templateUrl : "login.html"
    });
});