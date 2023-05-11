// FUNCTION DESCRIPTION:
// tail pushes all but the first element from the array into a new array and returns the new array

//INPUT: an array
//OUTPUT: returns an array


const tail = function(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  } return newArray;
};


module.exports = tail;