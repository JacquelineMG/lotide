// FUNCTION DESCRIPTION:
// tail function retrieves all but the first element from the array


// Additional functions for testing purposes:
//const assertEqual = require("./assertEqual");


const tail = function(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  } return newArray;
};


module.exports = tail;