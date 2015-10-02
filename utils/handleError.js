var handleError = function(res, err) {
    var statusCode = err.statusCode || 400;
    core.log.error(err.message);
    return sendFailedResponse(res, statusCode, err);
}