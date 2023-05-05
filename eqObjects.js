const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");


const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1); //create an array of the keys in object1
  const key2 = Object.keys(object2); //create an array of the keys in object2

  if (key1.length !== key2.length) {
    return false; // if key arrays are not the same length return false
  } else {
    for (const i of key1) { // for..of loop through key1 array
      if (Array.isArray(object1[i] && Array.isArray(object2[i]))) { // if one of the values in the object is an array...
        if (eqArrays(object1[i], object2[i]) === false) { // employ eqArrays function to check if they are the same and return false if they are not
          return false;
        } else if (object1[i] !== object2[i]) { // if the values are not arrays compare them and return false if they don't match
          return false;
        }
      }
    }
  } return true; // if none of the above has applied return true -- the objects are equal
};


module.exports = eqObjects;