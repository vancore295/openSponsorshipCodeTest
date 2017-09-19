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
            var newAthlete = new athlete(req.body);
            newAthlete.save();
        });
    }
})(module.exports);