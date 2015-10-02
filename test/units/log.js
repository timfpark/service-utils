var assert = require('assert')
  , fixtures = require('../fixtures')
  , services = require('../../services');

describe('log service', function() {
    it('can log', function(done) {
        services.log.info("test");
        done();
    });
});