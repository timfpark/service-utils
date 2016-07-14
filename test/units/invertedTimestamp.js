"use strict"

const assert = require('assert'),
      utils = require('../../utils');

describe('invertedTimestamp function', function() {
    it('can generate inverted timestamps', function(done) {
        var normalTimestamp = new Date(1453637008682.236);
        var normalRowKey = utils.invertedFixedWidthTimestamp(normalTimestamp);
        assert.equal(normalRowKey, '8638546362991318');

        var largestTimestamp = new Date(8639999999999999);
        var smallestRowKey = utils.invertedFixedWidthTimestamp(largestTimestamp);
        assert.equal(smallestRowKey, '0000000000000001');
        done();
    });
});
