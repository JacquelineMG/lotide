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


const middle = function(array) {
  let midNum = [];
  let evenMid = array.length / 2;
  let oddMid = Math.round(evenMid - 1);
  
  if (array.length <= 2) {
    return midNum;
  } else if (array.length % 2 === 0) {
    midNum.push(array[evenMid - 1]);
    midNum.push(array[evenMid]);
  } else if (array.length % 2 !== 0) {
    midNum.push(array[oddMid]);
  } return midNum;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 100, 4]));
console.log(middle(["tree", "grass", "rabbit", "flower"]));


const words = ["hello", "world", "lighthouse"];
middle(words); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(middle(words), ["world"]);
assertArraysEqual(words, ["world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);