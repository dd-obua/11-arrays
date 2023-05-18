'use strict';

const txnValues = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = txnValues.reduce((acc, txnVal, i) => acc + txnVal, 0);
console.log('Balance:', balance);
