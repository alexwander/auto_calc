(function () {
  'use strict';

  angular.module('myFirstApp', [])

      .controller('MyFirstController', function ($scope) {
        $scope.name = "test";
        $scope.sayHello = function () {
          return "Hello Coursera!";
        };
      });

})();