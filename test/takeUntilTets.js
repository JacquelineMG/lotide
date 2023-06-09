//Testing using chai and mocha for the takeUntil function


const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  it("returns [ 1, 2, 5, 7, 2 ] for (data1, x => x < 0)", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
});

