angular.module('athleteProfile').controller('addAthleteListController', ['$scope', 'AthleteService', '$state',
    function($scope, AthleteService, $state) {
        var promise = AthleteService.GetAllAthletes();
        console.log($state);
        promise
            .then(function successs(response) {
                $scope.Athletes = response;
            }, function fail(response) {

            });
    }
]);