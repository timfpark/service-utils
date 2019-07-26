const jwt = require('jsonwebtoken');

function verify(token, callback) {
    if (!process.env.ACCESS_TOKEN_SIGNING_KEY) {
        return callback(
            'ACCESS_TOKEN_SIGNING_KEY must be set to verify access token.'
        );
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SIGNING_KEY, function(
        err,
        jwtToken
    ) {
        if (err) return callback(err);

        return callback(null, { id: jwtToken.iss }, { scope: 'all' });
    });
}

module.exports = {
    verify
};
