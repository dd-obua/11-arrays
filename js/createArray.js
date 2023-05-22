'use strict';

// Create and fill arrays
const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Create array programmatically
// Using a constructor function
const x = new Array(7);
console.log(x); // creates an array with 7 empty items
console.log(x.map(() => 5));

// Fill empty array
console.log(x.fill(5, 3, 5));

console.log(arr.fill(23, 4, 6)); //

// Using Array.from function
const y = Array.from({ length: 7 }, () => 4);
console.log('y: ', y);

const z = Array.from({ length: 5 }, (_, i) => i + 1);
console.log('z: ', z);
