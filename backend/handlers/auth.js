const db = require('../models/index.js');
const jwt = require('jsonwebtoken');

exports.signin = async function(req, res, next) {
    // finding user
    try {
        let user = await db.User.findOne({
            email: req.body.email
        });
        let { id, username, profileImageUrl } = user;
        let isMatch = await user.comparePassword(req.body.password)
        if(isMatch) {
            let token = jwt.sign({
                id,
                username,
                profileImageUrl
            }, process.env.SECRET_KEY)
        
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        })
    } else {
        return next({
            status: 400,
            message: 'Invalid email/password'
        })
    }
    } catch (err) {
        
            return next({
                status: 400, 
                message: 'Invalid email/password'
            })
        
    }
    
};

exports.signup = async function(req, res, next) {
    try {
        let user = await db.User.create(req.body);
        let {id, username, profileImageUrl} = user;
        let token = jwt.sign({
            id: id,
            username,
            profileImageUrl
        }, process.env.SECRET_KEY
    );
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        })        
        // create user
        // create token
        // process.env.SECRET_KEY
    } catch (err) {
        if(err.code === 11000) {
            err.message = 'Sorry that info is already taken'
        }
        return next({
            status: 400,
            message: err.message
        })
        // see what kind error
        // if it's a certain err
        // response with a user name and email already taken
        // otherwise just send back a 400
    }
}