'use strict'

let winston = require('winston');
let Logger = require('le_node');

if (process.env.LOGENTRIES_TOKEN) {
    winston.add(winston.transports.Logentries, {
        token: process.env.LOGENTRIES_TOKEN
    });
}

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
    colorize: true,
    timestamp: true
});

module.exports = {
    debug: function(log) { winston.log('debug', log); },
    error: function(log) { winston.log('error', log); },
    info:  function(log) { winston.log('info', log); },
    warn:  function(log) { winston.log('warn', log); }
};
