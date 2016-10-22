(function () {
  'use strict';

  var app = angular.module('myApp', ['ng', 'ngRoute']);

  app.config(['$routeProvider', function RouteConfig($routeProvider) {
    $routeProvider
      .when('/', {
        //template: '<h1>Home Page</h1><a ng-href="#/about">About</a>'
        templateUrl: 'templates/home.html'
      })
      .when('/about', {
        //template: '<a ng-href="#/">Back to Home Page</a>'
        templateUrl: 'templates/about.html'
      });
  }]);
 } ());
