// FUNCTION DESCRIPTION:
// A refactored eqArrays function, eqArraysRec uses recursion to assesses whether two arrays (including nested arrays) are a strictly equal and returns a true or false boolean

//INPUT: 2 arrays (including nested arrays)
//OUTPUT: returns a boolean


const eqArraysRec = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if ((Array.isArray(arr1[i])) && (eqArraysRec(arr1[i], arr2[i]) === false)) {
        return false;
      } else if ((Array.isArray(arr1[i]) === false) && (arr1[i] !== arr2[i])) {
        return false;
      }
    }
  } return true;
};


module.exports = eqArraysRec;