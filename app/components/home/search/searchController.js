angular.module('tengoHambreApp')
    .controller('searchController', [
        '$scope',
        'RestaurantService',
        'DistrictService',
        'FoodTypeService',
        function($scope, RestaurantService, DistrictService, FoodTypeService) {

            $scope.districts = DistrictService.all();

            $scope.foodTypes = FoodTypeService.all();

            $scope.restaurants = RestaurantService.all();

            $scope.priceRanges = [
                {
                    id: 1,
                    min: 0,
                    max: 20
                },
                {
                    id: 2,
                    min: 20,
                    max: 50
                },
                {
                    id: 3,
                    min: 50,
                    max: 100
                },
            ];

        }]);