var util = require('util');

var ServiceError = function(statusCode, message) {
    Error.captureStackTrace(this, this);

    this.statusCode = statusCode;
    this.message = message;
};

ServiceError.BAD_REQUEST = 400;
ServiceError.INTERNAL_ERROR = 500;

util.inherits(ServiceError, Error);

module.exports = ServiceError;