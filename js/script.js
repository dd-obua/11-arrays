'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr);

// slice method does not mutate the original array
const arr2 = arr.slice(2);
console.log(arr2);

const arr3 = arr.slice(2, 4);
console.log(arr3);

const last3 = arr.slice(-3);
console.log(last3);

const last = arr.slice(-1);
console.log(last);

const arr4 = arr.slice(1, -2);
console.log(arr4);

const arr5 = arr.slice();
console.log(arr5);

const arr6 = [...arr];
console.log(arr6);

// splice method does not mutate the original array
const newArr = ['p', 'q', 'r', 's', 't', 'u'];
console.log(newArr);
const newArr2 = newArr.splice(2);
console.log(newArr2);
console.log(newArr);

newArr2.splice(-2);
console.log(newArr2);

const ar = ['h', 'i', 'j', 'k', 'l', 'm'];
console.log(ar);
console.log(ar.splice(2, 3, 'x', 'y', 'z'));
console.log(ar);