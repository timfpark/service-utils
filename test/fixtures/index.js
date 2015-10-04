var jwt = require('jsonwebtoken');

var fixtures = {};

fixtures.userId = '747941cf-b829-4431-983d-f3d257044ee0';

fixtures.accessToken = jwt.sign({
    iss: fixtures.userId
}, process.env.ACCESS_TOKEN_SIGNING_KEY, {
    expiresIn: process.env.ACCESS_TOKEN_EXP_MINUTES * 60
});

fixtures.invalidAccessToken = jwt.sign({
    iss: fixtures.userId
}, 'FAKEFFAKE7B912FAKE49DFAKEFAKE4', {
    expiresIn: process.env.ACCESS_TOKEN_EXP_MINUTES * 60
});

module.exports = fixtures;