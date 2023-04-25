const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x00002705)} Assertion Passed: ${actual} === ${expected} ${String.fromCodePoint(0x00002705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x0000274C)} Assertion Failed: ${actual} !== ${expected} ${String.fromCodePoint(0x0000274C)}`);
  }
};


const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  for (let i of key1) {
    if (key1.length !== key2.length) {
      return false;
    } else if (Array.isArray(object1[i]) === true && Array.isArray(object2[i]) === true) {
      if (eqArrays(object1[i], object2[i]) === false) {
        return false;
      }
    } else if (Array.isArray(object1[i]) === false && Array.isArray(object2[i]) === false) {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  } return true;
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);



const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);



const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);