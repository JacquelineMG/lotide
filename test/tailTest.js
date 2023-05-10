const tail = require("../tail.js");

console.log(tail([]));
console.log(tail([1]));
console.log(tail([1, 2]));
console.log(tail([2, 3, 4, 5]));
console.log(tail(["Happy", "Sad", "Clown"]));