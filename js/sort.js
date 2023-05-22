'use strict';

const owners = ['Abasa', 'Wilber', 'Pous', 'Simon', 'Denis'];
console.log('Owners:', owners);

// Sort an array of strings
const sorted = owners.sort();
console.log('Sorted owners:', sorted);
console.log(owners);

// Sort an array of numbers
const nums = [200, 450, 450, -400, 3000, -650, -130, 70, 1300];
console.log('nums:', nums);

// Ascending order
nums.sort((a, b) => a - b);
console.log('Sorted nums (ascending):', nums);

// Descending order
nums.sort((a, b) => b - a);
console.log('Sorted nums (descending):', nums);
