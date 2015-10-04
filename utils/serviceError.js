var util = require('util');

var ServiceError = function(statusCode, message) {
    Error.captureStackTrace(this, this);

    this.statusCode = statusCode;
    this.message = message;
};

util.inherits(ServiceError, Error);

module.exports = ServiceError;