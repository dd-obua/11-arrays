'use strict';

const txnValues = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = txnValues.reduce((acc, txnVal) => acc + txnVal, 0);
console.log('Balance:', balance);

const max = txnValues.reduce(function (acc, txnVal) {
  if (txnVal > acc) return txnVal;
  else return acc;
});
console.log(max);
