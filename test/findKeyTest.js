const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns 'noma' for ({'Blue Hill': { stars: 1 },'Akaleri': { stars: 3 },'noma': { stars: 2 },}, x => x.stars === 2)", () => {
    assert.deepEqual(findKey({"Blue Hill": { stars: 1 },"Akaleri": { stars: 3 },"noma": { stars: 2 },}, x => x.stars === 2), "noma");
  });

});