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



const letterPositions = function(sentence) {
  let results = {};
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

console.log(letterPositions("Lighthouse Labs"));
console.log(letterPositions("hello hello"));

assertArraysEqual(letterPositions("hello hello").h, [0, 6]);
assertArraysEqual(letterPositions("Lighthouse Labs").e, [0, 11]);


