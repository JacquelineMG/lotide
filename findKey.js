const assertEqual = require("./assertEqual");


const findKey = function(object, callback) {
  for (const item in object) {
    if (callback((object)[item]) === true) {
      return item;
    }
  }
};


module.exports = findKey;