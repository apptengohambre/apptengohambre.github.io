angular.module('tengoHambreApp')
    .controller('restaurantController', [
        '$scope',
        '$stateParams',
        'RestaurantService',
        function($scope, $stateParams, RestaurantService) {

            $scope.restaurant = RestaurantService.get($stateParams.restaurantId);
            console.log($scope.restaurant);

        }]);