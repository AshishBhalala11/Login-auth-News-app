const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// importing .env variables decalred in another file to remove extra import of dotenv and config of it.
const { accessTokenKey, tokenExpiresTime } = require('../config/envVars');

// This method is for registering the new user
const register = (req, res, next) => {
    var email = req.body.email;

    // if user already exist with the email provided in the req then sending error for duplicate user
    User.findOne({email:email})
    .then(user => {
        if (user) {
            res.status(403).json({
                error: 'user with this email already exist!'
            })
        } else {
            // if user doesn't already exist then hashing the password to store in the database
            bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                }
                let user = new User({
                    email: email,
                    password: hashedPass
                })
            
                // saving user in database and sending success response
                user.save()
                .then(user => {
                    res.status(200).json({
                        message: 'User Added Successfully!'
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        error: 'An error occured while creating user!'
                    });
                })
            });     
        }
    })
}

const login = (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    // Checking if the user email exist in the data base
    User.findOne({email:email})
    .then(user => {
        if (user) {
            
            // if user exist then comparing password from req and in database which is hashed
            bcrypt.compare(password, user.password, function(err, result) {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                }

                // if password matches then creating jwt token for future authentication
                if (result) {
                    let token = jwt.sign({email: user.email}, accessTokenKey, { expiresIn: tokenExpiresTime });

                    res.cookie('token', token, {
                        httpOnly: true,
                        maxAge: 60 * 60 * 1000, // 1 hour
                    });

                    res.status(200).json({
                        message: 'Login Successful!',
                        token
                    });
                } else {
                    res.status(401).json({
                        error: 'Incorrect Password!'
                    });
                }
            })
        } else {
            // sending error in case user doesn't already exist in the data base
            res.status(401).json({
                error: 'No user found with this email id!'
            });
        }
    })
}

const logout = (req, res, next) => {
    // Clear the JWT token from the client cookie set as token
    res.clearCookie('token');

    res.status(200).json({
        message: 'Successfully logged out.'
    });
}

module.exports = {
    register,
    login,
    logout
}