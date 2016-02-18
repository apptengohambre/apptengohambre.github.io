angular.module('tengoHambreApp')
    .controller('reservesController', [
        '$scope',
        '$stateParams',
        'RestaurantService',
        function($scope, $stateParams, RestaurantService) {

                $scope.restaurant = RestaurantService.get($stateParams.restaurantId);

        }]);