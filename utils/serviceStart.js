var async = require('async');

module.exports = function(server, callback) {
    async.whilst(function() {
        return !server._connectionKey;
    }, function(callback) {
        setTimeout(callback, 100);
    }, function(err) {
        if (err) {
            return process.exit(0);
        }
        callback();
    });
};
