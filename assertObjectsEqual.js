// FUNCTION DESCRIPTION:
// assertObjectEqual helps test code by console logging a message confirming or denying whether given actual and expected objects are strictly equal 

//INPUT: 2 objects
//OUTPUT: console.log message


const eqObjects = require("./eqObjects");


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ${String.fromCodePoint(0x0000274C)}`);
  }
};


module.exports = assertObjectsEqual;