// FUNCTION DESCRIPTION:
// count function takes in a collection of items and returns counts for a specific subset of those items


// Additional function for testing purposes:
// const assertEqual = require("./assertEqual");

 
const countOnly = function(allItems, itemsToCount) {
  const results = {};
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


module.exports = countOnly;