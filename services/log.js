'use strict'

let winston = require('winston');
require('winston-papertrail').Papertrail;

let transports = [
    new (winston.transports.Console)({ colorize: true, timestamp: true })
];

if (process.env.PAPERTRAIL_HOST && process.env.PAPERTRAIL_PORT) {
    transports.push(
        new (winston.transports.Papertrail)({
            host: process.env.PAPERTRAIL_HOST,
            port: process.env.PAPERTRAIL_PORT
        })
    );
}

module.exports = new winston.Logger({
    level: 'info',
    transports: transports
});
