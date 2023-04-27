const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${actual} === ${expected} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${actual} !== ${expected} ${String.fromCodePoint(0x0000274C)}`);
  }
};


const findKey = function(object, callback) {
  for (const item in object) {
    if (callback((object)[item]) === true) {
      return item;
    }
  }
};


const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual("noma", results1);

console.log("---");

const warm = findKey({
  "January":    {avTemp: 5.0},
  "February":   {avTemp: 6.2},
  "March":      {avTemp: 7.6},
  "April":      {avTemp: 9.6},
  "May":        {avTemp: 12.1},
  "June":       {avTemp: 14.0},
  "July":       {avTemp: 15.6},
  "August":     {avTemp: 15.9},
  "September":  {avTemp: 14.6},
  "October":    {avTemp: 10.9},
  "November":   {avTemp: 7.2},
  "December":   {avTemp: 5.2}
}, c => c.avTemp >= 10.0);

assertEqual("May", warm);

console.log("---");

const cold = findKey({
  "January":    {avTemp: 5.0},
  "February":   {avTemp: 6.2},
  "March":      {avTemp: 7.6},
  "April":      {avTemp: 9.6},
  "May":        {avTemp: 12.1},
  "June":       {avTemp: 14.0},
  "July":       {avTemp: 15.6},
  "August":     {avTemp: 15.9},
  "September":  {avTemp: 14.6},
  "October":    {avTemp: 10.9},
  "November":   {avTemp: 7.2},
  "December":   {avTemp: 5.2}
}, c => c.avTemp < 0);

assertEqual(undefined, cold);
