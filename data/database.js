(function(database) {
    var mongodb = require('mongodb');
    var dotenv = require('dotenv');
    var path = require('path');

    dotenv.load({ path: '.env' });

    var mongoURI = process.env.MONGOURI || 'mongodb://user:test@ds139964.mlab.com:39964/athleteprofiles?readPreference=primary';
    var theDb = null;

    database.getDb = function(next) {
        if (!theDb) {
            mongodb.MongoClient.connect(mongoURI, function(err, db) {
                if (err) {
                    next(err, null);
                } else {
                    theDb = {
                        db: db
                    };
                    console.log(theDb.db);
                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }
    };

})(module.exports);