var assert = require('assert')
  , fixtures = require('../fixtures')
  , services = require('../../services');

describe('accessTokens service', function() {
    it('can verify valid access token', function(done) {
        services.accessTokens.verify(fixtures.accessToken, function(err, userId) {
            assert(!err);
            assert.equal(userId, fixtures.userId);
            done();
        });
    });

    it('rejects invalid access token', function(done) {
        services.accessTokens.verify(fixtures.invalidAccessToken, function(err, userId) {
            assert(err);
            done();
        });
    });
});