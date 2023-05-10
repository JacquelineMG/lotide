const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual(["red", "blue"], ["red", "blue"]);
assertArraysEqual(["red", "blue"], ["red", "bleu"]);
