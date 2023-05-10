// FUNCTION DESCRIPTION:
// tail function retrieves all but the first element from the array


const tail = function(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  } return newArray;
};


module.exports = tail;