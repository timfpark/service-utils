var winston = require('winston');

//if (process.env.LOGGLY_SUBDOMAIN && process.env.LOGGLY_INPUT_TOKEN &&
//    process.env.LOGGLY_USERNAME && process.env.LOGGLY_PASSWORD) {

//    winston.add(Loggly, {
//        "subdomain": process.env.LOGGLY_SUBDOMAIN,
//        "inputToken": process.env.LOGGLY_INPUT_TOKEN,
//        "auth": {
//            "username": process.env.LOGGLY_USERNAME,
//           "password": process.env.LOGGLY_PASSWORD
//        }
//    });
//}

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { colorize: true, timestamp: true, level: 'info' });

module.exports = winston;