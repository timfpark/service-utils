var assert = require('assert')
  , fixtures = require('../fixtures')
  , common = require('../../index.js');

var responseMock = {
    contentType: function(type) {},
    send: function(data) {}
};

describe('utils', function() {
    it('can handle an error', function(done) {
        var ServiceError = common.utils.ServiceError;

        var serviceError = new ServiceError(ServiceError.BAD_REQUEST, "This was a bad request!");
        common.utils.handleError(responseMock, serviceError);

        assert.equal(serviceError.statusCode, 400);

        done();
    });
});