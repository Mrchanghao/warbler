require('dotenv').load();

const jwt = require('jsonwebtoken');

// make sure the user is logged
exports.loginRequired = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: 'Please Log in first'
                })
            }
        })
    } catch (error) {
        return next({
            status: 401,
            message: 'Please Log in first'
        })
    }
}

// make sure we goet the correct user 

exports.ensureCorrectUser = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if(decoded && decoded.id === req.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: 'unAuthorization'
                })
            }
        })
    } catch (error) {
        next({
            status: 401,
            message: 'unAuthorization'
        })
    }
}