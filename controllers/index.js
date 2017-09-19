(function(controllers) {
    var athleteController = require("./athleteController");
    var listController = require("./listController");

    controllers.init = function(app) {
        athleteController.init(app);
        listController.init(app);
    }

})(module.exports);