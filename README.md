# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jacquelinemg/lotide`

**Require it:**

`const _ = require('@jacquelinemg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: helps test code by console logging a message confirming or denying that an actual and expected array are equal 

* `assertEqual`: helps test code by console logging a message confirming or denying that an actual and expected value are equal 

* `assertObjectEqual`: helps test code by console logging a message confirming or denying that an actual and expected object are equal 

* `countLetters`: takes in a string and then return a count of each of the letters in that string

* `countOnly`: takes in a collection of items and returns counts for a specific subset of those items

* `eqArrays`: compares two arrays for a match and returns a true or false boolean

* `eqObjects`: takes in two objects and returns true or false, based on a perfect match

* `findKey`: takes in an object and a callback, scan the object and return the first key for which the callback returns a truthy value. If no key  is found, then it returns undefined

* `findKeyByValue`: takes in an object and a value, scans the object and return the first key which contains the given value. If no key with that given value is found, then it returns undefined

* `flatten`: flattens nested arrays into single-level array

* `head`: retrieves the first element from the given array

* `letterPositions`: returns all the indices in the given string where each character is found

* `map`: takes in an array and callback function and will return a new array based on the results of the callback function

* `middle`: returns an array with only the middle element(s) of the provided array

* `tail`: retrieves all but the first element from the array

* `takeUntil`: keeps collecting items from a provided array until the callback provided returns a truthy value. Tt then returns the collected items as new array

* `without`: returns a subset of a given array after removing unwanted elements



