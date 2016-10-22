(function () {
  'use strict';

  var app = angular.module('myApp', ['ng']);

  app.directive('counterDirective', function counterDirective() {
    return {
      controller: 'MyController',
      templateUrl: './templates/click-div.html'
    };
  });

  app.controller('MyController', ['$scope', function MyController($scope) {
    $scope.counter = 0;
  }]);
}());

