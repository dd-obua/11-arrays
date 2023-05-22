'use strict';

const arr = [[1, 2, 3], 4, [5, 6], 7];
const flatArr = arr.flat();
console.log('arr:', arr);
console.log('Flat arr:', flatArr);

const arr2 = [[1, 2, [3, 4], 5], 6, 7, [8, [9, 10]]];
const deepFlatArr2 = arr2.flat(2);
console.log('arr2:', arr2);
console.log('Deep flat arr2:', deepFlatArr2);

console.log();
