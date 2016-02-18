angular.module('tengoHambreApp')
    .factory('DistrictService', function($http) {

        var districts = [
            {
                id: "la-molina",
                name: "La Molina"
            },
            {
                id: "san-boarja",
                name: "San Borja"
            },
            {
                id: "san-isidro",
                name: "San Isidro"
            },
            {
                id: "miraflores",
                name: "Miraflores"
            }
        ];

        var all = function () {
            return districts;
        };

        return {
            all: all
        };
    });