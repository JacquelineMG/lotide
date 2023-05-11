// FUNCTION DESCRIPTION:
// eqObjects takes in two objects and returns true or false based whether they are a strict match

//INPUT: 2 objects
//OUTPUT: returns a boolean


const eqArrays = require("./eqArrays");


const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  } else {
    for (const i of key1) {
      if (Array.isArray(object1[i] && Array.isArray(object2[i]))) {
        if (eqArrays(object1[i], object2[i]) === false) {
          return false;
        } else if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
  } return true;
};


module.exports = eqObjects;