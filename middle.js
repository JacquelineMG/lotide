// FUNCTION DESCRIPTION:
// middle returns an new array with only the middle element(s) of a given array

//INPUT: an array
//OUTPUT: returns an array


const middle = function(array) {
  const midNum = [];
  const evenMid = array.length / 2;
  const oddMid = Math.round(evenMid - 1);
  if (array.length <= 2) {
    return midNum;
  } else if (array.length % 2 === 0) {
    midNum.push(array[evenMid - 1]);
    midNum.push(array[evenMid]);
  } else if (array.length % 2 !== 0) {
    midNum.push(array[oddMid]);
  } return midNum;
};


module.exports = middle;