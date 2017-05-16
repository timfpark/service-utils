'use strict'

const request = require('request');

const logsEndpoint = "https://logs.rhom.io/logs";

function processLog(severity, tags, log) {
    let logObject = {
        severity,
        tags,
        log
    };

    request.post(logsEndpoint, {
        body: logObject,
        json: true
    });
}

module.exports = function(tags) {
    return {
        debug: function(log) { processLog('debug', tags, log); },
        error: function(log) { processLog('error', tags, log); },
        info:  function(log) { processLog('info', tags, log); },
        warn:  function(log) { processLog('warn', tags, log); },
    };
};
