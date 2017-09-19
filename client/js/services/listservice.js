angular.module('athleteProfile').factory('ListService', ['$http', '$q',
    function($http, $q) {
        var _urls = {
            getAthletes: '/api/getlistbyname/',
        };

        var _get_list = function(name) {
            var deffered = $q.defer();

            $http({
                    method: 'GET',
                    url: _urls.getAthletes + name,
                    data: name
                })
                .then(function success(response) {
                        console.log(response);
                        deffered.resolve(response.data);
                    },
                    function fail(response) {
                        console.log('Error');
                        console.log(response);
                        deffered.reject();
                    });

            return deffered.promise;
        };

        return {
            GetList: _get_list
        };
    }
]);