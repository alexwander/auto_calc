(function () {
  'use strict';

  angular.module('BitcoinCalculator', [])

      .controller('CalcController', function ($scope) {
        $scope.name = "test";
        $scope.totalValue = 0;
      });

    
    function TruthFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }

})();