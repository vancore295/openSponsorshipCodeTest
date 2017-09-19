angular.module('athleteProfile').controller('addAthleteController', ['$scope', 'AthleteService', 'ListService', '$state',
    function($scope, AthleteService, ListService, $state) {
        $scope.formData = {};

        var promise = ListService.GetList("Nationality");
        promise
            .then(function success(response) {
                console.log(response);
                $scope.Nationalities = response;

                var promise2 = ListService.GetList("Sports");
                promise2
                    .then(function success(response) {
                        $scope.Sports = response;
                    }, function fail(response) {

                    });

            }, function fail(response) {

            });


        $scope.SaveAthlete = function(formData) {
            if (formData.Interests !== undefined) {
                formData.Interests = formData.Interests.split(',');
            }

            if (formData.Pets !== undefined) {
                formData.Pets = formData.Pets.split(',');
            }

            if (formData.Charities !== undefined) {
                formData.Charities = formData.Charities.split(',');
            }

            AthleteService.AddNewAthlete(formData);
            $state.go('list');
        };

        $scope.Reset = function() {
            $scope.formData = {};
        };


        $scope.accordionControl = {
            basicInfo: true,
            about: true,
            socialMedia: true,
            summary: true,
            Affiliations: true
        };
    }
]);