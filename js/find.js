'use strict';

const txnValues = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = txnValues.find(txn => txn < 0);
console.log('First withdrawal:', Math.abs(firstWithdrawal));

// Create accounts
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

// Find account for 'Pius Omoding'
const acct = [];
for (let acc of accounts) {
  if (acc.owner === 'Pius Omoding') {
    acct.push(acc);
  }
}
console.log('Acct:', acct);
