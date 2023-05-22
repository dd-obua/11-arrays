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

// Add accounts information
const account1 = {
  owner: 'Abasa Wandega',
  txns: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interstRate: 1.2, // 1.2%
  pin: 1111,
};

const account2 = {
  owner: 'Simon Peter Ojok',
  txns: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interstRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Wilber Natamba',
  txns: [200, -200, 340, -300, -20, 50, 400, -460],
  interstRate: 0.7,
  pin: 333,
};

const account4 = {
  owner: 'Pius Omoding',
  txns: [430, 1000, 700, 50, 90],
  interstRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Compute the total of all transactions
const overallTxns = accounts.map(acct => acct.txns);
console.log(overallTxns);
