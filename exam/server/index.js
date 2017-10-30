var express = require('express');
var config = require('./config/config');
var app = express();

require('./config/express')(app, config);
console.log("Creating HTTP server on port: " + config.port);

//Loads the express.js file to configure the server and passes the express app object to it
require('http').createServer(app).listen(config.port, function () {
console.log("HTTP Server listening on port: " + config.port + ", in " + app.get('env') + " mode");
});
