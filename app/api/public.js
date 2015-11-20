var express     = require('express');
var router      = express.Router();
var jwt         = require('jsonwebtoken');
var bcrypt      = require('bcrypt');

var jwtSecret  = require('../../config/jwt').secret;

// Models
var User       = require('../models/User');

router.post('/authenticate', function(req, res) {
    User.findOne({
        name: req.body.username
    }, function(err, user) {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                res.status(401).json({
                    success: false,
                    message: 'Token expired.'
                })
                return;
            } else if (err.name === 'JsonWebTokenError') {
                res.status(401).json({
                    success: false,
                    message: err.message
                })
                return;
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Unspecified error.'
                })
                return console.error(err);
            }
        }

        if (!user) {
            res.status(401).json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
            return;
        }

        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: err
                });
            }

            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    message: 'Authentication failed. Wrong password'
                })
            }

            // if everything is good, create a JWT!
            var token = jwt.sign(user.clean(), jwtSecret, {
                // if you're signing on from a mobile app, we don't want tokens
                // to expire, so let's set 'expiresInMinutes' to 0.
                expiresInMinutes: (req.body.ios) ? 0 : 1440 // expires in 24 hours
            });

            // return the info as JSON
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
        });
    });
});

router.get('/setup', function(req, res) {
    // uncomment this if you want this to
    // be accessible to the public.
    return res.json({ success: false });

    // this is an easy way to create your
    // initial admin user in your database

    var parker = new User({
        name: 'parker',
        password: 'hi',
        admin: true
    });

    parker.save(function(err) {
        if (err) throw err;
        res.json({ success: true });
    });
});

module.exports = router;