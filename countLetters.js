// FUNCTION DESCRIPTION:
// countLetters function takes in a string and then return a count of each of the letters in that string


// Additional function for testing purposes:
// const assertEqual = require("./assertEqual");


const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  } return results;
};


module.exports = countLetters;