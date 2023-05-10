const assertEqual = require("../assertEqual.js");
const head = require("../head.js");

assertEqual(head([5,6,7]), 5);
assertEqual(head(["hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");