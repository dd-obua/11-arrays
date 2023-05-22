'use strict';

const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

const items = selectAll('.item');
const btn = select('.btn');

btn.addEventListener('click', function () {
  const sum = Array.from(items)
    .map(el => Number(el.textContent.replace('$', '')))
    .reduce((acc, num) => acc + num);
  console.log('Sum:', sum);
});
