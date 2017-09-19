var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
    name: String,
    list: Array
});

var list = mongoose.model("list", listSchema);

module.exports = list;