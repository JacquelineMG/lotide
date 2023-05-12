//Testing using chai and mocha for the eqObjectsRec function


const assert = require('chai').assert;
const eqObjectsRec = require('../eqObjectsRec');

describe("#eqObjectsRec", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  it("returns true for (shirtObject , anotherShirtObject)", () => {
    assert.deepEqual(eqObjectsRec(shirtObject , anotherShirtObject), true);
  });

  it("returns true for ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.deepEqual(eqObjectsRec({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.deepEqual(eqObjectsRec({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it("returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })", () => {
    assert.deepEqual(eqObjectsRec({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) , false);
  });

});