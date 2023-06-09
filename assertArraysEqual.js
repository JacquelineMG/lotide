// FUNCTION DESCRIPTION:
// assertArraysEqual helps test code by console logging a message confirming or denying whether two given array are strictly equal 

//INPUT: 2 arrays
//OUTPUT: console.log message 


const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${arr1} === ${arr2} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${arr1} !== ${arr2} ${String.fromCodePoint(0x0000274C)}`);
  }
};


module.exports = assertArraysEqual;