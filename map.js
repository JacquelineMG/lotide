// FUNCTION DESCRIPTION:
// map takes in an array and callback function and returns a new array shaped by the results of the callback function

//INPUT: an array and callback function
//OUTPUT: returns an array


const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map;