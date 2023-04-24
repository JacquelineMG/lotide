const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${actual} === ${expected} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${actual} !== ${expected} ${String.fromCodePoint(0x0000274C)}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } return results; 
};

const firstNames = ["Karl", "Salima", "Aguohanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);