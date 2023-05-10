// FUNCTION DESCRIPTION:
// flatten function flattens nested arrays into single-level array


const flatten = function(array) {
  const flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      flatArray.push(array[i]);
    } for (let j = 0; j < array[i].length; j++) {
      flatArray.push(array[i][j]);
    }
  } return flatArray;
};


module.exports = flatten;