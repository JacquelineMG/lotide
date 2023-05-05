const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
 

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const item of array) {
    if (callback(item) === true) {
      break;
    } newArray.push(item);
  } return newArray;
};


module.exports = takeUntil;