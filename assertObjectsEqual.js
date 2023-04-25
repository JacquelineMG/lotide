const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};


const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  for (let i of key1) {
    if (key1.length !== key2.length) {
      return false;
    } else if (Array.isArray(object1[i]) === true && Array.isArray(object2[i]) === true) {
      if (eqArrays(object1[i], object2[i]) === false) {
        return false;
      }
    } else if (Array.isArray(object1[i]) === false && Array.isArray(object2[i]) === false) {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  } return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ${String.fromCodePoint(0x0000274C)}`);
  }
};



const cat1 = { color: ["white", "black"], size: "medium", hair: "long" };
const cat2 = { size: "medium", color: ["white", "black"], hair: "long" };

assertObjectsEqual(cat1, cat2);

const cat3 = { color: ["white"], size: "medium"};
const cat4 = { size: "medium", color: ["white", "black"] };

assertObjectsEqual(cat3, cat4);

