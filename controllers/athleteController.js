(function(athleteController) {
    var data = require("../data");
    var athlete = require("../models/athlete");

    athleteController.init = function(app) {
        app.get("/api/getAthletes", function(req, res) {
            athlete.find({}, function(err, athlets) {
                res.send(JSON.stringify(athlets));
            })
        });

        app.put("/api/addNewAthlete", function(req, res) {
            console.log(req.body);
            var newAthlete = new athlete({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                date_of_birth: req.body.date_of_birth,
                nationality: req.body.nationality,
                location: req.body.location,
                Association: req.body.Association,
                team: req.body.team,
                Sports: req.body.Sports,
                about: req.body.about,
                Interests: req.body.Interests,
                Charities: req.body.Charities,
                Social_Media_Handles: req.body.Social_Media_Handles,
                Pets: req.body.Pets,
                Drinks_Alcohol: req.body.Drinks_Alcohol,
                Married: req.body.Married
            });
            newAthlete.save();
        });
    }
})(module.exports);