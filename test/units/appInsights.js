const assert = require('assert'),
      services = require('../../services');

describe('appInsights service', function() {
    it('can track metric', function(done) {
        services.appInsights.trackMetric("testsrun", 1);
        done();
    });
});