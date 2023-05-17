'use strict';

const txns = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eruoToUsd = 1.1;

const txnsUsd = txns.map(euro => euro * eruoToUsd);

console.log(txns);
console.log(txnsUsd);

// Describe transactions
const txnDesc = txnsUsd.map(function (txn, i, arr) {
  return `Transaction ${
    i + 1
  }: You ${txn > 0 ? 'deposited' : 'withdrew'} $${txn}`;
});

console.log(txnDesc);
