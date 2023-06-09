'use strict';

const txnValues = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;
// Take transation deposits, convert them from euros to dollars, then sum then up
const totalDepositsUSD = txnValues
  .filter(val => val > 0)
  .map(val => val * euroToUsd)
  .reduce((acc, val) => acc + val, 0);
console.log('Total desposit:', totalDeposit);
