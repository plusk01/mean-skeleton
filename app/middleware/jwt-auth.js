module.exports = function() {

    var jwt        = require('jsonwebtoken');

    var jwtSecret  = require('../../config/jwt').secret;

    return function(req, res, next) {

        if (req.url === '/api/authenticate') return next();

        // check header or URL params or POST for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (!token) {
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }

        jwt.verify(token, jwtSecret, function(err, decoded) {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: 'Failed to authenticate token.'
                })
            }

            // if everything is good, save to request for use in other routes
            req.decodedJWT = decoded;
            next();
        });

    };

};