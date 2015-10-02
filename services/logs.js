var jwt = require('jsonwebtoken');

var verify = function(token, callback) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SIGNING_KEY, function(err, jwtToken) {
        if (err) return callback(err);

        return callback(null, jwtToken.iss);
    });
};

module.exports = {
    verify: verify
};