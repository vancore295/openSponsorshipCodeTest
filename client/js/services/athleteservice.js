angular.module('athleteProfile').factory('AthleteService', ['$http', '$q',
    function($http, $q) {
        var _urls = {
            getAthletes: '/api/getAthletes',
            addNewAthlete: '/api/addNewAthlete'
        };

        var _get_atheletes = function() {
            var deffered = $q.defer();

            $http({
                    method: 'GET',
                    url: _urls.getAthletes
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

        var _add_athlete = function(newAthlete) {
            var deffered = $q.defer();

            $http({
                    method: 'PUT',
                    url: _urls.addNewAthlete,
                    data: newAthlete
                })
                .then(function success(response) {
                    deffered.resolve(response);
                }, function fail(response) {
                    console.log('ERROR');
                    console.log(response);
                    deffered.reject();
                });
        };

        return {
            GetAllAthletes: _get_atheletes,
            AddNewAthlete: _add_athlete
        };
    }
]);