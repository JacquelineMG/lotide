// FUNCTION DESCRIPTION:
// eqArrays assesses whether two single-level arrays are a strictly equal and returns a true or false boolean

//INPUT: 2 single-level arrays
//OUTPUT: returns a boolean  


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } return true;
};


module.exports = eqArrays;