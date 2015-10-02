var jwt = require('jsonwebtoken');

var fixtures = {};

fixtures.userId = '747941cf-b829-4431-983d-f3d257044ee0';

fixtures.accessToken = jwt.sign({
    iss: fixtures.userId
}, process.env.ACCESS_TOKEN_SIGNING_KEY, {
    expiresInMinutes: process.env.ACCESS_TOKEN_EXP_MINUTES
});

fixtures.invalidAccessToken = jwt.sign({
    iss: fixtures.userId
}, 'FAKEFFAKE7B912FAKE49DFAKEFAKE4', {
    expiresInMinutes: process.env.ACCESS_TOKEN_EXP_MINUTES
});

module.exports = fixtures;