'use strict';

// Positive values are deposits and negative ones withdrawals
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements)
  if (movement > 0) console.log(`You deposited $${movement}.`);
  else console.log(`You withdrew $${Math.abs(movement)}.`);
console.log();

// Determine deposit and withdrawal using forEach method
movements.forEach(function (movement) {
  if (movement > 0) console.log(`You deposited $${movement}.`);
  else console.log(`You withdrew $${Math.abs(movement)}`);
});
console.log();

// Refactor forEach
movements.forEach(movement =>
  console.log(
    `You ${movement > 0 ? 'withdrew' : 'deposited'} $${Math.abs(movement)}`
  )
);
