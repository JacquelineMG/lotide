const assertArraysEqual = require("../assertArraysEqual.js");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual(["red", "blue"], ["red", "blue"]);
assertArraysEqual(["red", "blue"], ["red", "bleu"]);
