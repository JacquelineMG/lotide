// FUNCTION DESCRIPTION:
// A refactored eqObjects function, eqObjectsRec takes in two objects (including nested objects) and returns true or false based whether they are a strict match

//INPUT: 2 objects (including nested objects)
//OUTPUT: returns a boolean


const eqArraysRec = require("./eqArraysRec");


const eqObjectsRec = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  } else {
    for (const i of key1) {
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        if (eqArraysRec(object1[i], object2[i]) === false) {
          return false;
        } 
      } else if (typeof object1[i] === "object" && typeof object2 === "object"){
          if (eqObjectsRec(object1[i], object2[i]) === false) {
            return false;
          }
        } else if (object1[i] !== object2[i]) {
            return false;
        }
      }
    } return true;
};


module.exports = eqObjectsRec;