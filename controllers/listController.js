(function(listcontroller) {
    var data = require("../data");
    var list = require("../models/list");

    listcontroller.init = function(app) {
        app.get('/api/getlistbyname/:name', function(req, res) {
            list.findOne({ 'name': req.params.name }, function(err, list) {
                res.send(JSON.stringify(list));
            });
        });
    }
})(module.exports);