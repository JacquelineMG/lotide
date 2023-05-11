//Testing using chai and mocha for the eqObjects function


const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  it("returns true for (shirtObject , anotherShirtObject)", () => {
    assert.deepEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });

});