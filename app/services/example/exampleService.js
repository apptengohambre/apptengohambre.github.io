angular.module('app')
    .factory('ExampleService', function($http) {

        var store = function (object) {
            return $http.post('/api/url/example', object).then(function (response) {
                return response.data;
            });
        };

        return {
            store: store
        };
    });