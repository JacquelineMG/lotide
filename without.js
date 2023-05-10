// FUNCTION DESCRIPTION:
// without function returns a subset of a given array after removing unwanted elements


const without = function(source, itemsToRemove) {
  const wantedItems = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      wantedItems.push(source[i]);
    }
  } return wantedItems;
};


module.exports = without;