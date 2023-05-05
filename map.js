// FUNCTION DESCRIPTION:
// map function takes in an array and callback function and will return a new array based on the results of the callback function


// Additional functions for testing purposes:
// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");


const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map;