"use strict"

const MAX_DATE_TIMESTAMP = 8640000000000000;
const ROWKEY_FIXED_LENGTH = 16;

module.exports = function(timestamp) {
    var invertedTimestamp = MAX_DATE_TIMESTAMP - timestamp.getTime();
    let canonicalRowKey = Math.round(invertedTimestamp).toString();

    while(canonicalRowKey.length < ROWKEY_FIXED_LENGTH) {
        canonicalRowKey = "0" + canonicalRowKey;
    }

    return canonicalRowKey;
};