'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Implement forEach with maps
currencies.forEach(function (val, key) {
  console.log(`${key}: ${val}`);
});

// Implement forEach with sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (val, _, set) {
  console.log(`${val}: ${val}`);
});
