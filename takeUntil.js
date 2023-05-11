// FUNCTION DESCRIPTION:
// takeUntil pushes items from a provided array into a new array until a provided callback returns a truthy value
// it then returns the new collected items array

//INPUT: an array and a callback function
//OUTPUT: returns an array
 

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const item of array) {
    if (callback(item) === true) {
      break;
    } newArray.push(item);
  } return newArray;
};


module.exports = takeUntil;