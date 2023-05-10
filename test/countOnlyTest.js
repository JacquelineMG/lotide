const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns {'Jason': 1} for (firstNames,{'Jason': true})", () => {
    const firstNames = ["Karl", "Salima", "Aguohanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"]
    assert.deepEqual(countOnly(firstNames, {'Jason': true}), {'Jason': 1});
  });
});