var User = require('../models/user.model');

exports.createUser = (object, callback) => {
    var user = new User();
    user.username = object.username;
    user.password = object.password;

    user.save((err, data) => {
        if (err)
            res.send(err);
        return callback(data);
    });
}