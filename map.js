const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${arr1} === ${arr2} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${arr1} !== ${arr2} ${String.fromCodePoint(0x0000274C)}`);
  }
};




const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(["g", "c", "t", "m", "t"], results1);
 


const pets = ["black cat", "brown dog", "yellow bird", "white rabbit"];

const lengths = map(pets, pet => pet.length);
console.log(lengths);

assertArraysEqual([9, 9, 11, 12], lengths);

