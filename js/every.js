'use strict';

const txnValues = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = txn => txn > 0;
const withdrawal = txn => txn < 0;

const onlyDeposits = txnValues.every(deposit);
console.log('Only deposits?', onlyDeposits);

const onlyWithdrawals = txnValues.every(withdrawal);
console.log('Only withdrawals?', onlyWithdrawals);
