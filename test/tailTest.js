//Testing using chai and mocha for the tail function


const assert = require('chai').assert;
const tail = require("../tail");

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