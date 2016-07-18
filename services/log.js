'use strict'

let winston = require('winston');
let Logger = require('le_node');

console.log('checking for token');
if (process.env.LOGENTRIES_TOKEN) {
    console.log('found token');
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
    warn:  function(log) { winston.log('warn', log); },

    stream: {
        write: function(message, encoding) {
            winston.log('info', message);
        }
    }
};
