(function(data) {
    var database = require("./database");

    data.init = function(app) {
        database.getDb(app);
    }

})(module.exports);