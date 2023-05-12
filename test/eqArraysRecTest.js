//Testing using chai and mocha for the eqArraysRec function


const assert = require('chai').assert;
const eqArraysRec = require('../eqArraysRec');

describe("#eqArraysRec", () => {
  it("returns true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArraysRec([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for ([1, 2, 3], [3, 2, 1])", () => {
    assert.deepEqual(eqArraysRec([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns false for ([[2, 3], [4]], [[2, 3], [4, 5]])", () => {
    assert.deepEqual(eqArraysRec([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns true for ([[2, 3], [4]], [[2, 3], [4]])", () => {
    assert.deepEqual(eqArraysRec([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("returns true for (['A', [['B', ['C']], [[['D']], 'E']]], ['A', [['B', ['C']], [[['D']], 'E']]] )", () => {
    assert.deepEqual(eqArraysRec(["A", [["B", ["C"]], [[["D"]], "E"]]], ["A", [["B", ["C"]], [[["D"]], "E"]]]), true);
  });

  it("returns false for (['A', [['B', ['C']], [[['N']], 'E']]], ['A', [['B', ['C']], [[['D']], 'E']]] )", () => {
    assert.deepEqual(eqArraysRec(["A", [["B", ["C"]], [[["N"]], "E"]]], ["A", [["B", ["C"]], [[["D"]], "E"]]]), false);
  });
  
});