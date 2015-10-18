var assert = require('assert')
  , common = require('../../index.js')
  , fixtures = require('../fixtures')
  , HttpStatus = require('http-status-codes');

var responseMock = {
    contentType: function(type) {},
    send: function(data) {},
    status: function(data) { return this; }
};

describe('utils', function() {
    it('can handle an error', function(done) {
        var ServiceError = common.utils.ServiceError;

        var serviceError = new ServiceError(HttpStatus.BAD_REQUEST, "This was a bad request!");
        common.utils.handleError(responseMock, serviceError);

        assert.equal(serviceError.statusCode, 400);

        done();
    });
});