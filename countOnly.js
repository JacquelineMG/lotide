// FUNCTION DESCRIPTION:
// countOnly takes in an array of items and an object list with booleans specifiying which items to count; it returns an object contain value counts for the specified items

//INPUT: an array and an object 
//OUTPUT: returns an object  


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