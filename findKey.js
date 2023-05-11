// FUNCTION DESCRIPTION:
// findKey takes in an object and a callback, and returns the first key for which the callback returns a truthy value 
// If no truthy key is found, then it returns undefined

//INPUT: an object and a callback function
//OUTPUT: returns an object key


const findKey = function(object, callback) {
  for (const item in object) {
    if (callback((object)[item]) === true) {
      return item;
    }
  }
};


module.exports = findKey;