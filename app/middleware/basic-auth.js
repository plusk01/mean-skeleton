module.exports = function() {

    var basicAuth   = require('basic-auth');

    // This is the middleware part
    return function(req, res, next) {

        if (req.url === '/admin') {
            var user = basicAuth(req);

            if (!user || !user.hasOwnProperty('name') || !userMatch(user, users)) {
                res.set('WWW-Authenticate', 'Basic realm=""');
                return res.status(401).send();
            }
        }

        next();
    }
    // ----------------------------

    function userMatch(user, users) {
        return true;
    };
};