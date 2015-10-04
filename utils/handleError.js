var services = require('../services');

var handleError = function(res, err) {
    var statusCode = err.statusCode || 400;
    services.log.error(err.message);

    res.contentType('application/json');
    res.sendStatus(statusCode).send({ error: err });
};

module.exports = handleError;