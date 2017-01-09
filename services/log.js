'use strict'

let winston = require('winston');
require('winston-loggly-bulk');

if (process.env.LOGGLY_TOKEN && process.env.LOGGLY_SUBDOMAIN && process.env.LOGGLY_TAG) {
    winston.add(winston.transports.Loggly, {
        token: process.env.LOGGLY_TOKEN,
        subdomain: process.env.LOGGLY_SUBDOMAIN,
        tags: [process.env.LOGGLY_TAG],
        json: true
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
