//Testing for the assertObjectsEqual function


const assertObjectsEqual = require("../assertObjectsEqual");

const cat1 = { color: ["white", "black"], size: "medium", hair: "long" };
const cat2 = { size: "medium", color: ["white", "black"], hair: "long" };

assertObjectsEqual(cat1, cat2);

const cat3 = { color: ["white"], size: "medium"};
const cat4 = { size: "medium", color: ["white", "black"] };

assertObjectsEqual(cat3, cat4);