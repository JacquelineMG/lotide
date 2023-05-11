// FUNCTION DESCRIPTION:
// countLetters takes in a string and then returns an object containing the string's letters as keys and the letter counts as values

//INPUT: a string
//OUTPUT: returns an object 


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