angular.module('tengoHambreApp')
    .factory('RestaurantService', function($http) {

        var restaurants = [
            {
                id: "pardos-chiken",
                name: "Pardos Chicken",
                address: "Av. Javier Prado 6495 – La Molina",
                phone: "617-2828",
                district: "la-molina",
                openingHours: "Lunes a Domingo de 12:00pm a 12:00am",
                description: "Mauris sollicitudin mi ac lorem tincidunt dictum. Pellentesque bibendum ante ut urna ornare pellentesque. Suspendisse potenti. Vestibulum scelerisque bibendum dolor at placerat. In scelerisque luctus vehicula. Donec molestie sem eu dui mattis, eget venenatis orci consectetur. Aliquam eu mattis augue. Nulla sit amet tellus accumsan est molestie dictum ut in enim. ",
                menu: [
                    {
                        name: "plato 1",
                        price: 10.5
                    },
                    {
                        name: "plato 2",
                        price: 12.5
                    },
                    {
                        name: "plato 3",
                        price: 17.0
                    },
                    {
                        name: "plato 4",
                        price: 30.0
                    }
                ],
                reviews: [
                    {
                        name: "Pepe",
                        comment: "Excelente pollo, delciciosas papas"
                    },
                    {
                        name: "Lucho",
                        comment: "La mejor atención"
                    }
                ],
                rating: 5,
                image: "assets/img/restaurants/pardos-chiken-logo.jpeg",
                pictures: [
                    {url: "assets/img/restaurants/pardos-chiken-2.jpeg"},
                    {url: "assets/img/restaurants/pardos-chiken-1.jpeg"}
                ],
                reserves: [
                    {
                        id: 1,
                        user: "Carlos Sanchez",
                        date: "2 PM",
                        people: "3",
                        paid: "Si"

                    },
                    {
                        id: 2,
                        user: "Amanda Caballero",
                        date: "2 PM",
                        people: "5",
                        paid: "No"

                    },
                    {
                        id: 3,
                        user: "Luis Cabrera",
                        date: "2 PM",
                        people: "2",
                        paid: "No"

                    },
                    {
                        id: 4,
                        user: "Janice Petunia",
                        date: "6 PM",
                        people: "14",
                        paid: "Si"

                    },
                    {
                        id: 5,
                        user: "Marco Tulio",
                        date: "7 PM",
                        people: "2",
                        paid: "Si"

                    }
                ]
            },
            {
                id: "restaurante-fong-loy-1",
                name: "Restaurante Fong Loy 1",
                address: "Av. Los constructores 145 – La Molina",
                phone: "349-5856",
                district: "la-molina",
                openingHours: "Lunes a Domingo de 09:00am a 11:00pm",
                description: "Mauris sollicitudin mi ac lorem tincidunt dictum. Pellentesque bibendum ante ut urna ornare pellentesque. Suspendisse potenti. Vestibulum scelerisque bibendum dolor at placerat. In scelerisque luctus vehicula. Donec molestie sem eu dui mattis, eget venenatis orci consectetur. Aliquam eu mattis augue. Nulla sit amet tellus accumsan est molestie dictum ut in enim. ",
                menu: [
                    {
                        name: "plato 1",
                        price: 10.5
                    },
                    {
                        name: "plato 2",
                        price: 12.5
                    },
                    {
                        name: "plato 3",
                        price: 17.0
                    },
                    {
                        name: "plato 4",
                        price: 30.0
                    }
                ],
                reviews: [
                    {
                        name: "Carlos",
                        comment: "Excelente comida chifa"
                    },
                    {
                        name: "Sandra",
                        comment: "La mejor atención"
                    }
                ],
                rating: 5,
                image: "assets/img/restaurants/restaurante-fong-loy-1.jpg",
                pictures: [
                    {url: "assets/img/restaurants/restaurante-fong-loy-1.jpg"}
                ],
                reserves: [
                    {
                        id: 1,
                        user: "Carlos Sanchez",
                        date: "2 PM",
                        people: "3",
                        paid: "Si"

                    },
                    {
                        id: 2,
                        user: "Amanda Caballero",
                        date: "2 PM",
                        people: "5",
                        paid: "No"

                    },
                    {
                        id: 3,
                        user: "Luis Cabrera",
                        date: "2 PM",
                        people: "2",
                        paid: "No"

                    },
                    {
                        id: 4,
                        user: "Janice Petunia",
                        date: "6 PM",
                        people: "14",
                        paid: "Si"

                    },
                    {
                        id: 5,
                        user: "Marco Tulio",
                        date: "7 PM",
                        people: "2",
                        paid: "Si"

                    }
                ]
            }
        ];

        var all = function () {
            return restaurants;
        };

        var get = function (id) {
            return $.grep(restaurants, function(e){ return e.id === id; })[0];
        };

        var reserve = function (restaurantId, reserveId) {
            var restaurant = $.grep(restaurants, function(e){ return e.id === restaurantId; })[0];
            var reserve = $.grep(restaurant.reserves, function(e){ return e.id == reserveId; })[0];
            return reserve;
        };

        return {
            all: all,
            get: get,
            reserve: reserve
        };
    });