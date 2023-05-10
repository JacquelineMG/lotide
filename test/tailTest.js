const assert = require('chai').assert;
const tail = require("../tail.js");

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns '[]' for []", () => {
    assert.deepEqual(tail([]), []); 
  });

  it("returns '[]' for [1]", () => {
    assert.deepEqual(tail([1]), []); 
  });

});