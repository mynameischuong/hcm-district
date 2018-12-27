const express = require('express');
const app = express(); //init Express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./config/environment/database_info');
const userController = require('./controller/user-controller');
const districtController = require('./controller/districtController');

//mongoose.connect(config.mongo.uri, config.mongo.options);

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

mongoose.connection.on('open', (success) => {
    console.log('Connected to mongo server');
});

//init bodyParser to extract properties from POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//init Express Router
var router = express.Router();

router.route('/createUser').post((req, res) => {
    userController.createUser(req.body, (data) => {
        res.send(data);
    });
});

router.route('/').get((req, res) => {
    districtController.getDistrict(req.body, (data) => {
        res.send(data);
    });
    //res.json({ message: 'App is running!' });
});

app.use(router);
app.listen(port);
console.log('Listening on port ' + port);