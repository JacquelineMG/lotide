// FUNCTION DESCRIPTION:
// findKey function takes in an object and a callback, scan the object and return the first key for which the callback returns a truthy value 
// If no key is found, then it returns undefined


const findKey = function(object, callback) {
  for (const item in object) {
    if (callback((object)[item]) === true) {
      return item;
    }
  }
};


module.exports = findKey;