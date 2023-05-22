'use strict';

const txnValues = [200, 450, -400, 3000, -650, -130, 70, 1300];

const onlyDeposits = txnValues.every(txn => txn > 0);
console.log('Only deposits?', onlyDeposits);

const onlyWithdrawals = txnValues.every(txn => txn < 0);
console.log('Only withdrawals?', onlyWithdrawals);
