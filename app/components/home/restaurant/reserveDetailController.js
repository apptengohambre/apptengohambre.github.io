angular.module('tengoHambreApp')
    .controller('reserveDetailController', [
        '$scope',
        '$stateParams',
        'RestaurantService',
        function($scope, $stateParams, RestaurantService) {

                $scope.restaurant = RestaurantService.get($stateParams.restaurantId);
                $scope.reserve = RestaurantService.reserve($stateParams.restaurantId, $stateParams.reserveId);

                console.log($scope.reserve);

        }]);