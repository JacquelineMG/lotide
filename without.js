const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


const without = function(source, itemsToRemove) {
  const wantedItems = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      wantedItems.push(source[i]);
    }
  } return wantedItems;
};


module.exports = without;