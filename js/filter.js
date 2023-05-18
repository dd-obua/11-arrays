'use strict';

const txnValues = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = txnValues.filter(txnValue => txnValue > 0);
console.log('Deposits:', deposits);

const withdrawals = txnValues.filter(txnValue => txnValue < 0);
console.log('Withdrawals:', withdrawals);
