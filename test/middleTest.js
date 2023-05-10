const assertArraysEqual = require("../assertArraysEqual.js");
const middle = require("../middle.js");



console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 100, 4]));
console.log(middle(["tree", "grass", "rabbit", "flower"]));

const words = ["hello", "world", "lighthouse"];
middle(words); 

assertArraysEqual(middle(words), ["world"]);
assertArraysEqual(words, ["world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
