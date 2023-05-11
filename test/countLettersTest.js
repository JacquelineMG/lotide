//Testing using chai and mocha for the countLetters function


const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns { A: 1, B: 2, C: 3, D: 4 } for ('ABBCCCDDDD')", () => {
    assert.deepEqual(countLetters("ABBCCCDDDD"), { A: 1, B: 2, C: 3, D: 4 });
  });

});