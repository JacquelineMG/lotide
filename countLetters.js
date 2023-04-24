const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${actual} === ${expected} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${actual} !== ${expected} ${String.fromCodePoint(0x0000274C)}`);
  }
};

const countLetters = function(string) {
  let results = {};
  for (let letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  } return results;
};

console.log(countLetters("ABBCCCDDDD"));

let test = countLetters("L I b Bertty");

assertEqual(test["L"], 1);
assertEqual(test["h"], undefined);
assertEqual(test["y"], 1);
assertEqual(test["i"], undefined);