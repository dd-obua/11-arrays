'use strict';

const txnValues = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = txnValues.find(txn => txn < 0);
console.log('First withdrawal:', Math.abs(firstWithdrawal));
