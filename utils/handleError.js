const services = require('../services'),
      log = services.log("handleError");

var handleError = function(res, err) {
    var statusCode = err.statusCode || 400;
    log.error(err.message);

    res.contentType('application/json');
    res.status(statusCode).send({ error: err });
};

module.exports = handleError;