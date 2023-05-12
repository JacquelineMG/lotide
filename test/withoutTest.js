//Testing using chai and mocha for the without function


const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] for ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['yellow', 'blue'] for (['red', 'yellow', 'green', 'blue'], ['green', 'red'])", () => {
    assert.deepEqual(without(['red', 'yellow', 'green', 'blue'], ['green', 'red']), ['yellow', 'blue']);
  });
  
});