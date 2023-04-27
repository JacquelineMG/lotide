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



const takeUntil = function(array, callback) {
  let newArray = [];
  for (const item of array) {
    if (callback(item) === true) {
      break;
    } newArray.push(item);
  } return newArray;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results1, [ 1, 2, 4, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood', ',' ]);

console.log('---');

const data3 = ["A", "B", "C", "D", "E", "e", "F", "G", "H"];
const results3 = takeUntil(data3, x => x === 'e');
console.log(results3);

assertArraysEqual(results3, [ 'A', 'B', 'C', 'D', 'E']);
assertArraysEqual(results3, [ 'A', 'B', 'C', 'D' ]);