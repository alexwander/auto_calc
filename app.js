(function () {
  'use strict';

  angular.module('BitcoinCalculator', [])

      .controller('CalcController', function ($scope) {
        $scope.name = "test";
        $scope.totalValue = 0;

      });

})();

(function () {
    'use strict';
    var form = document.getElementById('calc-auto');

    function defineEngineCharacteristics(type, volume) {

        if (type === 'gas') {
            if (volume <= 1000) {
                return 0.102;
            } else if (volume <= 1500) {
                return 0.063;
            } else if (volume <= 2200) {
                return 0.267;
            } else if (volume <= 3000) {
                return 0.276;
            } else {
                return 2.209;
            }
        } else if (type === 'diesel') {
            if (volume <= 1500) {
                return 0.103;
            } else if (volume <= 2500) {
                return 0.327;
            } else {
                return 2.209;
            }


        } else if (type === 'electric') {
            if (volume > 30) {
                return 109.127;
            }

        }
        else if (type === 'moto') {

            return 0.060;
        }

    }

};

  };

function calculateTaxex() {


    var priceMultiplier = defineEngineCharacteristics(type, volume);
    var vatT = (price + mitoTax + startT) * 0.2;


    document.getElementById('results').value =


         ${type==='d'?'Дизель':'Бензин'},
        ${volume},
        ${price}
    ${vatT.toFixed(2)},
     ${mitoT.toFixed(2)}


}


};



})();




