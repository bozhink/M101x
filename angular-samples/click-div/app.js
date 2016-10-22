(function () {
  'use strict';

  var app = angular.module('myApp', ['ng']);

  app.controller('MyController', ['$scope', function MyController($scope) {
    $scope.counter = 0;
  }]);
}());

