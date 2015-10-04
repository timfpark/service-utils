var async = require('async');

module.exports = function(server, callback) {
    async.whilst(function() {
        return !app._connectionKey;
    }, function(callback) {
        setTimeout(callback, 100);
    }, function(err) {
        if (err) {
            console.log(err);
            return process.exit(0);
        }
        done();
    });
};