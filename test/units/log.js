const assert = require('assert'),
      fixtures = require('../fixtures'),
      services = require('../../services'),
      log = services.log("test");

describe('log service', function() {
    it('can log', function(done) {
        log.info("test");
        done();
    });
});