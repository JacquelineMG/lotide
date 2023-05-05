// FUNCTION DESCRIPTION:
// findKeyByValue function takes in an object and a value, scans the object and return the first key which contains the given value
// If no key with that given value is found, then it should return undefined


// Additional function for testing purposes:
// const assertEqual = require("./assertEqual");


// Second Version -- refactoring after lecture

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};


/*
First Version

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};
*/


module.exports = findKeyByValue;