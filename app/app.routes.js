angular.module('tengoHambreApp').config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });

    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home/busqueda");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/components/home/mainView.html",
            resolve: {
                loadMyDirectives: function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'tengoHambreApp',
                        files:[
                            'app/shared/navbar/navbarDirective.js'
                        ]
                    });
                }
            }
        })
        .state('home.search', {
            url: "/busqueda",
            views: {
                "content@home": {
                    templateUrl: "app/components/home/search/searchView.html",
                    controller: "searchController",
                    resolve: {
                        loadMyFile: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name:'tengoHambreApp',
                                files:[
                                    'app/components/home/search/searchController.js',
                                    'app/services/restaurant/restaurantService.js',
                                    'app/services/district/districtService.js',
                                    'app/services/food-type/foodTypeService.js'
                                ]
                            });
                        }
                    }
                }
            }
        })
        .state('home.restaurant', {
            url: "/restaurant/:restaurantId",
            views: {
                "content@home": {
                    templateUrl: "app/components/home/restaurant/restaurantView.html",
                    controller: "restaurantController",
                    resolve: {
                        loadMyFile: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name:'tengoHambreApp',
                                files:[
                                    'app/components/home/restaurant/restaurantController.js',
                                    'app/services/restaurant/restaurantService.js',
                                ]
                            });
                        }
                    }
                }
            }
        })
        .state('home.restaurant.reserve', {
            url: "/reservar",
            views: {
                "content@home": {
                    templateUrl: "app/components/home/restaurant/reserveView.html",
                    controller: "reserveController",
                    resolve: {
                        loadMyFile: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name:'tengoHambreApp',
                                files:[
                                    'app/components/home/restaurant/reserveController.js',
                                    'app/services/restaurant/restaurantService.js',
                                ]
                            });
                        }
                    }
                }
            }
        })
        .state('home.restaurant.reserves', {
            url: "/reservas",
            views: {
                "content@home": {
                    templateUrl: "app/components/home/restaurant/reservesView.html",
                    controller: "reservesController",
                    resolve: {
                        loadMyFile: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name:'tengoHambreApp',
                                files:[
                                    'app/components/home/restaurant/reservesController.js',
                                    'app/services/restaurant/restaurantService.js',
                                ]
                            });
                        }
                    }
                }
            }
        })
        .state('home.restaurant.reserve-detail', {
            url: "/reserva/:reserveId",
            views: {
                "content@home": {
                    templateUrl: "app/components/home/restaurant/reserveDetailView.html",
                    controller: "reserveDetailController",
                    resolve: {
                        loadMyFile: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name:'tengoHambreApp',
                                files:[
                                    'app/components/home/restaurant/reserveDetailController.js',
                                    'app/services/restaurant/restaurantService.js',
                                ]
                            });
                        }
                    }
                }
            }
        });
}]);