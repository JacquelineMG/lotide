const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${actual} === ${expected} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${actual} !== ${expected} ${String.fromCodePoint(0x0000274C)}`);
  }
};


const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  } return newArray;
};

console.log(tail([]));
console.log(tail([1]));
console.log(tail([1, 2]));
console.log(tail([2, 3, 4, 5]));
console.log(tail(["Happy", "Sad", "Clown"]));