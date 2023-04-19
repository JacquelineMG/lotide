const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${actual} === ${expected} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${actual} !== ${expected} ${String.fromCodePoint(0x0000274C)}`);
  }
};

assertEqual("lighthouse labs", "lighthouse labs");
assertEqual(1, 2);