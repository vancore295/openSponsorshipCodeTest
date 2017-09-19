var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var atheleteSchema = new Schema({
    firstName: String,
    lastName: String,
    date_of_birth: Date,
    nationality: String,
    location: String,
    Association: String,
    team: String,
    Sports: Array,
    about: String,
    Interests: Array,
    Charities: Array,
    Social_Media_Handles: {
        Facebook: String,
        Twitter: String,
        Instagram: String,
        Youtube: String,
        Twitch: String,
        Snapchat: String
    },
    Pets: Array,
    Drinks_Alcohol: Boolean,
    Married: Boolean
})

var athlete = mongoose.model("athlete", atheleteSchema);

module.exports = athlete;