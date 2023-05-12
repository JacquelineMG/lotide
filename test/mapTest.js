//Testing using chai and mocha for the map function


const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  it("returns ['g', 'c', 't', 'm', 't'] for (words, word => word[0])", () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });

  const pets = ["cat", "dog", "bird"];
  it("returns ['CAT', 'DOG', 'BIRD'] for (pets, pet => pet.toUpperCase())", () => {
    assert.deepEqual(map(pets, pet => pet.toUpperCase()), ["CAT", "DOG", "BIRD"])
  })
  
});