'use strict';

const txnValues = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Check equality
console.log('-130 present?', txnValues.includes(-130));

// Check for any deposits
// Check any condition
const anyDeposits = txnValues.some(txn => txn > 0);
console.log('Any deposits?', anyDeposits);

const above5000 = txnValues.some(txn => txn > 5000);
console.log('Any deposits above 5000?', above5000);
