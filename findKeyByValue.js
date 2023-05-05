const assertEqual = require("./assertEqual");


// Second Version -- refactoring after lecture

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