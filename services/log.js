'use strict'

const request = require('request');

const logsEndpoint = "https://logs.rhom.io/logs";

function processLog(severity, tag, log) {
    let logObject = {
        severity,
        tag,
        log
    };

    let logString = JSON.stringify(log);

    console.log(`${new Date()}: ${severity}: ${tag}: ${log}`);

    request.post(logsEndpoint, {
        body: logObject,
        json: true
    });
}

module.exports = function(tag) {
    return {
        debug: function(log) { processLog('debug', tag, log); },
        error: function(log) { processLog('error', tag, log); },
        info:  function(log) { processLog('info', tag, log); },
        warn:  function(log) { processLog('warn', tag, log); },
    };
};
