// FUNCTION DESCRIPTION:
// takeUntil function keeps collecting items from a provided array until the callback provided returns a truthy value
// it then returns the collected items as new array


// Additional functions for testing purposes:
// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");
 

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const item of array) {
    if (callback(item) === true) {
      break;
    } newArray.push(item);
  } return newArray;
};


module.exports = takeUntil;