var app = angular.module('athleteProfile', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", '/addAthlete');
    $urlRouterProvider.otherwise('/addAthlete');
    $stateProvider
        .state("addAthlete", {
            url: "/addAthlete",
            templateUrl: "templates/addAthlete.html",
            controller: 'addAthleteController'
        })
        .state("list", {
            url: "/list",
            templateUrl: "templates/athleteList.html",
            controller: 'addAthleteListController'
        })
});