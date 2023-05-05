// FUNCTION DESCRIPTION:
// letterPositions function returns all the indices in the string where each character is found


// Additional functions for testing purposes:
// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  } return results;
};


module.exports = letterPositions;