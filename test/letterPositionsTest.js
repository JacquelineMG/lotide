const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [0, 6] for ('hello hello').h", () => {
    assert.deepEqual(letterPositions("hello hello").h, [0, 6]);
  });

  it("returns [0, 11] for ('Lighthouse Labs').l", () => {
    assert.deepEqual(letterPositions("Lighthouse Labs").L, [0, 11]);
  });

});