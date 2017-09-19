var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var path = require('path');
var app = express();

var controllers = require("./controllers");
var database = require("./data");

dotenv.load({ path: '.env' });

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

controllers.init(app);
// database.init(app);
var mongoURI = process.env.MONGOURI || 'mongodb://user:test@ds139964.mlab.com:39964/athleteprofiles?readPreference=primary';
mongoose.connect(mongoURI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('disconnected', console.log);
db.once("open", console.log);

var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port);