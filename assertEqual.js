// FUNCTION DESCRIPTION:
// assertEqual helps test code by console logging a message confirming or denying that actual and expected values are strictly equal 

//INPUT: 2 values (eg: strings, numbers)
//OUTPUT: console.log message


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${actual} === ${expected} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${actual} !== ${expected} ${String.fromCodePoint(0x0000274C)}`);
  }
};


module.exports = assertEqual;