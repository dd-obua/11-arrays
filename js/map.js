'use strict';

const txns = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eruoToUsd = 1.1;

const txnsUsd = txns.map(euro => euro * eruoToUsd);

console.log(txns);
console.log(txnsUsd);
