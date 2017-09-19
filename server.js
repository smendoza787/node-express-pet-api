var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Pet = require('./api/models/petModel'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Petdb', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true })); //applying bodyParser middleware
app.use(bodyParser.json());

var routes = require('./api/routes/petRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('pets API server started on: ' + port);
