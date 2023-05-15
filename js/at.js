'use strict';

const arr = [10, 20, 30];
console.log(arr[0]);
console.log(arr.at(1));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// Use at method on strings
const str = 'Thank you Lord!';
console.log(str.at(10));
console.log(str.at(-1));