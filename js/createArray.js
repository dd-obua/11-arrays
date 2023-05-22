'use strict';

// Create and fill arrays
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Create array programmatically
// Using a constructor function
const x = new Array(7);
console.log(x); // creates an array with 7 empty items
console.log(x.map(() => 5));

// Fill empty array
console.log(x.fill(5, 3, 5));
