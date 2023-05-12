// FUNCTION DESCRIPTION:
// without takes in a source array and an itemsToRemove array and returns the subset of the source array after removing unwanted elements 

//INPUT: 2 arrays
//OUTPUT: returns an array


const without = function(source, itemsToRemove) {
  const wantedItems = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) === false) {
      wantedItems.push(source[i]);
    }
  } return wantedItems;
};


module.exports = without;