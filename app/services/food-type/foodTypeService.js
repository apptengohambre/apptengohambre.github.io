angular.module('tengoHambreApp')
    .factory('FoodTypeService', function($http) {

        var foodTypes = [
            {
                id: "pastas",
                name: "Pastas"
            },
            {
                id: "chifas",
                name: "Chifas"
            },
            {
                id: "carnes",
                name: "Carnes"
            },
            {
                id: "pescados",
                name: "Pescados"
            },
        ];

        var all = function () {
            return foodTypes;
        };

        return {
            all: all
        };
    });