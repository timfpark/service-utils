var services = require('../services');

var handleError = function(res, err) {
    var statusCode = err.statusCode || 400;
    services.log.error(err.message);

    res.contentType('application/json');
    res.send(statusCode, { error: err });
};

module.exports = handleError;