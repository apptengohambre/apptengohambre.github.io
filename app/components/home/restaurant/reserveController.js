angular.module('tengoHambreApp')
    .controller('reserveController', [
        '$scope',
        '$state',
        '$stateParams',
        'RestaurantService',
        function($scope, $state, $stateParams, RestaurantService) {

                $scope.restaurant = RestaurantService.get($stateParams.restaurantId);

                $scope.selectedSchedule = null;

                $scope.reservePeople = "1";
                $scope.reserveTerms = null;
                $scope.quantity = [];
                $scope.payTerms = null;

                for(var i = 0; i < $scope.restaurant.menu.length; i++){
                        $scope.quantity[i] = "0";
                }

                $scope.viewReserves = function() {
                        $state.go('home.restaurant.reserves', { restaurantId: $scope.restaurant.id });
                };

                $scope.selectSchedule = function (schedule) {
                        $scope.selectedSchedule = schedule;
                };

                $scope.getTotalItems = function(){
                        var total = 0;
                        for(var i = 0; i < $scope.quantity.length; i++){
                                total += parseFloat( $scope.quantity[i] );
                        }
                        return total;
                };

                $scope.getTotalPrice = function(){
                        var total = 0;
                        for(var i = 0; i < $scope.restaurant.menu.length; i++){
                                var product = $scope.restaurant.menu[i];
                                total += product.price * $scope.quantity[i];
                        }
                        return total;
                }

        }]);