var HttpStatus = require('http-status-codes')
  , utils = require('../utils');

module.exports = function(req, res, next) {
    var auth = passport.authenticate(['bearer'], { session: false });

    auth(req, res, function(err, failed) {
        if (err || failed) return utils.handleError(res, new utils.ServiceError(HttpStatus.UNAUTHORIZED, "Request unauthorized."));

        next();
    });
};