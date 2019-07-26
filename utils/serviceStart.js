const async = require('async');

module.exports = function(server, callback) {
    async.whilst(
        callback => {
            return callback(null, !server._connectionKey);
        },
        callback => {
            setTimeout(callback, 100);
        },
        err => {
            if (err) {
                return process.exit(0);
            }
            callback();
        }
    );
};
