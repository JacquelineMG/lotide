// FUNCTION DESCRIPTION:
// findKeyByValue takes in an object and a value, and returns the first key which contains the given value
// If no key with the given value is found, then it returns undefined

//INPUT: an object and a value
//OUTPUT: returns a key


// Second Version

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};


/*
First Version

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};
*/


module.exports = findKeyByValue;