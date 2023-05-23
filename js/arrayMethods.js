'use strict';

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
  pin: 3333,
};

const account4 = {
  owner: 'Pius Omoding',
  txns: [430, 1000, 700, 50, 90],
  interstRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Denis Daniel Obua',
  txns: [450, 3000, -130, 1300],
  interstRate: 1.8,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Compute total bank deposits
const bankDepositSum = accounts
  .flatMap(acct => acct.txns)
  .filter(txn => txn > 0)
  .reduce((acc, dep) => acc + dep, 0);
console.log('Total bank deposit:', bankDepositSum);

// Compute deposits with at least $1000
const numDeposits1000 = accounts
  .flatMap(acct => acct.txns)
  .filter(txn => txn >= 1000).length;
console.log('Deposits >= $1000:', numDeposits1000);

// Compute deposits at least 2000 using reduce
const numDeposits2000 = accounts
  .flatMap(acct => acct.txns)
  .reduce((count, txn) => (txn >= 2000 ? ++count : count), 0);
console.log('Deposits >= $2000:', numDeposits2000);

// Compute total bank withdrawals
const bankWithdrawalSum = accounts
  .flatMap(acct => acct.txns)
  .filter(txn => txn < 0)
  .reduce((sum, txn) => sum + txn, 0);
console.log('Total bank withdrawals:', bankWithdrawalSum);

// Compute sums of deposits and withdrawals at the same time using reduce
const { deposits, withdrawals } = accounts
  .flatMap(acct => acct.txns)
  .reduce(
    (sums, curr) => {
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log('Deposits:', deposits);
console.log('Withdrawals:', withdrawals);
console.log();

// Convert string to titleca
const str1 = 'this is a nice title';
const str2 = 'this is a LONG title but not too long';
const str3 = 'and here is another title with an EXAMPLE';

const toTitleCase = function (title) {
  const exceptions = [
    'a',
    'an',
    'and',
    'or',
    'to',
    'for',
    'from',
    'but',
    'in',
    'is',
    'with',
    'too',
    'not',
  ];

  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(toTitleCase(str1));
console.log(toTitleCase(str2));
console.log(toTitleCase(str3));
